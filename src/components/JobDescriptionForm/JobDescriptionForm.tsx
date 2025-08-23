import React, { useState, FormEvent } from 'react';
import './JobDescriptionForm.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
//import { ApplicationInsights } from '@microsoft/applicationinsights-web';

pdfjsLib.GlobalWorkerOptions.workerSrc = `app/pdf.worker.min.mjs`;

interface JobDescriptionFormProps {
    onSubmit?: (formData: any) => void;
    onError?: (error: any) => void;
    onSuccess?: (response: any) => void;
}

// Initialize Application Insights
//import { appInsights } from '../../../app/utils/appInsights';

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

            //appInsights.trackEvent({
            //    name: 'FileUpload_Successful',
            //    properties: {
            //        fileType: fileExtension,
            //        fileSize: file.size
            //    }
            //});
        } catch (error) {
            console.error('Error processing file:', error);
            //appInsights.trackException({
            //    error: error instanceof Error ? error : new Error(String(error)),
            //    properties: {
            //        fileType: file.name.split('.').pop()?.toLowerCase(),
            //        fileSize: file.size
            //    }
            //});
            //alert('Error processing file. Please try again or paste the text directly.');
        } finally {
            setIsLoading(false);
        }
    };

    const extractTextFromPDF = async (file: File): Promise<string> => {
        try {
            const fileArrayBuffer = await file.arrayBuffer();

            // Load the PDF document using ArrayBuffer
            const loadingTask = pdfjsLib.getDocument({ data: fileArrayBuffer });
            const pdf = await loadingTask.promise;

            let fullText = '';

            // Pages are indexed from 1
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .map((item: any) => item.str)
                    .join(' ');

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
        appInsights.trackEvent({ name: 'FormSubmission_Started' });

        // Call onSubmit callback
        onSubmit?.({
            jobDescription,
            file: (document.querySelector('.jobdesc-file-input') as HTMLInputElement)?.files?.[0]
        });

        setIsSubmitting(true);
        setIsLoading(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

            const res = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    FormType: "JobDesc",
                    jobDescription
                }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!res.ok) {
                const errorDetails = {
                    status: res.status,
                    statusText: res.statusText,
                    url: res.url,
                };

                appInsights.trackException({
                    error: new Error(`HTTP error: ${res.status}`),
                    properties: errorDetails
                });

                if (res.status === 504 && retryCount < MAX_RETRIES) {
                    setRetryCount(prev => prev + 1);
                    await new Promise(resolve => setTimeout(resolve, 1000 * retryCount)); // Exponential backoff
                    return handleSubmit(e); // Retry the request
                }

                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            const htmlResponse = marked.parse(data.message);
            const sanitizedHtmlResponse = DOMPurify.sanitize('' + htmlResponse);

            setResponse(sanitizedHtmlResponse);
            setRetryCount(0);

            // Call onSuccess callback
            onSuccess?.(sanitizedHtmlResponse);

            appInsights.trackMetric({
                name: 'FormSubmission_ProcessingTime',
                average: Date.now() - startTime
            });

            appInsights.trackEvent({
                name: 'FormSubmission_Successful',
                properties: {
                    processingTime: Date.now() - startTime,
                    contentLength: jobDescription.length
                }
            });

        } catch (error) {
            if (error.message === 'RETRY') {
                appInsights.trackEvent({
                    name: 'FormSubmission_Retry',
                    properties: { retryCount }
                });

                await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
                return handleSubmit(e);
            }

            console.error('Error:', error);

            // Call onError callback
            onError?.(error);

            appInsights.trackException({
                error: error instanceof Error ? error : new Error(String(error)),
                properties: {
                    processingTime: Date.now() - startTime,
                    contentLength: jobDescription.length
                }
            });

            setResponse(`An error occurred. Please try again. If the problem persists, contact support.`);
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