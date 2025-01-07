import React, { useState, FormEvent } from 'react';
import './JobDescriptionForm.css'; // Add this import for the CSS
import { marked }  from 'marked'; // Install this library for Markdown-to-HTML conversion
import DOMPurify from 'dompurify'; // Install this library for sanitizing HTML
import mammoth from 'mammoth'; // Install mammoth for Word document parsing
import * as pdfjsLib from 'pdfjs-dist';
import { getDocument } from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.mjs`;

export const JobDescriptionForm = () => {
    const [jobDescription, setJobDescription] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const fileExtension = file.name.split('.').pop()?.toLowerCase();
            let extractedText = '';

            if (fileExtension === 'pdf') {
                extractedText = await extractTextFromPDF(file);
            } else if (fileExtension === 'doc' || fileExtension === 'docx') {
                const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
                extractedText = result.value;
            } else {
                const text = await file.text();
                extractedText = text;
            }

            // Clean and set the text
            const cleanedText = cleanText(extractedText);
            setJobDescription(cleanedText);

            // Update textarea
            const textarea = document.querySelector('.jobdesc-textarea') as HTMLTextAreaElement;
            if (textarea) {
                textarea.value = cleanedText;
            }
        } catch (error) {
            console.error('Error processing file:', error);
            alert('Error processing file. Please try again or paste the text directly. Error details:' + error);
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

    // Function to extract text from Word documents
    const extractTextFromWord = async (file: File): Promise<string> => {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value.trim();
    };

    // Function to convert text to Markdown (basic conversion)
    const convertToMarkdown = (text: string): string => {
        // This can be enhanced for specific Markdown formatting needs
        return text.replace(/\n/g, '\n\n'); // Add Markdown-style paragraph breaks
    };

    // Function to clean text
    const cleanText = (text: string): string => {
        return text.replace(/\s{2,}/g, ' ').trim(); // Remove extra whitespace and trim
    };

    const handleSubmit = async (e: FormEvent) => {
        if (e) e.preventDefault();
        console.log('Submit button clicked');

        setIsSubmitting(true);

        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    FormType: "JobDesc",
                    jobDescription
                }),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();

            // Convert Markdown to HTML using `marked`
            var htmlResponse = marked.parse(data.message);

            // Sanitize the HTML content using `DOMPurify`
            var sanitizedHtmlResponse = DOMPurify.sanitize('' + htmlResponse);

            setResponse(sanitizedHtmlResponse);
        } catch (error) {
            console.error('Error:', error);
            setResponse('An error occurred while submitting the form:' + error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClear = () => {
        setJobDescription('');
        setResponse('');
        const fileInput = document.querySelector('.jobdesc-file-input') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = ''; // Clear the file input field
        }
    };

    return (
        <div className="jobdesc">
            <form className="jobdesc-form" onSubmit={handleSubmit} method="GET">
                <textarea
                    className="jobdesc-textarea"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Enter or paste a position title or description. Then click Submit."
                    cols={50}
                    rows={10}
                    required={!jobDescription} // Ensure either textarea or file is used
                />
                <p>or</p>
                <input
                    type="file"
                    accept=".txt,.doc,.docx,.json,.pdf"
                    onChange={handleFileUpload}
                    className="jobdesc-file-input"
                />
                <p>
                    <button
                        className="button black"
                        type="submit"
                        disabled={isSubmitting || !jobDescription} // Disable button if no input
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button
                        className="button grey"
                        type="button"
                        onClick={handleClear}
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