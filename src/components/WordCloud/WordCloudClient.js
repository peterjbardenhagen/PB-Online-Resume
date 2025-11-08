'use client';

import { useState, useEffect } from 'react';
import WordCloud from './WordCloud';

export default function WordCloudClient() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="word-cloud-wrapper"><div className="word-cloud-container" style={{ minHeight: '400px' }}>Loading...</div></div>;
    }

    return <WordCloud />;
}
