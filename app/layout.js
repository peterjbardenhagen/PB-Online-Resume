import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://peter.bardenhagen.xyz"),
  title: {
    default: "Peter Bardenhagen — Head of Technology | Enterprise Architecture & AI",
    template: "%s — Peter Bardenhagen",
  },
  description:
    "Head of Technology / Enterprise Architecture & AI. I lead enterprise-scale digital transformation, align technology strategy with business outcomes, and build high-performance teams across energy, healthcare, finance, and government.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    site: "https://peter.bardenhagen.xyz",
    title: "Peter Bardenhagen — Head of Technology | Enterprise Architecture & AI",
    description:
      "Technology executive focused on AI-enabled operating models, cloud modernisation, and regulatory-compliant platforms.",
    images: ["https://peter.bardenhagen.xyz/imgs/preview.png"],
  },
  openGraph: {
    type: "website",
    url: "https://peter.bardenhagen.xyz",
    siteName: "Peter Bardenhagen",
    title: "Peter Bardenhagen — Head of Technology | Enterprise Architecture & AI",
    description:
      "Technology executive focused on AI-enabled operating models, cloud modernisation, and regulatory-compliant platforms.",
    locale: "en_AU",
    images: [
      {
        url: "https://peter.bardenhagen.xyz/imgs/preview.png",
        width: 1200,
        height: 630,
        alt: "Peter Bardenhagen — Head of Technology | Enterprise Architecture & AI",
      },
    ],
    videos: [
      {
        url: "https://peter.bardenhagen.xyz/imgs/preview.mp4",
        width: 1200,
        height: 630,
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
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
