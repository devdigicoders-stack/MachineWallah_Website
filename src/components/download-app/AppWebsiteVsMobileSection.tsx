"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const WEB_POINTS = [
  "Understand Machine Wallah services and core verticals",
  "Browse comprehensive machinery, vehicle and material categories",
  "Learn how the platform operates through step-by-step guides",
  "Share structured requirements through configured website forms",
  "Find official company contact details and informational resources",
];

const APP_POINTS = [
  "Explore supported app-specific workflows directly from mobile",
  "Access customer and provider features shown in real app screens",
  "Work with machinery, transportation and material flows on the go",
  "Use supported in-app enquiry or quotation experiences where verified",
  "Convenient pocket access for active project sites and fleet operators",
];

export function AppWebsiteVsMobileSection() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            badge="Comparison"
            badgeColor="default"
            title="Explore the Website. Experience More on Mobile."
            description="Website aur mobile application ke distinct roles ko samjhein taaki aap sahi channel choose kar sakein."
            align="center"
          />
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Website Card */}
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Information Channel
                  </span>
                  <h3 className="text-lg font-black text-[#141B29]">
                    Machine Wallah Website
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 mb-6">
                {WEB_POINTS.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Button
                href="/how-it-works"
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center font-bold"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Mobile App Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-[#FFBE0B]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Mobile Experience
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Machine Wallah Mobile App
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 mb-6">
                {APP_POINTS.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Button
                href="/how-it-works#platform-process"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
                className="w-full justify-center font-bold text-[#141B29]"
              >
                View App Journey
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
