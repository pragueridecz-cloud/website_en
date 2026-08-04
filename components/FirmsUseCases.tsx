'use client'
import { useState, useRef } from "react"

const cards = [
  { img: "/firmy-letiste-zamestnanci.jpg", title: "Employee airport transfers", desc: "On-time pickup with invoice for HR" },
  { img: "/firmy-konference.jpg",          title: "Roadshows and conferences",           desc: "Transport logistics in Prague and beyond" },
  { img: "/service-firmy.png",             title: "Picking up business partners",  desc: "Professional client welcome at the airport" },
  { img: "/firmy-teambuilding.jpg",        title: "Corporate events and team building",    desc: "Transport for the whole team to corporate events or off-site meetings" },
  { img: "/service-vozidla.jpg",           title: "VIP guests and delegations",            desc: "Premium service for international guests" },
]

const gridStyles = [
  { gridColumn: "1", gridRow: "1" },
  { gridColumn: "3", gridRow: "1" },
  { gridColumn: "1", gridRow: "2" },
  { gridColumn: "2", gridRow: "1 / 3" },
  { gridColumn: "3", gridRow: "2" },
]

const order = [0, 1, 2, 4, 3]

export default function FirmsUseCases() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  function onTouchStart(e: React.TouchEvent) { touchStartX.current = e.touches[0].clientX }
  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) setActive(i => Math.min(i + 1, cards.length - 1))
    if (diff < -40) setActive(i => Math.max(i - 1, 0))
  }

  return (
    <>
      {/* Desktop grid */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "260px 260px", gap: "12px", display: "grid" }}>
        {order.map((idx, pos) => (
          <PhotoCard key={idx} {...cards[idx]} gridStyle={gridStyles[pos]} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ touchAction: "pan-y" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", position: "relative", height: "260px" }}>
            <img src={cards[active].img} alt={cards[active].title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.88) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{cards[active].title}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{cards[active].desc}</div>
            </div>
          </div>
        </div>
        {/* Dots + arrows */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
          <button onClick={() => setActive(i => Math.max(i - 1, 0))}
            style={{ background: "none", border: "1.5px solid #e2e8f0", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", color: active === 0 ? "#d0dbe8" : "#00205B", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <div style={{ display: "flex", gap: "8px" }}>
            {cards.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", background: active === i ? "#F97316" : "#d0dbe8", cursor: "pointer", padding: 0, transition: "background .2s" }} />
            ))}
          </div>
          <button onClick={() => setActive(i => Math.min(i + 1, cards.length - 1))}
            style={{ background: "none", border: "1.5px solid #e2e8f0", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", color: active === cards.length - 1 ? "#d0dbe8" : "#00205B", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>
      </div>
    </>
  )
}

function PhotoCard({ img, title, desc, gridStyle }: { img: string; title: string; desc: string; gridStyle: React.CSSProperties }) {
  return (
    <div
      style={{ ...gridStyle, borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer" }}
      onMouseEnter={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1.06)" }}
      onMouseLeave={e => { const el = e.currentTarget.querySelector("img") as HTMLImageElement; if (el) el.style.transform = "scale(1)" }}
    >
      <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,32,91,.88) 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(14px,1.4vw,20px)", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{title}</div>
        <div style={{ fontSize: "clamp(11px,1vw,13px)", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{desc}</div>
      </div>
    </div>
  )
}
