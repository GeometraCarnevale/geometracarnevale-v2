import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Leonardo Carnevale | Geometra Roma",
  description:
    "Leonardo Carnevale, geometra a Roma. Pratiche catastali, pratiche urbanistiche, APE, condoni edilizi, SCIA nuova attività, occupazione di suolo pubblico e perizie di stima.",
  keywords: [
    "geometra Roma",
    "Leonardo Carnevale",
    "pratiche catastali Roma",
    "pratiche urbanistiche Roma",
    "APE Roma",
    "SCIA Roma",
    "condoni edilizi Roma",
    "perizie di stima Roma"
  ],
  openGraph: {
    title: "Leonardo Carnevale | Geometra Roma",
    description:
      "Consulenza tecnica per pratiche catastali, urbanistiche, APE, condoni edilizi, SCIA, OSP e perizie.",
    url: "https://geometracarnevale.it",
    siteName: "Geometra Carnevale",
    locale: "it_IT",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
