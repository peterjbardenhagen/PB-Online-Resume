import "./globals.css";
import "./executive-polish.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const runtime = "nodejs";

export const metadata = {
  metadataBase: new URL("https://peter.bardenhagen.xyz"),
  title: {
    default: "Peter Bardenhagen — Solution Architect & Technology Leader | Enterprise Digital Transformation",
    template: "%s — Peter Bardenhagen",
  },
  description:
    "Peter Bardenhagen: Solution Architect specializing in enterprise digital transformation, cloud architecture (AWS, Azure, GCP), and AI-enabled platforms. Expert in leading multi-million dollar programs across energy, healthcare, finance, and government sectors. TOGAF, ArchiMate, Agile certified.",
  keywords: [
    "Solution Architect",
    "Technology Leader",
    "Digital Transformation",
    "Cloud Architecture",
    "Enterprise Architecture",
    "AWS Azure GCP",
    "Technical Leadership",
    "Agile Delivery",
    "TOGAF",
    "ArchiMate",
    "React Next.js",
    "DevOps",
    "AI Platforms",
    "Brisbane Australia",
  ],
  authors: [{ name: "Peter Bardenhagen", url: "https://peter.bardenhagen.xyz" }],
  creator: "Peter Bardenhagen",
  publisher: "Peter Bardenhagen",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  category: "Technology",
  twitter: {
    card: "summary_large_image",
    site: "@peterbardenhagen",
    creator: "@peterbardenhagen",
    title: "Peter Bardenhagen — Solution Architect & Technology Leader",
    description:
      "Solution Architect specialising in enterprise digital transformation, cloud architecture, and AI-enabled platforms. TOGAF & ArchiMate certified.",
    images: ["/opengraph-image"],
  },
  openGraph: {
    type: "profile",
    url: "https://peter.bardenhagen.xyz",
    siteName: "Peter Bardenhagen Portfolio",
    title: "Peter Bardenhagen — Solution Architect & Technology Leader",
    description:
      "Solution Architect specializing in enterprise digital transformation, cloud architecture (AWS, Azure, GCP), and AI-enabled platforms. Expert in leading multi-million dollar programs.",
    locale: "en_AU",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Peter Bardenhagen — Solution Architect & Technology Leader",
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/imgs/favicon.ico" },
      { url: "/favicons/icons8-favicon-papercut-512.png", sizes: "512x512" },
    ],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 2,
  themeColor: "#07111f",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Peter Bardenhagen",
    "url": "https://peter.bardenhagen.xyz",
    "image": "https://peter.bardenhagen.xyz/imgs/hero-image.png",
    "jobTitle": "Solution Architect",
    "description": "Solution Architect specializing in enterprise digital transformation, cloud architecture, and AI-enabled platforms",
    "email": "peter@bardenhagen.xyz",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
    },
    "sameAs": [
      "https://www.linkedin.com/in/peterbardenhagen",
      "https://github.com/peterjbardenhagen",
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Recusant",
      "url": "https://www.recusant.com.au",
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Capgemini",
      },
      {
        "@type": "Organization",
        "name": "Sonic Healthcare",
      },
    ],
    "knowsAbout": [
      "Solution Architecture",
      "Cloud Computing",
      "Digital Transformation",
      "Enterprise Architecture",
      "Agile Methodology",
      "Technical Leadership",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="app-id-4466" />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-H090T9HXWP" />
        <GoogleTagManager gtmId="GTM-KWXBWJ9J" />
      </body>
    </html>
  );
}
