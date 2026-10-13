"use client";

import React from "react";
import Image from "next/image";
import {
  HardHat,
  Truck,
  Wrench,
  Layers,
  ArrowRight,
  Shield,
  Compass,
  Hammer,
  RotateCw,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface MachineCategory {
  id: string;
  name: string;
  formValue: string;
  useCase: string;
  detailedSpecs: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  tagColor: string;
}

export const MACHINE_CATEGORIES: MachineCategory[] = [
  {
    id: "backhoe-loader",
    name: "Backhoe Loader (JCB)",
    formValue: "Backhoe Loader (JCB)",
    useCase: "Digging, excavation, trenching and loading.",
    detailedSpecs: "Versatile 4x4 workhorse for foundation digging, utility trenches & soil loading.",
    image: "/images/service-rent.jpg",
    icon: HardHat,
    badge: "Versatile Choice",
    tagColor: "border-[#FFBE0B]/40 bg-[#FFBE0B]/10 text-[#8F6600]",
  },
  {
    id: "excavator",
    name: "Excavator",
    formValue: "Excavator",
    useCase: "Heavy excavation, demolition and earthmoving.",
    detailedSpecs: "Tracked 7T to 20T+ heavy diggers for deep basements, canals & rocky terrain.",
    image: "/images/hero-excavator.jpg",
    icon: Layers,
    badge: "Heavy Earthmoving",
    tagColor: "border-[#0879D1]/40 bg-[#0879D1]/10 text-[#0879D1]",
  },
  {
    id: "mobile-crane-hydra",
    name: "Mobile Crane / Hydra",
    formValue: "Crane / Hydra",
    useCase: "Equipment lifting and material handling.",
    detailedSpecs: "Hydra 12T to 25T pick-and-carry cranes for girders, precast & steel columns.",
    image: "/images/about-hero.jpg",
    icon: Truck,
    badge: "Material Lifting",
    tagColor: "border-[#36A43B]/40 bg-[#36A43B]/10 text-[#2E8B33]",
  },
  {
    id: "road-roller",
    name: "Road Roller",
    formValue: "Road Roller",
    useCase: "Soil, asphalt and road compaction.",
    detailedSpecs: "Vibratory soil compactors & tandem asphalt rollers for highway & pavement work.",
    image: "/images/about-construction.jpg",
    icon: Gauge,
    badge: "Surface Compaction",
    tagColor: "border-[#F4511E]/40 bg-[#F4511E]/10 text-[#D83B0A]",
  },
  {
    id: "wheel-loader",
    name: "Wheel Loader",
    formValue: "Wheel Loader",
    useCase: "Loading and material movement.",
    detailedSpecs: "High-capacity buckets for moving sand, aggregates, soil & quarry stockpiles.",
    image: "/images/service-buysell.jpg",
    icon: Compass,
    badge: "Bulk Loading",
    tagColor: "border-[#FFBE0B]/40 bg-[#FFBE0B]/10 text-[#8F6600]",
  },
  {
    id: "bulldozer",
    name: "Bulldozer",
    formValue: "Bulldozer",
    useCase: "Land clearing and heavy earthmoving.",
    detailedSpecs: "Crawler dozers with heavy blades for site clearing, cut-and-fill & rough grading.",
    image: "/images/service-materials.jpg",
    icon: Hammer,
    badge: "Site Clearing",
    tagColor: "border-[#0879D1]/40 bg-[#0879D1]/10 text-[#0879D1]",
  },
  {
    id: "motor-grader",
    name: "Motor Grader",
    formValue: "Motor Grader",
    useCase: "Road leveling and surface grading.",
    detailedSpecs: "Precision moldboard grading for sub-base leveling, road edges & finish surfaces.",
    image: "/images/hero-excavator.jpg",
    icon: Wrench,
    badge: "Precision Grading",
    tagColor: "border-[#36A43B]/40 bg-[#36A43B]/10 text-[#2E8B33]",
  },
  {
    id: "concrete-mixer",
    name: "Concrete Mixer",
    formValue: "Concrete Mixer",
    useCase: "Concrete mixing for construction work.",
    detailedSpecs: "Transit mixers & mobile batch units for timely concrete delivery on site.",
    image: "/images/service-materials.jpg",
    icon: RotateCw,
    badge: "Concrete Works",
    tagColor: "border-[#F4511E]/40 bg-[#F4511E]/10 text-[#D83B0A]",
  },
];

interface MachineCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export function MachineCategoriesSection({
  onSelectCategory,
}: MachineCategoriesSectionProps) {
  const handleEnquire = (formValue: string) => {
    if (onSelectCategory) {
      onSelectCategory(formValue);
    } else {
      const enquirySection = document.getElementById("rental-enquiry");
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="categories"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            badge="Machine Lineup"
            badgeColor="yellow"
            title="Machines for Every Construction Requirement"
            description="Apne project ke according suitable machine category explore karein."
            align="center"
          />
        </div>

        {/* 4-column responsive grid (4 on xl/lg, 2 on md/sm, 1-2 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {MACHINE_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-blue-100/80 shadow-sm overflow-hidden"
              >
                {/* Image & Category Badge Container */}
                <div>
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} available for rental enquiries on Machine Wallah`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#141B29]" />
                        <span>{category.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-extrabold text-[#141B29] leading-snug">
                        {category.name}
                      </h3>
                    </div>

                    {/* Short Core Use Case */}
                    <p className="text-xs font-semibold text-slate-700 mb-2">
                      {category.useCase}
                    </p>

                    {/* Detailed Specifications / Application snippet */}
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {category.detailedSpecs}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      Rental Option
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEnquire(category.formValue)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-[#FFBE0B] text-[#8F6600] hover:text-[#141B29] text-xs font-bold transition-all duration-200 border border-amber-200/80 hover:border-[#FFBE0B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] group/btn cursor-pointer"
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

        {/* Category Footnote Notice */}
        <div className="mt-10 sm:mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-500 text-center shadow-xs">
          <Sparkles className="w-4 h-4 text-[#FFBE0B] shrink-0" />
          <span>
            Specialized machine configuration chahiye? Hamare rental enquiry form me customized details share karein.
          </span>
        </div>
      </Container>
    </section>
  );
}
