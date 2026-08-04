import type { Metadata } from "next"
import ProgressBar from "@/components/ProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prague Airport Taxi | Transport to/from Prague Airport €29",
  description: "Book your transfer to/from Prague Airport in advance. Fixed price, professional driver, real-time flight tracking. Sedan from €29, minivan from €36. No surcharge for flight delays.",
  keywords: "Prague airport transfer, Prague airport taxi, cheap airport transfer Prague, Prague airport transport, book a car Prague airport",
  openGraph: {
    title: "Prague Airport Taxi | Transport to/from Prague Airport €29",
    description: "Fixed price, professional driver, real-time flight tracking. No surcharge for flight delays.",
    url: "https://www.pragueairportaxi.com",
    siteName: "NaLetistelevne.cz",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.pragueairportaxi.com",
    languages: {
      "en": "https://www.pragueairportaxi.com",
      "cs": "https://www.naletistelevne.cz",
      "x-default": "https://www.pragueairportaxi.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
