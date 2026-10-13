"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  MapPin,
  Scale,
  MessageSquareCheck,
  ArrowRight,
  AlertCircle,
  Route,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const TRANSPORT_STAGES = [
  {
    stage: "01",
    title: "Select Vehicle / Load Type",
    description:
      "Flatbed truck, low-bed trailer, tipper, cargo container ya mini pickup category select karein.",
    badge: "Fleet Selection",
    icon: Truck,
  },
  {
    stage: "02",
    title: "Add Pickup & Drop Locations",
    description:
      "Origin site/city aur destination delivery address details specify karein with road access conditions.",
    badge: "Route Planning",
    icon: MapPin,
  },
  {
    stage: "03",
    title: "Share Weight, Dimensions & Date",
    description:
      "Tonnage (Tonnes/kg), dimensions (length/width/height) aur preferred dispatch date enter karein.",
    badge: "Load Specs",
    icon: Scale,
  },
  {
    stage: "04",
    title: "Discuss Availability & Quotation",
    description:
      "Commercial freight rate, toll/diesel terms, driver contact aur route permits finalize karein.",
    badge: "Direct Connect",
    icon: MessageSquareCheck,
  },
];

export function TransportWorkflowSection() {
  return (
    <section
      id="transport-workflow"
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Route Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" />
                Service 3: Transport
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#141B29] tracking-tight leading-tight">
                How Transport Enquiries Work
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Heavy machinery aur construction materials ke dispatch ke liye trailer aur truck requirement share karne ka 4-stage logistics route.
              </p>
            </div>

            {/* Route-like Visual Connected Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-sky-300 space-y-6">
              {TRANSPORT_STAGES.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.stage} className="relative group">
                    {/* Node Dot on Timeline */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#0879D1] flex items-center justify-center text-[10px] font-black text-[#0879D1] shadow-xs">
                      {st.stage}
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-sky-200/90 shadow-xs transition-all duration-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-[#141B29] flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#0879D1]" />
                          <span>{st.title}</span>
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                          {st.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
                href="/transport"
                variant="blue"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                className="font-bold text-white shadow-md shadow-blue-600/20"
              >
                Explore Transport
              </Button>

              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200/80 text-xs text-sky-900 leading-relaxed">
                <strong>Important Logistics Note:</strong> Transport enquiry submit karna booking confirm nahi karta. Rates, availability aur state RTO permits (khaaskar oversized ODC consignments ke liye) transporter ke sath directly confirm kiye jate hain.
              </div>
            </div>
          </div>

          {/* Right Column: Visual Trailer Imagery & Route Graphic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-sky-200 shadow-xl group bg-white">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/service-transport.jpg"
                  alt="Heavy commercial trailer logistics transport"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#141B29]/95 backdrop-blur-md border border-slate-700 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0879D1] text-white flex items-center justify-center shrink-0">
                    <Route className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">
                      Freight &amp; Cargo
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Inter-City &amp; Site-to-Site Haulage
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Badge */}
            <div className="absolute -top-3 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-white text-[#141B29] shadow-lg border border-sky-200 text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0879D1]" />
              <span>Blue Accent Workflow</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
