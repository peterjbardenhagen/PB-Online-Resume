import React, { useState, FormEvent } from 'react';
import './JobDescriptionForm.css'; // Add this import for the CSS
import { marked }  from 'marked'; // Install this library for Markdown-to-HTML conversion
import DOMPurify from 'dompurify'; // Install this library for sanitizing HTML
import mammoth from 'mammoth'; // Install mammoth for Word document parsing
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

export const JobDescriptionForm = () => {
    const [jobDescription, setJobDescription] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const fileExtension = file.name.split('.').pop()?.toLowerCase();
                let extractedText = '';

                if (fileExtension === 'pdf') {
                    // Extract text from PDF
                    extractedText = await extractTextFromPDF(file);
                } else if (fileExtension === 'doc' || fileExtension === 'docx') {
                    // Extract text from Word document
                    extractedText = await extractTextFromWord(file);
                } else {
                    // Default to raw text for other file types
                    extractedText = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            resolve(e.target?.result as string);
                        };
                        reader.readAsText(file);
                    });
                }

                const markdownText = convertToMarkdown(extractedText);
                const cleanedText = cleanText(markdownText);

                // Update state directly
                setJobDescription(cleanedText);

                // Optional: Force a re-render if needed
                setTimeout(() => {
                    const textarea = document.querySelector('.jobdesc-textarea') as HTMLTextAreaElement;
                    if (textarea) {
                        textarea.value = cleanedText;
                    }
                }, 0);

            } catch (error) {
                console.error('Error processing file:', error);
            }
        }
    };

    const extractTextFromPDF = async (file: File): Promise<string> => {
        try {
            // Set worker path
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

            // Create a URL from the file
            const fileURL = URL.createObjectURL(file);

            // Load the PDF document
            const loadingTask = pdfjsLib.getDocument(fileURL);
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

            // Clean up
            URL.revokeObjectURL(fileURL);

            return fullText.trim();
        } catch (error) {
            console.error('Error extracting PDF text:', error);
            return 'Error extracting text from PDF. Please try copying and pasting the text directly.';
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