"use client";

import React from "react";
import {
  Layers,
  FileText,
  MessageSquareCheck,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface OverviewStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
}

const OVERVIEW_STEPS: OverviewStep[] = [
  {
    number: "01",
    title: "Choose Your Service",
    tagline: "Service Selection",
    description:
      "Machine rent, buy/sell, transport ya construction materials mein se apni requirement ke according service select karein.",
    keyPoints: [
      "Rent heavy construction machinery",
      "Buy or sell used/new equipment",
      "Book machinery & freight transport",
      "Source bulk building materials",
    ],
    icon: Layers,
    accentColor: "#FFBE0B",
    badgeBg: "bg-[#FFBE0B]/15 text-amber-900 border-[#FFBE0B]/40",
  },
  {
    number: "02",
    title: "Share Requirement Details",
    tagline: "Specification & Context",
    description:
      "Machine type, quantity, pickup/drop location, budget ya project needs jaise relevant details share karein.",
    keyPoints: [
      "Select specific machine category",
      "Specify quantity, units & duration",
      "Provide job site location & dates",
      "Add custom technical notes",
    ],
    icon: FileText,
    accentColor: "#0879D1",
    badgeBg: "bg-[#0879D1]/15 text-blue-900 border-[#0879D1]/40",
  },
  {
    number: "03",
    title: "Connect & Discuss",
    tagline: "Transparent Discussion",
    description:
      "Available communication options ke through requirements, quotations aur next steps discuss karein.",
    keyPoints: [
      "Discuss commercial quotations",
      "Confirm availability & equipment condition",
      "Review delivery & operator terms",
      "Finalize deals directly with parties",
    ],
    icon: MessageSquareCheck,
    accentColor: "#36A43B",
    badgeBg: "bg-[#36A43B]/15 text-emerald-900 border-[#36A43B]/40",
  },
];

export function PlatformOverviewSection() {
  return (
    <section
      id="platform-process"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Platform Overview"
            badgeColor="blue"
            title="Machine Wallah Kaise Kaam Karta Hai?"
            description="Ek centralized platform jahan construction equipment, transport aur materials ke requirements ko structure aur communicate kiya jata hai."
            align="center"
          />
        </div>

        {/* 3 Large Detailed Process Steps - Default Rich Styling */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-amber-200 via-sky-200 to-emerald-200 -translate-y-16 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {OVERVIEW_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-blue-200/90 shadow-md"
                >
                  <div>
                    {/* Top Row: Icon & Large Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: step.accentColor }}
                      >
                        <Icon className="w-7 h-7 text-slate-900" />
                      </div>

                      <span className="text-4xl font-black text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Badge */}
                    <div className="mb-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${step.badgeBg}`}
                      >
                        {step.tagline}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#141B29] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>

                    {/* Key Checklist Points */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {step.keyPoints.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5 text-xs text-slate-700"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: step.accentColor }}
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-600">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: step.accentColor }} />
                    <span>Direct connection • No hidden charges</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsible Clarity Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="font-bold text-[#141B29] block mb-0.5">
                General Enquiry Journey — Not Automatic Booking:
              </strong>
              Machine Wallah requirements ko streamline karne aur relevant parties ke sath direct connection create karne ke liye hai. Enquiry submit karne se koi automatic financial transaction ya instant confirmation nahi hoti. Final terms dono parties aapas me discuss karti hain.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
