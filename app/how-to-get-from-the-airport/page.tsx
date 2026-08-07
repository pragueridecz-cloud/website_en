import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"

export const metadata: Metadata = {
  title: "How to Get from Prague Airport to the City Center? Compare Bus, Taxi & Transfer | pragueairportaxi.com",
  description: "Public transport, Airport Express, taxi on the spot, or a pre-booked transfer? Compare real prices and travel times from Václav Havel Airport to central Prague (2026).",
  keywords: "how to get from Prague airport to city center, Prague airport to city center cost, Prague airport bus, Airport Express Prague price, cheap Prague airport taxi",
  openGraph: {
    title: "How to Get from Prague Airport to the City Center? Compare All Options",
    description: "Public transport, Airport Express, taxi on the spot, or a pre-booked transfer? Real prices and travel times from Václav Havel Airport.",
    url: "https://www.pragueairportaxi.com/how-to-get-from-the-airport",
  },
  alternates: {
    canonical: "https://www.pragueairportaxi.com/how-to-get-from-the-airport",
  },
}

const OPTIONS = [
  {
    name: "Public transport (bus + metro)",
    price: "€2 (50 CZK)",
    time: "45–60 min",
    booking: "No",
    luggage: "Difficult",
    desc: "Bus 100 (towards Zličín, metro line B), 59 (towards Nádraží Veleslavín, metro line A) or 191 (towards Anděl, metro line B) takes you to the nearest metro station, from where you continue into the centre. A 90-minute ticket covers the whole journey and costs 50 CZK, available from the machine at the stop.",
    pros: ["Cheapest option", "Frequent departures, including at night"],
    cons: ["One transfer to the metro", "Awkward with luggage or kids", "Need cash or a card for the ticket machine"],
  },
  {
    name: "Airport Express (AE)",
    price: "€4 (100 CZK)",
    time: "~35 min",
    booking: "No",
    luggage: "OK",
    desc: "A direct bus line from the airport to the Main Railway Station, no transfer, roughly every 30 minutes. Reduced fare for children, students and seniors.",
    pros: ["No transfer", "Faster than regular public transport"],
    cons: ["Only goes to the Main Station", "Extra journey needed for other parts of Prague"],
  },
  {
    name: "Taxi on the spot",
    price: "€30–45",
    time: "20–35 min",
    booking: "No",
    luggage: "OK",
    desc: "Taxi from the official rank right outside the terminal, no booking needed. Price depends on traffic and the specific operator.",
    pros: ["Available immediately", "No advance booking needed"],
    cons: ["Price only roughly known in advance", "Risk of overpaying with unmarked cars away from the rank", "Driver isn't tracking your flight"],
  },
  {
    name: "Pre-booked transfer",
    price: "from €29",
    time: "20–35 min",
    booking: "Yes",
    luggage: "Best",
    desc: "A car booked in advance, timed exactly to your flight's arrival. The driver tracks your flight in real time and waits even if it's delayed, at no extra charge. You know the price before you land — no surprises on arrival.",
    pros: ["Fixed price known in advance", "Driver waits with a sign in the arrivals hall", "No surcharge for flight delays", "Minivan available for more luggage or passengers"],
    cons: ["More expensive than public transport"],
  },
]

const FAQ_ITEMS = [
  { q: "Is it safe to take a taxi at Prague airport?", a: "Yes, at the official rank right outside the terminal. Avoid people who approach you in the arrivals hall offering a ride — they tend to charge significantly more with no fixed price upfront." },
  { q: "Is the Airport Express cheaper than a taxi?", a: "Yes. The Airport Express costs 100 CZK (~€4), a taxi on the spot usually 700–1,000 CZK (~€30-45). The Airport Express only goes to the Main Station though, so you may need a further transfer." },
  { q: "Is it worth booking a transfer in advance even though it costs more than public transport?", a: "If you're travelling with children, more luggage, or arriving late at night, yes — you get a fixed price upfront and the driver waits even if your flight is delayed, at no extra charge." },
  { q: "How long does it take to get from the airport to central Prague?", a: "By car, taxi or transfer: 20–35 minutes depending on traffic. By public transport with a metro transfer: 45–60 minutes." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragueairportaxi.com" },
    { "@type": "ListItem", "position": 2, "name": "How to get from the airport", "item": "https://www.pragueairportaxi.com/how-to-get-from-the-airport" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Get from Prague Airport to the City Center? Compare All Options",
  "description": "Public transport, Airport Express, taxi on the spot, or a pre-booked transfer? Compare real prices and travel times from Václav Havel Airport to central Prague.",
  "author": { "@type": "Organization", "name": "Transfer Prague Car s.r.o." },
  "publisher": { "@type": "Organization", "name": "Transfer Prague Car s.r.o." },
  "mainEntityOfPage": "https://www.pragueairportaxi.com/how-to-get-from-the-airport",
}

export default function HowToGetFromTheAirport() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Guide
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(28px,4.5vw,46px)", margin: "0 0 16px" }}>
              How to get from Prague Airport<br />
              <span style={{ color: "#F97316" }}>to the city center?</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7 }}>
              After landing you have four ways to get into central Prague: public transport, Airport Express, a taxi on the spot, or a pre-booked transfer. Each option has a different price, travel time and comfort level — this guide has the real 2026 prices so you can choose based on what matters most to you.
            </p>
          </div>
        </div>

        {/* COMPARE OPTIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading label="Your options" title="Four ways to get from the airport" />
            <div className="space-y-6">
              {OPTIONS.map((opt) => (
                <div key={opt.name} className="rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <h3 className="text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{opt.name}</h3>
                    <div className="text-right">
                      <div className="text-xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{opt.price}</div>
                      <div className="text-xs text-gray-400">⏱ {opt.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{opt.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {opt.pros.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {p}
                      </div>
                    ))}
                    {opt.cons.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm text-gray-500">
                        <span style={{ color: "#ef4444", fontWeight: 700 }}>✕</span> {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading label="At a glance" title="Side-by-side comparison" />
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full text-left border-collapse" style={{ minWidth: "560px" }}>
                <thead>
                  <tr style={{ background: "#00205B" }}>
                    {["Option", "Price", "Travel time", "Booking needed", "With luggage"].map((h) => (
                      <th key={h} className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-white">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {OPTIONS.map((opt, i) => (
                    <tr key={opt.name} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                      <td className="px-5 py-4 text-sm font-semibold text-gray-800 border-t border-gray-100">{opt.name}</td>
                      <td className="px-5 py-4 text-sm font-mono font-bold border-t border-gray-100" style={{ color: "#F97316" }}>{opt.price}</td>
                      <td className="px-5 py-4 text-sm text-gray-600 border-t border-gray-100">{opt.time}</td>
                      <td className="px-5 py-4 text-sm text-gray-600 border-t border-gray-100">{opt.booking}</td>
                      <td className="px-5 py-4 text-sm text-gray-600 border-t border-gray-100">{opt.luggage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHEN TO CHOOSE WHAT */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading label="Recommendation" title="When to choose what" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Travelling alone, no luggage, on a budget", rec: "Public transport — €2, one metro transfer." },
                { title: "Continuing your journey by train from the Main Station", rec: "Airport Express — direct, no transfer, €4." },
                { title: "Landed without a booking and need a ride now", rec: "Taxi at the official rank — expect a higher, less certain price." },
                { title: "Travelling with family, kids, more luggage, or want price certainty", rec: "A pre-booked transfer — the driver waits even if your flight is delayed, at no extra charge." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-5" style={{ background: "#f8fafc" }}>
                  <div className="text-sm font-semibold text-gray-800 mb-2">{item.title}</div>
                  <div className="text-sm" style={{ color: "#00205B" }}>{item.rec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading label="FAQ" title="Common questions" />
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                    <span>{item.q}</span>
                    <span className="text-gray-400 text-2xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0d1f4a 100%)", padding: "80px 0" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px,4vw,44px)" }}>
              Want price and timing certainty?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.75)" }}>
              Book a transfer in advance — your driver will be waiting with a sign right in the arrivals hall.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/airport-transfer" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.3)", padding: "17px 34px", borderRadius: "14px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-block" }}>
                More about airport transfers
              </a>
              <a href="/#booking" style={{ background: "#F97316", color: "#fff", padding: "18px 40px", borderRadius: "14px", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px", textDecoration: "none", display: "inline-block", boxShadow: "0 8px 32px rgba(249,115,22,.4)" }}>
                Book your transfer →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
