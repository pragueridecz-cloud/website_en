import type { Metadata } from "next"
import ProgressBar from "@/components/ProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prague Airport Taxi | Transport to/from Prague Airport from €29",
  description: "Rezervujte dopravu to/from Prague Airport předem. Fixed price, profesionální řidiči, sledování letu. Sedan from €29, minivan od 950 Kč. Bez příplatků za zpoždění.",
  keywords: "doprava na letiště Prague, transfer letiště Prague, odvoz na letiště levně, taxi letiště Prague, rezervace auta na letiště",
  openGraph: {
    title: "Prague Airport Taxi | Doprava na letiště Prague od 790 Kč",
    description: "Fixed price, profesionální řidiči, sledování letu. Bez příplatků za zpoždění letu.",
    url: "https://www.pragueairportaxi.com",
    siteName: "NaLetistelevne.cz",
    locale: "cs_CZ",
    type: "website",
  },
  alternates: {
    canonical: "https://www.pragueairportaxi.com",
    languages: {
      "cs": "https://www.pragueairportaxi.com",
      "en": "https://www.pragueride.com",
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
