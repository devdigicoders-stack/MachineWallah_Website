import React from "react";
import Link from "next/link";
import { Smartphone, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ContactCtaSectionProps {
  onScrollToForm?: () => void;
}

export function ContactCtaSection({ onScrollToForm }: ContactCtaSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#141B29] via-[#1B2436] to-[#141B29] text-white overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#0879D1]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>All-In-One Machinery Network</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
              Site Requirements Ke Liye{" "}
              <span className="text-[#FFBE0B]">Best Solutions</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Machinery rental, equipment buy/sell, heavy transport ya building materials — Machine Wallah website ya mobile app se fast connect karein.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#36A43B]" /> Verified Listings
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE0B]" /> Zero Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" /> Pan-India Transport
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <Button
              href="/download-app"
              variant="yellow"
              size="lg"
              leftIcon={<Smartphone className="w-5 h-5 text-[#141B29]" />}
              className="font-extrabold text-[#141B29] justify-center shadow-lg shadow-amber-500/20"
            >
              Download Mobile App
            </Button>

            <Button
              href="/how-it-works"
              variant="outline"
              size="lg"
              className="border-slate-600 text-white hover:bg-slate-800 justify-center"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
