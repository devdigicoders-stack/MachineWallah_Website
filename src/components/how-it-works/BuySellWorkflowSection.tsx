"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  ShoppingBag,
  Tag,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const BUYING_STEPS = [
  {
    step: "01",
    title: "Choose Machine Type",
    description: "Excavator, backhoe, crane, tipper ya roller category select karein.",
  },
  {
    step: "02",
    title: "Select New / Used Preference",
    description: "New showroom equipment ya inspected second-hand machinery condition choose karein.",
  },
  {
    step: "03",
    title: "Share Budget & Location",
    description: "Apna target budget range aur delivery state/city provide karein.",
  },
  {
    step: "04",
    title: "Discuss Machine Details & Terms",
    description: "RC status, service history, inspection check aur payment terms discuss karein.",
  },
];

const SELLING_STEPS = [
  {
    step: "01",
    title: "Select Machine Category",
    description: "Apni idle machinery ki exact category (JCB, Poclain, Crane) select karein.",
  },
  {
    step: "02",
    title: "Share Brand, Model & Condition",
    description: "Manufacturing year, working hours meter reading aur machine condition detail karein.",
  },
  {
    step: "03",
    title: "Provide Expected Price & Location",
    description: "Demand price aur physical machine park hone ki location specify karein.",
  },
  {
    step: "04",
    title: "Submit Enquiry & Discuss Next Steps",
    description: "Details verify karke interested buyers ke connect ke liye discussion initiate karein.",
  },
];

export function BuySellWorkflowSection() {
  const [activeSubTab, setActiveSubTab] = useState<"buying" | "selling">("buying");

  return (
    <section
      id="buy-sell-workflow"
      className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Service 2: Buy &amp; Sell</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            How Machinery Buying &amp; Selling Works
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Chahe aap new ya used equipment purchase karna chahte hon ya apni machinery sell karna chahte hon, dono workflows transparent aur structured hain.
          </p>
        </div>

        {/* Sub-tab Switcher for Mobile / Compact Screens */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveSubTab("buying")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === "buying"
                ? "bg-[#141B29] text-white shadow-xl scale-[1.02] border border-white/20"
                : "bg-white/90 text-slate-800 hover:bg-white shadow-sm"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Buying Journey</span>
          </button>
          <button
            onClick={() => setActiveSubTab("selling")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === "selling"
                ? "bg-[#141B29] text-white shadow-xl scale-[1.02] border border-white/20"
                : "bg-white/90 text-slate-800 hover:bg-white shadow-sm"
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Selling Journey</span>
          </button>
        </div>

        {/* Side-by-Side Panels on Desktop / Tabbed on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buying Panel */}
          <div
            className={`bg-white rounded-3xl border border-white p-6 sm:p-8 shadow-xl text-[#141B29] flex flex-col justify-between transition-all duration-300 ${
              activeSubTab === "buying" ? "block" : "hidden lg:flex"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      Procurement Flow
                    </span>
                    <h3 className="text-lg font-black text-[#141B29]">
                      Buying Machinery
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                  4 Steps
                </span>
              </div>

              <div className="space-y-4">
                {BUYING_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-2xl bg-[#F2F8FF] border border-blue-100/80 shadow-xs flex items-start gap-3.5"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141B29] mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Verify machine papers, NOC, insurance aur physical inspection directly with seller.
            </div>
          </div>

          {/* Selling Panel */}
          <div
            className={`bg-white rounded-3xl border border-white p-6 sm:p-8 shadow-xl text-[#141B29] flex flex-col justify-between transition-all duration-300 ${
              activeSubTab === "selling" ? "block" : "hidden lg:flex"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Tag className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      Liquidation Flow
                    </span>
                    <h3 className="text-lg font-black text-[#141B29]">
                      Selling Machinery
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                  4 Steps
                </span>
              </div>

              <div className="space-y-4">
                {SELLING_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-2xl bg-[#F2F8FF] border border-blue-100/80 shadow-xs flex items-start gap-3.5"
                  >
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141B29] mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              *Submitting a selling enquiry on this website does not automatically create a public machinery listing.
            </div>
          </div>
        </div>

        {/* Action Button & Disclaimer */}
        <div className="mt-10 text-center space-y-3">
          <Button
            href="/buy-sell"
            variant="yellow"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
            className="font-bold text-[#141B29] shadow-lg"
          >
            Explore Buy / Sell
          </Button>

          <p className="text-xs text-amber-100/90 max-w-xl mx-auto">
            Machine Wallah direct communication provide karta hai. Kisi bhi party ki payment guarantee ya verification certification website dwara generate nahi hoti.
          </p>
        </div>
      </Container>
    </section>
  );
}
