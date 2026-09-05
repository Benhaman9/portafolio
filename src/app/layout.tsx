import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${content.name} · Portafolio`,
  description: content.shortBio,
  authors: [{ name: content.name }],
  openGraph: {
    title: `${content.name} · Portafolio`,
    description: content.aiSubtitle,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
