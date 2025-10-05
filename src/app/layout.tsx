import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tensaiye Zelealem - Software Engineer | Blockchain & Cloud Security Specialist",
  description: "Software Engineer at Intel specializing in Blockchain, Cloud Security & AI. Explore my projects, research papers, and professional experience. Available for opportunities.",
  keywords: [
    "Tensaiye Zelealem",
    "Software Engineer",
    "Blockchain Developer",
    "Cloud Security",
    "Intel",
    "VMware",
    "Coinbase",
    "Ethereum",
    "Solidity",
    "Distributed Systems",
    "Portfolio"
  ],
  authors: [{ name: "Tensaiye Zelealem" }],
  creator: "Tensaiye Zelealem",
  publisher: "Tensaiye Zelealem",
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
    locale: "en_US",
    url: "https://tensaiyezelealem.com",
    title: "Tensaiye Zelealem - Software Engineer | Blockchain & Cloud Security Specialist",
    description: "Software Engineer at Intel specializing in Blockchain, Cloud Security & AI. Explore my projects, research papers, and professional experience.",
    siteName: "Tensaiye Zelealem Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tensaiye Zelealem - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tensaiye Zelealem - Software Engineer | Blockchain & Cloud Security Specialist",
    description: "Software Engineer at Intel specializing in Blockchain, Cloud Security & AI. Explore my projects and professional experience.",
    images: ["/og-image.jpg"],
    creator: "@tensaiyez",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://tensaiyezelealem.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
