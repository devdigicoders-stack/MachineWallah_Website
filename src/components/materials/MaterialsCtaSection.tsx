"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import { WhatsAppIcon, RealPhoneCallingIcon } from "@/components/ui/RealIcons";

interface MaterialsCtaSectionProps {
  onScrollToEnquiry?: () => void;
}

export function MaterialsCtaSection({ onScrollToEnquiry }: MaterialsCtaSectionProps) {
  const handleScrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToEnquiry) {
      onScrollToEnquiry();
    } else {
      const el = document.getElementById("material-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hasRealPhone =
    SITE_CONFIG.contact.phoneLink &&
    !SITE_CONFIG.contact.phoneLink.includes("0000000000");

  const hasRealWhatsApp =
    SITE_CONFIG.contact.whatsappLink &&
    SITE_CONFIG.contact.whatsappLink.length > 0;

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-[#141B29] via-[#1E1C24] to-[#141B29] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F4511E]/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4511E]/15 border border-[#F4511E]/30 text-[#F4511E] text-xs font-bold uppercase tracking-wider">
            <PackageCheck className="w-3.5 h-3.5 text-[#F4511E]" />
            <span>Ready for Sourcing?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Planning Your Next Construction Project?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Apni construction material requirement share karein aur quotation-related details ke liye connect karein.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Primary: Send Material Enquiry */}
            <Button
              onClick={handleScrollToEnquiry}
              variant="orange"
              size="lg"
              leftIcon={<FileText className="w-4 h-4 text-white" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
              className="font-extrabold text-white shadow-xl shadow-orange-600/25 w-full sm:w-auto justify-center cursor-pointer"
            >
              Send Material Enquiry
            </Button>

            {/* WhatsApp Us (Uses real configured WhatsApp URL) */}
            {hasRealWhatsApp ? (
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-600 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold text-base transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            ) : null}

            {/* Contact Support fallback when specific direct phone number is placeholder */}
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              leftIcon={<RealPhoneCallingIcon className="w-4 h-4 text-white" />}
              className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 w-full sm:w-auto justify-center font-semibold"
            >
              {hasRealPhone ? "Call Support" : "Contact Us"}
            </Button>
          </div>

          {/* Trust Note */}
          <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#F4511E]" />
              <span>Transparent supplier &amp; vendor quotations</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Zero brokerage charges on requirement submission</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
