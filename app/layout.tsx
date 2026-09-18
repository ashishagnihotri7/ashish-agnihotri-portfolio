import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 Premium SEO Metadata (Google Ranking ke liye)
export const metadata: Metadata = {
  title: "Ashish Agnihotri | System Architect & Full Stack Developer",
  description:
    "Official portfolio of Ashish Agnihotri. I build futuristic web experiences using Next.js, Three.js, Java, and AI integrations.",
  keywords: [
    "Ashish Agnihotri",
    "Ashish Agnihotri Bhopal",
    "Ashish Agnihotri Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "System Architect",
  ],
  authors: [{ name: "Ashish Agnihotri" }],
  openGraph: {
    title: "Ashish Agnihotri | Portfolio",
    description: "Explore my futuristic AI-powered portfolio.",
    url: "https://ashish-agnihotri-portfolio.vercel.app",
    siteName: "Ashish Agnihotri Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
