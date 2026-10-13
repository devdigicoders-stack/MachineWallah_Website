"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Bell,
  Sparkles,
  Truck,
  Route,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function TransportAppPromoSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#141B29] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0879D1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0879D1]/15 border border-[#0879D1]/30 text-[#0879D1] text-xs font-bold uppercase tracking-wider text-sky-400">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Application Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Transport Requirements,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0879D1] via-sky-300 to-[#0879D1]">
                Now on Your Phone.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Machine Wallah mobile app ke through transportation aur construction-related services ko convenient way mein explore karein. Fast route inquiries, vehicle categories aur direct driver/fleet coordination.
            </p>

            {/* Benefit Checkmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#0879D1]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0879D1]" />
                </div>
                <span>Quick transport enquiry creation with origin, destination &amp; load specs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#FFBE0B]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFBE0B]" />
                </div>
                <span>Explore low-bed trailers, flatbeds, tippers &amp; heavy cargo fleets</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#36A43B]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A43B]" />
                </div>
                <span>Direct phone &amp; WhatsApp communication with verified transporters</span>
              </div>
            </div>

            {/* CTA Button & Launch Status */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                href="/download-app"
                variant="blue"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                className="font-bold text-white shadow-lg shadow-blue-600/20"
              >
                Explore Our App
              </Button>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <Bell className="w-4 h-4 text-[#FFBE0B] shrink-0" />
                <span>Launching soon on Google Play &amp; App Store</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockups (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center max-w-sm sm:max-w-md w-full py-4">
              {/* Back Phone */}
              <div className="w-48 sm:w-56 aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-700 rotate-6 translate-x-4 relative overflow-hidden transition-transform duration-300 hover:rotate-3">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-details.png"
                    alt="Machine Wallah mobile application transport vehicle specs"
                    fill
                    sizes="224px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Front Phone */}
              <div className="w-52 sm:w-60 aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-[#0879D1] -rotate-3 -translate-x-6 relative overflow-hidden transition-transform duration-300 hover:-rotate-1 z-10">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="Machine Wallah mobile application homepage showing Transport Services"
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating Micro Badge on Front Phone */}
                <div className="absolute bottom-5 left-4 right-4 p-2.5 rounded-xl bg-[#141B29]/95 border border-slate-700 text-white shadow-lg text-center backdrop-blur-md">
                  <span className="text-[11px] font-bold text-[#0879D1] block text-sky-400">
                    Transport &amp; Freight Logistics
                  </span>
                  <span className="text-[10px] text-slate-300 block">
                    Machines • Transport • Materials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
