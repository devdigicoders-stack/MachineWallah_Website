"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tractor,
  Handshake,
  Truck,
  Package,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CoreAppFeature {
  id: string;
  name: string;
  categoryTag: string;
  headline: string;
  description: string;
  image: string;
  colorHex: string;
  borderColor: string;
  bgGlow: string;
  routeHref: string;
  icon: React.ElementType;
}

const CORE_APP_FEATURES: CoreAppFeature[] = [
  {
    id: "rent",
    name: "Rent Machines",
    categoryTag: "Rental Category",
    headline: "Rental Equipment Exploration",
    description:
      "Construction equipment rental requirements explore karein aur relevant machine-related enquiries share karein.",
    image: "/images/service-rent.jpg",
    colorHex: "#FFBE0B",
    borderColor: "hover:border-[#FFBE0B]/80",
    bgGlow: "bg-[#FFBE0B]/10",
    routeHref: "/rent-machines",
    icon: Tractor,
  },
  {
    id: "buysell",
    name: "Buy / Sell Machines",
    categoryTag: "Trading Category",
    headline: "Machinery Buying & Selling",
    description:
      "Machinery buying aur selling se related options, requirements aur available app workflows explore karein.",
    image: "/images/service-buysell.jpg",
    colorHex: "#36A43B",
    borderColor: "hover:border-[#36A43B]/80",
    bgGlow: "bg-[#36A43B]/10",
    routeHref: "/buy-sell",
    icon: Handshake,
  },
  {
    id: "transport",
    name: "Transport Services",
    categoryTag: "Logistics Category",
    headline: "Equipment & Freight Logistics",
    description:
      "Pickup, drop, load aur transport-related requirements ko organize aur share karein.",
    image: "/images/service-transport.jpg",
    colorHex: "#0879D1",
    borderColor: "hover:border-[#0879D1]/80",
    bgGlow: "bg-[#0879D1]/10",
    routeHref: "/transport",
    icon: Truck,
  },
  {
    id: "materials",
    name: "Construction Materials",
    categoryTag: "Materials Category",
    headline: "Raw Building Supplies",
    description:
      "Building materials, quantities aur supplier quotation-related requirements explore karein.",
    image: "/images/service-materials.jpg",
    colorHex: "#F4511E",
    borderColor: "hover:border-[#F4511E]/80",
    bgGlow: "bg-[#F4511E]/10",
    routeHref: "/materials",
    icon: Package,
  },
];

export function AppCoreServicesSection() {
  return (
    <section
      id="app-features"
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
            <span>Core Verticals</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Explore What You Can Do with Machine Wallah
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Ek single mobile app ke andar char critical construction verticals ke structured requirement workflows.
          </p>
        </div>

        {/* 4 Feature Cards: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CORE_APP_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className={`group flex flex-col justify-between bg-white text-[#141B29] rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 ${feat.borderColor}`}
              >
                <div>
                  {/* Image Container with Accent Badge */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={feat.image}
                      alt={`${feat.name} mobile feature`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/95 text-slate-800 shadow-sm">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: feat.colorHex }}
                        />
                        <span>{feat.categoryTag}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: feat.bgGlow }}
                      >
                        <Icon className="w-4 h-4 text-slate-900" />
                      </div>
                      <h3 className="text-base font-extrabold text-[#141B29] leading-snug">
                        {feat.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={feat.routeHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#141B29] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
