"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "How far in advance do I need to book?",
    a: "You can book up to 2 hours before departure. We recommend booking at least 24 hours in advance to ensure vehicle availability.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "We track your flight in real time. If the flight is delayed, the driver automatically adjusts arrival time. No waiting surcharges.",
  },
  {
    q: "Where will the driver pick me up at the airport?",
    a: "The driver waits at the arrivals exit with a sign showing your name. You will receive the exact meeting point by email after booking.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "You can cancel free of charge up to 24 hours before the ride. Route or time changes are possible by contacting our dispatch.",
  },
  {
    q: "Do you accept card payment?",
    a: "Yes, we accept card payment online via Stripe. You can also pay cash directly to the driver.",
  },
  {
    q: "Do you transport groups and large luggage?",
    a: "Yes. For large groups or lots of luggage (skis, bikes, golf equipment) we recommend a minivan. Add details at booking and we will arrange the right vehicle.",
  },
  {
    q: "Do you travel outside Prague?",
    a: "Yes — we provide transfers to/from Prague Airport across the Czech Republic and to neighbouring countries (Vienna, Dresden, Warsaw and more).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading label="FAQ" title="Frequently asked questions" subtitle="Didn't find an answer? Call us at +420 606 079 179" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#E2E8F0] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#475569] transition-transform duration-200 flex-shrink-0 ml-3 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-[#475569] text-sm leading-relaxed border-t border-[#E2E8F0] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
