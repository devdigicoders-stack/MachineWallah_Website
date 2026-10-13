"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Info,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";

export function AppFinalCtaSection() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-[#141B29] via-[#1B2234] to-[#141B29] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Copy & Action Links (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Your Construction Connections. One Mobile Platform.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Machine Wallah app ke through construction industry se related available services aur workflows explore karein.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                leftIcon={<RealPhoneCallingIcon className="w-4 h-4 text-[#141B29]" />}
                rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
                className="font-bold text-[#141B29] shadow-xl shadow-yellow-500/20 w-full sm:w-auto justify-center"
              >
                Contact Support &amp; Enquiries
              </Button>

              <Button
                href="/how-it-works"
                variant="outline"
                size="lg"
                leftIcon={<Layers className="w-4 h-4 text-white" />}
                className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 w-full sm:w-auto justify-center font-semibold"
              >
                Explore How It Works
              </Button>
            </div>

            {/* Official Link Configuration Statement */}
            <div className="pt-3 max-w-md mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-2.5 text-xs text-slate-300 text-left">
                <Info className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Official download links will be added once confirmed.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-52 sm:w-60 aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-[#FFBE0B] rotate-2">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                <Image
                  src="/images/app-screen-home.png"
                  alt="Machine Wallah application home preview"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Bottom Tag */}
              <div className="absolute bottom-5 left-3 right-3 p-2 rounded-xl bg-[#141B29]/95 border border-slate-700 text-white shadow-lg text-center backdrop-blur-md">
                <span className="text-[10px] font-bold text-[#FFBE0B] block">
                  Machine Wallah
                </span>
                <span className="text-[9px] text-slate-300 block">
                  Machines • Transport • Materials
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
