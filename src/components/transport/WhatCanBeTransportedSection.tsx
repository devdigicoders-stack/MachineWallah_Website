"use client";

import React from "react";
import Image from "next/image";
import {
  Pickaxe,
  Tractor,
  Layers,
  Building,
  Hammer,
  PackageCheck,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CargoType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedVehicles: string[];
  image: string;
  icon: React.ElementType;
}

const CARGO_TYPES: CargoType[] = [
  {
    id: "excavators-backhoes",
    title: "Excavators & Backhoe Loaders",
    subtitle: "Heavy Earthmoving Machinery",
    description:
      "Tracked excavators (10T-35T) aur JCB backhoes ko project site par safely shift karne ke liye heavy low-bed aur ramp trailers ki zaroorat hoti hai.",
    recommendedVehicles: ["Low-Bed Trailer", "Specialized Machinery Carrier"],
    image: "/images/hero-excavator.jpg",
    icon: Pickaxe,
  },
  {
    id: "cranes-equipment",
    title: "Cranes & Heavy Equipment",
    subtitle: "Compactors, Graders & Hydras",
    description:
      "Road rollers, pavers, motor graders aur crane components ko highways aur inter-city transit ke liye specialized logistics setup chahiye hota hai.",
    recommendedVehicles: ["Semi Low-Bed", "Multi-Axle Flatbed"],
    image: "/images/about-construction.jpg",
    icon: Tractor,
  },
  {
    id: "sand-aggregates",
    title: "Sand, Stone & Aggregates",
    subtitle: "Bulk Quarry Materials",
    description:
      "River sand (reti), 10mm/20mm gitti (aggregates) aur quarry dust ko crusher plant se direct construction site par bulk movement kiya jata hai.",
    recommendedVehicles: ["Tipper / Dump Truck", "Multi-Axle Dumper"],
    image: "/images/service-materials.jpg",
    icon: Layers,
  },
  {
    id: "cement-materials",
    title: "Cement & Building Materials",
    subtitle: "Bagged Cement, Bricks & AAC Blocks",
    description:
      "Cement bags, AAC blocks, fly ash bricks aur weather-sensitive building products ko monsoon aur transit wear se bacha kar deliver karna.",
    recommendedVehicles: ["Commercial Cargo Truck", "Container Truck"],
    image: "/images/service-buysell.jpg",
    icon: Building,
  },
  {
    id: "steel-structural",
    title: "Steel & Structural Materials",
    subtitle: "TMT Rebars, Girders & Pipes",
    description:
      "Long 12-meter TMT steel bars, heavy structural I-beams, MS pipes aur PEB frames ke transportation ke liye extended length open flatbeds.",
    recommendedVehicles: ["Long Flatbed Truck", "High-Capacity Trailer"],
    image: "/images/about-hero.jpg",
    icon: Hammer,
  },
  {
    id: "industrial-project-cargo",
    title: "Industrial Equipment & Project Cargo",
    subtitle: "Fabrications, Boilers & Transformers",
    description:
      "Heavy sub-station transformers, factory fabrication assemblies aur industrial plant machinery ke over-dimensional consignment (ODC) loads.",
    recommendedVehicles: ["Heavy-Duty Hydraulic Trailer", "Modular Trailer"],
    image: "/images/service-transport.jpg",
    icon: PackageCheck,
  },
];

export function WhatCanBeTransportedSection() {
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
            <span>Versatile Freight Needs</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            From Machinery to Materials — Explore Transport Needs
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Typical construction cargo jinke movement ke liye specific vehicle configurations deploy hoti hain.
          </p>
        </div>

        {/* 6 Use-Case Panels Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CARGO_TYPES.map((cargo) => {
            const Icon = cargo.icon;
            return (
              <div
                key={cargo.id}
                className="flex flex-col bg-white text-[#141B29] rounded-3xl border border-white shadow-xl overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={cargo.image}
                    alt={cargo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-[#141B29]/30 to-transparent" />

                  {/* Badge & Icon on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {cargo.subtitle}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#0879D1] flex items-center justify-center text-white shadow">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#141B29] mb-2">
                      {cargo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {cargo.description}
                    </p>
                  </div>

                  {/* Recommended Vehicles */}
                  <div className="pt-3 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Typical Transport Vehicles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cargo.recommendedVehicles.map((v) => (
                        <span
                          key={v}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0879D1] border border-blue-200/70"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0879D1]" />
                          <span>{v}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Scope Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200 max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            <strong>Logistics Disclaimer:</strong> Over-dimensional consignments (ODC), state border RTO permits, route clearance surveys, transit cargo insurance aur crane loading/unloading arrangements actual provider discussions aur contract terms ke through mutually arrange kiye jaate hain.
          </p>
        </div>
      </Container>
    </section>
  );
}
