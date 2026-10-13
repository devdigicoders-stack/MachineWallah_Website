"use client";

import React from "react";
import Image from "next/image";
import {
  Truck,
  Layers,
  Container as ContainerIcon,
  Archive,
  ArrowRight,
  Shield,
  Gauge,
  Sparkles,
  Tractor,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface TransportCategory {
  id: string;
  name: string;
  formValue: string;
  shortDesc: string;
  detailedUse: string;
  image: string;
  icon: React.ElementType;
  badge: string;
}

export const TRANSPORT_CATEGORIES: TransportCategory[] = [
  {
    id: "flatbed-truck",
    name: "Flatbed Truck",
    formValue: "Flatbed Truck",
    shortDesc: "For equipment, machinery and large cargo movement.",
    detailedUse: "Open bed allows easy side-loading of fabricated steel, structural framing and mid-size machinery.",
    image: "/images/service-transport.jpg",
    icon: Truck,
    badge: "Versatile Open-Bed",
  },
  {
    id: "low-bed-trailer",
    name: "Low-Bed Trailer",
    formValue: "Low-Bed Trailer",
    shortDesc: "For heavy and oversized construction machinery.",
    detailedUse: "Ultra-low deck height for hauling 20T+ excavators, road rollers, and heavy crawlers under road clearances.",
    image: "/images/hero-excavator.jpg",
    icon: Layers,
    badge: "Heavy Machinery",
  },
  {
    id: "tipper-dump-truck",
    name: "Tipper / Dump Truck",
    formValue: "Tipper / Dump Truck",
    shortDesc: "For sand, gravel, aggregate and bulk construction material.",
    detailedUse: "Hydraulic tipping body for quick unloading of bulk minerals, gitti, sand and earthwork excavation loads.",
    image: "/images/service-materials.jpg",
    icon: Gauge,
    badge: "Bulk Aggregates",
  },
  {
    id: "commercial-cargo-truck",
    name: "Commercial Cargo Truck",
    formValue: "Commercial Cargo Truck",
    shortDesc: "For general construction material and cargo transportation.",
    detailedUse: "Closed & semi-covered multi-axle freight trucks for palletized cement, tiles, piping and hardware.",
    image: "/images/service-buysell.jpg",
    icon: Truck,
    badge: "General Cargo",
  },
  {
    id: "container-truck",
    name: "Container Truck",
    formValue: "Container Truck",
    shortDesc: "For containerized and protected cargo movement.",
    detailedUse: "20ft & 40ft weather-proof ISO containers for delicate electrical gear, MEP equipment and export freight.",
    image: "/images/about-construction.jpg",
    icon: ContainerIcon,
    badge: "Weather Protected",
  },
  {
    id: "heavy-duty-trailer",
    name: "Heavy-Duty Trailer",
    formValue: "Heavy-Duty Trailer",
    shortDesc: "For industrial equipment and heavier transport loads.",
    detailedUse: "Multi-axle hydraulic puller trailers for long precast bridge girders, factory boilers and transformers.",
    image: "/images/about-hero.jpg",
    icon: Archive,
    badge: "Project Cargo",
  },
  {
    id: "mini-truck-pickup",
    name: "Mini Truck / Pickup",
    formValue: "Mini Truck / Pickup",
    shortDesc: "For smaller construction material loads and local deliveries.",
    detailedUse: "Compact intra-city haulers (Tata Ace, Bolero Maxi) for site repair supplies, urgent tools and small deliveries.",
    image: "/images/service-rent.jpg",
    icon: Truck,
    badge: "Local Intra-City",
  },
  {
    id: "specialized-machinery-carrier",
    name: "Specialized Machinery Carrier",
    formValue: "Specialized Machinery Carrier",
    shortDesc: "For specific construction equipment transportation requirements.",
    detailedUse: "Hydraulic ramp carriers and customized flat-racks designed specifically for plant equipment and road pavers.",
    image: "/images/service-transport.jpg",
    icon: Tractor,
    badge: "Specialized Carrier",
  },
];

interface TransportCategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function TransportCategoriesSection({
  onSelectCategory,
}: TransportCategoriesSectionProps) {
  const handleEnquire = (formValue: string) => {
    if (onSelectCategory) {
      onSelectCategory(formValue);
    } else {
      const el = document.getElementById("transport-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="transport-categories"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            badge="Vehicle Categories"
            badgeColor="blue"
            title="Transport Options for Different Requirements"
            description="Apne load aur project requirement ke according suitable transport category explore karein."
            align="center"
          />
        </div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {TRANSPORT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-blue-100/80 shadow-sm overflow-hidden"
              >
                <div>
                  {/* Image & Badge Container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.name} logistics transport vehicle`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/90 text-slate-800 shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#0879D1]" />
                        <span>{cat.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold text-[#141B29] leading-snug mb-1.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700 mb-2">
                      {cat.shortDesc}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {cat.detailedUse}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      Transport Flow
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEnquire(cat.formValue)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-[#0879D1] text-[#0879D1] hover:text-white text-xs font-bold transition-all duration-200 border border-blue-200/80 hover:border-[#0879D1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0879D1] group/btn cursor-pointer"
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
          <Sparkles className="w-4 h-4 text-[#0879D1] shrink-0" />
          <span>
            Yeh illustrative transport categories hain. Exact vehicle arrangement, route road permits aur quotation transporters ke saath direct discussion par depend karte hain.
          </span>
        </div>
      </Container>
    </section>
  );
}
