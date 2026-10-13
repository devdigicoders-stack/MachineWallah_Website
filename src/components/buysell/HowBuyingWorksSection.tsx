"use client";

import React from "react";
import {
  Search,
  FileSpreadsheet,
  ShoppingBag,
  ArrowRight,
  Info,
  CheckCircle2,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface HowBuyingWorksSectionProps {
  onSendBuyingEnquiry?: () => void;
}

const BUYING_STEPS = [
  {
    stepNumber: "01",
    title: "Explore Machinery",
    subtitle: "Category & Application Choice",
    description: "Apni requirement ke according machine category choose karein — jaise JCB 3DX, 20-ton excavator, hydra crane ya soil roller.",
    icon: Search,
  },
  {
    stepNumber: "02",
    title: "Share Buying Details",
    subtitle: "Condition, Budget & Location",
    description: "Machine type, condition preference (new ya used), approximate budget range aur project location share karein.",
    icon: FileSpreadsheet,
  },
  {
    stepNumber: "03",
    title: "Connect & Discuss",
    subtitle: "Direct Discussions & Next Steps",
    description: "Relevant buying options aur further technical details ke liye available communication channels ka use karein.",
    icon: RealPhoneCallingIcon,
  },
];

export function HowBuyingWorksSection({
  onSendBuyingEnquiry,
}: HowBuyingWorksSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSendBuyingEnquiry) {
      onSendBuyingEnquiry();
    } else {
      const el = document.getElementById("buy-sell-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="buying-process"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Buyer Journey"
            badgeColor="blue"
            title="How to Buy a Machine"
            description="Transparent communication flow jisse suitable equipment search structured ban sake."
            align="center"
          />
        </div>

        {/* 3 Steps Connected Layout */}
        <div className="relative">
          {/* Horizontal Line across steps on Desktop */}
          <div className="hidden lg:block absolute top-28 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {BUYING_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col justify-between bg-white rounded-3xl border border-blue-100/80 p-6 sm:p-8 shadow-sm relative"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#36A43B]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 tracking-tighter">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#36A43B]/10 text-[#257328] border border-[#36A43B]/20 mb-2">
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
            variant="green"
            size="lg"
            leftIcon={<ShoppingBag className="w-4 h-4 text-white" />}
            rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
            className="font-bold shadow-lg shadow-emerald-600/20 text-white cursor-pointer"
          >
            Send Buying Enquiry
          </Button>

          {/* Scope Disclaimer */}
          <div className="mt-5 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 max-w-2xl text-xs text-emerald-950 flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-[#36A43B] shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Website par enquiry submit karna informational exchange hai. Machine Wallah par koi online checkout ya automated payment gateway nahi hai — physical machine inspection, RC/NOC documentation aur pricing direct parties ke beech finalize hoti hai.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
