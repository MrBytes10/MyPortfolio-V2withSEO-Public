// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://augastine.dev"),
  title: {
    default: "Augastine Ndeti - Full-Stack Developer & AI Specialist",
    template: "%s | Augastine Ndeti",
  },
  description:
    "Building intelligent solutions at the intersection of software development and artificial intelligence.",
  keywords: [
    "full-stack developer",
    "AI integration",
    "software engineering",
    "web development",
    "machine learning",
    "Nairobi tech",
  ],
  authors: [{ name: "Augastine Ndeti" }],
  creator: "Augastine Ndeti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://augastine.dev",
    siteName: "Augastine Ndeti",
    title: "Augastine Ndeti - Software Developer Portfolio",
    description:
      "Innovative developer creating data-driven solutions with modern tech stack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Augastine Ndeti Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Augastine Ndeti - Software Developer Portfolio",
    description: "Building the future with code and artificial intelligence",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          src="https://kit.fontawesome.com/82245a89d3.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-300 antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow bg-gradient-to-b from-black via-teal-900/5 to-cyan-900/5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
