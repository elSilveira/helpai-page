import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HelpAI — Become the God of Meetings",
  description:
    "Real-time AI whispering in your ear — invisible to everyone else. AI-powered meeting assistant with stealth mode.",
  openGraph: {
    title: "HelpAI — Become the God of Meetings",
    description:
      "Real-time AI-powered insights, suggested responses, and strategic talking points during your meetings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
