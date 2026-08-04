import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import { Clock, Luggage, ArrowLeftRight, MapPin, Banknote, Moon, Train, Bus } from "lucide-react"

export const metadata: Metadata = {
  title: "Train & Bus Station Transfer Prague | pragueairportaxi.com",
  description: "Taxi to Prague train and bus stations — Main Station, Florenc Bus Terminal, Smíchovské nádraží, Holešovice, Masarykovo. Fixed price, help with luggage, available 24/7. Book online.",
  keywords: "taxi to Prague train station, transfer Prague Main Station, station transfer Prague, transport Florenc Bus Terminal, taxi Smíchovské nádraží, taxi bus terminal",
  openGraph: {
    title: "Train & Bus Station Transfer Prague | pragueairportaxi.com",
    description: "Transfer to Main Station, Florenc Bus Terminal, Smíchovské nádraží. Fixed prices, 24/7.",
    url: "https://www.pragueairportaxi.com/train-bus-station",
  },
  alternates: {
    canonical: "https://www.pragueairportaxi.com/train-bus-station",
    languages: {
      "en": "https://www.pragueairportaxi.com/train-bus-station",
      "cs": "https://www.naletistelevne.cz/vlakove-autobusove-nadrazi",
      "x-default": "https://www.pragueairportaxi.com/train-bus-station",
    },
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Train & Bus Station Transfer Prague",
  "description": "Transfer to Prague Main Station, Florenc Bus Terminal, Smíchovské nádraží and more.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragueairportaxi.com" },
    { "@type": "ListItem", "position": 2, "name": "Train & Bus Station", "item": "https://www.pragueairportaxi.com/train-bus-station" },
  ],
}

const FAQ_ITEMS = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 2 hours in advance, but we also accept last-minute bookings subject to availability." },
  { q: "What if the train is delayed?", a: "If we are picking you up from the station, we monitor your train arrival in real time and adjust the pickup time accordingly." },
  { q: "Do you transport bicycles or large luggage?", a: "Yes, for bicycles and large luggage we recommend a minivan. Please specify when booking." },
  { q: "Do you travel outside Prague?", a: "Of course — we travel across Czech Republic and abroad. The price is calculated automatically." },
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

const STATIONS = [
  { name: "Prague Main Station",      type: "train",   desc: "Central railway station of Prague" },
  { name: "Prague Smíchovské nádraží",  type: "train",   desc: "Modern transport hub in southwest Prague" },
  { name: "Prague Masarykovo nádraží",  type: "train",   desc: "Historic city centre of Prague" },
  { name: "Prague Holešovice",          type: "train",   desc: "International trains and transfer hub" },
  { name: "Florenc Bus Terminal",                   type: "bus", desc: "Main bus terminal of Prague" },
  { name: "Černý Most Bus Terminal",            type: "bus", desc: "Bus terminal in east Prague" },
  { name: "Na Knížecí",                type: "bus", desc: "Southwest bus terminal" },
  { name: "Zličín",                    type: "bus", desc: "Westfield Zličín – bus terminal" },
]

const VYHODY = [
  { Icon: Clock,          title: "We arrive on time",          desc: "We plan the journey with enough buffer so you always catch your train or bus.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80" },
  { Icon: Luggage,        title: "Luggage assistance",       desc: "Your driver will help load and unload luggage, prams or bicycles.", img: "/service-luggage.jpg" },
  { Icon: ArrowLeftRight, title: "Return journey",           desc: "You can also book a pickup from the station on your return. All in one booking.", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80" },
  { Icon: MapPin,         title: "Precise pickup",        desc: "Pickup directly from your door or at an agreed location.", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80" },
  { Icon: Banknote,       title: "Fixed price",               desc: "You know exactly what you will pay. No meter, no surcharges.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { Icon: Moon,           title: "Early trains, no stress",   desc: "We operate in the early hours too. No stress with public transport at 4am.", img: "/service-ranni-vlak.jpg" },
]

export default function NadraziPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Train & Bus Station
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Station Transfer<br />
              <span style={{ color: "#F97316" }}>train & bus</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Fixed price taxi to Prague train and bus stations with no waiting. We get you to Prague Main Station, Florenc Bus Terminal, Smíchov Station, Holešovice Station or Masaryk Station exactly on time. Luggage assistance, pickup from your door — and the same service on the return journey.
            </p>
          </div>
        </div>

        {/* Train & Bus Station */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Stations we serve" title="We cover every station" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STATIONS.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: s.type === "train" ? "#EFF6FF" : "#FFF7ED" }}>
                    {s.type === "train"
                      ? <Train size={18} color="#00205B" strokeWidth={1.75} />
                      : <Bus size={18} color="#F97316" strokeWidth={1.75} />}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.desc}</div>
                  </div>
                  <div className="ml-auto text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: s.type === "train" ? "#EFF6FF" : "#FFF7ED", color: s.type === "train" ? "#00205B" : "#F97316" }}>
                    {s.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Why choose us" title="Why travel with us to the station" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VYHODY.map(({ Icon, title, desc, img }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div style={{ position: "relative", height: "160px" }}>
                    <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,32,91,0.35)" }} />
                    <div style={{ position: "absolute", bottom: "12px", left: "12px", width: "36px", height: "36px", borderRadius: "10px", background: "#F97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={18} color="#fff" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading label="FAQ" title="Frequently asked questions" />
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    {item.q}<span className="text-gray-400 text-xl ml-4">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "#00205B" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Book your station transfer</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Never miss a connection — we take care of getting you there on time</p>
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
