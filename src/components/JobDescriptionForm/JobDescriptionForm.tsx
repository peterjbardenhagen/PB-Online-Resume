import React, { useState, FormEvent } from 'react';
import './JobDescriptionForm.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';

(pdfjsLib as any).GlobalWorkerOptions.workerSrc = `app/pdf.worker.min.mjs`;

interface JobDescriptionFormProps {
    onSubmit?: (formData: any) => void;
    onError?: (error: any) => void;
    onSuccess?: (response: any) => void;
}

export const JobDescriptionForm: React.FC<JobDescriptionFormProps> = ({
    onSubmit,
    onError,
    onSuccess
}) => {
    const [jobDescription, setJobDescription] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [retryCount, setRetryCount] = useState<number>(0);

    const MAX_RETRIES = 3;
    const TIMEOUT = 30000;

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setIsLoading(true);
            const fileExtension = file.name.split('.').pop()?.toLowerCase();
            let extractedText = '';

            if (fileExtension === 'pdf') {
                extractedText = await extractTextFromPDF(file);
            } else if (fileExtension === 'doc' || fileExtension === 'docx') {
                const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
                extractedText = result.value;
            } else {
                extractedText = await file.text();
            }

            const cleanedText = cleanText(extractedText);
            setJobDescription(cleanedText);

            console.info('[JD] File upload processed', {
                name: file.name,
                size: file.size,
                type: file.type,
                ext: fileExtension,
                chars: cleanedText.length
            });
        } catch (error) {
            console.error('Error processing file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const extractTextFromPDF = async (file: File): Promise<string> => {
        try {
            const fileArrayBuffer = await file.arrayBuffer();
            const loadingTask = (pdfjsLib as any).getDocument({ data: fileArrayBuffer });
            const pdf = await loadingTask.promise;

            let fullText = '';
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item: any) => item.str).join(' ');
                fullText += pageText + '\n';
            }

            return fullText.trim();
        } catch (error) {
            console.error('Error extracting PDF text. Error text:' + error, error);
            throw new Error('Failed to extract text from PDF. Error text:' + error);
        }
    };

    const cleanText = (text: string): string => {
        return text.replace(/\s{2,}/g, ' ').trim();
    };

    const handleSubmit = async (e: FormEvent) => {
        if (e) e.preventDefault();

        const startTime = Date.now();

        onSubmit?.({
            jobDescription,
            file: (document.querySelector('.jobdesc-file-input') as HTMLInputElement)?.files?.[0]
        });

        setIsSubmitting(true);
        setIsLoading(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

            const payload = {
                FormType: 'JobDesc',
                jobDescription
            };

            console.groupCollapsed('%c[JD] API Request', 'color:#3b82f6;');
            console.debug('POST /api payload (truncated preview):', {
                ...payload,
                jobDescriptionPreview: jobDescription.slice(0, 200) + (jobDescription.length > 200 ? ' ' : '')
            });
            console.groupEnd();

            const res = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!res.ok) {
                const errorDetails = {
                    status: res.status,
                    statusText: res.statusText,
                    url: res.url
                };

                console.error('[JD] HTTP error', errorDetails);

                if (res.status === 504 && retryCount < MAX_RETRIES) {
                    const delayMs = 1000 * Math.max(1, retryCount);
                    console.warn(`[JD] Timeout/504, retrying ${retryCount + 1}/${MAX_RETRIES} after ${delayMs}ms`);
                    setRetryCount(prev => prev + 1);
                    await new Promise(resolve => setTimeout(resolve, delayMs));
                    return handleSubmit(e);
                }

                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const elapsed = Date.now() - startTime;
            let data: any;
            try {
                data = await res.json();
            } catch (jsonErr) {
                console.error('[JD] Failed to parse JSON response', jsonErr);
                throw jsonErr;
            }

            console.groupCollapsed('%c[JD] API Response', 'color:#16a34a;');
            console.info('Status:', res.status, res.statusText);
            console.info('Timing (ms):', elapsed);
            console.debug('Raw JSON (trimmed):', JSON.stringify(data).slice(0, 1000) + (JSON.stringify(data).length > 1000 ? ' ' : ''));
            console.groupEnd();

            const htmlResponse = marked.parse(data.message);
            const sanitizedHtmlResponse = DOMPurify.sanitize(String(htmlResponse));

            setResponse(sanitizedHtmlResponse);
            setRetryCount(0);

            onSuccess?.(sanitizedHtmlResponse);
        } catch (error: unknown) {
            const elapsed = Date.now() - startTime;
            console.groupCollapsed('%c[JD] API Error', 'color:#ef4444;');
            console.error('Error:', error);
            console.info('Processing time (ms):', elapsed);
            console.groupEnd();

            onError?.(error);
            setResponse('Error occured: ' + (error instanceof Error ? error.message : String(error)));
        } finally {
            setIsSubmitting(false);
            setIsLoading(false);
        }
    };

    return (
        <div className="jobdesc">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner" />
                    <div className="loading-text">
                        <p>Processing large amounts of information. Please wait a moment...</p>
                    </div>
                </div>
            )}
            <form className="jobdesc-form" onSubmit={handleSubmit}>
                <textarea
                    className="jobdesc-textarea"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Enter or paste a title or postiion description. Or upload a file. Then click Submit."
                    required
                    disabled={isSubmitting || isLoading}
                />
                <p>or</p>
                <input
                    type="file"
                    accept=".txt,.doc,.docx,.pdf"
                    onChange={handleFileUpload}
                    className="jobdesc-file-input"
                    disabled={isSubmitting || isLoading}
                />
                <p>
                    <button
                        className="button black"
                        type="submit"
                        disabled={isSubmitting || !jobDescription || isLoading}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button
                        className="button grey"
                        type="button"
                        onClick={() => {
                            setJobDescription('');
                            setResponse('');
                        }}
                        disabled={isSubmitting || isLoading}
                    >
                        Clear
                    </button>
                </p>
            </form>
            {response && (
                <div
                    className="jobdesc_response"
                    dangerouslySetInnerHTML={{ __html: response }}
                />
            )}
        </div>
    );
};

export default JobDescriptionForm;