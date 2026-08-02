import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Cookie Policy | transfer-prague-car s.r.o.",
  description: "Information o cookies používaných na webu pragueairportaxi.com – jaké cookies používáme, k čemu slouží a jak je spravovat.",
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

          <Section title="1. Co jsou cookies">
            <P>Cookies are small text files stored on your device (computer, tablet, phone) when you visit websites. They allow the website to remember your preferences and behaviour, improving your user experience.</P>
            <P>Cookies themselves do not contain any personal identification data and cannot run programmes or transmit viruses.</P>
          </Section>

          <Section title="2. Jaké cookies používáme">

            {/* Nezbytné */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#00205B", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-lock" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Nezbytné cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Vždy aktivní – bez nich web nemůže fungovat. Souhlas se nevyžaduje.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#f0f4ff" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Název</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Typ</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Účel</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#00205B", fontSize: "12px" }}>Platnost</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="sb-session" type="Nezbytné" purpose="Uchování přihlášení customer do zákaznické zóny" duration="Session" essential={true} />
                    <CookieRow name="nll_currency" type="Nezbytné" purpose="Zapamatování vybrané měny v rezervačním formuláři" duration="30 dní" essential={true} />
                    <CookieRow name="nll_lang" type="Nezbytné" purpose="Zapamatování jazykové předvolby (CS/EN)" duration="30 dní" essential={true} />
                    <CookieRow name="NEXT_LOCALE" type="Nezbytné" purpose="Jazyková verze webu" duration="1 rok" essential={true} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Funkční */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#92400e", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-settings" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Funkční cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Zlepšují functionality webu. Lze odmítnout, ale některé funkce pak nemusí fungovat správně.</div>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#fefce8" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Název</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Typ</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Účel</th>
                      <th style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 700, color: "#92400e", fontSize: "12px" }}>Platnost</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "#fff" }}>
                    <CookieRow name="__gmaps_*" type="Funkční" purpose="Google Maps – zobrazení interaktivní mapy a výpočet trasy" duration="Session" essential={false} />
                    <CookieRow name="__stripe_*" type="Funkční" purpose="Platební brána – prevence podvodů a security online plateb" duration="Session / 1 rok" essential={false} />
                    <CookieRow name="nll_booking_*" type="Funkční" purpose="Uchování rozpracované booking při zavření/otevření widgetu" duration="2hiny" essential={false} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytické */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"#475569", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><i className="ti ti-chart-bar" style={{ fontSize:"15px", color:"#fff" }} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: "#00205B", fontSize: "15px" }}>Analytické cookies</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Pomáhají nám pochopit, jak návštěvníci web používají. Všechna data jsou anonymizovaná.</div>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "12px" }}>
                We currently do not use any third-party analytical cookies. If this changes in future, we will update this document and ask for your consent.
              </p>
            </div>

          </Section>

          <Section title="3. Third-party cookies">
            <P>Some cookies are set by third-party service providers we use on the website. Tyto cookies se řídí zásadami ochrany soukromí daných společností:</P>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "12px" }}>
              {[
                { name: "Mapové služby (Google Maps)", purpose: "Zobrazení interaktivní mapy a výpočet vzdálenosti trasy", link: "https://policies.google.com/privacy" },
                { name: "Platební brána", purpose: "Bezpečné processing online plateb kartou, prevence podvodů", link: null },
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

          <Section title="4. Jak spravovat cookies">
            <P>You can manage or decline cookies directly in your browser settings. Please note that declining some cookies may limit website functionality (e.g. map loading or online payment).</P>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "16px" }}>
              {[
                { browser: "Google Chrome", link: "https://support.google.com/chrome/answer/95647" },
                { browser: "Mozilla Firefox", link: "https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" },
                { browser: "Safari", link: "https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" },
                { browser: "Microsoft Edge", link: "https://support.microsoft.com/cs-cz/microsoft-edge/odstr%C3%A1n%C4%9Bn%C3%AD-file%C5%AF-cookie-v-prohlí%C5%BEe%C4%8Di-microsoft-edge" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "8px", textDecoration: "none", color: "#00205B", fontSize: "13px", fontWeight: 600 }}>
                  🌐 {item.browser}
                </a>
              ))}
            </div>
            <P>For mobile devices, cookie settings can be found in the settings of your browser or operating system.</P>
          </Section>

          <Section title="5. Změny těchto zásad">
            <P>These cookie policies may be updated periodically — for example when new services are added to the website. Datum poslední aktualizace je vždy uvedeno v záhlaví tohoto dokumentu.</P>
            <P>We will notify you of significant changes via a banner on the website.</P>
          </Section>

          {/* Contactní box */}
          <div style={{ background: "#00205B", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>FAQ ohledně cookies?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Napište nám na info@pragueairportaxi.com</div>
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
