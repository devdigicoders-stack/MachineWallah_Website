"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";

interface TransportCtaSectionProps {
  onScrollToEnquiry?: () => void;
}

export function TransportCtaSection({ onScrollToEnquiry }: TransportCtaSectionProps) {
  const handleScrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToEnquiry) {
      onScrollToEnquiry();
    } else {
      const el = document.getElementById("transport-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-[#141B29] via-[#15233B] to-[#141B29] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0879D1]/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0879D1]/15 border border-[#0879D1]/30 text-[#0879D1] text-xs font-bold uppercase tracking-wider text-sky-400">
            <Truck className="w-3.5 h-3.5" />
            <span>Ready for Dispatch?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Need Transport for Your Next Project?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Machine, material ya heavy equipment movement ke liye apni transportation requirement share karein.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary: Send Transport Enquiry */}
            <Button
              onClick={handleScrollToEnquiry}
              variant="blue"
              size="lg"
              leftIcon={<FileText className="w-4 h-4 text-white" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
              className="font-extrabold text-white shadow-xl shadow-blue-600/20 w-full sm:w-auto justify-center cursor-pointer"
            >
              Send Transport Enquiry
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

          {/* Status Note regarding phone/WhatsApp details */}
          <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#0879D1]" />
              <span>Direct connect with commercial fleet owners</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Zero brokerage commission on web enquiries</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
