import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HardHat,
  Truck,
  Handshake,
  Layers,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface EditorialPanel {
  id: string;
  category: string;
  badgeColor: "yellow" | "blue" | "green" | "orange";
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout: boolean;
  accentBg: string;
}

const EDITORIAL_PANELS: EditorialPanel[] = [
  {
    id: "rent-machines",
    category: "Service 01",
    badgeColor: "yellow",
    title: "Heavy Equipment & Machine Rental",
    tagline: "Monthly aur daily basis par site-ready machinery",
    description:
      "Civil road works, excavation, ya residential project — JCB 3DX, 20-ton tracked excavators, soil compactors, aur hydra cranes ke liye apni enquiry post karein. Machine owners se seedha connect hokar transparent rates par equipment arrange karein.",
    keyFeatures: [
      "JCB 3DX, Poclain excavators aur transit mixers",
      "Monthly aur daily rental terms ke options",
      "Direct machine owner enquiry flow",
    ],
    ctaText: "Explore Rental Machinery",
    ctaHref: "/rent-machines",
    imageSrc: "/images/service-rent.jpg",
    imageAlt: "JCB 3DX backhoe loader working on road construction project",
    reverseLayout: false,
    accentBg: "border-l-4 border-l-[#FFBE0B]",
  },
  {
    id: "transport-services",
    category: "Service 02",
    badgeColor: "blue",
    title: "Machinery & Bulk Equipment Transport",
    tagline: "Low-bed trailers aur flatbed logistics pan-route",
    description:
      "Bhaari machines ko ek project site se doosri site move karne ke liye dedicated low-bed trailers, flatbeds aur heavy dumpers ki requirement share karein. Clear pickup aur drop coordination bina kisi pareshani ke.",
    keyFeatures: [
      "Multi-axle low-bed trailers for crawler excavators",
      "Flatbed trucks aur dumpers for construction site movement",
      "Inter-city aur local site-to-site transport support",
    ],
    ctaText: "Check Transport Logistics",
    ctaHref: "/transport",
    imageSrc: "/images/service-transport.jpg",
    imageAlt: "Heavy multi-axle trailer carrying crawler excavator machine on highway",
    reverseLayout: true,
    accentBg: "border-l-4 border-l-[#0879D1]",
  },
  {
    id: "buy-sell-machines",
    category: "Service 03",
    badgeColor: "green",
    title: "Buy & Sell Construction Machinery",
    tagline: "Used aur new machinery marketplace for contractors",
    description:
      "Apni idle construction machinery ko genuine buyers tak pahunchayein ya apne expanding fleet ke liye verified used equipment search karein. Machine details, working hours aur condition transparently share ki ja sakti hai.",
    keyFeatures: [
      "Used aur new earthmoving machinery listings",
      "Direct buyer-seller enquiry exchange",
      "Transparent machinery condition & hours overview",
    ],
    ctaText: "Explore Machine Marketplace",
    ctaHref: "/buy-sell",
    imageSrc: "/images/service-buysell.jpg",
    imageAlt: "Rows of construction machines and excavators in a machinery yard",
    reverseLayout: false,
    accentBg: "border-l-4 border-l-[#36A43B]",
  },
  {
    id: "construction-materials",
    category: "Service 04",
    badgeColor: "orange",
    title: "Direct Site Construction Materials",
    tagline: "RMC concrete, sand, aggregates, cement aur steel supply",
    description:
      "Construction projects ke liye daily building materials ki continuous supply zaroori hoti hai. RMC Ready Mix Concrete, sand (reti), aggregates (gitti), cement bags aur TMT steel ke liye direct suppliers se connect karein.",
    keyFeatures: [
      "RMC Concrete plant supply direct to site",
      "Quality aggregates, river sand aur cement bulk options",
      "Direct supplier coordination for regular deliveries",
    ],
    ctaText: "Enquire for Building Materials",
    ctaHref: "/materials",
    imageSrc: "/images/service-materials.jpg",
    imageAlt: "Construction materials yard with sand, gravel, cement bags and steel",
    reverseLayout: true,
    accentBg: "border-l-4 border-l-[#F4511E]",
  },
];

export function ExploreServicesSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden">
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
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Detailed Overview</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Explore Our Four Core Solutions
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Har vertical ko specific construction industry zarooraton ke hisaab se design kiya gaya hai.
          </p>
        </div>

        {/* Alternating Editorial Panels */}
        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-10">
          {EDITORIAL_PANELS.map((panel) => (
            <div
              key={panel.id}
              className={`rounded-3xl bg-white text-[#141B29] border border-white ${panel.accentBg} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-5 text-left ${
                    panel.reverseLayout ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {panel.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-600">
                      {panel.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141B29] tracking-tight">
                    {panel.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {panel.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 pt-1">
                    {panel.keyFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Contextual CTA */}
                  <div className="pt-3">
                    <Button
                      href={panel.ctaHref}
                      variant={panel.badgeColor}
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="font-bold shadow-xs hover:shadow-md"
                    >
                      {panel.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`lg:col-span-6 ${
                    panel.reverseLayout ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 group">
                    <Image
                      src={panel.imageSrc}
                      alt={panel.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
