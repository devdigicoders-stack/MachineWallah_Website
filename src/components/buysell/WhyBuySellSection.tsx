"use client";

import React from "react";
import {
  Layers,
  ArrowLeftRight,
  Building2,
  FileText,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const BENEFITS: BenefitItem[] = [
  {
    id: "multiple-categories",
    title: "Multiple Machine Categories",
    description:
      "Excavators, JCBs, mobile cranes, road rollers aur graders ke broad spectrum me buying aur selling requirements explore karein.",
    icon: Layers,
    badge: "8+ Categories",
  },
  {
    id: "buying-selling-enquiries",
    title: "Buying & Selling Enquiries",
    description:
      "Chahe aap equipment kharidna chahein ya apni purani machine bechna chahein, structured platform par dono flows available hain.",
    icon: ArrowLeftRight,
    badge: "Dual Function",
  },
  {
    id: "construction-focused",
    title: "Construction-Focused Platform",
    description:
      "Sirf heavy engineering aur civil contractors ke real ground workflows ko dhyan me rakhkar banaya gaya specialized digital ecosystem.",
    icon: Building2,
    badge: "Industry Dedicated",
  },
  {
    id: "easy-requirement-sharing",
    title: "Easy Requirement Sharing",
    description:
      "Machine model, expected price, preferred condition aur site location structured form ke zariye easily submit karein.",
    icon: FileText,
    badge: "Simple Flow",
  },
  {
    id: "mobile-app-integration",
    title: "Explore via Mobile App",
    description:
      "Future-ready experience jahan mobile application par machines browse karna aur active leads track karna convenient hoga.",
    icon: Smartphone,
    badge: "Mobile Experience",
  },
  {
    id: "convenient-communication",
    title: "Convenient Communication",
    description:
      "Direct phone calls, WhatsApp messages ya web enquiries ke through buyer aur seller ke beech direct coordinate karein.",
    icon: WhatsAppIcon,
    badge: "Direct Contact",
  },
];

export function WhyBuySellSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Platform Advantages"
            badgeColor="blue"
            title="One Platform for Machinery Buying & Selling"
            description="Traditional middlemen networks ke confusion aur high brokerage ke bina direct machine transactions."
            align="center"
          />
        </div>

        {/* 6 Benefit Cards Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-blue-100/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Step Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#36A43B]/10 text-[#2E8B33] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#36A43B]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-[#141B29] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A43B]" />
                  <span>{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#36A43B] shrink-0" />
            <span>
              <strong>Note:</strong> Machine Wallah ek connection platform hai. Machinery ki actual mechanical condition, working hours, ownership verification aur final sale agreement buyer aur seller aapas me physically verify karte hain.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
