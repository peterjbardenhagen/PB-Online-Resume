import React from 'react';
import { useState } from 'react';

export const JobDescriptionForm = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jobDescription }),
        });
        const data = await res.json();
        setResponse(data.message);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste job description here"
                    rows={10}
                    cols={50}
                />
                <button type="submit">Submit</button>
            </form>
            {response && <div><h3>Response:</h3><p>{response}</p></div>}
        </div>
    );
}