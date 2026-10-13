"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

interface HowItWorksCtaSectionProps {
  onScrollToServices?: () => void;
}

export function HowItWorksCtaSection({
  onScrollToServices,
}: HowItWorksCtaSectionProps) {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToServices) {
      onScrollToServices();
    } else {
      const el = document.getElementById("service-workflows");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hasRealWhatsApp =
    SITE_CONFIG.contact.whatsappLink &&
    SITE_CONFIG.contact.whatsappLink.length > 0;

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-[#141B29] via-[#1B2438] to-[#141B29] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFBE0B]" />
            <span>Direct &amp; Transparent</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Get Started with Machine Wallah?
          </h2>

          {/* Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Apni construction requirement ke according service explore karein aur next steps ke liye humse connect karein.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 flex-wrap">
            {/* Primary CTA */}
            <Button
              onClick={handleScrollToServices}
              variant="primary"
              size="lg"
              leftIcon={<Layers className="w-4 h-4 text-[#141B29]" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
              className="font-bold text-[#141B29] shadow-xl shadow-yellow-500/20 w-full sm:w-auto justify-center cursor-pointer"
            >
              Explore Our Services
            </Button>

            {/* Secondary CTA */}
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              leftIcon={<Send className="w-4 h-4 text-white" />}
              className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 w-full sm:w-auto justify-center font-semibold"
            >
              Send an Enquiry
            </Button>

            {/* Additional CTA */}
            <Button
              href="/download-app"
              variant="white"
              size="lg"
              leftIcon={<Smartphone className="w-4 h-4 text-[#141B29]" />}
              className="w-full sm:w-auto justify-center font-bold"
            >
              Download App
            </Button>

            {/* WhatsApp Link if configured */}
            {hasRealWhatsApp && (
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-600/60 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-sm sm:text-base transition-colors w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            )}
          </div>

          {/* Status Note */}
          <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
            <span>Machines • Transport • Materials</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>All-in-one Construction Platform</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
