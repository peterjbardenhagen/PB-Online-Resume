import React, { useState, FormEvent } from 'react';
import './JobDescriptionForm.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mammoth from 'mammoth';
import SkillsAnalysis from '../SkillsAnalysis/SkillsAnalysis';

interface JobDescriptionFormData {
    jobDescription: string;
    file?: File;
}

interface JobDescriptionFormProps {
    onSubmit?: (formData: JobDescriptionFormData) => void;
    onError?: (error: unknown) => void;
    onSuccess?: (response: string) => void;
}

export const JobDescriptionForm: React.FC<JobDescriptionFormProps> = ({
    onSubmit,
    onError,
    onSuccess
}) => {
    const [jobDescription, setJobDescription] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [analysis, setAnalysis] = useState<{
        score: number;
        matchingSkills: string[];
        missingSkills: string[];
        summary: string;
        strengths: string[];
        recommendations: string[];
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [retryCount, setRetryCount] = useState<number>(0);

    const MAX_RETRIES = 3;
    const TIMEOUT = 45000;

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
            const pdfjsLib = await import('pdfjs-dist');

            if (typeof window !== 'undefined') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (pdfjsLib as any).GlobalWorkerOptions.workerSrc = `app/pdf.worker.min.mjs`;
            }

            const fileArrayBuffer = await file.arrayBuffer();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const loadingTask = (pdfjsLib as any).getDocument({ data: fileArrayBuffer });
            const pdf = await loadingTask.promise;

            let fullText = '';
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const pageText = textContent.items.map((item: any) => item.str || '').join(' ');
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
        setAnalysis(null);
        setResponse('');

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

            console.groupCollapsed('%c[JD] Qualify API Request', 'color:#3b82f6;');
            console.debug('POST /api/qualify');
            console.groupEnd();

            const res = await fetch('/api/qualify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jobDescription }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!res.ok) {
                // Try to get detailed error from response body
                let errorBody;
                try {
                    errorBody = await res.json();
                } catch {
                    errorBody = null;
                }

                const errorDetails = {
                    status: res.status,
                    statusText: res.statusText,
                    url: res.url,
                    body: errorBody
                };

                console.error('[JD] HTTP error details:', errorDetails);
                console.error('[JD] Full error body:', JSON.stringify(errorBody, null, 2));

                if (res.status === 504 && retryCount < MAX_RETRIES) {
                    const delayMs = 1000 * Math.max(1, retryCount);
                    console.warn(`[JD] Timeout/504, retrying ${retryCount + 1}/${MAX_RETRIES} after ${delayMs}ms`);
                    setRetryCount(prev => prev + 1);
                    await new Promise(resolve => setTimeout(resolve, delayMs));
                    return handleSubmit(e);
                }

                // Build detailed error message
                const errorMsg = errorBody 
                    ? `HTTP ${res.status}: ${errorBody.message || errorBody.error} [${errorBody.type || 'Unknown'}] Code: ${errorBody.code || 'N/A'}`
                    : `HTTP error! status: ${res.status}`;
                
                throw new Error(errorMsg);
            }

            const elapsed = Date.now() - startTime;
            const data = await res.json();

            console.groupCollapsed('%c[JD] Qualify API Response', 'color:#16a34a;');
            console.info('Status:', res.status, res.statusText);
            console.info('Timing (ms):', elapsed);
            console.debug('Analysis:', data);
            console.groupEnd();

            if (data.error) {
                throw new Error(data.error);
            }

            setAnalysis(data);
            setRetryCount(0);

            onSuccess?.(JSON.stringify(data));
        } catch (error: unknown) {
            const elapsed = Date.now() - startTime;
            console.groupCollapsed('%c[JD] API Error', 'color:#ef4444;');
            console.error('Error:', error);
            console.info('Processing time (ms):', elapsed);
            console.groupEnd();

            onError?.(error);
            setResponse('Error occurred: ' + (error instanceof Error ? error.message : String(error)));
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
                    aria-label="Upload job description file"
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
                            setAnalysis(null);
                        }}
                        disabled={isSubmitting || isLoading}
                    >
                        Clear
                    </button>
                </p>
            </form>
            {analysis && (
                <SkillsAnalysis
                    score={analysis.score}
                    matchingSkills={analysis.matchingSkills}
                    missingSkills={analysis.missingSkills}
                    summary={analysis.summary}
                    strengths={analysis.strengths}
                    recommendations={analysis.recommendations}
                />
            )}
            {response && !analysis && (
                <div
                    className="jobdesc_response"
                    dangerouslySetInnerHTML={{ __html: response }}
                />
            )}
        </div>
    );
};

export default JobDescriptionForm;