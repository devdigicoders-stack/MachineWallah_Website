"use client";

import React from "react";
import Link from "next/link";
import {
  Tractor,
  Calendar,
  Send,
  MessageSquareCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const RENT_STEPS = [
  {
    step: "01",
    title: "Choose Machine Category",
    description:
      "JCB, excavator, crane, road roller ya other machine category choose karein.",
    detail:
      "Excavators (7T to 20T+), Backhoe Loaders, Transit Mixers, Hydra Cranes aur Rollers.",
    icon: Tractor,
  },
  {
    step: "02",
    title: "Share Project Details",
    description:
      "Machine requirement, work location aur approximate rental duration batayein.",
    detail:
      "Site location, expected start date aur daily/monthly rental requirement specify karein.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Send Rental Enquiry",
    description:
      "Apne contact details ke saath rental enquiry share karein.",
    detail:
      "Verified contact number aur preferred communication medium (WhatsApp / Call) provide karein.",
    icon: Send,
  },
  {
    step: "04",
    title: "Discuss Rental Terms",
    description:
      "Availability, pricing, operator support aur other terms ko relevant parties ke saath confirm karein.",
    detail:
      "Fuel terms (dry/wet lease), mobilization charges, shift hours aur operator fooding discuss karein.",
    icon: MessageSquareCheck,
  },
];

export function RentWorkflowSection() {
  return (
    <section
      id="rent-workflow"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FFBE0B]" />
            Service 1: Rental
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#141B29] tracking-tight leading-tight">
            How to Explore Machinery Rentals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Contractors aur builders ke liye rental machines search karne, requirement details share karne aur machine owners ke saath direct discussion karne ka 4-step workflow.
          </p>
        </div>

        {/* 4 Steps in Flex / Responsive Grid Cards with Default Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
          {RENT_STEPS.map((s) => {
            const StepIcon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white border-2 border-amber-300 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#FFBE0B] text-[#141B29] font-black text-sm flex items-center justify-center shadow-xs">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-black text-[#141B29] mb-2 leading-snug">
                    {s.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                    {s.description}
                  </p>
                </div>

                {/* Step Context Detail Box (Always visible / default styled) */}
                <div className="mt-2 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-600 leading-relaxed font-normal">
                  <span className="font-semibold text-amber-950 block mb-0.5">Details:</span>
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-200">
          <Button
            href="/rent-machines"
            variant="yellow"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
            className="font-bold text-[#141B29] shadow-md shadow-yellow-500/20 cursor-pointer"
          >
            Explore Rent Machines
          </Button>

          <span className="text-xs text-slate-500 italic">
            *Enquiry submission does not automatically confirm rental booking. Direct discussions finalize pricing and operator terms.
          </span>
        </div>
      </Container>
    </section>
  );
}
