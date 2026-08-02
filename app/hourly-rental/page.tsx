import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import Fleet from "@/components/Fleet"
import {
  Landmark, Briefcase, ShoppingBag, TreePine,
  Heart, Music, Plane, Activity, DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Hourly Rental auta s driverem Prague | pragueairportaxi.com",
  description: "Car with driver Prague from €29/h — chauffeur service, VIP transport, hourly or full day hire. Business meetings, weddings, day trips. Sedan and minivan.",
  keywords: "pronájem auta s driverem Prague, chauffeur service Prague, auto s šoférem Prague,hinový transfer Prague, firemní driver Prague, prohlídka Prahy s driverem",
  openGraph: {
    title: "Hourly Rental auta s driverem Prague | Od €29/hod | pragueairportaxi.com",
    description: "Auto s driverem na celý den nebo párhin. Business, turistika, nákupy.",
    url: "https://www.pragueairportaxi.com/hourly-rental",
  },
  alternates: { canonical: "https://www.pragueairportaxi.com/hourly-rental" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hourly Rental auta s driverem Prague",
  "description": "Pronájem vehicle s professionalm driverem nahiny nebo celý den.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
  "offers": { "@type": "Offer", "priceCurrency": "CZK", "price": "750" },
}

const USES = [
  { Icon: Landmark,    title: "Prague city tour",    desc: "Visit Prague Castle, Old Town and Malá Strana at your own pace with a driver at the wheel." },
  { Icon: Briefcase,   title: "Business meetings",   desc: "Move between meetings without parking stress. Work in the car." },
  { Icon: ShoppingBag, title: "Shopping",              desc: "Big shopping trips or sales without worrying about luggage and parking." },
  { Icon: TreePine,    title: "Day trips",      desc: "Bohemian Paradise, Karlštejn, Kutná Hora. No compromise with timetables." },
  { Icon: Heart,       title: "Wedding",              desc: "Exclusive transport for the newlyweds or guests on the big day." },
  { Icon: Music,       title: "Cultural events",       desc: "Opera, theatre, conferences. Arrive on time and in comfort." },
  { Icon: Plane,       title: "VIP transfer",        desc: "Airport pickup with waiting and transfers throughout the day." },
  { Icon: Activity,    title: "Medical transport",   desc: "Comfortable transport to a doctor or rehabilitation appointment." },
]

const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragueairportaxi.com"},
        {"@type": "ListItem", "position": 2, "name": "Hourly Rental", "item": "https://www.pragueairportaxi.com/hourly-rental"}
      ]
    }

export default function HodinPronajem() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      <main>

        {/* Hero */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Hourly Rental
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Auto s driverem<br />
              <span style={{ color: "#F97316" }}>nahiny nebo celý den</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Car with driver in Prague €29/hr — chauffeur service for business and private use. Perfect for business meetings, VIP transport, city tours, shopping or day trips. Sedans and minivans, available by the hour or full day. Driver exclusively for you — no shared rides, no parking stress.
            </p>
          </div>
        </div>

        {/* Ceník */}
        <Fleet mode="hourly" />

        {/* Využití */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Use cases" title="When to hire a car with driver" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {USES.map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <Icon size={20} color="#F97316" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "#00205B" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Hire a car with driver</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Flexible, comfortable, hassle-free</p>
            <a href="/#booking" className="inline-block font-bold rounded-xl px-8 py-4 text-lg"
              style={{ background: "#F97316", color: "#fff", fontFamily: "Poppins, sans-serif", textDecoration: "none" }}>
              Book now
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
