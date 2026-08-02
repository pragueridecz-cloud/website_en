import type { Metadata } from "next"
import ProgressBar from "@/components/ProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prague Airport Taxi | Transport to/from Prague Airport €29",
  description: "Rezervujte dopravu to/from Prague Airport in advance. Fixed price, professional driver, sledování letu. Sedan €29, minivan od €36. Bez příplatků za delay.",
  keywords: "doprava na airport Prague, transfer airport Prague, odvoz na airport levně, taxi airport Prague, booking auta na airport",
  openGraph: {
    title: "Prague Airport Taxi | Transport na airport Prague €29",
    description: "Fixed price, professional driver, sledování letu. Bez příplatků za delay letu.",
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
