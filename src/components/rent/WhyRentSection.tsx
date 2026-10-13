"use client";

import React from "react";
import {
  Layers,
  FileSpreadsheet,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ElementType;
  accentBg: string;
  accentColor: string;
  badge: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Multiple Equipment Categories",
    description:
      "JCB, excavators, compaction rollers, cranes se lekar wheel loaders tak multiple heavy machinery categories ek hi digital platform par explore karein.",
    icon: Layers,
    accentBg: "bg-[#FFBE0B]/12",
    accentColor: "text-[#8F6600]",
    badge: "Wide Selection",
  },
  {
    title: "Convenient Requirement Sharing",
    description:
      "Apne project ki specific location, machine type aur expected duration clear format me share karein bina lamba time waste kiye.",
    icon: FileSpreadsheet,
    accentBg: "bg-[#0879D1]/12",
    accentColor: "text-[#0879D1]",
    badge: "Fast & Structured",
  },
  {
    title: "Construction-Focused Platform",
    description:
      "General classifieds ke bajaye sirf construction aur civil engineering domain ke real ground use-cases ko dhyan me rakhkar design kiya gaya system.",
    icon: Building2,
    accentBg: "bg-[#36A43B]/12",
    accentColor: "text-[#2E8B33]",
    badge: "Industry Dedicated",
  },
  {
    title: "Connect for Rental Enquiries",
    description:
      "Requirement submit karne ke baad direct discussion ke zariye rental terms, rates aur machine logistics aapas me coordinate karein.",
    icon: RealPhoneCallingIcon,
    accentBg: "bg-[#F4511E]/12",
    accentColor: "text-[#D83B0A]",
    badge: "Direct Contact",
  },
];

export function WhyRentSection() {
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
            <span>Platform Benefits</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Make Your Machinery Search Simpler.
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Traditional equipment sourcing ke confusion ko door karke ek streamlined enquiry experience.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="relative p-6 sm:p-7 rounded-3xl bg-white text-[#141B29] border border-white shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl ${b.accentBg} ${b.accentColor} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-[#141B29] mb-2.5 leading-snug">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>

                {/* Bottom feature tag */}
                <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A43B]" />
                  <span>{b.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#FFBE0B] shrink-0" />
            <span>
              <strong>Note:</strong> Rental rates, machine availability, operator inclusion aur logistics terms actual provider discussions aur contract agreements par depend karte hain.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
