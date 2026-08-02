import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import FirmsPerks from "@/components/FirmsPerks";
import FirmsUseCases from "@/components/FirmsUseCases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate transport Prague | pragueairportaxi.com",
  description: "Corporate taxi Prague with VAT invoice. Employee airport transfers, corporate transfers, VIP transport for delegations. Fixed price, monthly invoicing, dedicated line.",
};


const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragueairportaxi.com"},
        {"@type": "ListItem", "position": 2, "name": "Business Travel", "item": "https://www.pragueairportaxi.com/preprava-pro-firmy"}
      ]
    }

export default function PrepravaPropFirmy() {
  return (
    <>
      <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0a3a8a 100%)", padding: "100px 20px 60px" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "32px", height: "2px", background: "#F97316", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                For companies & corporations
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 20px" }}>
              Corporate Transport<br />
              <span style={{ color: "#F97316" }}>for every occasion</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "36px" }}>
              Corporate taxi Prague with VAT invoice for every ride. We provide employee airport transfers, business partner pickups, corporate transfers and VIP transport for delegations. Fixed price, monthly invoicing and dedicated line for corporate clients. Sign a corporate contract and keep transport under control.
            </p>
            <a href="mailto:info@pragueairportaxi.com?subject=Corporate%20Enquiry"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}>
              Arrange corporate partnership →
            </a>
          </div>
        </section>

        {/* Why choose us */}
        <section style={{ background: "#fff", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Why a corporate account?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", marginBottom: "48px" }}>Benefits you will appreciate with regular corporate transport.</p>
            <FirmsPerks />
          </div>
        </section>

        {/* Kdy nás využít */}
        <section style={{ background: "#f8fafc", padding: "64px 20px" }}>
          <div className="max-w-6xl mx-auto">
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "2px" }}>When to use us</span>
              </div>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(32px,4vw,52px)", color: "#00205B", marginBottom: "16px", lineHeight: 1.1 }}>
                Transport for every occasion
              </h2>
              <div style={{ width: "40px", height: "3px", background: "#F97316", borderRadius: "2px" }} />
            </div>

            <FirmsUseCases />
          </div>
        </section>

        {/* Partneři */}
        <section style={{ background: "#00205B", padding: "48px 20px" }}>
          <div className="max-w-6xl mx-auto text-center">
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "24px" }}>
              Trusted by
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[{ name: "Czech Television", logo: "/partner-ct.png" }, { name: "Blažek", logo: "/partner-blazek.png" }].map((p) => (
                <div key={p.name} className="flex items-center justify-center rounded-xl px-7 py-3"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                  <img src={p.logo} alt={p.name}
                    style={{ maxHeight: "64px", maxWidth: "160px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </div>
              ))}
              <div className="flex items-center justify-center rounded-xl px-7 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minWidth: "130px" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600 }}>and many more…</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#fff", padding: "64px 20px", textAlign: "center" }}>
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "12px" }}>
              Ready to start?
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px" }}>
              Contact us and we will prepare a tailored offer for your company.
            </p>
            <a href="mailto:info@pragueairportaxi.com?subject=Corporate%20Enquiry"
              style={{ display: "inline-block", background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none", marginRight: "12px" }}>
              Write to us →
            </a>
            <a href="tel:+420606079179"
              style={{ display: "inline-block", background: "#f1f5f9", color: "#00205B", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "12px", textDecoration: "none" }}>
              +420 606 079 179
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
