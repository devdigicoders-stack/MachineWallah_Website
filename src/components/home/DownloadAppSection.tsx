import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealGooglePlayIcon, RealAppleIcon } from "@/components/ui/RealIcons";

export function DownloadAppSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#141B29] text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative ambient gradient spots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FFBE0B]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#0879D1]/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Copy & App Information (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#FFBE0B] text-xs font-bold uppercase tracking-wider">
              <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/favicon.png"
                  alt="Machine Wallah"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span>Mobile Application</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Machine Wallah Ab Aapke{" "}
              <span className="text-[#FFBE0B]">Phone Par</span>.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Machines, transport aur materials ke liye ek convenient mobile platform explore karo. Site par rehte hue direct requirements share karein aur status check karein.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Rent, Buy/Sell, Transport &amp; Material flows ek app mein</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-[#FFBE0B]/20 text-[#FFBE0B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Fast enquiry submission with machine &amp; location details</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span>Simple Hinglish UI designed for Indian contractors &amp; drivers</span>
              </div>
            </div>

            {/* App Store Buttons (Coming Soon state as per strict instructions) */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {/* Google Play Button (Coming Soon) */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 opacity-90 shadow-sm cursor-default select-none">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <RealGooglePlayIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      Coming Soon On
                    </div>
                    <div className="text-xs font-bold text-white">Google Play</div>
                  </div>
                </div>

                {/* Apple App Store Button (Coming Soon) */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 opacity-90 shadow-sm cursor-default select-none">
                  <div className="w-7 h-7 flex items-center justify-center text-white">
                    <RealAppleIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      Coming Soon On
                    </div>
                    <div className="text-xs font-bold text-white">App Store</div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="inline-flex items-center gap-2 text-xs text-amber-400 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Mobile application currently in final review before public release.</span>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Button
                href="/download-app"
                variant="yellow"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold shadow-md hover:scale-105"
              >
                App Details &amp; Updates
              </Button>
            </div>
          </div>

          {/* Right Side: Realistic Phone Mockup Presentation (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto flex items-center justify-center gap-2 sm:gap-6 max-w-lg lg:max-w-none">
              {/* Phone Mockup 1: Home Screen */}
              <div className="relative w-36 xs:w-44 sm:w-56 aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 border-2 sm:border-4 border-slate-700 shadow-2xl p-1 sm:p-1.5 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-[1.7rem] sm:rounded-[2.2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="Machine Wallah Mobile App Home Screen interface"
                    fill
                    sizes="(max-width: 640px) 150px, 230px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Phone Mockup 2: Machine Details Screen */}
              <div className="relative w-36 xs:w-44 sm:w-56 aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 border-2 sm:border-4 border-slate-700 shadow-2xl p-1 sm:p-1.5 overflow-hidden transform rotate-2 sm:translate-y-6 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-[1.7rem] sm:rounded-[2.2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-details.png"
                    alt="Machine Wallah Mobile App Machine Details screen interface"
                    fill
                    sizes="(max-width: 640px) 150px, 230px"
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
