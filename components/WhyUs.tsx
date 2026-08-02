import { Shield, Clock, MapPin, CreditCard, Plane, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Shield,
    title: "Fixed price, žádná překvapení",
    desc: "Cenu vidíte předem při rezervaci. Nikdy nezaplatíte více — ani za zácpy, ani za delší cestu.",
  },
  {
    icon: Plane,
    title: "Sledujeme váš let",
    desc: "System monitors arrival in real time. If the flight is delayed, the driver waits. No extra charge.",
  },
  {
    icon: Clock,
    title: "Dostupnost 24/7",
    desc: "Rezervujte kdykoliv. Ranní lety, noční přílety — jsme tu vždy, 365 dní v roce.",
  },
  {
    icon: MapPin,
    title: "Driver čeká na místě",
    desc: "Driver picks you up přímo u výjezdu z celnice s cedulí s vaším jménem.",
  },
  {
    icon: CreditCard,
    title: "Platba kartou nebo hotovostí",
    desc: "Pay online in advance or cash to the driver. Business invoice available.",
  },
  {
    icon: Users,
    title: "Professional drivers",
    desc: "Verified experienced drivers. Speak Czech, English and German. Help with luggage.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading label="Výhody" title="Proč si vybrat nás?" highlight="" subtitle="Nejsme taxi. Jsme předem rezervovaná doprava s garantovanou cenou a professionalm přístupem." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 cursor-default"
            >
              <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[#00205B]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
