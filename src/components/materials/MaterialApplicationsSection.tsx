"use client";

import React from "react";
import Image from "next/image";
import {
  Layers,
  CheckCircle2,
  Building,
  Hammer,
  ShieldAlert,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ApplicationStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyMaterials: string[];
  image: string;
  stageFocus: string;
}

const STAGES: ApplicationStage[] = [
  {
    step: "01",
    title: "Foundation & Concrete Work",
    subtitle: "PCC, RCC Footings & Substructures",
    description:
      "Deep footings, raft foundations aur columns ke initial cast ke liye high-grade cement, graded gitti aur transit concrete ki primary requirement hoti hai.",
    keyMaterials: ["Cement (OPC 53)", "20mm & 40mm Aggregates", "Ready-Mix Concrete (M25/M30)", "Coarse Sand"],
    image: "/images/service-materials.jpg",
    stageFocus: "Structural Sub-base",
  },
  {
    step: "02",
    title: "Brickwork & Masonry",
    subtitle: "Perimeter Walls & Partitions",
    description:
      "Superstructure wall building ke liye standard red clay bricks, high-strength fly ash bricks ya light-weight AAC blocks aur mortar sand ka use hota hai.",
    keyMaterials: ["Red Clay Bricks", "AAC Blocks (4\" / 6\" / 9\")", "Fly Ash Bricks", "Mortar Grade Sand"],
    image: "/images/about-construction.jpg",
    stageFocus: "Wall Enclosure",
  },
  {
    step: "03",
    title: "Structural Reinforcement",
    subtitle: "Beams, Slabs & Pillar Skeletons",
    description:
      "Tension loads handle karne ke liye certified thermo-mechanically treated (TMT) steel rebars, binding wire bundles aur stirrups ka framework create kiya jata hai.",
    keyMaterials: ["TMT Rebar (Fe 500D / 550D)", "8mm to 32mm Bars", "Binding Wire (20-gauge)", "Stirrups / Rings"],
    image: "/images/hero-excavator.jpg",
    stageFocus: "Tensile Strength",
  },
  {
    step: "04",
    title: "Road & Infrastructure Work",
    subtitle: "Sub-grade, WBM & External Paving",
    description:
      "Heavy axle vehicle movement aur site access roads ke liye dense graded aggregate (GSB/WBM base), stone dust aur heavy compacting materials require hote hain.",
    keyMaterials: ["Granular Sub-Base (GSB)", "Wet Mix Macadam (WMM)", "Stone Dust & Gravel", "Heavy Paving Kerbs"],
    image: "/images/about-hero.jpg",
    stageFocus: "Pavement & Drainage",
  },
  {
    step: "05",
    title: "Flooring & Paving",
    subtitle: "Driveways, Walkways & Parking Lots",
    description:
      "Durable exterior surfacing ke liye interlocking hydraulic paver blocks, chequered tiles, edge curbs aur bedding sand ka structured layout assemble hota hai.",
    keyMaterials: ["Interlocking Paver Blocks (60/80mm)", "Chequered Tiles", "Bedding River Sand", "Curb Stones"],
    image: "/images/service-rent.jpg",
    stageFocus: "Traffic-Bearing Surfaces",
  },
  {
    step: "06",
    title: "Plastering & Finishing",
    subtitle: "Internal & External Smooth Surfacing",
    description:
      "Walls ko weather-tight aur uniform finish dene ke liye double-washed fine plaster sand, PPC cement aur water-repellent finishing chemicals ka combination lagta hai.",
    keyMaterials: ["Fine Plaster Sand / M-Sand", "PPC Cement", "Waterproofing Admixtures", "Wall Care Putty"],
    image: "/images/service-buysell.jpg",
    stageFocus: "Weather Finish & Polish",
  },
];

export function MaterialApplicationsSection() {
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
            <span>Project Life Cycle</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Materials for Every Stage of Construction
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Foundation se lekar final finishing tak har stage ke specific material requirements ko efficiently plan aur enquire karein.
          </p>
        </div>

        {/* Editorial Distinctive Layout: 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative flex flex-col justify-between bg-white text-[#141B29] rounded-3xl border border-white shadow-xl p-6 sm:p-7"
            >
              <div>
                {/* Header with Step Number & Stage Focus */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl sm:text-3xl font-black text-[#F4511E] tracking-tight">
                      {stage.step}
                    </span>
                    <span className="h-4 w-[1.5px] bg-slate-300" />
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                      Phase
                    </span>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 shadow-sm">
                    {stage.stageFocus}
                  </span>
                </div>

                {/* Photographic Header Window */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/80">
                  <Image
                    src={stage.image}
                    alt={`${stage.title} construction stage`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white/95">
                    {stage.subtitle}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-black text-[#141B29] mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {stage.description}
                </p>
              </div>

              {/* Key Materials Badge Checklist */}
              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-2.5">
                  Key Material Inputs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stage.keyMaterials.map((mat) => (
                    <span
                      key={mat}
                      className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#F4511E] shrink-0" />
                      <span>{mat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
