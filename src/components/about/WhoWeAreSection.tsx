import React from "react";
import Image from "next/image";
import {
  HardHat,
  Truck,
  Handshake,
  Layers,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function WhoWeAreSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Premium Construction Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#FFBE0B]/20 via-[#0879D1]/15 to-transparent -z-10"
              />

              {/* Main Photo Frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/about-construction.jpg"
                  alt="Civil engineers inspecting infrastructure project with heavy equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#FFBE0B] font-bold">
                    Connected Construction
                  </div>
                  <div className="text-sm font-semibold text-white">
                    One Unified Ecosystem
                  </div>
                </div>
              </div>

              {/* Floating Brand Emblem Badge */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-3 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-xl border border-slate-100 flex items-center gap-2.5 z-20">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs shrink-0 border border-slate-100">
                  <Image
                    src="/favicon.png"
                    alt="Machine Wallah Emblem"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141B29]">Machine Wallah</div>
                  <div className="text-[11px] text-slate-500 font-medium">4 Verticals • 1 Ecosystem</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Service Labels (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0879D1] border border-blue-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" />
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141B29] tracking-tight leading-tight">
                Construction Needs.{" "}
                <span className="text-[#0879D1]">One Connected Platform</span>.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Machine Wallah ek construction-focused platform hai jiska purpose machine owners, buyers, sellers, transport providers, material suppliers aur customers ke beech connection ko simple banana hai.
              </p>
              <p>
                Chahe aapko machinery rent karni ho, machine buy ya sell karni ho, transportation ki requirement ho, ya construction material suppliers tak pahunchna ho — Machine Wallah in services ko ek convenient platform par explore karne ka option provide karta hai.
              </p>
            </div>

            {/* 4 Branded Service Labels */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Four Connected Verticals
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Rent */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#FFBE0B] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#FFBE0B]/20 text-[#8F6600] flex items-center justify-center shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#141B29]">Rent Machines</div>
                    <div className="text-xs text-slate-500">JCB, Excavators &amp; Cranes</div>
                  </div>
                </div>

                {/* 2. Buy / Sell */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#36A43B] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#36A43B]/20 text-[#2E8B33] flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#141B29]">Buy / Sell Machines</div>
                    <div className="text-xs text-slate-500">Used &amp; New Machinery</div>
                  </div>
                </div>

                {/* 3. Transport */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#0879D1] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#0879D1]/15 text-[#0879D1] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#141B29]">Transport Services</div>
                    <div className="text-xs text-slate-500">Low-Bed Trailers &amp; Trucks</div>
                  </div>
                </div>

                {/* 4. Materials */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#F4511E] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#F4511E]/15 text-[#D83B0A] flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#141B29]">Construction Materials</div>
                    <div className="text-xs text-slate-500">RMC, Sand, Gitti &amp; Steel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
