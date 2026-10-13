"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Layers,
  MapPin,
  MessageSquareCheck,
  ArrowRight,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const MATERIAL_STAGES = [
  {
    stage: "01",
    title: "Select Material Category",
    description:
      "Cement, Sand / M-sand, Bricks & Blocks, TMT Steel, RMC ya Aggregates choose karein.",
    badge: "Category Sourcing",
    icon: Boxes,
  },
  {
    stage: "02",
    title: "Enter Specification & Quantity",
    description:
      "Required grade (OPC 53, Fe 500D, M25 concrete) aur quantity in contextual units (Bags, Tonnes, CFT, m³) add karein.",
    badge: "Technical Specs",
    icon: Layers,
  },
  {
    stage: "03",
    title: "Provide Delivery Location",
    description:
      "Site unloading address, city aur preferred delivery date share karein transit planning ke liye.",
    badge: "Destination",
    icon: MapPin,
  },
  {
    stage: "04",
    title: "Discuss Supplier Quotation & Terms",
    description:
      "Direct material suppliers ke sath competitive quotation, quality certificates aur payment terms discuss karein.",
    badge: "Direct Quote",
    icon: MessageSquareCheck,
  },
];

export function MaterialsWorkflowSection() {
  return (
    <section
      id="materials-workflow"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Material Photography (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group bg-white">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/service-materials.jpg"
                  alt="Construction material plant and ready-mix concrete staging"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-transparent to-transparent opacity-80" />
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#141B29]/95 backdrop-blur-md border border-slate-700 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFBE0B] text-[#141B29] font-black flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-[#141B29]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      Direct Plant Supply
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Bulk Raw Materials Sourcing
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Badge */}
            <div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-xl bg-white text-[#141B29] shadow-lg border border-white text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B1771B]" />
              <span>Direct Material Connect</span>
            </div>
          </div>

          {/* Right Column: Content & Step Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/25 backdrop-blur-md border border-white/20 text-white mb-3 shadow-sm">
                <span>Service 4: Materials</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                How Construction Material Enquiries Work
              </h2>
              <p className="mt-3 text-sm sm:text-base text-amber-50/95 leading-relaxed font-normal">
                Cement, sand, bricks, steel aur RMC ke liye single unified form ke through requirement specify karein aur direct suppliers ke quotes explore karein.
              </p>
            </div>

            {/* 4 Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MATERIAL_STAGES.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.stage}
                    className="p-5 rounded-2xl bg-white border border-white text-[#141B29] shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black text-[#8F6600] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          Stage {st.stage}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#141B29] mb-1.5">
                        {st.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {st.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs & Disclaimers */}
            <div className="space-y-3">
              <Button
                href="/materials"
                variant="yellow"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
                className="font-bold text-[#141B29] shadow-lg"
              >
                Explore Construction Materials
              </Button>

              <div className="p-3.5 rounded-xl bg-black/20 backdrop-blur-sm border border-white/20 text-xs text-white leading-relaxed">
                <strong className="text-amber-200">Clarity Note:</strong> Machine Wallah par material enquiry submit karne se order, final rate ya delivery time automatically confirm nahi hota. Commercial terms aur quality documentation (MTC/test reports) directly suppliers se confirm kiye jate hain.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
