import "./globals.css";
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { NextSeo } from 'next-seo';
//import DocumentMetaTags from '../src/components/DocumentMetaTags/DocumentMetaTags.tsx';
//import PageMetaTags from '../src/components/PageMetaTags/PageMetaTags.tsx';

export const metadata = {
    charset: "UTF-8",
    title: "Peter Bardenhagen - Technology Leader & Innovator",
    description: "I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.",
    robots: "index,follow",
    twitter: {
        card: 'summary_large_image',
        domain: 'peter.bardenhagen.xyz',
        url: 'https://peter.bardenhagen.xyz',
        title: 'Peter Bardenhagen Online Resume',
        description: 'I am an innovative digital enterprise leader with a proven track record collaborating with top - tier global consulting firms.Leveraging technology, I address business challenges, enhance customer experiences, and drive growth.My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures.',
        image: 'https://peter.bardenhagen.xyz/imgs/preview.png'
    },
    openGraph: {
        url: 'https://peter.bardenhagen.xyz',
        siteName: 'Peter Bardenhagen - Technology Leader & Innovator',
        description: "I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.",
        locale: 'en_UK',
        type: 'website',
        images: [
            {
                url: 'https://peter.bardenhagen.xyz/imgs/preview.png', // Must be an absolute URL
                width: 1200,
                height: 630,
            }
        ],  // Audio not used
        videos: [
            {
                url: 'https://peter.bardenhagen.xyz/imgs/preview.mp4', // Must be an absolute URL
                width: 1200,
                height: 630,
            },
        ],
        logos: [
            {
                url: 'https://peter.bardenhagen.xyz/favicons/icons8-favicon-papercut-512.png', // Must be an absolute URL
                width: 512,
                height: 512,
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://peter.bardenhagen.xyz',
                        title: 'Peter Bardenhagen - Technology Leader & Innovator',
                        description: 'I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.',
                        images: [
                            {
                                url: 'https://peter.bardenhagen.xyz/imgs/preview.png',
                                width: 1200,
                                height: 630,
                                alt: 'I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.',
                            },
                            {
                                url: 'https://peter.bardenhagen.xyz/imgs/preview.png',
                                width: 120,
                                height: 630,
                                alt: 'I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.',
                            },
                        ],
                        videos: [
                            {
                                url: 'https://peter.bardenhagen.xyz/imgs/preview.mp4', // Must be an absolute URL
                                width: 800,
                                height: 450,
                            },
                        ],
                    }}
                />

                <metaData />

                <title>Peter Bardenhagen - Technology Leader & Innovator</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="./imgs/favicon.ico" type="image/icon" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="canonical" href="https://peter.bardenhagen.xyz/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2"/>
            </Head>
            <body>
                <div id="app-id-4466"></div>
                {children}
                <Analytics />
                <GoogleAnalytics gaId="G-H090T9HXWP" />
                <GoogleTagManager gtmId="GTM-KWXBWJ9J" />
            </body>
        </html>
    );
}
