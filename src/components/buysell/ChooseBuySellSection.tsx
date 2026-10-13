"use client";

import React from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Tag,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ChooseBuySellSectionProps {
  onSelectBuy?: () => void;
  onSelectSell?: () => void;
}

export function ChooseBuySellSection({
  onSelectBuy,
  onSelectSell,
}: ChooseBuySellSectionProps) {
  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectBuy) {
      onSelectBuy();
    } else {
      const el = document.getElementById("buying-process");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSellClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectSell) {
      onSelectSell();
    } else {
      const el = document.getElementById("selling-process");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Two Simple Pathways"
            badgeColor="blue"
            title="Looking to Buy or Sell a Machine?"
            description="Apne specific goal ke anusaar suitable flow choose karein — buying ya selling."
            align="center"
          />
        </div>

        {/* 2 Large Premium Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Card A: BUY MACHINES */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 border-2 border-emerald-500/20 shadow-md overflow-hidden">
            <div className="p-7 sm:p-9">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#36A43B]/15 text-[#2E8B33] border border-[#36A43B]/30">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#36A43B]" />
                  <span>Pathway 01 • Buyer Flow</span>
                </span>
                <span className="text-xs font-bold text-slate-400">
                  For Contractors &amp; Buyers
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#141B29] leading-tight mb-3">
                Find Your Next Machine
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                Construction projects ke liye new ya used machinery buying requirements explore karein. Excavators, JCBs, cranes aur road rollers ke liye specific requirement share karein.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>New &amp; pre-owned machine options</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>Specify your preferred brand, model &amp; budget</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>Connect directly with sellers without brokerage</span>
                </div>
              </div>
            </div>

            {/* Visual & CTA Area */}
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/hero-excavator.jpg"
                  alt="Tracked excavator available for purchase inquiry"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-[#141B29]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    Heavy Earthmoving &amp; Diggers
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Step-by-step buying process
                </span>
                <button
                  type="button"
                  onClick={handleBuyClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#36A43B] hover:bg-[#2e8b33] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Buying</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card B: SELL MACHINES */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#141B29] via-[#182338] to-[#141B29] border-2 border-slate-700 shadow-md overflow-hidden text-white">
            <div className="p-7 sm:p-9">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-[#36A43B] border border-[#36A43B]/40">
                  <Tag className="w-3.5 h-3.5 text-[#36A43B]" />
                  <span>Pathway 02 • Seller Flow</span>
                </span>
                <span className="text-xs font-bold text-slate-400">
                  For Fleet &amp; Machine Owners
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                Give Your Machine a New Buyer
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                Apni machine ki details share karein aur selling enquiry ke through interested buyers se connection explore karein. Idle machinery ko active working capital me convert karein.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>Share machine brand, model, year &amp; condition</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>Pan-India contractor &amp; builder reach</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#36A43B] shrink-0" />
                  <span>Direct phone &amp; WhatsApp communication</span>
                </div>
              </div>
            </div>

            {/* Visual & CTA Area */}
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/service-rent.jpg"
                  alt="Backhoe loader and heavy machinery fleet for seller listing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-[#141B29]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    Backhoes, Cranes &amp; Rollers
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#172133] border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Step-by-step selling process
                </span>
                <button
                  type="button"
                  onClick={handleSellClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-[#36A43B] text-white hover:text-white text-sm font-bold border border-slate-600 hover:border-[#36A43B] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Selling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
