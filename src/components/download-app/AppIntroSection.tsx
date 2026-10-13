"use client";

import React from "react";
import Image from "next/image";
import {
  Tractor,
  Handshake,
  Truck,
  Package,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const APP_SERVICES_LIST = [
  {
    name: "Rent Machines",
    tagline: "Excavators, JCB 3DX, Cranes, Rollers",
    desc: "Site location aur rental duration ke sath machines explore karein aur owners se direct availability confirm karein.",
    colorHex: "#FFBE0B",
    icon: Tractor,
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    name: "Buy / Sell Machines",
    tagline: "New & Used Equipment Trading",
    desc: "Machinery specifications, running hours meter readings aur budget preferences ke through direct connection.",
    colorHex: "#36A43B",
    icon: Handshake,
    badgeBg: "bg-emerald-50 text-emerald-900 border-emerald-200",
  },
  {
    name: "Transport",
    tagline: "Trailers, Tippers, Cargo Trucks",
    desc: "Origin-destination route selection, vehicle category aur load tonnage ke according quotations share karein.",
    colorHex: "#0879D1",
    icon: Truck,
    badgeBg: "bg-sky-50 text-sky-900 border-sky-200",
  },
  {
    name: "Materials",
    tagline: "Cement, Sand, Steel, RMC, Aggregates",
    desc: "Grade specifications, contextual units (Bags, Tonnes, CFT, m³) aur project site unloading details organize karein.",
    colorHex: "#F4511E",
    icon: Package,
    badgeBg: "bg-orange-50 text-orange-950 border-orange-200",
  },
];

export function AppIntroSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Phone Frame with Actual App Screen (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[9/18.5] bg-slate-900 rounded-[2.8rem] p-3 shadow-2xl border-4 border-slate-800">
              {/* Speaker / Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20" />

              {/* Screen Area */}
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-50">
                <Image
                  src="/images/app-screen-home.png"
                  alt="Machine Wallah actual mobile application home dashboard"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#141B29] border border-slate-700 text-white shadow-xl flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-[#FFBE0B] shrink-0" />
                <span className="text-[11px] font-bold text-slate-200">
                  Real Machine Wallah App UI
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & 4 Colored Service Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141B29]" />
                App Experience
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#141B29] tracking-tight leading-tight">
                Everything Your Construction Work Needs — In One App.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Machine Wallah ek construction-focused platform hai jo customers aur industry service providers ke liye machinery, transport aur construction material-related options ko ek convenient mobile experience mein organize karta hai.
              </p>
            </div>

            {/* 4 Colored Service Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {APP_SERVICES_LIST.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.name}
                    className="p-5 rounded-2xl bg-white border border-blue-100/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${srv.badgeBg}`}
                        >
                          {srv.name}
                        </span>
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: srv.colorHex }}
                        />
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#141B29] mb-1">
                        {srv.tagline}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
