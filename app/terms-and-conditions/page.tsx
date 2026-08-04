import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | transfer-prague-car s.r.o.",
  description: "Terms and Conditions of transfer-prague-car s.r.o. operating www.pragueairportaxi.com. Transport terms, cancellation policy, complaints.",
  alternates: {
    canonical: "https://www.pragueairportaxi.com/terms-and-conditions",
    languages: {
      "en": "https://www.pragueairportaxi.com/terms-and-conditions",
      "cs": "https://www.naletistelevne.cz/obchodni-podminky",
      "x-default": "https://www.pragueairportaxi.com/terms-and-conditions",
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

export default function ObchodniPodminky() {
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
            Terms and Conditions
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

          <Section title="1. Operator and Identification Details">
            <P>The operator of the transport platform <strong>www.pragueairportaxi.com</strong> is:</P>
            <div style={{ background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "16px 20px", marginBottom: "12px" }}>
              <strong>transfer-prague-car s.r.o.</strong><br />
              Registered office: Sochařská 333/2, 170 00 Prague, Czech Republic<br />
              Company ID: 25706993<br />
              VAT ID: CZ25706993<br />
              Registered in the Commercial Register maintained by the Municipal Court in Prague<br />
              E-mail: <a href="mailto:info@pragueairportaxi.com" style={{ color: "#00205B" }}>info@pragueairportaxi.com</a><br />
              Phone: <a href="tel:+420606079179" style={{ color: "#00205B" }}>+420 606 079 179</a>
            </div>
            <P>These terms and conditions govern the relationship between the operator and the customer when ordering and providing transport services.</P>
          </Section>

          <Section title="2. Definitions">
            <Ul items={[
              "Operator – transfer-prague-car s.r.o., operator of the transport platform www.pragueairportaxi.com",
              "Customer – a natural or legal person ordering a transport service",
              "Driver – a contracted partner of the operator providing physical transport",
              "Booking – a binding reservation created via the booking form",
              "Fixed price – the price communicated to the customer upon completing booking, which does not change (unless otherwise stated)",
            ]} />
          </Section>

          <Section title="3. Booking and Contract Formation">
            <P>The transport contract is concluded when the customer completes the booking via the reservation form and receives a confirmation email to the address provided.</P>
            <P>The customer must provide correct and complete information — pickup location, destination, date and time, number of passengers and luggage. The operator is not liable for damages caused by incorrectly entered data.</P>
            <P>Booking can be made:</P>
            <Ul items={[
              "Online via the booking form at pragueairportaxi.com",
              "By phone at +420 606 079 179",
              "By email at info@pragueairportaxi.com",
            ]} />
          </Section>

          <Section title="4. Prices and Payment Terms">
            <P>Prices are shown in EUR including VAT. The displayed price is <strong>fixed</strong> and includes all charges related to the transfer (motorway tolls, fuel, terminal parking).</P>
            <P>The price <strong>does not include</strong>: optional extras (skis, bikes, child seats) unless they were part of the booking.</P>
            <P>Available payment methods:</P>
            <Ul items={[
              "Card payment online in advance (Visa, Mastercard, Apple Pay, Google Pay)",
              "Cash payment to driver on boarding",
              "Bank transfer (corporate clients only, invoice basis)",
            ]} />
            <P>Online payments are processed via the <strong>Stripe</strong> payment gateway. The operator does not store card numbers.</P>
          </Section>

          <Section title="5. Flight Tracking and Delays">
            <P>For transfers connected to a flight, the operator automatically tracks the current flight status. In case of arrival or departure delay, the pickup time will be automatically adjusted.</P>
            <P>For delays caused by the airline, weather conditions or force majeure, the operator <strong>charges no additional fee</strong>.</P>
            <P>The customer must provide the correct flight number if flight delay is to be taken into account for pickup time.</P>
          </Section>

          <Section title="6. Cancellation Policy">
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
                <thead>
                  <tr style={{ background: "#00205B" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left" as const, color: "#fff", fontWeight: 700, fontSize: "13px" }}>Time before ride</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" as const, color: "#fff", fontWeight: 700, fontSize: "13px" }}>Cancellation fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["more than 24 hours", "Free – full refund"],
                    ["12–24 hours", "50% of ride price"],
                    ["less than 12 hours", "100% of ride price (no refund)"],
                    ["No-show (driver waits and customer does not appear)", "100% of ride price"],
                  ].map(([cas, poplatek], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
                      <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151", borderBottom: "1px solid #e5e7eb" }}>{cas}</td>
                      <td style={{ padding: "12px 16px", fontSize: "14px", color: i === 0 ? "#10b981" : "#ef4444", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{poplatek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>Cancellation must be submitted by email to <a href="mailto:info@pragueairportaxi.com" style={{ color: "#00205B" }}>info@pragueairportaxi.com</a> or by phone. The time of receipt of the cancellation request is decisive.</P>
          </Section>

          <Section title="7. Customer Obligations">
            <Ul items={[
              "Be ready at the agreed pickup location at the specified time",
              "Have a working phone number available on the day of transport",
              "Inform the operator of any special requirements (child seat, wheelchair, oversized luggage) in advance",
              "Not exceed vehicle capacity (number of passengers and luggage)",
              "Behave respectfully towards the driver and vehicle — smoking, alcohol and food consumption in the vehicle is prohibited (water excluded)",
            ]} />
          </Section>

          <Section title="8. Operator Liability">
            <P>The operator is liable for damages caused to the customer in direct connection with the transport service provided, in particular for:</P>
            <Ul items={[
              "Failure to provide vehicle at agreed time (without objective reasons)",
              "Damage to luggage in the vehicle demonstrably caused by the driver",
            ]} />
            <P>The operator <strong>is not liable</strong> for:</P>
            <Ul items={[
              "Delays caused by traffic accidents, road closures or force majeure",
              "Damages caused by incorrectly entered data by the customer",
              "Missed flight or connection where the customer failed to be ready on time",
              "Valuables left in the vehicle",
            ]} />
          </Section>

          <Section title="9. Complaints">
            <P>The customer has the right to file a complaint within <strong>30 days</strong> of the ride. Complaints can be submitted:</P>
            <Ul items={[
              "By email: info@pragueairportaxi.com",
              "By phone: +420 606 079 179",
            ]} />
            <P>The operator undertakes to resolve the complaint within <strong>14 business days</strong> of receipt.</P>
            <P>A customer who is a consumer has the right to out-of-court resolution of consumer disputes through the Czech Trade Inspection Authority (www.coi.cz).</P>
          </Section>

          <Section title="10. Personal Data Protection">
            <P>The operator processes customer personal data in accordance with GDPR and Act No. 110/2019 Coll. Detailed information is available in the <a href="/privacy-policy" style={{ color: "#00205B" }}>Privacy Policy</a>.</P>
          </Section>

          <Section title="11. Final Provisions">
            <P>These terms and conditions are valid and effective from {updated}. The Operator reserves the right to unilaterally amend these terms. Customers will be notified of changes by email or by publishing a new version on the website.</P>
            <P>These terms and conditions and all legal relationships arising from them are governed by Czech law, in particular Act No. 89/2012 Coll. (Civil Code).</P>
            <P>In case of a dispute, the courts of Czech Republic have jurisdiction.</P>
          </Section>

          {/* Contact box */}
          <div style={{ background: "#00205B", borderRadius: "12px", padding: "24px 28px", marginTop: "40px", display: "flex", flexWrap: "wrap" as const, gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>Have questions about the terms?</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>Write to us or call — we are happy to explain everything.</div>
            </div>
            <a href="mailto:info@pragueairportaxi.com" style={{ background: "#F97316", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" as const }}>
              info@pragueairportaxi.com
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
