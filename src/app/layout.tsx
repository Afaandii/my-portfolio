import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Ahmad Afandi",
  description: "Personal portfolio website of Ahmad Afandi - Full Stack Developer specializing in React.js, Next.js, Node.js, Go, and PHP. Available for freelance work and full-time opportunities.",
  keywords: ["developer", "portfolio", "react", "nextjs", "fullstack", "freelance"],
  authors: [{ name: "Ahmad Afandi" }],
  openGraph: {
    title: "Portfolio Ahmad Afandi",
    description: "Personal portfolio website showcasing my projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
