"use client";

import React from "react";
import {
  DownloadCloud,
  Layers,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const START_STEPS = [
  {
    step: "01",
    title: "Get the App",
    tagline: "App Installation",
    description:
      "Official app download link se Machine Wallah install karein, jab link available ho.",
    note: "Official verified links provide kiye jayenge.",
    icon: DownloadCloud,
    colorHex: "#FFBE0B",
  },
  {
    step: "02",
    title: "Explore Your Service",
    tagline: "Service Navigation",
    description:
      "Machine rent, buy/sell, transport ya materials category choose karein.",
    note: "Home screen par 4 core options available hain.",
    icon: Layers,
    colorHex: "#0879D1",
  },
  {
    step: "03",
    title: "Share Your Requirement",
    tagline: "Requirement Flow",
    description:
      "App ke supported workflow ke through relevant details share karein aur next steps explore karein.",
    note: "Quotes receive karein aur direct discuss karein.",
    icon: Send,
    colorHex: "#36A43B",
  },
];

export function AppHowToStartSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Simple Steps"
            badgeColor="blue"
            title="Getting Started Is Simple."
            description="Machine Wallah mobile application ke sath shuruwat karne ke 3 simple stages."
            align="center"
          />
        </div>

        {/* 3-Step Connected Flow on Desktop / Stacked on Mobile */}
        <div className="relative">
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-amber-200 via-sky-200 to-emerald-200 -translate-y-14 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {START_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="group flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-blue-100/80 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#141B29] shadow-md transition-transform group-hover:scale-105"
                        style={{ backgroundColor: s.colorHex }}
                      >
                        <Icon className="w-7 h-7 text-slate-900" />
                      </div>
                      <span className="text-4xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                        {s.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      {s.tagline}
                    </span>

                    <h3 className="text-xl font-black text-[#141B29] mb-3 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {s.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{s.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
