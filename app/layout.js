import "./globals.css";
import Head from 'next/head'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { NextSeo } from 'next-seo';

export const metadata = {
    title: "Online Resume",
    description: "Peter Bardenhagen Online Resume"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://peter.bardenhagen.xyz',
                        title: 'Peter Bardenhagen Online Resume',
                        description: 'Peter Bardenhagen Online Resume',
                        images: [
                            {
                                url: 'https://peter.bardenhagen.xyz/imgs/preview.png',
                                width: 1200,
                                height: 630,
                                alt: 'Peter Bardenhagen Online Resume',
                            },
                            {
                                url: 'https://peter.bardenhagen.xyz/imgs/preview.png',
                                width: 120,
                                height: 630,
                                alt: 'Peter Bardenhagen Online Resume',
                            },
                        ],
                    }}
                />
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=2" />
                <title>Peter Bardenhagen Online Resume & Chatbot</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/imgs/favicon.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="Peter Bardenhagen Online Resume" />

                <meta property="og:url" content="https://peter.bardenhagen.xyz" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Peter Bardenhagen's Online Resume" />
                <meta property="og:description" content="Peter Bardenhagen Online Resume" />
                <meta property="og:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/peter.bardenhagen.xyz/Online%20Resume/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F699b2845-c895-456f-b1fe-2c1272921e83.jpg%3Ftoken%3Dooae7tVn7UywD3x6VpOoo7IBjvftmcRPV55C7lc1qXY%26height%3D448%26width%3D444%26expires%3D33267738443/og.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="peter.bardenhagen.xyz" />
                <meta property="twitter:url" content="https://peter.bardenhagen.xyz" />
                <meta name="twitter:title" content="Online Resume" />
                <meta name="twitter:description" content="Peter Bardenhagen Online Resume" />
                <meta name="twitter:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/peter.bardenhagen.xyz/Online%20Resume/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F699b2845-c895-456f-b1fe-2c1272921e83.jpg%3Ftoken%3Dooae7tVn7UywD3x6VpOoo7IBjvftmcRPV55C7lc1qXY%26height%3D448%26width%3D444%26expires%3D33267738443/og.png" />

                <meta property="og:url" content="https://peter.bardenhagen.xyz/" />
                <meta property="og:description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <meta property="og:site_name" content="Peter Bardenhagen Resume/CV Professional Skills & Experience" />
                <meta property="og:logo" content="https://peter.bardenhagen.xyz/favicons/icons8-favicon-papercut-512.png" />

                <meta name="robots" content="index,follow" />
                <meta name="description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <meta property="og:locale" content="en_UK" />
                <link rel="canonical" href="https://peter.bardenhagen.xyz/" />
            </Head>
            <body>
                {children}
            </body>
        </html>
    );
}
