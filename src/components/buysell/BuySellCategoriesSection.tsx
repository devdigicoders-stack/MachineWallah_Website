"use client";

import React from "react";
import Image from "next/image";
import {
  HardHat,
  Truck,
  Wrench,
  Layers,
  ArrowRight,
  Compass,
  Hammer,
  RotateCw,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface BuySellCategory {
  id: string;
  name: string;
  formValue: string;
  useCase: string;
  image: string;
  icon: React.ElementType;
  badge: string;
}

export const BUY_SELL_CATEGORIES: BuySellCategory[] = [
  {
    id: "backhoe-loader",
    name: "Backhoe Loader (JCB)",
    formValue: "Backhoe Loader (JCB)",
    useCase: "Popular 4x4 loader for trenching, general excavation and loading operations.",
    image: "/images/service-rent.jpg",
    icon: HardHat,
    badge: "High Demand",
  },
  {
    id: "excavator",
    name: "Excavator",
    formValue: "Excavator",
    useCase: "Heavy tracked excavators (7T to 30T+) for mining, deep basements and demolition.",
    image: "/images/hero-excavator.jpg",
    icon: Layers,
    badge: "Heavy Earthmoving",
  },
  {
    id: "crane-hydra",
    name: "Crane / Hydra",
    formValue: "Crane / Hydra",
    useCase: "Mobile pick-and-carry hydra cranes and heavy mobile cranes for site lifting.",
    image: "/images/about-hero.jpg",
    icon: Truck,
    badge: "Material Handling",
  },
  {
    id: "road-roller",
    name: "Road Roller",
    formValue: "Road Roller",
    useCase: "Soil compactors and asphalt vibratory rollers for road projects and pavements.",
    image: "/images/about-construction.jpg",
    icon: Gauge,
    badge: "Road Works",
  },
  {
    id: "wheel-loader",
    name: "Wheel Loader",
    formValue: "Wheel Loader",
    useCase: "Heavy front-end bucket loaders for sand, aggregates, and stone quarry loading.",
    image: "/images/service-buysell.jpg",
    icon: Compass,
    badge: "Material Movement",
  },
  {
    id: "bulldozer",
    name: "Bulldozer",
    formValue: "Bulldozer",
    useCase: "Crawler bulldozers with heavy blades for rough site clearing and land levelling.",
    image: "/images/service-materials.jpg",
    icon: Hammer,
    badge: "Land Clearing",
  },
  {
    id: "motor-grader",
    name: "Motor Grader",
    formValue: "Motor Grader",
    useCase: "Precision moldboard grading for sub-base leveling and road surface finishing.",
    image: "/images/hero-excavator.jpg",
    icon: Wrench,
    badge: "Surface Leveling",
  },
  {
    id: "concrete-equipment",
    name: "Concrete Equipment",
    formValue: "Concrete Equipment",
    useCase: "Transit mixers, batching units, and mobile pumps for civil building structures.",
    image: "/images/service-materials.jpg",
    icon: RotateCw,
    badge: "Civil Casting",
  },
];

interface BuySellCategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function BuySellCategoriesSection({
  onSelectCategory,
}: BuySellCategoriesSectionProps) {
  const handleEnquire = (formValue: string) => {
    if (onSelectCategory) {
      onSelectCategory(formValue);
    } else {
      const el = document.getElementById("buy-sell-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Machinery Lineup</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Explore Construction Machine Categories
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Different machinery categories ke liye buying aur selling requirements share karein.
          </p>
        </div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {BUY_SELL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between bg-white text-[#141B29] rounded-3xl border border-white shadow-xl overflow-hidden"
              >
                <div>
                  {/* Image & Badge Container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.name} available for buy or sell inquiries on Machine Wallah`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#36A43B]" />
                        <span>{cat.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold text-[#141B29] leading-snug mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cat.useCase}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      Buy or Sell
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEnquire(cat.formValue)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-[#36A43B] text-[#257328] hover:text-white text-xs font-bold transition-all duration-200 border border-emerald-200/80 hover:border-[#36A43B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36A43B] group/btn cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-10 sm:mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-500 text-center shadow-xs">
          <Sparkles className="w-4 h-4 text-[#36A43B] shrink-0" />
          <span>
            Special equipment ya custom machinery configuration chahiye? Form me customized requirement details share karein.
          </span>
        </div>
      </Container>
    </section>
  );
}
