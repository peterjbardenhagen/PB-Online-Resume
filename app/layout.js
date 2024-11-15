import "./globals.css";
import Head from 'next/head'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
    title: "Online Resume",
    description: "Peter Bardenhagen's Online Resume"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=2" />
                <title>Peter Bardenhagen Online Resume & Chatbot</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="favicon.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Peter Bardenhagen Online Resume & Chatbot" />
                <meta property="og:image" content="https://peter.bardenhagen.xyz/img/preview.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:type" content="png" />
                <meta property="og:url" content="https://peter.bardenhagen.xyz/" />
                <meta property="og:description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <meta property="og:site_name" content="Peter Bardenhagen Resume/CV Professional Skills & Experience" />
                <meta property="og:logo" content="https://peter.bardenhagen.xyz/favicons/icons8-favicon-papercut-512.png" />
                <meta name="robots" content="index,follow" />
                <meta name="description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <meta property="og:locale" content="en_UK" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H090T9HXWP"></script>
                <script src="global.js" language="javascript"></script>
                <link rel="canonical" href="https://peter.bardenhagen.xyz/" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
