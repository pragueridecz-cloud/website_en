import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Cookie Policy | transfer-prague-car s.r.o.",
  description: "Information about cookies used on pragueairportaxi.com – which cookies we use, what they're for, and how to manage them.",
  alternates: {
    canonical: "https://www.pragueairportaxi.com/cookie-policy",
    languages: {
      "en": "https://www.pragueairportaxi.com/cookie-policy",
      "cs": "https://www.naletistelevne.cz/zasady-zpracovani-cookies",
      "x-default": "https://www.pragueairportaxi.com/cookie-policy",
    },
  },
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

const CookieRow = ({ name, type, purpose, duration, essential }: {
  name: string; type: string; purpose: string; duration: string; essential: boolean
}) => (
  <tr>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontFamily: "monospace", fontSize: "13px", color: "#00205B" }}>{name}</td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", background: essential ? "#dcfce7" : "#fef3c7", color: essential ? "#166534" : "#92400e" }}>
        {type}
      </span>
    </td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#475569" }}>{purpose}</td>
    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e5e7eb", fontSize: "13px", color: "#475569", whiteSpace: "nowrap" as const }}>{duration}</td>
  </tr>
)

export default function ZasadyCookies() {
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
            Cookie Policy
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "16px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>
            Effective from {updated} · transfer-prague-car s.r.o.
          </p>
        </div>
      </div>

      {/* Obsah */}
      <div style={{ background: "#f8fafc", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "#fff", borderRadius: "16px", padding: "clamp(24px,5vw,56px)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          <Section title="1. What are cookies">
            <P>Cookies are small text files stored on your device (computer, tablet, phone) when you visit websites. They allow the website to remember your preferences and behaviour, improving your user experience.</P>
            <P>Cookies themselves do not contain any personal identification data and cannot run programmes or transmit viruses.</P>
          </Section>

          <Section title="2. What cookies do we use">

            {/* Essential */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#00205B", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-lock" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Essential cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Always active — the website cannot function without them. No consent required.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#f0f4ff" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Name</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Type</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Purpose</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Validity</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="sb-session" type="Essential" purpose="Storing customer login to the customer zone" duration="Session" essential={true} />
                    <CookieRow name="nll_currency" type="Essential" purpose="Remembering the selected currency in the booking form" duration="30 days" essential={true} />
                    <CookieRow name="nll_lang" type="Essential" purpose="Remembering language preference (CS/EN)" duration="30 days" essential={true} />
                    <CookieRow name="NEXT_LOCALE" type="Essential" purpose="Website language version" duration="1 year" essential={true} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Functional */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#92400e", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-settings" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Functional cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Improve website functionality. Can be declined, but some features may not work correctly.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#fefce8" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Name</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Type</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Purpose</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Validity</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="__gmaps_*" type="Functional" purpose="Google Maps — interactive map display and route calculation" duration="Session" essential={false} />
                    <CookieRow name="__stripe_*" type="Functional" purpose="Payment gateway — fraud prevention and online payment security" duration="Session / 1 year" essential={false} />
                    <CookieRow name="nll_booking_*" type="Functional" purpose="Storing unfinished booking when closing/reopening the widget" duration="2 hours" essential={false} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytické */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#475569", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-chart-bar" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Analytical cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Help us understand how visitors use the website. All data is anonymised.</div>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "12px" }}>
                We currently do not use any third-party analytical cookies. If this changes in future, we will update this document and ask for your consent.
              </p>
            </div>

          </Section>

          <Section title="3. Third-party cookies">
            <P>Some cookies are set by third-party service providers we use on the website. These cookies are governed by the privacy policies of those companies:</P>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "12px" }}>
              {[
                { name: "Mapping services (Google Maps)", purpose: "Interactive map display and route distance calculation", link: "https://policies.google.com/privacy" },
                { name: "Payment gateway", purpose: "Secure online card payment processing, fraud prevention", link: null },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#00205B", fontSize: "14px", marginBottom: "3px" }}>{item.name}</div>
                    <div style={{ fontSize: "13px", color: "#64748b" }}>{item.purpose}</div>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#00205B", textDecoration: "none", padding: "5px 12px", border: "1px solid #dbeafe", borderRadius: "6px", whiteSpace: "nowrap" as const }}>
                      Privacy policy →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. How to manage cookies">
            <P>You can manage or decline cookies directly in your browser settings. Please note that declining some cookies may limit website functionality (e.g. map loading or online payment).</P>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              {[
                { browser: "Google Chrome", link: "https://support.google.com/chrome/answer/95647" },
                { browser: "Mozilla Firefox", link: "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" },
                { browser: "Safari", link: "https://support.apple.com/guide/safari/sfri11471/mac" },
                { browser: "Microsoft Edge", link: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "8px", textDecoration: "none", color: "#00205B", fontSize: "13px", fontWeight: 600 }}>
                  🌐 {item.browser}
                </a>
              ))}
            </div>
            <P>For mobile devices, cookie settings can be found in the settings of your browser or operating system.</P>
          </Section>

          <Section title="5. Policy changes">
            <P>These cookie policies may be updated periodically — for example when new services are added to the website. The date of the last update is always shown at the top of this document.</P>
            <P>We will notify you of significant changes via a banner on the website.</P>
          </Section>

          {/* Contactní box */}
          <div style={{ background: "#00205B", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Questions about cookies?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Write to us at info@pragueairportaxi.com</div>
            </div>
            <a href="mailto:info@pragueairportaxi.com" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              Contact us
            </a>
          </div>

          {/* Navigace mezi dokumenty */}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" as const }}>
            <a href="/privacy-policy" style={{ color: "#00205B", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              ← Privacy Policy
            </a>
            <a href="/terms-and-conditions" style={{ color: "#00205B", textDecoration: "none", fontSize: "13px", padding: "8px 16px", border: "1px solid #dbeafe", borderRadius: "8px", background: "#f0f4ff" }}>
              Terms & Conditions →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
