import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AppPromoAboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#141B29] text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative ambient gradient spots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/3 w-96 h-96 rounded-full bg-[#FFBE0B]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#0879D1]/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Machine Wallah —{" "}
              <span className="text-[#FFBE0B]">Your Construction Companion</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Machine Wallah mobile app ke through construction services aur related requirements ko convenient tarike se explore karein.
            </p>

            {/* Practical Mobile App Features */}
            <div className="space-y-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-[#FFBE0B]/20 text-[#FFBE0B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Fast enquiry creation with machine &amp; location details</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Access all 4 services — Rent, Buy/Sell, Transport &amp; Materials</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Designed specifically for Indian construction site conditions</span>
              </div>
            </div>

            {/* Status indicator & CTA */}
            <div className="pt-3 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Mobile application currently in development and store preparation.</span>
              </div>

              <div>
                <Button
                  href="/download-app"
                  variant="yellow"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold shadow-md hover:scale-105"
                >
                  Download App Info
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Screenshots Mockup (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto flex items-center justify-center gap-4 sm:gap-6 max-w-lg lg:max-w-none">
              {/* Phone Mockup 1: Home Screen */}
              <div className="relative w-44 sm:w-56 aspect-[9/19] rounded-[2.5rem] bg-slate-900 border-4 border-slate-700 shadow-2xl p-1.5 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="Machine Wallah mobile application dashboard screen"
                    fill
                    sizes="(max-width: 640px) 180px, 230px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Phone Mockup 2: Machine Details Screen */}
              <div className="relative w-44 sm:w-56 aspect-[9/19] rounded-[2.5rem] bg-slate-900 border-4 border-slate-700 shadow-2xl p-1.5 overflow-hidden transform rotate-2 sm:translate-y-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-details.png"
                    alt="Machine Wallah mobile application machine enquiry screen"
                    fill
                    sizes="(max-width: 640px) 180px, 230px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
