import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import TrustNumbers from "@/components/TrustNumbers"
import FloatingCTA from "@/components/FloatingCTA"
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { faqs } from "@/components/faqData";
import Footer from "@/components/Footer";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NaLetistelevne.cz",
  "description": "Reliable and affordable transport to/from Prague Airport. Fixed price, professional driver, real-time flight tracking.",
  "url": "https://www.pragueairportaxi.com",
  "telephone": "+420606079179",
  "email": "info@pragueairportaxi.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Prague",
    "addressCountry": "CZ",
  },
  "priceRange": "750 - 1790 CZK",
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.1008,
      "longitude": 14.2600,
    },
    "geoRadius": "200000",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Transfery to/from Prague Airport",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Economy Sedan",
        "description": "Sedan transfer for 1-4 passengers",
        "price": "750",
        "priceCurrency": "CZK",
      },
      {
        "@type": "Offer",
        "name": "Economy Van",
        "description": "Minivan transfer for 1-7 passengers",
        "price": "990",
        "priceCurrency": "CZK",
      },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustNumbers />
        <HowItWorks />
        <Services />
        <Fleet />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      <FloatingCTA />
    </>
  );
}
