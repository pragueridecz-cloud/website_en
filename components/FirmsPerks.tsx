'use client'
import { useState, useRef } from "react"
import { FileText, Repeat, PhoneCall, BarChart2 } from "lucide-react"

const perks = [
  {
    icon: FileText,
    title: "Company invoice & VAT receipt",
    short: "Company invoice & VAT receipt",
    desc: "We issue a tax invoice with VAT for every ride, easily claimed as a business expense. No paper receipts — everything sent electronically to your company email.",
  },
  {
    icon: Repeat,
    title: "Corporate discounts and fixed rates",
    short: "Regular rides with fixed price and discount",
    desc: "With a corporate contract for regular transport, you get fixed rates and volume discounts. Agreed price upfront — no meter, no weekend or night surcharges, no surprises on the invoice.",
  },
  {
    icon: BarChart2,
    title: "Ride and expense overview online",
    short: "All rides and expenses online",
    desc: "All rides, expenses and documents in one place. Corporate clients have access to employee transport overview — who travelled, when, where and for how much. Ideal for controlling, expense approval and internal reports.",
  },
  {
    icon: PhoneCall,
    title: "Dedicated line for corporate clients",
    short: "Dedicated phone line for corporate clients",
    desc: "Corporate clients have direct dispatch contact with no waiting. Available 24/7 — whether you need to take an employee to a 5am flight or pick up a VIP guest from an evening train, we always know who is calling and what you need.",
  },
]

export default function FirmsPerks() {
  const [active, setActive] = useState(0)
  const p = perks[active]
  const touchStartX = useRef(0)

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) setActive(i => Math.min(i + 1, perks.length - 1))
    if (diff < -40) setActive(i => Math.max(i - 1, 0))
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Desktop – seznam vlevo */}
      <div className="hidden md:flex flex-col gap-3">
        {perks.map((item, i) => {
          const Icon = item.icon
          const sel = active === i
          return (
            <button key={i} onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", borderRadius: "12px", textAlign: "left",
                border: sel ? "2px solid #00205B" : "1.5px solid #e2e8f0",
                background: sel ? "#00205B" : "#f8fafc",
                cursor: "pointer", transition: "all .2s", fontFamily: "inherit",
                boxShadow: sel ? "0 4px 16px rgba(0,32,91,.15)" : "none",
              }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: sel ? "rgba(249,115,22,.2)" : "#fff7ed",
                transition: "background .2s",
              }}>
                <Icon size={17} style={{ color: "#F97316" }} />
              </div>
              <span style={{
                fontSize: "13px", fontWeight: 700,
                color: sel ? "#fff" : "#1e293b",
                transition: "color .2s",
              }}>{item.short}</span>
              {sel && <div style={{ marginLeft: "auto", color: "#F97316", fontSize: "18px", flexShrink: 0 }}>›</div>}
            </button>
          )
        })}
      </div>

      {/* Detail panel – desktop vpravo, mobile karusel */}
      <div>
        {/* Mobile karusel */}
        <div className="md:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: "pan-y" }}>
          <div style={{
            background: "#f8fafc", border: "1.5px solid #e2e8f0",
            borderRadius: "16px", padding: "24px", minHeight: "220px",
            transition: "all .2s",
          }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "10px",
              background: "#fff7ed", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "16px",
            }}>
              <p.icon size={20} style={{ color: "#F97316" }} />
            </div>
            <h3 style={{
              fontFamily: "Poppins, sans-serif", fontWeight: 700,
              fontSize: "16px", color: "#00205B", marginBottom: "10px",
            }}>
              {p.title}
            </h3>
            <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.7 }}>
              {p.desc}
            </p>
          </div>
          {/* Mobile dots + arrows */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
            <button onClick={() => setActive(i => Math.max(i - 1, 0))}
              style={{ background: "none", border: "1.5px solid #e2e8f0", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", color: active === 0 ? "#d0dbe8" : "#00205B", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <div style={{ display: "flex", gap: "8px" }}>
              {perks.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{
                    width: "8px", height: "8px", borderRadius: "50%", border: "none",
                    background: active === i ? "#F97316" : "#d0dbe8",
                    cursor: "pointer", padding: 0, transition: "background .2s",
                  }} />
              ))}
            </div>
            <button onClick={() => setActive(i => Math.min(i + 1, perks.length - 1))}
              style={{ background: "none", border: "1.5px solid #e2e8f0", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", color: active === perks.length - 1 ? "#d0dbe8" : "#00205B", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
        </div>

        {/* Desktop detail */}
        <div className="hidden md:block" style={{
          background: "#f8fafc", border: "1.5px solid #e2e8f0",
          borderRadius: "16px", padding: "32px", minHeight: "200px",
          transition: "all .2s",
        }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "10px",
            background: "#fff7ed", display: "flex", alignItems: "center",
            justifyContent: "center", marginBottom: "16px",
          }}>
            <p.icon size={20} style={{ color: "#F97316" }} />
          </div>
          <h3 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "18px", color: "#00205B", marginBottom: "12px",
          }}>
            {p.title}
          </h3>
          <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.8 }}>
            {p.desc}
          </p>
          <div style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
            {perks.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  width: "8px", height: "8px", borderRadius: "50%", border: "none",
                  background: active === i ? "#F97316" : "#d0dbe8",
                  cursor: "pointer", padding: 0, transition: "background .2s",
                }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
