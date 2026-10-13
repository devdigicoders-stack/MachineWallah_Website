"use client";

import React from "react";
import {
  FileText,
  BadgeDollarSign,
  Users,
  Tag,
  ArrowRight,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface HowSellingWorksSectionProps {
  onSendSellingEnquiry?: () => void;
}

const SELLING_STEPS = [
  {
    stepNumber: "01",
    title: "Provide Machine Details",
    subtitle: "Brand, Model & Condition",
    description: "Machine category, brand, model, year aur condition ki details share karein — jaise JCB 3DX (2020), 4500 working hours.",
    icon: FileText,
  },
  {
    stepNumber: "02",
    title: "Share Selling Requirement",
    subtitle: "Expected Price & Location",
    description: "Expected price aur location ke saath apni selling enquiry submit karein jisse interested buyers identify kiye ja sakein.",
    icon: BadgeDollarSign,
  },
  {
    stepNumber: "03",
    title: "Connect with Interested Buyers",
    subtitle: "Coordinate Viewing & Terms",
    description: "Next steps aur availability ke liye communication continue karein, machine inspection arrange karein aur deal close karein.",
    icon: Users,
  },
];

export function HowSellingWorksSection({
  onSendSellingEnquiry,
}: HowSellingWorksSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSendSellingEnquiry) {
      onSendSellingEnquiry();
    } else {
      const el = document.getElementById("buy-sell-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="selling-process"
      className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden scroll-mt-20"
    >
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
            <span>Seller Journey</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            How to Sell Your Machine
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Apni idle machinery ke liye genuine buyers find karne ka step-by-step process.
          </p>
        </div>

        {/* 3 Steps Connected Layout */}
        <div className="relative">
          {/* Horizontal Line across steps on Desktop */}
          <div className="hidden lg:block absolute top-28 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-white/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {SELLING_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col justify-between bg-white text-[#141B29] rounded-3xl border border-white p-6 sm:p-8 shadow-xl relative"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#141B29] shadow-sm flex items-center justify-center text-[#36A43B]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 tracking-tighter">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-2">
                        <CheckCircle2 className="w-3 h-3 text-[#36A43B]" />
                        <span>Step {step.stepNumber}</span>
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#141B29]">
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

        {/* CTA Button */}
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <Button
            onClick={handleClick}
            variant="secondary"
            size="lg"
            leftIcon={<Tag className="w-4 h-4 text-[#36A43B]" />}
            rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
            className="font-bold shadow-lg text-white cursor-pointer"
          >
            Send Selling Enquiry
          </Button>

          {/* Scope Disclaimer */}
          <div className="mt-5 p-4 rounded-2xl bg-slate-200/60 border border-slate-300/80 max-w-2xl text-xs text-slate-700 flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-[#141B29] shrink-0 mt-0.5" />
            <span>
              <strong>Marketplace Notice:</strong> Yeh website initial selling requirements ko collect karti hai aur directly public marketplace me automatic live listing create nahi karti. Hum interested buyers ke saath requirement share karne me facilitate karte hain.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
