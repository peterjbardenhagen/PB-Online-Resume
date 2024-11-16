import "./globals.css";
import Head from 'next/head'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import TagManager from 'react-gtm-module';

export const metadata = {
    title: "Online Resume",
    description: "Peter Bardenhagen Online Resume"
};


export const analytics = ((w: Window, d: Document, s: string, l: string, i: string) => {
    (w as any).dataLayer = (window as any).dataLayer || [];
    (w as any).dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var dl = l != 'dataLayer' ? '&l=' + l : '';
    var scr = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    /*
        To avoid Multiple installations of google tag manager detected warning
    */
    if (!scriptExists(scr)) {
        var f = d.getElementsByTagName(s)[0],
            j: HTMLScriptElement = d.createElement("script")
        j.async = true;
        j.src = scr;
        f?.parentNode?.insertBefore(j, f);
    }
})
const scriptExists = (url: string) => {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
export default function RootLayout({ children }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-KWXBWJ9J' });
        analytics(window, document, 'script', 'dataLayer', 'GTM-AA12345');
    }, []);
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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H090T9HXWP"></script>
                <script src="./global.js" type="javascript" defer></script>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWXBWJ9J"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            </Head>
            <body>{children}</body>
        </html>
    );
}
