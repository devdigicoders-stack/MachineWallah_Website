"use client";

import React from "react";
import {
  Building2,
  Layers,
  MapPin,
  FileSpreadsheet,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TransportBenefit {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const BENEFITS: TransportBenefit[] = [
  {
    id: "construction-focused",
    title: "Construction-Focused Transport Requirements",
    description:
      "General parcel logistics ke bajaye specifically heavy engineering, construction equipment aur bulk raw material transport ke liye banaya gaya system.",
    icon: Building2,
    badge: "Industry Dedicated",
  },
  {
    id: "multiple-categories",
    title: "Multiple Vehicle Categories to Explore",
    description:
      "Low-bed trailers, extended flatbeds, multi-axle tippers, closed cargo trucks se lekar local pickups tak multiple options ek hi place par explore karein.",
    icon: Layers,
    badge: "8+ Options",
  },
  {
    id: "pickup-drop-details",
    title: "Simple Pickup & Drop Details",
    description:
      "Site loading point, destination city, delivery road access aur tentative date simple form ke through structured way me share karein.",
    icon: MapPin,
    badge: "Easy Route Entry",
  },
  {
    id: "convenient-enquiry",
    title: "Convenient Enquiry Process",
    description:
      "Traditional brokers ki lambi chain aur call confusion ke bina transparent enquiry create karein bina kisi advance fee ke.",
    icon: FileSpreadsheet,
    badge: "Direct Process",
  },
  {
    id: "quotation-discussions",
    title: "Connect for Quotation Discussions",
    description:
      "Enquiry submit karne ke baad available transport providers se direct connect hokar per-trip ya per-tonne competitive rates discuss karein.",
    icon: RealPhoneCallingIcon,
    badge: "Direct Discussion",
  },
  {
    id: "mobile-app-experience",
    title: "Mobile App Experience",
    description:
      "Smartphone par active logistics requirements browse karna aur transport updates manage karna future mobile app ke through aasaan banega.",
    icon: Smartphone,
    badge: "Mobile Ready",
  },
];

export function WhyTransportSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            badge="Platform Advantages"
            badgeColor="blue"
            title="Make Transport Enquiries Simpler"
            description="Heavy machinery aur bulk construction freight sourcing ko hassle-free banane ke liye dedicated digital solution."
            align="center"
          />
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-blue-100/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Step Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0879D1]/10 text-[#0879D1] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0879D1]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-[#141B29] mb-2.5 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0879D1]" />
                  <span>{b.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50/80 border border-blue-200/70 text-xs text-blue-950 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#0879D1] shrink-0" />
            <span>
              <strong>Note:</strong> Freight charges, transit timeline, toll tax, loading labor aur route permit terms actual transporter discussions aur freight agreements ke mutabik finalize hote hain.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
