"use client";

import React from "react";
import {
  HardHat,
  Building2,
  Tractor,
  Handshake,
  Truck,
  Package,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface UserAudience {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const AUDIENCE_LIST: UserAudience[] = [
  {
    id: "contractors",
    title: "Construction Contractors",
    role: "On-Site Procurement",
    description:
      "Site projects ke liye temporary machinery hire karna, materials bulk me source karna aur equipment transport organize karna.",
    icon: HardHat,
    badge: "Contractors",
  },
  {
    id: "builders",
    title: "Builders & Project Managers",
    role: "Project Planning",
    description:
      "Ongoing commercial aur residential sites par reliable machinery rental tenure aur concrete/materials supply schedule coordinate karna.",
    icon: Building2,
    badge: "Builders",
  },
  {
    id: "machine-owners",
    title: "Machine Owners",
    role: "Fleet Utilization",
    description:
      "Apni idle JCB, excavators, hydra cranes aur rollers ko rent par dekar seasonal downtime reduce karna aur inquiries receive karna.",
    icon: Tractor,
    badge: "Machine Owners",
  },
  {
    id: "machinery-dealers",
    title: "Machinery Dealers",
    role: "Equipment Trading",
    description:
      "New aur pre-owned construction machinery ke inventory details share karna aur potential buyers se direct enquiries explore karna.",
    icon: Handshake,
    badge: "Dealers",
  },
  {
    id: "transport-owners",
    title: "Transport Owners",
    role: "Commercial Logistics",
    description:
      "Low-bed trailers, flatbeds aur tippers ke routes list karke machinery aur bulk materials ke freight orders receive karna.",
    icon: Truck,
    badge: "Transporters",
  },
  {
    id: "material-suppliers",
    title: "Construction Material Suppliers",
    role: "Plant Supplies",
    description:
      "RMC plants, cement depots, sand mines aur aggregate crusher owners jo site contractors tak direct bulk quotation share karna chahte hain.",
    icon: Package,
    badge: "Suppliers",
  },
];

export function WhoCanUseAppSection() {
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Target Audience</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Built for Different Construction Needs.
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Machine Wallah mobile platform alag-alag construction stakeholders ko unki specific requirement ke hisaab se support karne ke liye design kiya gaya hai.
          </p>
        </div>

        {/* 6 User Categories Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {AUDIENCE_LIST.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="bg-white text-[#141B29] rounded-3xl p-6 sm:p-7 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#141B29] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {aud.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {aud.role}
                  </span>

                  <h3 className="text-base sm:text-lg font-black text-[#141B29] mb-2 leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {aud.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  Tailored workflow interface
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
