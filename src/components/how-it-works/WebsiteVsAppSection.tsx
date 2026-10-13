"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Bell,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const WEBSITE_FEATURES = [
  "Comprehensive platform overview & business service exploration",
  "Understand clear Machine Wallah workflows for all 4 verticals",
  "Learn about machine specifications, vehicles & material categories",
  "Format structured enquiry summaries ready for dispatch",
  "Contact support & platform team via configured channels",
];

const APP_FEATURES = [
  "Explore app-specific mobile interface & user journeys",
  "On-the-go requirement submission directly from active job sites",
  "Access customer and provider flows shown in app previews",
  "Convenient access to listings, enquiries & quotation interactions",
  "Portable mobile access for contractors, drivers & site engineers",
];

export function WebsiteVsAppSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#141B29] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFBE0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0879D1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            badge="Platform Channels"
            badgeColor="default"
            theme="dark"
            title="Explore on Website. Discover More on the App."
            description="Informational website par processes samjhein aur mobile app ke through active job site par services explore karein."
            align="center"
          />
        </div>

        {/* 2-Column Comparison Layout with Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Website Card (4 cols) */}
          <div className="lg:col-span-4 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Browser Channel
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Machine Wallah Website
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Informational platform designed for desktop &amp; mobile web discovery, comprehensive process guides, and initial enquiry preparation.
              </p>

              <div className="space-y-3">
                {WEBSITE_FEATURES.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80 text-xs text-slate-400">
              Active &amp; accessible on any modern web browser.
            </div>
          </div>

          {/* Column 2: Phone Mockups Visual (4 cols) */}
          <div className="lg:col-span-4 flex justify-center py-2">
            <div className="relative flex items-center justify-center max-w-xs sm:max-w-sm w-full">
              {/* Back Mockup */}
              <div className="w-44 sm:w-50 aspect-[9/18.5] bg-slate-900 rounded-[2.2rem] p-2 shadow-2xl border-4 border-slate-700 rotate-6 translate-x-3 relative overflow-hidden">
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-details.png"
                    alt="Machine Wallah mobile application details preview"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Front Mockup */}
              <div className="w-48 sm:w-54 aspect-[9/18.5] bg-slate-900 rounded-[2.2rem] p-2 shadow-2xl border-4 border-[#FFBE0B] -rotate-3 -translate-x-5 relative overflow-hidden z-10">
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screen-home.png"
                    alt="Machine Wallah mobile application home screen preview"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Mobile App Card (4 cols) */}
          <div className="lg:col-span-4 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Mobile Experience
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Machine Wallah App
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Dedicated application experience tailored for on-site convenience, direct access, and streamlined customer/provider flows.
              </p>

              <div className="space-y-3">
                {APP_FEATURES.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0879D1] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80">
              <Button
                href="/download-app"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
                className="font-bold text-[#141B29]"
              >
                Explore Mobile App
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
