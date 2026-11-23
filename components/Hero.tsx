"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const WHY_US = [
  { num: "01", text: "Fixed price — no surprises" },
  { num: "02", text: "Real-time flight tracking" },
  { num: "03", text: "Available 24 hours a day" },
  { num: "04", text: "Verified professional drivers" },
];

const NAVBAR_H = 98; // px

function PriceTag() {
  return (
    <div style={{ marginTop: "16px", display: "inline-block" }}>
      <div style={{
        display: "inline-block",
        background: "#F97316",
        borderRadius: "12px",
        padding: "10px 30px 14px 16px",
        filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.35))",
        WebkitMaskImage: "radial-gradient(circle 9px at 100% 50%, transparent 9px, #000 9.5px)",
        maskImage: "radial-gradient(circle 9px at 100% 50%, transparent 9px, #000 9.5px)",
      }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 500, lineHeight: 1, color: "rgba(255,255,255,.8)" }}>from</div>
        <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.15, color: "#fff", fontSize: "clamp(26px, 3.2vw, 44px)", whiteSpace: "nowrap" }}>
          €29 / £25 / $32
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [widgetStep, setWidgetStep] = useState(1);
  const [widgetH, setWidgetH] = useState(680);
  const [rawWidgetH, setRawWidgetH] = useState(680);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    WHY_US.forEach((_, i) => {
      setTimeout(() => setVisibleItems(prev => [...prev, i]), 600 + i * 350);
    });
  }, []);

  // Position widget in document (absolute) — scrolls with page, stays in hero section.
  // All props via direct DOM so React re-renders (from nll-height) never overwrite them.
  useEffect(() => {
    if (!mounted) return;
    const el = overlayRef.current;
    const ghost = ghostRef.current;
    if (!el || !ghost) return;

    function place(animate = false) {
      if (!el || !ghost) return;
      if (widgetStepRef.current <= 1) {
        // Step 1: instant tracking — no transition
        const r = ghost.getBoundingClientRect();
        el.style.cssText = `
          position: absolute;
          top: ${r.top + window.scrollY}px;
          left: ${r.left + window.scrollX}px;
          width: ${r.width}px;
          height: ${r.height}px;
          z-index: 40;
          border-radius: 12px;
          box-shadow: none;
          overflow: hidden;
          display: block;
          background: transparent;
        `;
      } else {
        // Step 2+: centered overlay. Use px left (not 50%) so CSS can animate from step 1.
        const w = Math.min(1200, window.innerWidth - 80);
        const targetLeft = Math.round((window.innerWidth - w) / 2);
        const targetTop = NAVBAR_H + 16;
        if (animate) {
          // Animate from current step-1 position to step-2 position
          el.style.transition = "top 0.5s cubic-bezier(0.4,0,0.2,1), left 0.5s cubic-bezier(0.4,0,0.2,1), width 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease";
          requestAnimationFrame(() => {
            el!.style.top = targetTop + "px";
            el!.style.left = targetLeft + "px";
            el!.style.width = w + "px";
            el!.style.borderRadius = "16px";
            el!.style.boxShadow = "none";
            el!.style.background = "#f0f2f7";
            el!.style.overflow = "visible";
            setTimeout(() => { if (el) el.style.transition = ""; }, 600);
          });
        } else {
          el.style.cssText = `
            position: absolute;
            top: ${targetTop}px;
            left: ${targetLeft}px;
            width: ${w}px;
            z-index: 40;
            border-radius: 16px;
            box-shadow: none;
            overflow: visible;
            display: block;
            background: #f0f2f7;
          `;
        }
      }
    }

    // Animate only when entering step 2+ for the first time
    place(widgetStep > 1);
    window.addEventListener("resize", () => place(false), { passive: true });
    return () => window.removeEventListener("resize", () => place(false));
  }, [mounted, widgetStep]);

  const widgetStepRef = useRef(1);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      // Step change
      if (e.data?.type === "nll-step") {
        const s = e.data.step as number;
        widgetStepRef.current = s;
        setWidgetStep(s);
        if (e.data.height) { setWidgetH(e.data.height + 32); setRawWidgetH(e.data.height); }
        if (s > 1) window.scrollTo({ top: 0, behavior: "instant" });
      }
      // Height update — always sync iframe and ghost div to widget content height
      if (e.data?.type === "nll-height" && e.data?.height) {
        const h = e.data.height + 32;
        setWidgetH(h);
        setRawWidgetH(e.data.height);
        if (widgetStepRef.current <= 1) {
          // Keep ghost div and overlay in sync so dropdowns aren't clipped
          if (ghostRef.current) ghostRef.current.style.height = h + "px";
          if (overlayRef.current) overlayRef.current.style.height = h + "px";
        }
      }
      // Scroll forwarded from inside the iframe (wheel events don't propagate natively)
      if (e.data?.type === "nll-wheel") {
        const delta = e.data.delta as number;
        const el = overlayRef.current;
        if (!el) { window.scrollBy({ top: delta }); return; }
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
        const atTop = el.scrollTop <= 0;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) {
          el.scrollTop += delta;
        } else {
          window.scrollBy({ top: delta });
        }
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const expanded = widgetStep > 1;

  const widgetEl = (
    <div ref={overlayRef}>
      <iframe
        id="nll-widget-frame"
        src="https://taxisaas-widget.vercel.app/widget.html?proxy=https%3A%2F%2Fadmin.naletistelevne.cz%2Fapi%2Fflight-status&lang=en"
        frameBorder="0"
        title="Booking form"
        scrolling="no"
        style={{
          width: "100%",
          height: `${widgetH}px`,
          display: "block",
          border: "none",
          background: expanded ? "#f0f2f7" : "transparent",
          borderRadius: expanded ? "16px" : "12px",
        }}
      />
    </div>
  );

  return (
    <>
      {/* Portal only on desktop — mobile uses inline iframe */}
      {mounted && isDesktop && createPortal(widgetEl, document.body)}

      <section id="booking" className="pb-0 md:pb-0" style={{ position: "relative", overflowX: "hidden", background: "#0d1f4a", minHeight: "820px" }}>

        {/* Background photo — shifted up so airport sign is just below navbar */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: "-60px",
          height: "calc(100% + 60px)", zIndex: 0,
          backgroundImage: "url('/hero-airport2.webp')",
          backgroundSize: "110% auto", backgroundPosition: "center top", backgroundRepeat: "no-repeat",
        }} />
        {/* Gradient — smooth fade into dark blue at bottom */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(13,31,74,0.00) 0%, rgba(13,31,74,0.00) 10%, rgba(13,31,74,0.04) 18%, rgba(13,31,74,0.10) 26%, rgba(13,31,74,0.20) 34%, rgba(13,31,74,0.33) 42%, rgba(13,31,74,0.50) 50%, rgba(13,31,74,0.68) 58%, rgba(13,31,74,0.84) 64%, #0d1f4a 68%)",
        }} />

        {/* Desktop — ghost div holds section height, widget is absolute via portal */}
        <div className="hidden md:block" style={{ position: "relative", zIndex: 2, paddingTop: "500px", paddingBottom: "40px" }}>
          {/* Ghost div — tracks widget position for portal, dictates section height */}
          <div
            ref={ghostRef}
            className="flex-shrink-0"
            style={{
              width: "min(1300px, calc(100% - 40px))",
              margin: "0 auto",
              height: `${widgetH}px`,
              transition: "height 0.2s ease"
            }}
          />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col pb-5 px-4" style={{ paddingTop: "24px", position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 800, lineHeight: 1.1, fontSize: "clamp(28px,8vw,40px)", margin: "0 0 16px" }}>
            Affordable transport<br />
            <span style={{ color: "#F97316" }}>to/from Prague Airport</span>
          </h1>
          <iframe
            src="https://taxisaas-widget.vercel.app/widget.html?proxy=https%3A%2F%2Fadmin.naletistelevne.cz%2Fapi%2Fflight-status&lang=en"
            frameBorder="0"
            title="Booking form"
            style={{
              width: "100%",
              height: `${rawWidgetH}px`,
              display: "block",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              background: "#f0f2f7",
            }}
          />
        </div>
      </section>
    </>
  );
}
