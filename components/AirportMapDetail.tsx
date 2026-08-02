"use client";
import { useState, useEffect, useRef } from "react";

const GMAPS_KEY = "AIzaSyAgl9xkJoahOyxLWTjRLrPEXxYfqTXyH7k";
const PRAGUE = { lat: 50.0755, lng: 14.4378 };
const PRAGUE_ADDR = "Václavské náměstí 1, Prague, Czech Republic";

const AIRPORTS = [
  {
    code: "VIE", name: "Vienna International Airport", city: "Vienna, Austria",
    lat: 48.1103, lng: 16.5697, price: "€173",
    country: "🇦🇹",
    addr: "Vienna International Airport, Schwechat, Austria",
    img: "/airport-vienna.jpg",
    desc: "The largest airport in the Central European region with direct flights worldwide. Great alternative for flights to Asia, America or the Middle East not available direct from Prague.",
    facts: ["Direct flights to 200+ destinations", "Hub for Emirates, Austrian Airlines", "Excellent alternative for Asian flights", "Modern terminals with duty free"],
  },
  {
    code: "BTS", name: "Airport Bratislava Štefánik", city: "Bratislava, Slovensko",
    lat: 48.1702, lng: 17.2127, price: "€162",
    country: "🇸🇰",
    addr: "M. R. Štefánik Airport, Bratislava, Slovakia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BRATISLAVSK%C3%9D_TERMIN%C3%81L_-_panoramio.jpg/960px-BRATISLAVSK%C3%9D_TERMIN%C3%81L_-_panoramio.jpg",
    desc: "A nearby Slovak airport used mainly by low-cost airlines. Ryanair flies to many destinations not available from Prague.",
    facts: ["Strong Ryanair base", "Cheaper flights to many destinations", "No queues at security", "Easy parking"],
  },
  {
    code: "BUD", name: "Budapest Liszt Ferenc Airport", city: "Budapest, Hungary",
    lat: 47.4298, lng: 19.2611, price: "€266",
    country: "🇭🇺",
    addr: "Budapest Ferenc Liszt International Airport, Budapest, Hungary",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Budapest_Liszt_Ferenc_International_Airport_-_Terminal_2B_from_above_%282018%29.jpg/960px-Budapest_Liszt_Ferenc_International_Airport_-_Terminal_2B_from_above_%282018%29.jpg",
    desc: "One of the busiest airports in Central Europe. Wizz Air has a strong Budapest base with cheap flights to hundreds of destinations worldwide.",
    facts: ["Largest Wizz Air base", "Flights to Asia and Americas", "Modern terminals", "Excellent connection options"],
  },
  {
    code: "MUC", name: "Munich Franz Josef Strauss Airport", city: "Munich, Germany",
    lat: 48.3537, lng: 11.7750, price: "€305",
    country: "🇩🇪",
    addr: "Munich Airport, Munich, Germany",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Franz_Josef_Strauss_International_Airport_%28Munich%29.jpg/960px-Franz_Josef_Strauss_International_Airport_%28Munich%29.jpg",
    desc: "The second largest German airport and one of the biggest hubs in Europe. Lufthansa operates intercontinental flights to America, Asia and Australia with excellent connections.",
    facts: ["Lufthansa and Star Alliance hub", "Two terminals + satellite", "Excellent connection options", "Modern, comfortable airport"],
  },
  {
    code: "FRA", name: "Frankfurt am Main Airport", city: "Frankfurt, Germany",
    lat: 50.0379, lng: 8.5622, price: "€343",
    country: "🇩🇪",
    addr: "Frankfurt Airport, Frankfurt am Main, Germany",
    img: "/airport-frankfurt.jpg",
    desc: "The largest German airport and one of the busiest hubs in Europe. Lufthansa and its partners fly from here to almost every corner of the world. Ideal for transatlantic connections.",
    facts: ["Largest hub in Europe", "150+ airlines, 300+ destinations", "Direct train to terminal", "Flights worldwide"],
  },
  {
    code: "DRS", name: "Dresden Airport", city: "Dresden, Germany",
    lat: 51.1328, lng: 13.7672, price: "€150",
    country: "🇩🇪",
    addr: "Dresden Airport, Dresden, Germany",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Aerial_image_of_the_Dresden_Airport.jpg/960px-Aerial_image_of_the_Dresden_Airport.jpg",
    desc: "A small and well-organised German airport closest to Prague among foreign airports. Ideal for quick flights to Germany and other European destinations without connections.",
    facts: ["Closest foreign airport to Prague", "No queues or stress", "Lufthansa, Eurowings flights", "Easy parking"],
  },
  {
    code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin, Germany",
    lat: 52.3667, lng: 13.5033, price: "€343",
    country: "🇩🇪",
    addr: "Berlin Brandenburg Airport, Berlin, Germany",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Berlin_Brandenburg_Airport_Terminal_1.jpg/960px-Berlin_Brandenburg_Airport_Terminal_1.jpg",
    desc: "Modern Berlin airport, gateway to the German capital. Direct connections across Europe and overseas with excellent transfer options. Train directly to Berlin city centre.",
    facts: ["New terminals since 2020", "Flights to 130+ destinations", "Train to Berlin city centre", "Excellent connection options"],
  },
];

type RouteInfo = { distance: string; duration: string };

declare global { interface Window { google: any; initGMapDetail: () => void; } }

export default function AirportMapDetail() {
  const [active, setActive] = useState("VIE");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const rendererRef = useRef<any>(null);
  const routeCacheRef = useRef<Record<string, RouteInfo>>({});

  const airport = AIRPORTS.find(a => a.code === active)!;

  function selectAirport(code: string) {
    if (code === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(code); setAnimating(false); }, 220);
  }

  useEffect(() => {
    if ((window as any).google?.maps) { initMap(); return; }
    (window as any).initGMapDetail = initMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&callback=initGMapDetail&language=cs`;
    script.async = true;
    document.head.appendChild(script);
    return () => { (window as any).initGMapDetail = () => {}; };
  }, []);

  function initMap() {
    if (!mapRef.current) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 49.5, lng: 13.5 },
      zoom: 5,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#00205B" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#dbeafe" }] },
        { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f0f9ff" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#bfdbfe" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#93c5fd" }] },
        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#93c5fd" }, { weight: 1.5 }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
      ],
    });
    mapInstanceRef.current = map;

    // Praha marker
    new window.google.maps.Marker({
      position: PRAGUE, map,
      icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: "#00205B", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 3 },
      title: "Praha", zIndex: 10,
    });
    new window.google.maps.InfoWindow({ content: '<div style="font-size:12px;font-weight:700;color:#00205B">Praha 🏠</div>' })
      .open(map, new window.google.maps.Marker({ position: PRAGUE, map, visible: false }));

    // Directions renderer
    rendererRef.current = new window.google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: { strokeColor: "#F97316", strokeOpacity: 0.85, strokeWeight: 4 },
    });

    // Airport markers
    AIRPORTS.forEach(ap => {
      const marker = new window.google.maps.Marker({
        position: { lat: ap.lat, lng: ap.lng }, map,
        title: ap.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8, fillColor: "#00205B", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 2,
        },
        label: { text: ap.code, color: "#fff", fontSize: "9px", fontWeight: "bold" },
        zIndex: 5,
      });
      marker.addListener("click", () => selectAirport(ap.code));
      markersRef.current.push({ code: ap.code, marker });
    });

    setMapLoaded(true);
  }

  // Load route whenever active airport or map changes
  useEffect(() => {
    if (!mapLoaded || !window.google?.maps) return;

    // Update marker styles
    markersRef.current.forEach(({ code, marker }) => {
      marker.setIcon({
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: code === active ? 11 : 8,
        fillColor: code === active ? "#F97316" : "#00205B",
        fillOpacity: 1, strokeColor: "#fff",
        strokeWeight: code === active ? 3 : 2,
      });
      marker.setZIndex(code === active ? 9 : 5);
    });

    // Use cached route if available
    if (routeCacheRef.current[active]) {
      setRouteInfo(routeCacheRef.current[active]);
      drawCachedRoute(active);
      return;
    }

    setRouteLoading(true);
    setRouteInfo(null);
    const ap = AIRPORTS.find(a => a.code === active)!;
    const svc = new window.google.maps.DirectionsService();
    svc.route(
      {
        origin: PRAGUE_ADDR,
        destination: ap.addr,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: string) => {
        setRouteLoading(false);
        if (status !== "OK") return;
        rendererRef.current?.setDirections(result);

        const leg = result.routes[0].legs[0];
        const info: RouteInfo = { distance: leg.distance.text, duration: leg.duration.text };
        routeCacheRef.current[active] = info;
        setRouteInfo(info);

        // Fit map to route bounds
        mapInstanceRef.current?.fitBounds(result.routes[0].bounds);
      }
    );
  }, [active, mapLoaded]);

  function drawCachedRoute(code: string) {
    // Re-request to get the directions object for rendering (cached data only has text)
    const ap = AIRPORTS.find(a => a.code === code)!;
    const svc = new window.google.maps.DirectionsService();
    svc.route(
      { origin: PRAGUE_ADDR, destination: ap.addr, travelMode: window.google.maps.TravelMode.DRIVING },
      (result: any, status: string) => {
        if (status === "OK") {
          rendererRef.current?.setDirections(result);
          mapInstanceRef.current?.fitBounds(result.routes[0].bounds);
        }
      }
    );
  }

  return (
    <section style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <div style={{ width: "28px", height: "2px", background: "#F97316" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#F97316", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Nearby international airports
          </span>
        </div>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.5vw,40px)", color: "#00205B", marginBottom: "8px", lineHeight: 1.1 }}>
          International airports — <span style={{ color: "#F97316" }}>7 destinations</span>
        </h2>
        <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.65, marginBottom: "36px", maxWidth: "600px" }}>
          Sometimes it pays to fly from Vienna, Munich or Dresden. We cover those too — fixed price, no stress.
        </p>

        <div className="airport-map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "start" }}>

          {/* MAP */}
          <div className="airport-map-sticky" style={{ position: "sticky", top: "100px" }}>
            <div ref={mapRef} style={{ height: "500px", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,32,91,0.08)" }} />
            {/* Airport chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "14px" }}>
              {AIRPORTS.map(ap => (
                <button key={ap.code} onClick={() => selectAirport(ap.code)}
                  style={{
                    padding: "6px 12px", borderRadius: "20px", border: "1.5px solid",
                    borderColor: active === ap.code ? "#F97316" : "#e2e8f0",
                    background: active === ap.code ? "#FFF7ED" : "#fff",
                    color: active === ap.code ? "#F97316" : "#64748b",
                    fontSize: "12px", fontWeight: 700, cursor: "pointer",
                    transition: "all 0.15s", fontFamily: "monospace",
                    boxShadow: active === ap.code ? "0 2px 8px rgba(249,115,22,0.2)" : "none",
                  }}>
                  {ap.country} {ap.code}
                </button>
              ))}
            </div>
          </div>

          {/* DETAIL PANEL */}
          <div style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}>
            {/* Photo */}
            <div style={{ position: "relative", height: "220px", borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
              <img src={airport.img} alt={airport.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,20,60,0.8) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "22px" }}>{airport.country}</span>
                  <span style={{ background: "#F97316", color: "#fff", fontFamily: "monospace", fontWeight: 800, fontSize: "13px", padding: "3px 9px", borderRadius: "6px" }}>
                    {airport.code}
                  </span>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px", color: "#fff", lineHeight: 1.2 }}>
                  {airport.name}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "2px" }}>{airport.city}</div>
              </div>
            </div>

            {/* Stats: price + real route info */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
              <div style={{ background: "#FFF7ED", border: "1.5px solid #FED7AA", borderRadius: "12px", padding: "14px", textAlign: "center" as const }}>
                <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "5px", fontWeight: 600 }}>Price from</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#F97316", fontSize: "17px", lineHeight: 1.2 }}>{airport.price}</div>
              </div>
              <div style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: "12px", padding: "14px", textAlign: "center" as const }}>
                <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "5px", fontWeight: 600 }}>Distance</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#00205B", fontSize: "17px", lineHeight: 1.2 }}>
                  {routeLoading ? <span style={{ fontSize: "12px", color: "#94a3b8" }}>…</span> : (routeInfo?.distance ?? "—")}
                </div>
              </div>
              <div style={{ background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: "12px", padding: "14px", textAlign: "center" as const }}>
                <div style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "5px", fontWeight: 600 }}>Drive time</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: "#15803d", fontSize: "17px", lineHeight: 1.2 }}>
                  {routeLoading ? <span style={{ fontSize: "12px", color: "#94a3b8" }}>…</span> : (routeInfo?.duration ?? "—")}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.75, marginBottom: "18px" }}>
              {airport.desc}
            </p>

            {/* Facts */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {airport.facts.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#334155" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#F97316", color: "#fff", fontSize: "10px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="/#booking"
              style={{ display: "block", textAlign: "center" as const, background: "#F97316", color: "#fff", textDecoration: "none", padding: "14px", borderRadius: "12px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", boxShadow: "0 4px 16px rgba(249,115,22,0.3)", transition: "opacity 0.15s" }}>
              Book transfer na {airport.code} →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .airport-map-grid { grid-template-columns: 1fr !important; }
          .airport-map-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}
