import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: {
    default: "Muhammad Afzal Ishaq — Full Stack Developer",
    template: "%s | Muhammad Afzal Ishaq",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications and developer tools.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Muhammad Afzal Ishaq",
  ],
  authors: [{ name: "Muhammad Afzal Ishaq" }],
  creator: "Muhammad Afzal Ishaq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadafzalishaq.dev",
    title: "Muhammad Afzal Ishaq — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications and developer tools.",
    siteName: "Muhammad Afzal Ishaq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afzal Ishaq — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL.",
    creator: "@afzalishaq_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased min-h-screen flex flex-col">
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}