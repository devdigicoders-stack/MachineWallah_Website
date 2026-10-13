"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AppWorkflowScreen {
  id: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  keySteps: string[];
}

const WORKFLOW_SCREENS: AppWorkflowScreen[] = [
  {
    id: "buy-sell-customer",
    title: "Machinery Buying & Selling Journeys",
    category: "Buy / Sell",
    tagline: "Customer & Owner Flows",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.40.jpeg",
    description:
      "Buy Machine customer flow (machine selection, budget preferences, machine specs, direct enquiry) aur Sell Machine owner flow (photos upload, expected demand, listing publish).",
    keySteps: [
      "Select Machine Type (Excavator, JCB 3DX, Roller, etc.)",
      "Set budget & physical location",
      "View machine photos & meter hours",
      "Direct Call & WhatsApp enquiry connect",
    ],
  },
  {
    id: "transport-journey",
    title: "12-Stage Heavy Equipment Transport Journey",
    category: "Transport",
    tagline: "End-to-End Route Logistics",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.42.jpeg",
    description:
      "Customer flow covering cargo selection, pickup-to-drop mapping, vehicle choice (low-bed trailers, tippers, flatbeds), load tonnage, transporter responses, and direct quote chat.",
    keySteps: [
      "What to transport (Machinery / Raw Materials)",
      "Map pickup & drop points with road clearance",
      "Select vehicle (Low-bed, Hydra, Dumper, Cargo)",
      "Compare transporter quotes & direct chat",
    ],
  },
  {
    id: "materials-journey",
    title: "Construction Materials & RMC Flow",
    category: "Materials",
    tagline: "Direct Sourcing & Quotes",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.44.jpeg",
    description:
      "Select material type (RMC Concrete, Sand, Aggregates, Cement, Bricks, Steel), enter contextual volume/grade, post requirement, and receive plant supplier quotations.",
    keySteps: [
      "Select material & grade (e.g. M20/M25 concrete)",
      "Specify contextual volume (m³, CFT, Bags, Tonnes)",
      "Site delivery location & time window",
      "View quotes from nearby certified plants",
    ],
  },
  {
    id: "material-supplier-flow",
    title: "Material & RMC Supplier Owner Flow",
    category: "Materials Provider",
    tagline: "Plant Owner Dashboard",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.48.jpeg",
    description:
      "Supplier registration, RMC plant capacity details, delivery radius configuration, incoming enquiries management, and instant quote submission.",
    keySteps: [
      "RMC plant capacity & delivery radius setup",
      "Set live rate per m³ & delivery charges",
      "Incoming contractor enquiries dashboard",
      "Send custom quote & track dispatches",
    ],
  },
  {
    id: "transport-owner-flow",
    title: "Transport Owner & Fleet Dashboard",
    category: "Transport Fleet",
    tagline: "Transporter Experience",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.53.jpeg",
    description:
      "Vehicle registration (trucks, low-beds, trailers), RC/insurance documentation, live availability toggle, per-km rates, incoming trip enquiries, and trip booking.",
    keySteps: [
      "Vehicle details (Tata, Eicher, Low-beds)",
      "Set per-km rates & preferred routes",
      "Incoming transport requests dashboard",
      "Send quotation & driver assignment",
    ],
  },
  {
    id: "dealer-trading-flow",
    title: "Machinery Dealer Trading & Listing",
    category: "Buy / Sell Dealer",
    tagline: "Equipment Inventory",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.56.jpeg",
    description:
      "Equipment catalog management for machinery dealers, filter by brand/year/hours, direct buyer negotiation, and active inventory tracking.",
    keySteps: [
      "Add machine specs, documents & 10+ photos",
      "Set price negotiation preference",
      "Receive buyer calls & WhatsApp leads",
      "Manage active vs sold inventory",
    ],
  },
  {
    id: "rental-owner-flow",
    title: "Machine Rental Owner & Fleet Listing",
    category: "Rental Owner",
    tagline: "Equipment Rental Dashboard",
    image: "/images/app-previews/WhatsApp Image 2026-10-12 at 10.47.58.jpeg",
    description:
      "Owner equipment listing (JCB 3DX, excavators), set monthly/daily rental rates, operator inclusion terms, incoming hire requests, and dispatch booking.",
    keySteps: [
      "List machines with condition & hour meter",
      "Set monthly / daily rental rates",
      "Review contractor hire requirements",
      "Send quote & confirm site bookings",
    ],
  },
];

export function AppScreenshotGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const current = WORKFLOW_SCREENS[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? WORKFLOW_SCREENS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === WORKFLOW_SCREENS.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, isModalOpen]);

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Actual App Workflows"
            badgeColor="blue"
            title="Experience the Machine Wallah App"
            description="App ke actual screens aur workflows ki ek preview dekhein. Real workflow boards customer aur provider experiences ko showcase karte hain."
            align="center"
          />
        </div>

        {/* Main Interactive Viewer Frame */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white">
          {/* Top Bar of Viewer */}
          <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#FFBE0B] text-[#141B29]">
                {current.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono pr-2">
                {currentIndex + 1} / {WORKFLOW_SCREENS.length}
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="View Fullscreen"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Expand Screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Board Display Area */}
          <div className="relative aspect-[16/10.5] sm:aspect-[16/10] w-full bg-slate-950 flex items-center justify-center overflow-hidden group">
            <Image
              src={current.image}
              alt={`${current.title} - Machine Wallah app workflow`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain object-center"
              priority={currentIndex === 0}
            />

            {/* Navigation Arrows on Left and Right */}
            <button
              onClick={handlePrev}
              aria-label="Previous Workflow"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#FFBE0B] hover:text-[#141B29] text-white border border-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE0B]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Workflow"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#FFBE0B] hover:text-[#141B29] text-white border border-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE0B]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Context Details Bar */}
          <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 space-y-3">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {current.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {current.keySteps.map((step) => (
                <span
                  key={step}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                >
                  ✓ {step}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="max-w-5xl mx-auto mt-6 flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none">
          {WORKFLOW_SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setCurrentIndex(idx)}
              className={`shrink-0 text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                currentIndex === idx
                  ? "bg-[#141B29] text-white border-[#141B29] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">
                {screen.category}
              </span>
              <span className="text-xs font-extrabold line-clamp-1">
                {screen.title}
              </span>
            </button>
          ))}
        </div>

        {/* Fullscreen Modal View */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 text-white">
              <div>
                <span className="text-xs font-bold text-[#FFBE0B] block">
                  {current.category}
                </span>
                <h4 className="text-base sm:text-lg font-black">
                  {current.title}
                </h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                aria-label="Close Fullscreen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 w-full overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="pt-3 text-center text-xs text-slate-400">
              Press ESC or click close button to exit fullscreen view
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
