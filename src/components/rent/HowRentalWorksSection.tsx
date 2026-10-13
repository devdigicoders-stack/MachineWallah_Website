"use client";

import React from "react";
import {
  Search,
  FileEdit,
  ArrowRight,
  Info,
  CheckCircle2,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
}

const STEPS: Step[] = [
  {
    stepNumber: "01",
    title: "Choose Machine Category",
    subtitle: "Browse relevant equipment types",
    description:
      "JCB, tracked excavator, hydra crane, roller ya grader — apne site requirements ke anuroop right machine category select karein.",
    icon: Search,
    badge: "Step 1: Selection",
    badgeColor: "bg-[#FFBE0B]/15 text-[#8F6600] border-[#FFBE0B]/30",
  },
  {
    stepNumber: "02",
    title: "Share Your Requirement",
    subtitle: "Provide location & expected duration",
    description:
      "Site location, expected rental duration (hours, days ya months) aur work nature rental enquiry form ke zariye humse share karein.",
    icon: FileEdit,
    badge: "Step 2: Requirement Details",
    badgeColor: "bg-[#0879D1]/15 text-[#0879D1] border-[#0879D1]/30",
  },
  {
    stepNumber: "03",
    title: "Connect & Discuss",
    subtitle: "Discuss rates, dates & logistics",
    description:
      "Enquiry submit hone ke baad communication shuru hoti hai jahan rental rates, machine mobilization date aur operator availability final ki ja sakti hai.",
    icon: RealPhoneCallingIcon,
    badge: "Step 3: Direct Follow-Up",
    badgeColor: "bg-[#36A43B]/15 text-[#2E8B33] border-[#36A43B]/30",
  },
];

export function HowRentalWorksSection() {
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
            <span>Simple Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Rent Machines in Three Simple Steps
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Complex sourcing procedures ke bina seedha aur aasaan rental enquiry flow.
          </p>
        </div>

        {/* 3 Steps Connected Layout */}
        <div className="relative">
          {/* Connecting Line across steps on Desktop */}
          <div className="hidden lg:block absolute top-28 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-white/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col bg-white text-[#141B29] rounded-3xl border border-white p-6 sm:p-8 shadow-xl relative"
                >
                  {/* Step Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#141B29]">
                      <Icon className="w-7 h-7 text-[#0879D1]" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 tracking-tighter">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${step.badgeColor}`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-current" />
                      <span>{step.badge}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#141B29] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Notice: No Automatic Booking Confirmation */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
            <strong>Important Notice:</strong> Website par enquiry submit karne se instant booking confirm nahi hoti hai. Yeh ek communication connection facilitate karti hai jahan rates, machine transport distance, fuel (diesel) terms aur security conditions dono paksho ke beech directly tay hoti hain.
          </p>
        </div>
      </Container>
    </section>
  );
}
