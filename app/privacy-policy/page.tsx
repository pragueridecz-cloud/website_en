import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy (GDPR) | transfer-prague-car s.r.o.",
  description: "Privacy policy of transfer-prague-car s.r.o. How we process your data, what rights you have, and how to contact us.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color: "#00205B", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #F97316", display: "inline-block" }}>
      {title}
    </h2>
    <div style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: "12px" }}>{children}</p>
)

const Ul = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul style={{ margin: "4px 0 16px 0", padding: 0, listStyle: "none" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "7px", fontSize: "15px", color: "#374151", lineHeight: 1.65 }}>
        <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#F97316", flexShrink: 0, marginTop: "7px" }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const RightBox = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "10px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#00205B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <i className={icon} style={{ fontSize: "16px", color: "#fff" }} />
    </div>
    <div>
      <div style={{ fontWeight: 700, color: "#00205B", fontSize: "14px", marginBottom: "4px" }}>{title}</div>
      <div style={{ color: "#475569", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
    </div>
  </div>
)

export default function OchranaOsobnichUdaju() {
  const updated = "1. 6. 2025"

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "#00205B", padding: "100px 24px 50px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
              Legal documents
            </span>
          </div>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,44px)", color: "#fff", margin: "0 0 12px", lineHeight: 1.15 }}>
            Privacy Policy
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
            Effective from {updated} · GDPR Regulation (EU) 2016/679
          </p>
        </div>
      </div>

      {/* Obsah */}
      <div style={{ background: "#f8fafc", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,56px)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          <Section title="1. Data Controller">
            <P>The controller of your personal data is:</P>
            <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "12px" }}>
              <strong>transfer-prague-car s.r.o.</strong><br />
              Registered office: Sochařská 333/2, 170 00 Prague, Czech Republic<br />
              Company ID: 25706993<br />
              E-mail: <a href="mailto:info@pragueairportaxi.com" style={{ color: "#00205B" }}>info@pragueairportaxi.com</a><br />
              Phone: <a href="tel:+420606079179" style={{ color: "#00205B" }}>+420 606 079 179</a>
            </div>
            <P>This page describes what personal data we collect, for what purposes we use it and what rights you have in connection with its processing.</P>
          </Section>

          <Section title="2. What Personal Data We Process">
            <P><strong>When booking transport:</strong></P>
            <Ul items={[
              "Full name",
              "Email address",
              "Phone number",
              "Pickup location and destination",
              "Date and time of transport",
              "Flight number (if applicable)",
              "Number of passengers and luggage",
              "Special requirements (child seat, oversized luggage)",
            ]} />
            <P><strong>When paying by card:</strong></P>
            <Ul items={[
              "Payment details are processed exclusively by our payment service provider — we never see or store the card number or CVC code",
              "The payment processor is based in the US and processing takes place under standard contractual clauses approved by the European Commission",
            ]} />
            <P><strong>When visiting the website:</strong></P>
            <Ul items={[
              "IP address and technical information about your device (via analytical tools)",
              "Cookies — see our Cookie Policy",
            ]} />
          </Section>

          <Section title="3. Purposes and Legal Basis for Processing">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "12px", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#00205B" }}>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Purpose</th>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Legal basis</th>
                    <th style={{ padding: "11px 14px", textAlign: "left" as const, color: "#fff", fontWeight: 700 }}>Retention period</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Providing transport (contract performance)", "Contract performance (Art. 6(1)(b))", "Duration of contractual relationship + 1 year"],
                    ["Sending confirmations and communication", "Contract performance (Art. 6(1)(b))", "Duration of contractual relationship"],
                    ["Issuing tax documents", "Legal obligation (Art. 6(1)(c))", "10 years (per tax regulations)"],
                    ["Handling complaints and disputes", "Legitimate interest (Art. 6(1)(f))", "3 years from end of transport"],
                    ["Sending marketing communications", "Consent (Art. 6(1)(a))", "Until consent is withdrawn"],
                    ["Security and fraud prevention", "Legitimate interest (Art. 6(1)(f))", "1 year"],
                  ].map(([ucel, zaklad, doba], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb" }}>{ucel}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", color: "#475569" }}>{zaklad}</td>
                      <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", color: "#475569" }}>{doba}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Recipients of Personal Data">
            <P>We share your personal data only with trusted partners who are bound by processing agreements and are obliged to protect your data:</P>
            <Ul items={[
              <><strong>Drivers and partner carriers</strong> – name, phone and route for the purpose of completing the transport</>,
              <><strong>Payment service provider</strong> – processing online card payments (US server, protected under EU standard contractual clauses)</>,
              <><strong>Email and notification service provider</strong> – sending confirmation emails and SMS notifications (EU/US server)</>,
              <><strong>Cloud database</strong> – secure storage of bookings and customer data (EU infrastructure)</>,
              <><strong>Mapping and geolocation services</strong> – route and distance calculation (Google Maps, address data only)</>,
              <><strong>Public authorities</strong> – only where required by law (e.g. tax authority, courts)</>,
            ]} />
            <P>We do not sell any personal data to third parties nor share it for marketing purposes without your explicit consent.</P>
          </Section>

          <Section title="5. Your Rights">
            <P>As a data subject you have the following rights, which you can exercise at any time by contacting the controller:</P>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              <RightBox icon="ti ti-eye" title="Right of access" text="You have the right to know what data we process about you and to obtain a copy." />
              <RightBox icon="ti ti-pencil" title="Right to rectification" text="If your data is incorrect or incomplete, you have the right to have it corrected." />
              <RightBox icon="ti ti-trash" title="Right to erasure" text="Under certain conditions you have the right to request deletion of your personal data." />
              <RightBox icon="ti ti-player-pause" title="Right to restriction" text="You can request restriction of processing, for example if you contest the accuracy of the data." />
              <RightBox icon="ti ti-package" title="Right to data portability" text="Data processed automatically on the basis of consent or contract will be provided to you in a machine-readable format." />
              <RightBox icon="ti ti-ban" title="Right to object" text="You can object at any time to processing based on legitimate interest." />
            </div>
            <P>You can exercise your rights by emailing <a href="mailto:info@pragueairportaxi.com" style={{ color: "#00205B" }}>info@pragueairportaxi.com</a>. We will respond to your request within <strong>30 days</strong>.</P>
            <P>If you believe we are processing your data in violation of GDPR, you have the right to file a complaint with the Office for Personal Data Protection (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" style={{ color: "#00205B" }}>www.uoou.cz</a>).</P>
          </Section>

          <Section title="6. Data Security">
            <P>We implement technical and organisational measures to protect your personal data against unauthorised access, loss or misuse:</P>
            <Ul items={[
              "Data transfer encryption (HTTPS/TLS)",
              "Database encryption",
              "Data access limited to authorised personnel on a need-to-know basis",
              "Regular security audits and system updates",
              "Contractual data protection obligations for processors",
            ]} />
          </Section>

          <Section title="7. Cookies">
            <P>Our website uses cookies. Detailed information about which cookies we use and how you can manage them can be found in our <a href="/cookie-policy" style={{ color: "#00205B" }}>Cookie Policy</a>.</P>
          </Section>

          <Section title="8. Changes to This Policy">
            <P>These privacy policy may be updated from time to time. We will inform you of significant changes by email or notice on the website. The date of the last update is shown at the top of this document.</P>
          </Section>

          {/* Contact box */}
          <div style={{ background: "#00205B", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Want to exercise your rights or ask a question?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Write to us — we will respond within 30 days.</div>
            </div>
            <a href="mailto:info@pragueairportaxi.com" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              info@pragueairportaxi.com
            </a>
          </div>

          {/* Navigace mezi dokumenty */}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" as const }}>
            <a href="/terms-and-conditions" style={{ color: "#00205B", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              ← Terms & Conditions
            </a>
            <a href="/cookie-policy" style={{ color: "#00205B", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              Cookie Policy →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
