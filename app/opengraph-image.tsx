import { ImageResponse } from "next/og"

export const alt = "Prague Airport Taxi — Transport to/from Prague Airport"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#00205B",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div style={{ width: 56, height: 6, background: "#F97316", borderRadius: 3, display: "flex" }} />
          <div style={{ fontSize: 26, fontWeight: 700, color: "#F97316", letterSpacing: 3, textTransform: "uppercase", display: "flex" }}>
            Online Booking
          </div>
        </div>
        <div style={{ fontSize: 74, fontWeight: 800, color: "#fff", lineHeight: 1.15, display: "flex", flexDirection: "column" }}>
          <span>Affordable transport</span>
          <span style={{ color: "#F97316" }}>to/from Prague Airport</span>
        </div>
        <div style={{ fontSize: 30, fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: 36, display: "flex" }}>
          Fixed price · Professional driver · Flight tracking
        </div>
      </div>
    ),
    { ...size }
  )
}
