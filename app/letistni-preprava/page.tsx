import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import AirportMapDetail from "@/components/AirportMapDetail"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"

export const metadata: Metadata = {
  title: "Transport na airport Prague | pragueairportaxi.com",
  description: "Transfer na/z Václav Havel Airport Prague from €29. Také Vienna, Bratislava, Budapešť, Munich, Frankfurt. Fixed price, driver čeká u výstupu, sledování letu 24/7.",
  keywords: "doprava na airport Prague, transfer Václav Havel Airport, taxi airport Vienna, transfer airport Bratislava, transport airport Munich, airport transfer Prague",
  openGraph: {
    title: "Transport na airport Prague a okolní airport | pragueairportaxi.com",
    description: "Transfer na airport PRG, VIE, BTS, BUD, MUC, FRA. Fixed price, sledování letu.",
    url: "https://www.pragueairportaxi.com/letistni-preprava",
    images: [{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/PRG_Airport_Terminal_2.jpg/1280px-PRG_Airport_Terminal_2.jpg", width: 1280, height: 720 }],
  },
  alternates: { canonical: "https://www.pragueairportaxi.com/letistni-preprava" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Letištní transfer Prague",
  "provider": { "@type": "LocalBusiness", "name": "Transfer Prague Car s.r.o.", "telephone": "+420606079179", "url": "https://www.pragueairportaxi.com" },
  "areaServed": [
    { "@type": "Airport", "name": "Airport Václava Havla Prague", "iataCode": "PRG" },
    { "@type": "Airport", "name": "Viennaské mezinárodní airport", "iataCode": "VIE" },
    { "@type": "Airport", "name": "Letisko M. R. Štefánika Bratislava", "iataCode": "BTS" },
  ],
  "offers": { "@type": "Offer", "priceCurrency": "CZK", "price": "790" },
}

const AIRPORTS_CZ = [
  {
    code: "PRG",
    name: "Airport Václava Havla Prague",
    city: "Prague",
    desc: "Největší a nejrušnější airport v ČR s více než 17 miliony passengerch ročně. Dvě terminály – T1 pro Schengen, T2 pro mimoevropské lety. Vzdáleno cca 17 km od centra Prahy.",
    price: "from €29",
    time: "20–35 min",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    facts: ["Terminál 1 – Schengen (většina evropských letů)", "Terminál 2 – mimo Schengen, zámořské lety", "17 km od Václavského náměstí", "Sledujeme delay vašeho letu"],
  },
  {
    code: "BRQ",
    name: "Airport Brno-Tuřany",
    city: "Brno",
    desc: "Druhé největší airport v ČR. Pravidelné linky do Londýna, Amsterdamu, Frankfurtu a dalších evropských destinací. Ideální alternativa pro passenger z jižní Moravy.",
    price: "from €112",
    time: "2.5 hrs z Prahy",
    img: "/airport-brno.jpg",
    facts: ["210 km od Prahy", "Pravidelné linky Ryanair, Wizz Air"],
  },
  {
    code: "OSR",
    name: "Airport Ostrava-Mošnov",
    city: "Ostrava",
    desc: "Airport v srdci Slezska. Sezónní i pravidelné charterové lety do celé Evropy a Turecka. Dobré spojení s Polskem a Slovenskem.",
    price: "from €189",
    time: "3.5 hrs z Prahy",
    img: "/airport-ostrava.jpg",
    facts: ["360 km od Prahy", "Charterové lety do Turecka, Řecka, Egypta"],
  },
]


const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.pragueairportaxi.com"},
        {"@type": "ListItem", "position": 2, "name": "Airport Transfer", "item": "https://www.pragueairportaxi.com/letistni-preprava"}
      ]
    }

export default function LetistniPreprava() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />
      <main>

        {/* HERO */}
        <div style={{ background: "#00205B", padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "32px", height: "2px", background: "#F97316" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                    Airport Transfer
                  </span>
                </div>
                <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.15, color: "#fff", fontSize: "clamp(32px,5vw,56px)", margin: "0 0 16px" }}>
                  Transfer na airport<br />
                  <span style={{ color: "#F97316" }}>Prague a střední Evropa</span>
                </h1>
                <div style={{ width: "48px", height: "3px", background: "#F97316", borderRadius: "2px", marginBottom: "20px" }} />
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px" }}>
                  Taxi na/z Václav Havel Airport Prague from €29 — pevná price, žádné příplatky za čekání ani delay letu. Zajišťujeme také transfer na airport Vienna, Bratislava, Budapešť, Munich, Frankfurt a Drážďany. Řidič čeká s cedulkou v příletové hale, sleduje váš let v reálném čase a odveze vás z airport Ruzyně přímo domů nebo do hotelu.
                </p>
              </div>
              <div className="hidden md:block" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
                <img src="/driver-sign.jpg" alt="Řidič s cedulkou čeká na zákazníka u výstupu z airport"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>

        {/* LETIŠTĚ V ČR */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeading label="Airport v České republice" title="Česká airport" subtitle="Přepravujeme na všechna airport v České republice. Nejčastěji samozřejmě na Airport Václava Havla Prague, ale také do Brna a Ostravy." />

            {/* PRG – full width */}
            {(() => {
              const prg = AIRPORTS_CZ[0];
              return (
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 flex-shrink-0">
                      <img src={prg.img} alt={prg.name} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div>
                          <span className="text-xs font-mono font-bold px-2 py-1 rounded mr-2" style={{ background: "#00205B", color: "#fff" }}>{prg.code}</span>
                          <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{prg.name}</h3>
                          <div className="text-gray-400 text-sm">{prg.city}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{prg.price}</div>
                          <div className="text-xs text-gray-400">⏱ {prg.time}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{prg.desc}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {prg.facts.map((fact) => (
                          <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                          </li>
                        ))}
                      </ul>
                      <a href="/#booking" style={{ background: "#00205B", color: "#fff", padding: "11px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
                        Book now na {prg.code} →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* BRQ + OSR – side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AIRPORTS_CZ.slice(1).map((airport) => (
                <div key={airport.code} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  <img src={airport.img} alt={airport.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-mono font-bold px-2 py-1 rounded mr-2" style={{ background: "#00205B", color: "#fff" }}>{airport.code}</span>
                        <h3 className="text-xl font-bold mt-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{airport.name}</h3>
                        <div className="text-gray-400 text-sm">{airport.city}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black" style={{ fontFamily: "Poppins, sans-serif", color: "#F97316" }}>{airport.price}</div>
                        <div className="text-xs text-gray-400">⏱ {airport.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{airport.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {airport.facts.map((fact) => (
                        <li key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                          <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {fact}
                        </li>
                      ))}
                    </ul>
                    <a href="/#booking" style={{ background: "#00205B", color: "#fff", padding: "10px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
                      Book now na {airport.code} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERAKTIVNÍ MAPA LETIŠŤ */}
        <AirportMapDetail />

        {/* PROČ MY */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeading label="Proč si vybrat nás" title="Co dostanete s každou jízdou" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/flight-tracking.jpg",
                  imgPos: "65% 0%",
                  imgZoom: 1.3,
                  title: "Flight tracking v reálném čase",
                  desc: "Automaticky monitorujeme delay vašeho letu. Řidič přijede přesně na čas – ani dříve, ani později. Nečekáte, neplatíte extra.",
                },
                {
                  img: "/driver-sign.jpg",
                  title: "Řidič s cedulkou u výstupu",
                  desc: "Po příletu vás váš driver čeká přímo v příletové hale s cedulkou s vaším jménem. Žádné hledání, žádný stres po dlouhém letu.",
                },
                {
                  img: "/fixed-price-payment.jpg",
                  title: "Fixed price bez příplatků",
                  desc: "Cena je dohodnutá in advance a nemění se. Žádné příplatky za mýto, delay, noční jízdu ani velká luggage.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.imgPos || "center", transform: item.imgZoom ? `scale(${item.imgZoom})` : undefined, transformOrigin: "center" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif", color: "#00205B" }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading label="Časté dotazy" title="Máte otázky?" />
            <div className="space-y-3">
              {[
                { q: "Přepravíte mě i na airport ve Vídni nebo Munichě?", a: "Ano, přepravujeme na všechna airport v dosahu přibližně 700 km od Prahy. Vienna, Bratislava, Budapešť, Munich, Frankfurt, Drážďany a další. Cenu dostanete ihned po zadání do rezervačního formuláře." },
                { q: "Jak funguje sledování delay letu?", a: "Při rezervaci zadáte číslo letu. Náš systém automaticky sleduje reálný čas příletu a informuje drivere. Pokud má váš let delay, driver dorazí pozdě – a vy neplatíte žádný příplatek za čekání." },
                { q: "Kde mě driver vyzvedne po příletu?", a: "Řidič vás čeká přímo v příletové hale s cedulkou s vaším jménem, ihned za výstupem z celnice. Nemusíte nikam volat ani hledat." },
                { q: "Mohu platit kartou?", a: "Ano, platba kartou online při rezervaci nebo hotově driveri. Na vyžádání vystavíme fakturu na firmu s DIČ." },
                { q: "Co když potřebuji převézt hodně luggage nebo lyže?", a: "Při rezervaci upřesněte počet luggage a speciální požadavky. Pro velká luggage, lyže nebo kočárky rezervujeme minivan s dostatkem místa." },
                { q: "Je možné book zpáteční cestu?", a: "Samozřejmě. V rezervačním formuláři jednoduše přidejte zpáteční cestu. Zpáteční jízdu je možné objednat i samostatně." },
              ].map((item, i) => (
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
        <section style={{ background: "linear-gradient(135deg, #00205B 0%, #0d1f4a 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=60)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
          <div className="max-w-3xl mx-auto px-4 text-center" style={{ position: "relative" }}>
            <h2 className="text-white font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px,4vw,44px)" }}>
              To letíte?
            </h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,.75)" }}>
              Zadejte odkud a na které airport – price se zobrazí okamžitě.
            </p>
            <a href="/#booking" style={{ background: "#F97316", color: "#fff", padding: "18px 48px", borderRadius: "14px", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px", textDecoration: "none", display: "inline-block", boxShadow: "0 8px 32px rgba(249,115,22,.4)" }}>
              Book now transfer →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
