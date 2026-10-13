"use client";

import React from "react";
import {
  Boxes,
  Scale,
  MapPin,
  MessageSquareCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Select Material",
    subtitle: "Category Identification",
    description:
      "Choose the required construction material category—cement, sand, bricks/blocks, steel, RMC, aggregates, or custom supplies.",
    icon: Boxes,
    badge: "Step 1",
  },
  {
    number: "02",
    title: "Specify Quantity",
    subtitle: "Volume & Technical Grade",
    description:
      "Share approximate quantity, required grade or specification (e.g. OPC 53, Fe 500D, M25 concrete) and select preferred unit.",
    icon: Scale,
    badge: "Step 2",
  },
  {
    number: "03",
    title: "Add Delivery Location",
    subtitle: "Destination & Unloading Date",
    description:
      "Provide destination site address, city, access constraints and preferred delivery date for accurate logistics estimation.",
    icon: MapPin,
    badge: "Step 3",
  },
  {
    number: "04",
    title: "Connect & Discuss",
    subtitle: "Quotation & Specifications",
    description:
      "Submit the enquiry and discuss possible quotations, availability, quality specifications and delivery terms with the relevant parties.",
    icon: MessageSquareCheck,
    badge: "Step 4",
  },
];

export function HowMaterialsWorksSection() {
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
            <span>Simple Workflow</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Construction Material Enquiry in Four Steps
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Requirement define karein, structured enquiry generate karein aur suppliers ke sath direct terms discuss karein.
          </p>
        </div>

        {/* Connected Timeline on Desktop / Stacked on Mobile */}
        <div className="relative">
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed border-white/40 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col justify-between bg-white text-[#141B29] rounded-2xl p-6 sm:p-7 border border-white shadow-xl relative"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0879D1]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 tracking-tighter">
                        {step.number}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0879D1] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {step.badge}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-black text-[#141B29] mb-1 leading-snug">
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-bold text-slate-500 mb-3">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro indicator */}
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clear &amp; Transparent</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Disclaimer Notice (Required by Prompt) */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white text-[#141B29] border border-white shadow-xl max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-extrabold text-[#141B29] block mb-0.5">
                Important Notice — Not a Confirmed Purchase Order:
              </strong>
              Machine Wallah par material enquiry submit karne se koi purchase order confirm nahi hota. Final commercial rates, delivery logistics, quality inspection reports aur payment terms supplier aur buyer aapas me directly agree karte hain.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
