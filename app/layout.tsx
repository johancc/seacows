import type { Metadata } from "next";
import { Geist_Mono, Libre_Baskerville, Source_Sans_3 } from "next/font/google";

import { PrelaunchGate } from "@/components/prelaunch-gate";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans-main",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif-main",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seacowsarereal.com"),
  title: {
    default: "Sea Cows Are Real - Aquatic Bovine Registry",
    template: "%s | Sea Cows Are Real",
  },
  description:
    "Independent registry and discussion forum for aquatic bovine sightings, field reports, classification notes, and evidence review.",
  openGraph: {
    title: "Sea Cows Are Real",
    description:
      "Independent registry for aquatic bovine sightings and discussion.",
    siteName: "Sea Cows Are Real",
    images: [
      {
        url: "/images/original-lake-cow.png",
        width: 1024,
        height: 1024,
        alt: "Cow standing in shallow lake water for aquatic bovine registry evidence review.",
      },
    ],
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
      className={`${sourceSans.variable} ${libreBaskerville.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <PrelaunchGate>{children}</PrelaunchGate>
      </body>
    </html>
  );
}
