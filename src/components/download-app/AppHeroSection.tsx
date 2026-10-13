"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Smartphone,
  ArrowDown,
  Layers,
  Sparkles,
  Info,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface AppHeroSectionProps {
  onScrollToFeatures?: () => void;
}

export function AppHeroSection({ onScrollToFeatures }: AppHeroSectionProps) {
  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToFeatures) {
      onScrollToFeatures();
    } else {
      const el = document.getElementById("app-features");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141B29] via-[#1A2234] to-[#141B29] text-white pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-slate-800">
      {/* Background Subtle Color Accents & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#FFBE0B]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0879D1]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-[#F4511E]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FFBE0B] rounded"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#FFBE0B] font-medium" aria-current="page">
            Download App
          </span>
        </nav>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold tracking-wider uppercase">
              <Smartphone className="w-4 h-4 text-[#FFBE0B]" />
              <span>Machine Wallah Mobile App</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              Construction Ka Smart Platform.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBE0B] via-emerald-400 via-sky-400 to-[#F4511E]">
                Ab Aapke Phone Par.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Machine rental, buying/selling, transport aur construction materials — Machine Wallah mobile app ke through apni construction-related requirements ko conveniently explore karein.
            </p>

            {/* 4 Core Vertical Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-[#FFBE0B]/40 text-xs text-amber-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#FFBE0B]" />
                Rent Machines
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-[#36A43B]/40 text-xs text-emerald-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#36A43B]" />
                Buy / Sell
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-[#0879D1]/40 text-xs text-sky-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0879D1]" />
                Transport
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-[#F4511E]/40 text-xs text-orange-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F4511E]" />
                Materials
              </span>
            </div>

            {/* Action Buttons & Accurate Download Status */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Primary: Explore App Features */}
              <Button
                onClick={handleScrollToFeatures}
                variant="primary"
                size="lg"
                rightIcon={<ArrowDown className="w-4 h-4 text-[#141B29]" />}
                className="font-bold text-[#141B29] shadow-lg shadow-yellow-500/20 justify-center cursor-pointer"
              >
                Explore App Features
              </Button>

              {/* View Workflows Link */}
              <Button
                href="/how-it-works"
                variant="outline"
                size="lg"
                leftIcon={<Layers className="w-4 h-4 text-white" />}
                className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 justify-center font-semibold"
              >
                See App Workflows
              </Button>
            </div>

            {/* Accurate Store Link Status Box (Strictly No Fake Links) */}
            <div className="pt-2 w-full max-w-xl">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3 text-xs text-slate-300">
                <Info className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">
                    Official App Download Links:
                  </span>
                  Official download links will be added once confirmed. Website par fake Play Store ya App Store URLs link nahi kiye gaye hain.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Realistic Smartphone Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center max-w-sm sm:max-w-md w-full py-4">
              {/* Floating Back Mockup (Screen Details) */}
              <div className="w-48 sm:w-56 aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-700 rotate-6 translate-x-4 relative overflow-hidden transition-transform duration-300 hover:rotate-3">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-details.png"
                    alt="Machine Wallah mobile application equipment details view"
                    fill
                    sizes="224px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating Front Mockup (Home Screen) */}
              <div className="w-52 sm:w-60 aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-[#FFBE0B] -rotate-3 -translate-x-6 relative overflow-hidden transition-transform duration-300 hover:-rotate-1 z-10">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="Machine Wallah mobile application actual home screen"
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Micro Overlay Badge on Front Phone */}
                <div className="absolute bottom-5 left-3.5 right-3.5 p-2.5 rounded-xl bg-[#141B29]/95 border border-slate-700 text-white shadow-lg text-center backdrop-blur-md">
                  <span className="text-[11px] font-black text-[#FFBE0B] block">
                    Actual App Interface
                  </span>
                  <span className="text-[10px] text-slate-300 block">
                    Machines • Transport • Materials
                  </span>
                </div>
              </div>

              {/* Floating Badge Top-Right */}
              <div className="absolute -top-2 right-2 px-3 py-1.5 rounded-xl bg-white text-[#141B29] shadow-lg border border-slate-200 text-xs font-bold flex items-center gap-1.5 z-20">
                <Sparkles className="w-3.5 h-3.5 text-[#FFBE0B]" />
                <span>Modern Mobile Experience</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
