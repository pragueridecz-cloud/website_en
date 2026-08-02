import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import { Lock, Car, Clock, Globe, CreditCard, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Long Distance Taxi & Intercity Transport Prague | pragueairportaxi.com",
  description: "Long Distance Taxi from Prague za pevnou price — Prague–Vienna 9 €29, Prague–Berlin , Prague–Brno . Intercity Transport across Czech Republic & Europe, 24/7.",
  keywords: "meziměstská doprava, mezinárodní transfer, Prague Vienna taxi, Prague Berlin taxi, Prague Brno taxi, transport do zahraničí, taxi Prague Munich",
  openGraph: {
    title: "Meziměstská a mezinárodní doprava | pragueairportaxi.com",
    description: "Prague–Vienna 9 €29, Prague–Berlin . Komfortní transport po celé Evropě.",
    url: "https://www.pragueairportaxi.com/mezimestska-doprava",
  },
  alternates: { canonical: "https://www.pragueairportaxi.com/mezimestska-doprava" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mezinárodní a meziměstská doprava",
  "description": "Transport mezi městy v ČR a do zahraničí – Vienna, Berlin, Munich, Varšava a další.",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179" },
  "areaServed": [
    { "@type": "Country", "name": "Czech Republic" },
    { "@type": "Country", "name": "Německo" },
    { "@type": "Country", "name": "Rakousko" },
    { "@type": "Country", "name": "Polsko" },
    { "@type": "Country", "name": "Slovensko" },
  ],
}

const ROUTES = [
  { from: "Prague", to: "Brno", price: "from €255 / £215 / $280", km: "227 km", time: "2.5h" },
  { from: "Prague", to: "Vienna", price: "from €390 / £325 / $425", km: "356 km", time: "3.5h" },
  { from: "Prague", to: "Munich", price: "from €415 / £345 / $450", km: "378 km", time: "4h" },
  { from: "Prague", to: "Berlin", price: "from €385 / £320 / $420", km: "352 km", time: "4h" },
  { from: "Prague", to: "Dresden", price: "from €185 / £155 / $200", km: "153 km", time: "1.5h" },
  { from: "Prague", to: "Warsaw", price: "from €705 / £590 / $770", km: "660 km", time: "7h" },
  { from: "Prague", to: "Bratislava", price: "from €380 / £320 / $415", km: "349 km", time: "3.5h" },
  { from: "Prague", to: "Wrocław", price: "from €310 / £260 / $340", km: "280 km", time: "3h" },
  { from: "Prague", to: "Plzeň", price: "from €125 / £105 / $135", km: "91 km", time: "1h" },
  { from: "Prague", to: "České Budějovice", price: "from €195 / £165 / $215", km: "168 km", time: "2h" },
  { from: "Prague", to: "Olomouc", price: "from €335 / £280 / $365", km: "303 km", time: "3h" },
  { from: "Prague", to: "Salzburg", price: "from €430 / £360 / $470", km: "396 km", time: "4.5h" },
]

const VYHODY = [
  { Icon: Lock,      title: "Fixed price upfront",    desc: "Price agreed upfront and never changes. No surcharges for tolls, parking or waiting.", img: "/service-fixni-price.jpg" },
  { Icon: Car,       title: "Moderní vehicle",      desc: "Komfortní sedany a minivany s klimatizací, Wi-Fi a dostatkem místa pro luggage.", img: "/service-vehicle.jpg" },
  { Icon: Clock,     title: "Flexibilní časy",      desc: "Přepravujeme 24hin denně, 7 dní v týdnu. Rezervujte kdykoli, i na poslední chvíli.", img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80" },
  { Icon: Globe,     title: "Celá střední Evropa",  desc: "Jezdíme do Německa, Rakouska, Polska, Slovenska, Maďarska a dalších zemí.", img: "/service-evropa.jpg" },
  { Icon: CreditCard,title: "Payment kartou",        desc: "Payment kartou online nebo hotově driver. Na vyžádání invoice na firmu.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { Icon: UserCheck, title: "Professional drivers", desc: "Zkušení, jazykově vybavení driver se znalostí tras a místních podmínek.", img: "/service-ridici.jpg" },
]

const FAQ_ITEMS = [
  { q: "Jezdíte i mimo ČR?", a: "Yes, přepravujeme po celé střední Evropě – Německo, Rakousko, Slovensko, Polsko, Maďarsko a další. Cenu trasy získáte ihned po zadání do rezervačního formuláře." },
  { q: "Is the price fixed for international routes too?", a: "Yes, the price is always fixed and agreed upfront. No surcharges for tolls, delays or night rides." },
  { q: "Mohu book cestu tam a zpět?", a: "Samozřejmě, v rezervačním formuláři jednoduše přidejte zpáteční cestu se slevou." },
  { q: "Jak probíhá payment za dlouhé trasy?", a: "Payment kartou online nebo hotově driver. U tras nad 5 000 je možná záloha in advance." },
  { q: "Co když trasa není v ceníku?", a: "Zadejte ji do rezervačního formuláře – price se vypočítá automaticky podle vzdálenosti. Nebo nás kontaktujte přímo." },
]

const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragueairportaxi.com"},
        {"@type": "ListItem", "position": 2, "name": "Intercity Transport", "item": "https://www.pragueairportaxi.com/mezimestska-doprava"}
      ]
    }

export default function MezimestskaPage() {
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
                Intercity Transport
              </span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
              Intercity transfers<br />
              <span style={{ color: "#F97316" }}>across Czech Republic & Europe</span>
            </h1>
            <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
              Comfortable transport between cities without transfers. Fixed price, air-conditioned vehicle, door-to-door.
            </p>
          </div>
        </div>



        {/* Long Distance Taxi */}
        <section className="py-16" style={{ background: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "#00205B", marginBottom: "8px" }}>
              Long Distance Taxi from Prague
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px", maxWidth: "680px" }}>
              Long distance transfer from Prague to any city in Czech Republic or abroad — fixed price agreed in advance, no meter, no surprises. Long Distance Taxi Prague available 24 hours a day, 7 days a week, with sedans and minivans for groups.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { from: "Prague", to: "Vienna", price: "from €390 / £325 / $425", km: "356 km" },
                { from: "Prague", to: "Berlin", price: "from €385 / £320 / $420", km: "352 km" },
                { from: "Prague", to: "Bratislava", price: "from €380 / £320 / $415", km: "349 km" },
                { from: "Prague", to: "Budapest", price: "from €570 / £475 / $620", km: "525 km" },
                { from: "Prague", to: "Munich", price: "from €415 / £345 / $450", km: "378 km" },
                { from: "Prague", to: "Frankfurt", price: "from €590 / £490 / $640", km: "545 km" },
                { from: "Prague", to: "Dresden", price: "from €185 / £155 / $200", km: "153 km" },
                { from: "Prague", to: "Karlovy Vary", price: "from €150 / £125 / $165", km: "130 km" },
                { from: "Prague", to: "Brno", price: "from €255 / £215 / $280", km: "227 km" },
              ].map((r) => (
                <div key={r.to} className="flex items-center justify-between rounded-xl p-4"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#00205B" }}>{r.from} → {r.to}</div>
                    <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>{r.km}</div>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#F97316" }}>{r.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl text-sm text-center" style={{ background: "#f8fafc", color: "#64748b" }}>
              Your route není v seznamu? Zadejte ji do <a href="/#booking" style={{ color: "#F97316", fontWeight: 700 }}>rezervačního formuláře</a> – price se vypočítá okamžitě.
            </div>
          </div>
        </section>


        {/* Why choose us */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading label="Why choose us" title="Proč cestovat s námi" />
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
            <SectionHeading label="FAQ" title="Časté dotazy" />
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
            <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Rezervujte meziměstskou přepravu</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,.75)" }}>Fixed price, komfortní vehicle, reliable driver</p>
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
