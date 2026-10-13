"use client";

import React from "react";
import {
  Truck,
  MapPin,
  Package,
  CheckCircle2,
  Info,
  ArrowRight,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TransportStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: TransportStep[] = [
  {
    stepNumber: "01",
    title: "Select Transport Type",
    subtitle: "Vehicle & Fleet Choice",
    description: "Low-bed trailer, flatbed truck, tipper dumper ya container — apne consignment type ke mutabik transport vehicle category choose karein.",
    icon: Truck,
  },
  {
    stepNumber: "02",
    title: "Add Pickup & Drop Location",
    subtitle: "Origin & Destination Cities",
    description: "Loading location (origin city) aur unloading destination (drop city) share karein taaki route distance aur transit feasibility assess ho sake.",
    icon: MapPin,
  },
  {
    stepNumber: "03",
    title: "Share Load Information",
    subtitle: "Weight, Dimensions & Date",
    description: "Machinery model ya material type, approximate weight (tonnes), length/width details aur preferred loading date specify karein.",
    icon: Package,
  },
  {
    stepNumber: "04",
    title: "Connect & Discuss",
    subtitle: "Direct Quotations & Dispatch",
    description: "Enquiry submit hone ke baad available transport providers se direct discuss karke competitive rate, toll terms aur transit dates finalize karein.",
    icon: RealPhoneCallingIcon,
  },
];

export function HowTransportWorksSection() {
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
            Transport Requirement Share Karna Hai Easy
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            4 simple steps me apni machinery ya materials ke movement ki requirement share karein.
          </p>
        </div>

        {/* 4 Steps Connected Timeline Layout */}
        <div className="relative">
          {/* Horizontal connecting line across steps on Desktop (4 cols) */}
          <div className="hidden xl:block absolute top-28 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-white/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col justify-between bg-white text-[#141B29] rounded-3xl border border-white p-6 sm:p-7 shadow-xl relative"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#0879D1]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 tracking-tighter">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0879D1] border border-blue-200/60 mb-2">
                        <CheckCircle2 className="w-3 h-3 text-[#0879D1]" />
                        <span>Step {step.stepNumber}</span>
                      </span>
                      <h3 className="text-lg font-extrabold text-[#141B29]">
                        {step.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Notice: No Automatic Booking Confirmation */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white text-[#141B29] border border-white shadow-xl max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <strong className="text-[#141B29]">Important Notice:</strong> Website par transport enquiry submit karna instant booking confirmation nahi hai. Yeh requirement details ko collect karke relevant transporters ke saath direct quotation aur logistics feasibility discussion start karne me help karta hai.
          </p>
        </div>
      </Container>
    </section>
  );
}
