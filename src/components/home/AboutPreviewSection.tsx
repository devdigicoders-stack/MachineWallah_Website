import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { RealVerifiedBadgeIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutPreviewSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image with dedicated below-image card (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-3xl bg-black/20 -z-10"
              />

              {/* Main Photo - Clean without obstructing overlays */}
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/about-construction.jpg"
                  alt="Civil engineers and construction equipment at an infrastructure highway construction site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dedicated Information Card directly below the image */}
              <div className="mt-3.5 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-white text-[#141B29] border border-white shadow-xl flex items-center gap-3 sm:gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 text-[#36A43B] flex items-center justify-center shrink-0">
                  <RealVerifiedBadgeIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#0879D1] font-bold">
                      Connected Construction
                    </span>
                    <span className="text-slate-300 text-xs hidden sm:inline">•</span>
                    <span className="text-xs font-bold text-[#141B29]">
                      All-in-One Platform
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    <span className="font-semibold text-slate-800">Machines • Transport • Materials</span>
                    <span className="text-slate-400 mx-1.5">—</span>
                    Site needs, equipment &amp; supplies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              About Machine Wallah
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
              Construction Industry Ko Connect Karne Ka{" "}
              <span className="text-white  decoration-1">Smart Platform</span>.
            </h2>

            <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed font-normal">
              Machine Wallah ek all-in-one platform hai jahan construction machinery, transport aur building materials se related requirements ko ek jagah explore kiya ja sakta hai.
            </p>

            {/* Core Value Points - Displayed as Flex / Grid 3 Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 pt-2">
              {/* Card 1: Single Destination */}
              <div className="flex flex-col justify-between p-4 rounded-2xl bg-white text-[#141B29] border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-200 text-[#36A43B] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-[#141B29] leading-snug mb-1.5">
                    Single Destination for Sites
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Har choti-badi construction site ke liye machines, transport aur materials ek hi jagah available hain.
                  </p>
                </div>
              </div>

              {/* Card 2: Direct Coordination */}
              <div className="flex flex-col justify-between p-4 rounded-2xl bg-white text-[#141B29] border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#0879D1] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-[#141B29] leading-snug mb-1.5">
                    Direct Coordination
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Machine owners, trailer transporters aur raw material suppliers se clear aur direct communication.
                  </p>
                </div>
              </div>

              {/* Card 3: Digital Convenience */}
              <div className="flex flex-col justify-between p-4 rounded-2xl bg-white text-[#141B29] border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-[#F4511E] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-[#141B29] leading-snug mb-1.5">
                    Digital Convenience
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Traditional phone call confusion ke bina transparent enquiry aur requirements sharing.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                href="/about"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                className="font-bold bg-slate-950 hover:bg-slate-900 text-white border border-white/20 shadow-xl cursor-pointer"
              >
                Know More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
