"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  FileText,
  Clock,
  Sparkles,
  Home,
  Pause,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface MaterialSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  featuredTitle: string;
}

const MATERIALS_SLIDES: MaterialSlide[] = [
  {
    id: "rmc-concrete",
    image: "/images/service-materials.jpg",
    alt: "Construction batching plant aggregates sand cement supply depot",
    badge: "Direct Plant Rates",
    featuredTitle: "RMC Concrete (M20–M40), Cement, Sand & Aggregates",
  },
  {
    id: "transit-pours",
    image: "/images/hero-transit-mixer.jpg",
    alt: "Ready mix concrete transit mixers on slab casting construction site",
    badge: "Ready-Mix Concrete",
    featuredTitle: "Rapid Slab Casting via Concrete Pumps & Transit Mixers",
  },
  {
    id: "structural-steel",
    image: "/images/about-construction.jpg",
    alt: "Civil engineering reinforcement TMT steel bars and masonry units",
    badge: "TMT Rebar & Bricks",
    featuredTitle: "Primary Fe 550D TMT Steel, AAC Blocks & Red Clay Bricks",
  },
  {
    id: "aggregates-stone",
    image: "/images/about-hero.jpg",
    alt: "Stone aggregates 10mm 20mm 40mm and stone dust site stockpile",
    badge: "Crushed Aggregates",
    featuredTitle: "Washed M-Sand, Plaster Sand, 10mm/20mm Gitti & Sub-Base",
  },
];

interface MaterialsHeroProps {
  onScrollToCategories?: () => void;
  onScrollToEnquiry?: () => void;
}

export function MaterialsHero({
  onScrollToCategories,
  onScrollToEnquiry,
}: MaterialsHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = MATERIALS_SLIDES.length;
  const currentSlide = MATERIALS_SLIDES[currentIndex];

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

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext]);

  // Touch Swipe Handlers for mobile screens
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleScrollToCategoriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToCategories) {
      onScrollToCategories();
    } else {
      const el = document.getElementById("material-categories");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToEnquiryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToEnquiry) {
      onScrollToEnquiry();
    } else {
      const el = document.getElementById("material-enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Construction Materials Hero Banner"
    >
      {/* 1. BACKGROUND IMAGES CAROUSEL - BRIGHT & CLEARLY VISIBLE */}
      <div className="absolute inset-0 z-0">
        {MATERIALS_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center md:object-right transition-transform duration-[7000ms] ease-out brightness-[0.90] contrast-[1.05] ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Semi-Transparent Gradient: text readable on the left, photo bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/25 z-10 pointer-events-none" />
      </div>

      {/* 2. LEFT & RIGHT TAP ARROWS */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/50 hover:bg-[#FFBE0B] text-white hover:text-[#141B29] border border-white/20 hover:border-[#FFBE0B] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/50 hover:bg-[#FFBE0B] text-white hover:text-[#141B29] border border-white/20 hover:border-[#FFBE0B] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* 3. MAIN HERO CONTENT */}
      <div className="relative z-20 pt-4 sm:pt-5 lg:pt-6 pb-2 sm:pb-3 w-full">
        <Container size="xl">
          <div className="max-w-2xl sm:max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-slate-300 mb-2 sm:mb-2.5"
            >
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FFBE0B] rounded"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#FFBE0B] font-semibold" aria-current="page">
                Construction Materials
              </span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-md mb-2">
              <Layers className="w-3.5 h-3.5 text-[#FFBE0B]" />
              <span className="tracking-wide">Building Materials &amp; Supplier Connections</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.14] drop-shadow-md mb-2">
              Quality Construction Starts with the{" "}
              <span className="text-[#FFBE0B]">Right Materials.</span>
            </h1>

            {/* Description Copy */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-100 leading-relaxed font-normal max-w-xl sm:max-w-2xl drop-shadow-md mb-2.5 sm:mb-3">
              Cement, sand, bricks, steel, RMC aur other construction materials ke liye apni requirement share karein aur supplier quotation options explore karein.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <Button
                onClick={handleScrollToCategoriesClick}
                variant="yellow"
                size="md"
                rightIcon={<ChevronDown className="w-3.5 h-3.5 text-[#141B29]" />}
                className="font-bold shadow-lg hover:scale-[1.02] transition-transform text-xs sm:text-sm cursor-pointer py-2 sm:py-2.5 px-4 sm:px-5"
              >
                Explore Materials
              </Button>
              <Button
                onClick={handleScrollToEnquiryClick}
                variant="secondary"
                size="md"
                leftIcon={<FileText className="w-4 h-4 text-white" />}
                className="font-bold border border-white/20 bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md shadow-lg text-xs sm:text-sm cursor-pointer py-2 sm:py-2.5 px-4 sm:px-5"
              >
                Material Enquiry
              </Button>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/15 shadow-md">
                <Clock className="w-3.5 h-3.5 text-[#FFBE0B]" />
                <span>Direct Plant Rates</span>
              </div>
            </div>

            {/* Feature Pills / Micro-Highlights */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-200 font-medium drop-shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE0B]" />
                <span>RMC, Cement &amp; Aggregates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" />
                <span>Primary TMT Steel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A43B]" />
                <span>Direct Site Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E]" />
                <span>Zero Commission</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 4. COMPACT BOTTOM STATUS BAR */}
      <div className="relative z-20 mt-3 sm:mt-4 py-2 sm:py-2.5 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <Container size="xl">
          <div className="flex items-center justify-between gap-3 text-xs">
            {/* Left: Active Slide Info */}
            <div className="flex items-center gap-2 truncate">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFBE0B] text-[#141B29] uppercase tracking-wider shrink-0">
                Featured
              </span>
              <span className="text-slate-200 text-xs truncate">
                <strong className="text-white">{currentSlide.badge}</strong>: {currentSlide.featuredTitle}
              </span>
            </div>

            {/* Right: Dots, Counter, and Play/Pause */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {MATERIALS_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      type="button"
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                        isActive
                          ? "w-6 sm:w-7 bg-[#FFBE0B]"
                          : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Slide ${idx + 1}: ${slide.badge}`}
                    />
                  );
                })}
              </div>

              {/* Counter */}
              <div className="text-[10px] sm:text-[11px] font-bold text-white/90">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                type="button"
                className="p-1 rounded-full text-slate-300 hover:text-[#FFBE0B] transition-colors focus:outline-none cursor-pointer"
                title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
                aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3 fill-current" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
