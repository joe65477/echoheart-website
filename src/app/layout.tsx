import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "ECHOHeart Imaging Services | Mobile Diagnostic Ultrasound in Tampa Bay",
  description:
    "ECHOHeart Imaging provides mobile diagnostic ultrasound services throughout the Tampa Bay area. Echocardiograms, carotid ultrasound with CIMT, aorta and iliac artery ultrasound, vascular studies, and physician-interpreted reports.",
  keywords: [
    "mobile ultrasound",
    "echocardiogram",
    "carotid ultrasound",
    "CIMT",
    "AAA ultrasound",
    "vascular ultrasound",
    "Tampa Bay ultrasound",
    "mobile diagnostic imaging",
    "ECHOHeart Imaging",
  ],
  openGraph: {
    title: "ECHOHeart Imaging Services",
    description:
      "Mobile diagnostic ultrasound services throughout the Tampa Bay area.",
    url: "https://www.echoheartimaging.com",
    siteName: "ECHOHeart Imaging Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
