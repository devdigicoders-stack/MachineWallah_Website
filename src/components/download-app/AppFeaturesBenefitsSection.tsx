"use client";

import React from "react";
import {
  Layers,
  Tractor,
  Handshake,
  Truck,
  Package,
  Users2,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AppBenefit {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const APP_BENEFITS: AppBenefit[] = [
  {
    title: "Explore Construction Service Categories",
    tagline: "All 4 Verticals in One App",
    description:
      "Machinery rental, buying/selling, heavy transport aur construction materials ko single mobile interface ke andar navigate karein.",
    icon: Layers,
    badge: "Unified Platform",
  },
  {
    title: "Share Machinery Requirements",
    tagline: "Specific Equipment Inputs",
    description:
      "Excavator, JCB 3DX, hydra crane aur rollers ke liye approximate rental tenure, site location aur operator requirements specify karein.",
    icon: Tractor,
    badge: "Rental Workflow",
  },
  {
    title: "Discover Buying & Selling Workflows",
    tagline: "Direct Dealer & Owner Connect",
    description:
      "Machine condition, manufacturing year, running hours aur expected demand price specify karke direct negotiation initiate karein.",
    icon: Handshake,
    badge: "Trading Workflow",
  },
  {
    title: "Create Transport Requests",
    tagline: "Route & Vehicle Mapping",
    description:
      "Pickup-drop location, trailer/truck selection aur cargo weight provide karke transporters se direct quotations receive karein.",
    icon: Truck,
    badge: "Logistics Workflow",
  },
  {
    title: "Share Construction Material Requirements",
    tagline: "Contextual Unit Sourcing",
    description:
      "Cement bags, sand CFT, RMC cubic meters aur steel tonnage ke exact plant specifications direct suppliers tak communicate karein.",
    icon: Package,
    badge: "Material Workflow",
  },
  {
    title: "Customer & Provider-Specific Experiences",
    tagline: "Role-Based Mobile Interface",
    description:
      "Customers ke liye simple requirement posting aur machine/transporter/plant owners ke liye listing dashboard aur incoming lead management.",
    icon: Users2,
    badge: "Dual App Experience",
  },
];

export function AppFeaturesBenefitsSection() {
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
            <span>App Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Designed for Construction Industry Connections.
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            App workflow boards par based authentic features jo construction contractors, fleet owners aur material suppliers ko empower karte hain.
          </p>
        </div>

        {/* 6 Benefits Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {APP_BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative bg-white text-[#141B29] rounded-3xl p-6 sm:p-8 border border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-[#141B29] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-105" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {b.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    {b.tagline}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black text-[#141B29] mb-3 leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified from App Screens</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Role-Based Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="font-bold text-[#141B29] block mb-0.5">
                Role-Specific Mobile Experience:
              </strong>
              App me customer aur owner/provider ke liye alag features available hain. Buyers aur contractors requirement post kar sakte hain, jabki machine, vehicle aur plant owners apni listings aur leads manage kar sakte hain. Commercial terms dono parties aapas me discuss karti hain.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
