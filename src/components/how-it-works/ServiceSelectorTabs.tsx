"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Tractor,
  Handshake,
  Truck,
  Package,
  ArrowRight,
  ChevronDown,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export type ServiceTabId = "rent" | "buysell" | "transport" | "materials";

interface ServiceTabInfo {
  id: ServiceTabId;
  name: string;
  tagline: string;
  badge: string;
  colorHex: string;
  accentBg: string;
  textColor: string;
  borderColor: string;
  anchorId: string;
  pageHref: string;
  pageCtaText: string;
  icon: React.ElementType;
  summary: string;
  stepsPreview: { step: string; title: string; desc: string }[];
}

const SERVICE_TABS: ServiceTabInfo[] = [
  {
    id: "rent",
    name: "Rent Machines",
    tagline: "Heavy Equipment on Flexible Rental",
    badge: "Rental Workflow",
    colorHex: "#FFBE0B",
    accentBg: "bg-[#FFBE0B]",
    textColor: "text-amber-500",
    borderColor: "border-[#FFBE0B]",
    anchorId: "rent-workflow",
    pageHref: "/rent-machines",
    pageCtaText: "Explore Rent Machines Page",
    icon: Tractor,
    summary:
      "JCB, excavator, cranes aur rollers jaise equipment ko monthly ya daily basis par rent karne ke liye enquiry share karein aur owners se direct availability confirm karein.",
    stepsPreview: [
      { step: "01", title: "Choose Category", desc: "Select machine type" },
      { step: "02", title: "Share Duration", desc: "Specify days/months & site" },
      { step: "03", title: "Send Enquiry", desc: "Submit contact details" },
      { step: "04", title: "Confirm Terms", desc: "Discuss operator & pricing" },
    ],
  },
  {
    id: "buysell",
    name: "Buy / Sell",
    tagline: "Verified Machinery Buying & Selling",
    badge: "Trading Workflow",
    colorHex: "#36A43B",
    accentBg: "bg-[#36A43B]",
    textColor: "text-emerald-500",
    borderColor: "border-[#36A43B]",
    anchorId: "buy-sell-workflow",
    pageHref: "/buy-sell",
    pageCtaText: "Explore Buy / Sell Page",
    icon: Handshake,
    summary:
      "Used aur new machinery purchase karne ya apni idle machinery sell karne ke liye requirements submit karein aur direct interested parties ke sath deal discuss karein.",
    stepsPreview: [
      { step: "01", title: "Select Journey", desc: "Choose Buying or Selling" },
      { step: "02", title: "Machine Specs", desc: "Add model, year & condition" },
      { step: "03", title: "Budget / Price", desc: "Set expected valuation" },
      { step: "04", title: "Direct Contact", desc: "Review details & finalize" },
    ],
  },
  {
    id: "transport",
    name: "Transport",
    tagline: "Heavy Logistics & Trailer Freight",
    badge: "Logistics Workflow",
    colorHex: "#0879D1",
    accentBg: "bg-[#0879D1]",
    textColor: "text-blue-500",
    borderColor: "border-[#0879D1]",
    anchorId: "transport-workflow",
    pageHref: "/transport",
    pageCtaText: "Explore Transport Page",
    icon: Truck,
    summary:
      "Low-bed trailers, flatbeds, tippers aur commercial cargo fleets ke through machinery ya heavy building materials ke inter-city aur local movement ke quotes explore karein.",
    stepsPreview: [
      { step: "01", title: "Vehicle Type", desc: "Pick trailer or truck type" },
      { step: "02", title: "Route Details", desc: "Add pickup & drop locations" },
      { step: "03", title: "Cargo Specs", desc: "Weight, dimensions & date" },
      { step: "04", title: "Quote Discussion", desc: "Agree on rates & permits" },
    ],
  },
  {
    id: "materials",
    name: "Materials",
    tagline: "Direct Sourcing for Raw Building Materials",
    badge: "Materials Workflow",
    colorHex: "#F4511E",
    accentBg: "bg-[#F4511E]",
    textColor: "text-orange-500",
    borderColor: "border-[#F4511E]",
    anchorId: "materials-workflow",
    pageHref: "/materials",
    pageCtaText: "Explore Materials Page",
    icon: Package,
    summary:
      "Cement, sand/M-sand, bricks, TMT steel, RMC aur aggregates ke requirements share karein aur direct suppliers se quotations explore karein.",
    stepsPreview: [
      { step: "01", title: "Pick Category", desc: "Cement, Steel, RMC, etc." },
      { step: "02", title: "Set Quantity", desc: "Enter grade & units" },
      { step: "03", title: "Site Location", desc: "Provide delivery destination" },
      { step: "04", title: "Get Quotation", desc: "Discuss rates with suppliers" },
    ],
  },
];

interface ServiceSelectorTabsProps {
  activeTab?: ServiceTabId;
  onTabChange?: (tabId: ServiceTabId) => void;
}

export function ServiceSelectorTabs({
  activeTab = "rent",
  onTabChange,
}: ServiceSelectorTabsProps) {
  const [selectedTab, setSelectedTab] = useState<ServiceTabId>(activeTab);

  const handleSelectTab = (tabId: ServiceTabId) => {
    setSelectedTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const currentTab =
    SERVICE_TABS.find((t) => t.id === selectedTab) || SERVICE_TABS[0];
  const Icon = currentTab.icon;

  const scrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="service-workflows"
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Interactive Navigator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Select a Service to Explore Its Process
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Har service ka enquiry process alag hota hai. Niche kisi bhi service ko select karein aur uska step-by-step workflow preview dekhein.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div
          role="tablist"
          aria-label="Service Process Navigation"
          className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none max-w-4xl mx-auto"
        >
          {SERVICE_TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-[#141B29] text-white shadow-xl scale-[1.02] border border-white/20"
                    : "bg-white/90 text-slate-800 hover:bg-white shadow-sm"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: tab.colorHex }}
                />
                <TabIcon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div
          role="tabpanel"
          id={`panel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
          className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl border border-white p-4 sm:p-8 md:p-10 shadow-2xl text-[#141B29] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: currentTab.colorHex }}
              >
                <Icon className="w-7 h-7 text-slate-900" />
              </div>
              <div>
                <span
                  className="text-[11px] font-extrabold uppercase tracking-wider block mb-0.5"
                  style={{ color: currentTab.colorHex }}
                >
                  {currentTab.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#141B29]">
                  {currentTab.name}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToAnchor(currentTab.anchorId)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>Jump to Full Workflow</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <Link
                href={currentTab.pageHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#141B29] hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>{currentTab.pageCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Short Summary */}
          <p className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {currentTab.summary}
          </p>

          {/* 4 Process Preview Steps */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentTab.stepsPreview.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-black"
                      style={{ color: currentTab.colorHex }}
                    >
                      Step {step.step}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
