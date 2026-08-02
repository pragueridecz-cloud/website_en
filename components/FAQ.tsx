"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "How far in advance do I need to book?",
    a: "Rezervaci lze provést až 2 hodiny před odjezdem. Doporučujeme ale book alespoň 24 hodin in advance pro jistotu dostupnosti vehicle.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "We track your flight v reálném čase. Pokud má let delay, driver automaticky upraví čas příjezdu. Neplatíte žádné příplatky za čekání.",
  },
  {
    q: "Where will the driver pick me up at the airport?",
    a: "Driver čeká přímo u výjezdu z celnice v příletové hale s cedulí s vaším jménem. Přesné místo dostanete e-mailem po rezervaci.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Rezervaci lze zrušit free až 24 hodin před jízdou. Změny trasy nebo času jsou možné po domluvě s dispečinkem.",
  },
  {
    q: "Do you accept card payment?",
    a: "Ano, card payment online přijímáme přes Stripe — a za online platbu navíc dostanete 10% slevu. Alternativně lze platit hotovostí přímo driveri.",
  },
  {
    q: "Do you transport groups and large luggage?",
    a: "Ano. Pro velké groups nebo hodně luggage (lyže, kola, golfové vybavení) doporučujeme minivan. Vše zadejte při rezervaci a my zajistíme vhodné vehicle.",
  },
  {
    q: "Do you travel outside Prague?",
    a: "Ano — zajišťujeme transfery to/from Prague Airport pro celou ČR i do sousedních zemí (Vienna, Drážďany, Varšava a další).",
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
