"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  HardHat,
  Truck,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface MachineSlide {
  id: string;
  name: string;
  shortName: string;
  category: string;
  highlight: string;
  badge: string;
  badgeColor: string; // Tailwind color classes
  image: string;
  alt: string;
  specs: string;
  serviceLink: string;
  serviceName: string;
}

const MACHINES: MachineSlide[] = [
  {
    id: "excavator",
    name: "Hydraulic Crawler Excavators",
    shortName: "Excavator",
    category: "Heavy Earthmoving",
    highlight: "20T – 45T Heavy Digging & Trenching",
    badge: "Most Demanded",
    badgeColor: "bg-[#FFBE0B] text-[#141B29]",
    image: "/images/hero-excavator.jpg",
    alt: "Modern yellow hydraulic crawler excavator at an infrastructure construction site",
    specs: "Bucket 0.9–1.8 m³ • Tracked Mobility",
    serviceLink: "/rent-machines",
    serviceName: "Rent Excavator",
  },
  {
    id: "jcb-backhoe",
    name: "JCB 3DX & Backhoe Loaders",
    shortName: "JCB 3DX",
    category: "Versatile Fleet",
    highlight: "Site-Ready Earthmoving & Loading",
    badge: "Instant Dispatch",
    badgeColor: "bg-[#0879D1] text-white",
    image: "/images/service-rent.jpg",
    alt: "Heavy JCB Backhoe loader at highway construction site",
    specs: "76 HP Turbo • 4WD & 2WD Options",
    serviceLink: "/rent-machines",
    serviceName: "Rent JCB 3DX",
  },
  {
    id: "lowbed-trailer",
    name: "Low-Bed Trailers & Pullers",
    shortName: "Low-Bed Trailer",
    category: "Equipment Logistics",
    highlight: "Pan-India Heavy Machine Transport",
    badge: "Over-Dimensional",
    badgeColor: "bg-[#36A43B] text-white",
    image: "/images/service-transport.jpg",
    alt: "Low-bed trailer transporting heavy equipment on interstate highway",
    specs: "30T – 120T Capacity • Hydraulic Ramps",
    serviceLink: "/transport",
    serviceName: "Book Transport",
  },
  {
    id: "wheel-loader",
    name: "Heavy Wheel Loaders & Shovels",
    shortName: "Wheel Loader",
    category: "Material Handling",
    highlight: "High Bucket Volume for Bulk Shifting",
    badge: "Rent / Buy",
    badgeColor: "bg-[#F4511E] text-white",
    image: "/images/service-buysell.jpg",
    alt: "Heavy wheel loader working with aggregate materials",
    specs: "3T – 6T Payloads • Quarry & Crusher Ready",
    serviceLink: "/buy-sell",
    serviceName: "Explore Loaders",
  },
  {
    id: "motor-grader",
    name: "Motor Graders & Levelers",
    shortName: "Motor Grader",
    category: "Road Construction",
    highlight: "Precision Subgrade & Highway Grading",
    badge: "Precision Fleet",
    badgeColor: "bg-[#FFBE0B] text-[#141B29]",
    image: "/images/hero-grader.jpg",
    alt: "Heavy motor grader leveling highway construction base",
    specs: "14ft Moldboard • Laser Grade Ready",
    serviceLink: "/rent-machines",
    serviceName: "Rent Grader",
  },
  {
    id: "transit-mixer",
    name: "Concrete Transit Mixers & Booms",
    shortName: "Transit Mixer",
    category: "Concrete Logistics",
    highlight: "Fresh RMC Delivery & Fast Site Pouring",
    badge: "Direct Site Supply",
    badgeColor: "bg-[#0879D1] text-white",
    image: "/images/hero-transit-mixer.jpg",
    alt: "Modern concrete transit mixer truck at infrastructure building project",
    specs: "6 m³ – 8 m³ Drum Capacity • High Discharge",
    serviceLink: "/materials",
    serviceName: "Site Solutions",
  },
  {
    id: "road-roller",
    name: "Vibratory Road Rollers (10T – 12T)",
    shortName: "Road Roller",
    category: "Soil & Asphalt Compaction",
    highlight: "Maximum Density for Highway & Embankment",
    badge: "Compaction Master",
    badgeColor: "bg-[#36A43B] text-white",
    image: "/images/about-construction.jpg",
    alt: "Heavy vibratory soil compactor roller on highway infrastructure",
    specs: "Dual Amplitude • High Frequency Vibratory",
    serviceLink: "/rent-machines",
    serviceName: "Rent Compactor",
  },
];

export function HeroMachineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = MACHINES.length;
  const current = MACHINES[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-scroll timer (every 4.5s)
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative mx-auto max-w-md lg:max-w-none select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Machine Wallah Fleet Carousel"
    >
      {/* Outer Main Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
        {/* Slides Images Stack */}
        {MACHINES.map((machine, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={machine.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={machine.image}
                alt={machine.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out"
              />
            </div>
          );
        })}

        {/* Cinematic Multi-Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 z-20 pointer-events-none" />

        {/* Top Floating Utility Bar (Counter & Auto-play Pause/Play) */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto">
          {/* Machine Badge */}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md uppercase tracking-wider ${current.badgeColor}`}
            >
              {current.badge}
            </span>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36A43B] animate-pulse" />
              <span>Available Fleet</span>
            </div>
          </div>

          {/* Slide Counter & Play/Pause Button */}
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 rounded-full px-3 py-1 text-white text-xs font-semibold shadow-lg">
            <span>
              {String(currentIndex + 1).padStart(2, "0")}{" "}
              <span className="text-white/40">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="w-px h-3 bg-white/20" />
            <button
              onClick={togglePlay}
              type="button"
              className="p-0.5 rounded-full hover:text-[#FFBE0B] transition-colors focus:outline-none"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>
          </div>
        </div>

        {/* Left / Right Manual Control Buttons (Desktop/Tablet) */}
        <div className="hidden sm:flex absolute inset-y-0 left-3 z-30 items-center">
          <button
            onClick={handlePrev}
            type="button"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#FFBE0B] hover:text-[#141B29] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Previous machine"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="hidden sm:flex absolute inset-y-0 right-3 z-30 items-center">
          <button
            onClick={handleNext}
            type="button"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#FFBE0B] hover:text-[#141B29] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Next machine"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Details Card Overlay */}
        <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 z-30 text-white pointer-events-auto">
          <div className="bg-slate-900/85 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#FFBE0B] font-bold">
                    {current.category}
                  </span>
                  <span className="text-white/30 text-xs">•</span>
                  <span className="text-[11px] text-slate-300 truncate">
                    {current.specs}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                  {current.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium hidden sm:block truncate mt-0.5">
                  {current.highlight}
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0 pt-1 sm:pt-0">
                <Link
                  href={current.serviceLink}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFBE0B] hover:bg-[#e5ab0a] text-[#141B29] text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
                >
                  <span>{current.serviceName}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pagination Line / Dots */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-1">
                {MACHINES.map((m, idx) => {
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={m.id}
                      onClick={() => goToSlide(idx)}
                      type="button"
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                        isCurrent
                          ? "w-7 sm:w-9 bg-[#FFBE0B]"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      title={m.shortName}
                      aria-label={`Go to slide ${idx + 1}: ${m.shortName}`}
                    />
                  );
                })}
              </div>

              <span className="text-[10px] text-slate-400 font-medium shrink-0 hidden sm:inline">
                Auto-scrolls • Click to select
              </span>
              <span className="text-[10px] text-slate-400 font-medium shrink-0 sm:hidden">
                Swipe to explore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1 (Top Left Overhang - Desktop/Tablet) */}
      <div className="hidden md:flex absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 items-center gap-2.5 pointer-events-none">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFBE0B]/20 text-[#8F6600] flex items-center justify-center shrink-0">
          <HardHat className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#141B29]">JCB &amp; Excavators</div>
          <div className="text-[11px] text-slate-500 font-medium">Rentals &amp; Machinery</div>
        </div>
      </div>

      {/* Floating Badge 2 (Bottom Right Overhang - Desktop/Tablet) */}
      <div className="hidden md:flex absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 items-center gap-2.5 pointer-events-none">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0879D1]/15 text-[#0879D1] flex items-center justify-center shrink-0">
          <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#141B29]">Low-Bed Trailers</div>
          <div className="text-[11px] text-slate-500 font-medium">Fast Heavy Transport</div>
        </div>
      </div>

      {/* Interactive Machine Category Pills Quick Selector (Below Carousel) */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {MACHINES.map((m, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={m.id}
              onClick={() => goToSlide(idx)}
              type="button"
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                isSelected
                  ? "bg-[#141B29] text-[#FFBE0B] border-[#141B29] shadow-md scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {m.shortName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
