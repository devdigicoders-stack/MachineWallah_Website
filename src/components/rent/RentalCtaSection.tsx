"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";

interface RentalCtaSectionProps {
  onScrollToEnquiry?: () => void;
}

export function RentalCtaSection({ onScrollToEnquiry }: RentalCtaSectionProps) {
  const handleScrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToEnquiry) {
      onScrollToEnquiry();
    } else {
      const element = document.getElementById("rental-enquiry");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-[#141B29] via-[#1E293B] to-[#141B29] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFBE0B]/15 border border-[#FFBE0B]/30 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Ready to Mobilize?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Need a Machine for Your Next Project?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Apni machine rental requirement share karein aur next steps ke liye connect karein.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary: Send Rental Enquiry */}
            <Button
              onClick={handleScrollToEnquiry}
              variant="yellow"
              size="lg"
              leftIcon={<FileText className="w-4 h-4 text-[#141B29]" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
              className="font-extrabold text-[#141B29] shadow-xl shadow-amber-500/20 w-full sm:w-auto justify-center cursor-pointer"
            >
              Send Rental Enquiry
            </Button>

            {/* Functioning Contact CTA */}
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              leftIcon={<RealPhoneCallingIcon className="w-4 h-4 text-white" />}
              className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 w-full sm:w-auto justify-center font-semibold"
            >
              Contact Support
            </Button>
          </div>

          {/* Transparency Status Note regarding phone/WhatsApp details */}
          <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#36A43B]" />
              <span>Direct connect with machine providers</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Zero brokerage fee on web enquiries</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
