"use client";

import React from "react";
import {
  Boxes,
  FileEdit,
  Truck,
  MessageSquareQuote,
  Building2,
  Smartphone,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Multiple Material Categories",
    description:
      "Cement, sand, aggregates, bricks, steel aur RMC ke requirements ke liye different vendors ko manually call karne ki jagah single focused platform par enquiry create karein.",
    icon: Boxes,
    tag: "Diverse Categories",
  },
  {
    title: "Simple Requirement Submission",
    description:
      "Structured form fields ke through material name, technical specification, volume aur customized site requirements ko clear format me submit karein.",
    icon: FileEdit,
    tag: "Clean Submission",
  },
  {
    title: "Quantity & Delivery Details",
    description:
      "Contextual units (bags, tonnes, CFT, m³, pieces) aur preferred unloading date provide karein taaki suppliers realistic logistics estimate share kar sakein.",
    icon: Truck,
    tag: "Logistics Accuracy",
  },
  {
    title: "Supplier Quotation Enquiries",
    description:
      "Direct quotes explore karein aur rates, payment terms aur unloading responsibilities par vendors ke saath directly communicate karein bina unnecessary middlemen ke.",
    icon: MessageSquareQuote,
    tag: "Direct Discussion",
  },
  {
    title: "Construction-Focused Platform",
    description:
      "Contractors, builders, site engineers aur independent home builders ki real procurement workflow ko dhyan me rakhkar platform banaya gaya hai.",
    icon: Building2,
    tag: "Industry Specialized",
  },
  {
    title: "Convenient Mobile Experience",
    description:
      "Active construction site par rehte hue mobile web ya native app ke through quick material requirement share karein aur real-time quotation discussion karein.",
    icon: Smartphone,
    tag: "On-Site Access",
  },
];

export function WhyMaterialsSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            badge="Platform Advantages"
            badgeColor="blue"
            title="Make Construction Material Enquiries Easier"
            description="Apne construction project ke procurement process ko simplify karein aur suppliers ke saath transparent communication establish karein."
            align="center"
          />
        </div>

        {/* 6 Benefit Cards: 3 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-blue-100/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F4511E] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#141B29] mb-3 leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#F4511E]">
                  <span>Optimized for contractors &amp; builders</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Responsible Transparency Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert className="w-4 h-4 text-slate-600" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#141B29] mb-1">
                Transparent Procurement Advisory
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Machine Wallah ek communication &amp; requirement connection platform hai. Hum third-party suppliers ki pricing, delivery timelines ya material quality ka fixed guarantee nahi dete. Final specifications aur commercial terms directly suppliers ke sath confirm karein.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
