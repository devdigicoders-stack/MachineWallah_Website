"use client";

import React from "react";
import Image from "next/image";
import {
  Package,
  Layers,
  Boxes,
  Shield,
  Truck,
  Disc,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  Hammer,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface MaterialCategory {
  id: string;
  name: string;
  formValue: string;
  shortDesc: string;
  typicalUses: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  defaultUnit: string;
}

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: "cement",
    name: "Cement",
    formValue: "Cement",
    shortDesc: "OPC, PPC aur specialized construction cement brands.",
    typicalUses: "Concrete, mortar, masonry aur plastering requirements.",
    image: "/images/service-materials.jpg",
    icon: Package,
    badge: "Foundation & Plaster",
    defaultUnit: "Bags",
  },
  {
    id: "sand",
    name: "Sand / M-Sand",
    formValue: "Sand / M-Sand",
    shortDesc: "River sand, manufactured sand (M-sand) aur plaster sand.",
    typicalUses: "Plastering, masonry aur high-strength concrete mixes.",
    image: "/images/about-construction.jpg",
    icon: Layers,
    badge: "Plaster & Concrete",
    defaultUnit: "Cubic Feet (CFT)",
  },
  {
    id: "bricks-blocks",
    name: "Bricks & Blocks",
    formValue: "Bricks & Blocks",
    shortDesc: "Clay bricks, fly ash bricks, AAC blocks aur solid blocks.",
    typicalUses: "Load bearing walls, partition walls aur masonry work.",
    image: "/images/service-buysell.jpg",
    icon: Boxes,
    badge: "Masonry Units",
    defaultUnit: "Pieces",
  },
  {
    id: "tmt-steel",
    name: "TMT Steel & Reinforcement",
    formValue: "TMT Steel & Reinforcement",
    shortDesc: "Primary & secondary TMT rebar, binding wire aur structural steel.",
    typicalUses: "Columns, beams, slabs aur structural reinforcement.",
    image: "/images/hero-excavator.jpg",
    icon: Shield,
    badge: "Structural Rebar",
    defaultUnit: "Tonnes",
  },
  {
    id: "rmc",
    name: "Ready-Mix Concrete (RMC)",
    formValue: "Ready-Mix Concrete (RMC)",
    shortDesc: "Design-mix concrete delivery via transit mixers with pumps.",
    typicalUses: "Slab casting, foundation footings aur rapid commercial pours.",
    image: "/images/service-materials.jpg",
    icon: Truck,
    badge: "Transit Mix Pour",
    defaultUnit: "Cubic Meters (m³)",
  },
  {
    id: "stone-aggregates",
    name: "Stone Aggregates",
    formValue: "Stone Aggregates",
    shortDesc: "Crushed stone (10mm, 20mm, 40mm gitti) aur stone dust.",
    typicalUses: "RCC concrete casting, road sub-base aur drainage beds.",
    image: "/images/about-hero.jpg",
    icon: Disc,
    badge: "Crushed Gitti",
    defaultUnit: "Tonnes",
  },
  {
    id: "paver-blocks",
    name: "Paver Blocks & Tiles",
    formValue: "Paver Blocks & Tiles",
    shortDesc: "Interlocking paver blocks, chequered tiles aur curb stones.",
    typicalUses: "Driveways, pathways, parking lots aur exterior paving.",
    image: "/images/service-rent.jpg",
    icon: LayoutGrid,
    badge: "Paving & Pathways",
    defaultUnit: "Pieces",
  },
  {
    id: "other-materials",
    name: "Other Building Materials",
    formValue: "Other Building Materials",
    shortDesc: "Waterproofing chemicals, binding agents aur custom project materials.",
    typicalUses: "Finishing, plumbing support aur custom site specifications.",
    image: "/images/service-transport.jpg",
    icon: Sparkles,
    badge: "Custom Supplies",
    defaultUnit: "Other",
  },
];

interface MaterialCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export function MaterialCategoriesSection({
  onSelectCategory,
}: MaterialCategoriesSectionProps) {
  const handleEnquire = (formValue: string) => {
    if (onSelectCategory) {
      onSelectCategory(formValue);
    } else {
      const el = document.getElementById("material-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="material-categories"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            badge="Material Categories"
            badgeColor="blue"
            title="Explore Construction Material Categories"
            description="Apne project ke liye required building materials ki category select karein."
            align="center"
          />
        </div>

        {/* Responsive Grid: 4 columns desktop, 2 tablet, 1-2 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {MATERIAL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-blue-100/80 shadow-sm overflow-hidden"
              >
                <div>
                  {/* Image & Category Pill */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.name} construction material`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/95 text-slate-800 shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#F4511E]" />
                        <span>{cat.badge}</span>
                      </span>
                    </div>

                    {/* Default Unit Micro Tag */}
                    <div className="absolute bottom-2.5 right-3">
                      <span className="text-[10px] font-bold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        Unit: {cat.defaultUnit}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold text-[#141B29] leading-snug mb-1.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700 mb-2">
                      {cat.shortDesc}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      <span className="font-semibold text-slate-600">Uses: </span>
                      {cat.typicalUses}
                    </p>
                  </div>
                </div>

                {/* Footer Action CTA */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <button
                    onClick={() => handleEnquire(cat.formValue)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#141B29] hover:bg-[#F4511E] transition-all duration-200 group-hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F4511E] focus:ring-offset-1"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 p-4 rounded-xl bg-orange-50/60 border border-orange-100 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Hammer className="w-4 h-4 text-[#F4511E] shrink-0" />
            <span>
              Specific grade, bulk volume ya custom mix requirements ke liye form me details add karein.
            </span>
          </div>
          <span className="font-semibold text-[#F4511E]">
            Direct Quotation Connect
          </span>
        </div>
      </Container>
    </section>
  );
}
