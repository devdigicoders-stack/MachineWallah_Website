import React from "react";
import {
  Building,
  HardHat,
  Handshake,
  Truck,
  Layers,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface AudienceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const AUDIENCE_CATEGORIES: AudienceItem[] = [
  {
    title: "Contractors & Builders",
    description:
      "Civil contractors, road builders aur developers jinko timely site machinery, transport aur materials ki continuous zaroorat hoti hai.",
    icon: <Building className="w-6 h-6 text-[#0879D1]" />,
    iconBg: "bg-blue-50 border-blue-200",
  },
  {
    title: "Machinery Owners",
    description:
      "JCB, Excavator, Crane aur Roller ke owners jo apne equipment ke liye reliable rental opportunities aur inquiries explore karna chahte hain.",
    icon: <HardHat className="w-6 h-6 text-[#8F6600]" />,
    iconBg: "bg-amber-50 border-amber-200",
  },
  {
    title: "Equipment Buyers & Sellers",
    description:
      "Used ya new construction machinery mein trade karne wale contractors, dealers aur individuals jo machinery deals coordinate karte hain.",
    icon: <Handshake className="w-6 h-6 text-[#2E8B33]" />,
    iconBg: "bg-emerald-50 border-emerald-200",
  },
  {
    title: "Transport Providers",
    description:
      "Low-bed trailer owners, flatbed transporters aur logistics fleet operators jo heavy machinery aur material move karte hain.",
    icon: <Truck className="w-6 h-6 text-[#0879D1]" />,
    iconBg: "bg-sky-50 border-sky-200",
  },
  {
    title: "Material Suppliers",
    description:
      "RMC batching plants, sand (reti) mining suppliers, stone aggregate crushers, cement distributors aur TMT steel stockists.",
    icon: <Layers className="w-6 h-6 text-[#D83B0A]" />,
    iconBg: "bg-orange-50 border-orange-200",
  },
  {
    title: "Individual Customers",
    description:
      "Plot owners, private property developers aur farmers jinko residential foundation, plot leveling ya short-term excavation ki zaroorat hoti hai.",
    icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-50 border-indigo-200",
  },
];

export function WhoWeServeSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Target Stakeholders</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Connecting People Across the Construction Industry.
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Chahe aap equipment owner hon, raw material supplier ya site engineer — Machine Wallah sabhi stakeholders ke liye communication aasaan banata hai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AUDIENCE_CATEGORIES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white text-[#141B29] border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${item.iconBg} group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#141B29] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B1771B]" />
                <span>Industry Stakeholder Segment</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
