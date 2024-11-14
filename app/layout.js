import "./globals.css";
import Head from 'next/head'

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: "Online Resume",
    description: "Peter Bardenhagen's Online Resume"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>Peter Bardenhagen Online Resume & Chatbot</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

                <link rel="shortcut icon" href="favicons/icons8-favicon-papercut-120.png" />

                <link type="image/png" sizes="16x16" rel="icon" href="favicons/icons8-favicon-papercut-16.png" />
                <link type="image/png" sizes="32x32" rel="icon" href="favicons/icons8-favicon-papercut-32.png" />
                <link type="image/png" sizes="96x96" rel="icon" href="favicons/icons8-favicon-papercut-96.png" />
                <link type="image/png" sizes="120x120" rel="icon" href="favicons/icons8-favicon-papercut-120.png" />
                <link type="image/png" sizes="72x72" rel="icon" href="favicons/icons8-favicon-papercut-72.png" />
                <link type="image/png" sizes="96x96" rel="icon" href="favicons/icons8-favicon-papercut-96.png" />
                <link type="image/png" sizes="144x144" rel="icon" href="favicons/icons8-favicon-papercut-144.png" />
                <link type="image/png" sizes="192x192" rel="icon" href="favicons/icons8-favicon-papercut-192.png" />
                <link type="image/png" sizes="512x512" rel="icon" href="favicons/icons8-favicon-papercut-512.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="favicons/icons8-favicon-papercut-57.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="favicons/icons8-favicon-papercut-60.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="favicons/icons8-favicon-papercut-72.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="favicons/icons8-favicon-papercut-76.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="favicons/icons8-favicon-papercut-114.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="favicons/icons8-favicon-papercut-120.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="favicons/icons8-favicon-papercut-144.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="favicons/icons8-favicon-papercut-152.png" />
                <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="favicons/icons8-favicon-papercut-180.png" />
                <link color="#26E07F" rel="mask-icon" href="favicons/icons8-favicon-papercut-120.svg" />
                <meta name="msapplication-square70x70logo" content="favicons/icons8-favicon-papercut-70.png" />
                <meta name="msapplication-TileImage" content="favicons/icons8-favicon-papercut-144.png" />
                <meta name="msapplication-square150x150logo" content="favicons/icons8-favicon-papercut-150.png" />
                <meta name="msapplication-square310x310logo" content="favicons/icons8-favicon-papercut-310.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Peter Bardenhagen Online Resume & Chatbot" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://peter.bardenhagen.xyz" />
                <meta property="og:description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <meta property="og:site_name" content="Peter Bardenhagen Resume/CV Professional Skills & Experience" />
                <meta name="robots" content="index,follow" />
                <meta name="description" content="I'm an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving challenging business problems with AI powered solutions, and designing robust architectures." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H090T9HXWP"></script>
                {/* <script src="Global.js" language="javascript"></script> */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=2" />
                <link rel="canonical" href="https://peter.bardenhagen.xyz" />
                <link rel="alternate" hreflang="en-us" href="/" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
