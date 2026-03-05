import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyDiscord from "./components/StickyDiscord";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const BASE_URL = "https://fluxfut.com"; // ← update to your real domain

export const metadata: Metadata = {
  title: {
    default: "FluxFut — Control the Meta",
    template: "%s | FluxFut",
  },
  description: "Elite FC26 tactics, market strategies, squad builders and competitive gameplay. Join 27K+ EAFC players in the FluxFut community.",
  keywords: ["FC26", "EAFC", "FluxFut", "FIFA tactics", "FC26 trading", "squad builder", "evolutions", "meta cards"],
  authors: [{ name: "FluxFut" }],
  creator: "FluxFut",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "FluxFut",
    title: "FluxFut — Control the Meta",
    description: "Elite FC26 tactics, market strategies and competitive gameplay. Join 27K+ EAFC players.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`, // ← add a 1200x630 image to /public/og-image.png
        width: 1200,
        height: 630,
        alt: "FluxFut — Control the Meta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxFut — Control the Meta",
    description: "Elite FC26 tactics, market strategies and competitive gameplay.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@FluxFut",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020617] text-white antialiased`}>
        {children}
        <StickyDiscord />
      </body>
    </html>
  );
}
