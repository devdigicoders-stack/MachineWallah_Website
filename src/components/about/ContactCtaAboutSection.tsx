import React from "react";
import Link from "next/link";
import { Send, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import { WhatsAppBadgeIcon, RealPhoneCallingIcon } from "@/components/ui/RealIcons";

export function ContactCtaAboutSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-[#0D121C] text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-[#FFBE0B]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#0879D1]/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FFBE0B] animate-ping" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Have a Construction Requirement?{" "}
            <span className="text-[#FFBE0B]">Let&apos;s Connect</span>.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Machine rental, machinery buying/selling, transport ya materials ke related enquiry ke liye humse contact karein.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary Working Option: Send Enquiry */}
            <Button
              href="/contact"
              variant="yellow"
              size="lg"
              leftIcon={<Send className="w-5 h-5 text-[#141B29]" />}
              className="font-black shadow-lg hover:scale-105 transition-transform"
            >
              Send Enquiry
            </Button>

            {/* Call Helpline Option */}
            <Button
              href={SITE_CONFIG.contact.phoneLink}
              variant="white"
              size="lg"
              leftIcon={<RealPhoneCallingIcon className="w-5 h-5 text-[#0879D1]" />}
              className="font-bold border-slate-700"
            >
              <span>Call Helpline</span>
            </Button>

            {/* WhatsApp Us Option */}
            <Button
              href={SITE_CONFIG.contact.whatsappLink}
              isExternal
              variant="outline"
              size="lg"
              leftIcon={<WhatsAppBadgeIcon className="w-5 h-5" />}
              className="font-bold border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              <span>WhatsApp Us</span>
            </Button>
          </div>

          {/* Direct Support Note */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#36A43B]" />
            <span>Machine Wallah helpline &amp; enquiry support for contractors across India.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
