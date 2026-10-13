"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  pillLabel: string;
  featuredTitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "rental",
    image: "/images/hero-excavator.jpg",
    alt: "Modern hydraulic excavator working on infrastructure construction site",
    pillLabel: "Heavy Machinery Rental",
    featuredTitle: "JCB 3DX & 20T–45T Heavy Excavators",
  },
  {
    id: "transport",
    image: "/images/service-transport.jpg",
    alt: "Heavy low-bed trailer transporting heavy equipment across interstate highway",
    pillLabel: "Equipment Logistics",
    featuredTitle: "Pan-India Low-Bed & Flatbed Trailers",
  },
  {
    id: "buysell",
    image: "/images/service-buysell.jpg",
    alt: "Quality wheel loaders and verified machinery in equipment yard",
    pillLabel: "Buy & Sell Marketplace",
    featuredTitle: "Certified Used & New Machinery Fleet",
  },
  {
    id: "materials",
    image: "/images/service-materials.jpg",
    alt: "Construction batching plant aggregates sand cement supply depot",
    pillLabel: "Site Materials Direct",
    featuredTitle: "Direct Plant Concrete, Aggregates & Cement",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

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

  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Machine Wallah Hero Banner with Background Image Carousel"
    >
      {/* 1. BACKGROUND IMAGES CAROUSEL - BRIGHT & CLEARLY VISIBLE */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
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

        {/* Lightweight Semi-Transparent Gradient: text readable on the left, photo bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/25 z-10 pointer-events-none" />
      </div>

      {/* 2. LEFT & RIGHT TAP ARROWS */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/50 hover:bg-[#FFBE0B] text-white hover:text-[#141B29] border border-white/20 hover:border-[#FFBE0B] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        aria-label="Previous background slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/50 hover:bg-[#FFBE0B] text-white hover:text-[#141B29] border border-white/20 hover:border-[#FFBE0B] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        aria-label="Next background slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* 3. MAIN HERO CONTENT */}
      <div className="relative z-20 pt-4 sm:pt-5 lg:pt-6 pb-2 sm:pb-3 w-full">
        <Container size="xl">
          <div className="max-w-2xl sm:max-w-3xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-md mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFBE0B] animate-pulse" />
              <span className="tracking-wide">Machines • Transport • Materials</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.14] drop-shadow-md mb-2">
              Har Construction Need Ka Ek{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FFBE0B]">Smart Solution</span>
                {/* <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-1 w-full h-2.5 bg-[#FFBE0B]/25 -z-0 rounded-full transform -rotate-1"
                /> */}
              </span>
              .
            </h1>

            {/* Description Copy */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-100 leading-relaxed font-normal max-w-xl sm:max-w-2xl drop-shadow-md mb-2.5 sm:mb-3">
              Machine Wallah ke saath machinery rent karo, machines buy/sell karo,
              transport requirements share karo aur construction materials ke liye
              suppliers se connect ho — sab ek hi platform par.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <Button
                href="#services"
                variant="yellow"
                size="md"
                rightIcon={<ChevronDown className="w-3.5 h-3.5 text-[#141B29]" />}
                className="font-bold shadow-lg hover:scale-[1.02] transition-transform text-xs sm:text-sm cursor-pointer py-2 sm:py-2.5 px-4 sm:px-5"
              >
                Explore Services
              </Button>
              <Button
                href="/download-app"
                variant="secondary"
                size="md"
                leftIcon={<Smartphone className="w-4 h-4 text-white" />}
                className="font-bold border border-white/20 bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md shadow-lg text-xs sm:text-sm cursor-pointer py-2 sm:py-2.5 px-4 sm:px-5"
              >
                Download App
              </Button>
              <Link
                href="/services/rent"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-colors shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFBE0B]" />
                <span>Instant Quote</span>
              </Link>
            </div>

            {/* 4 Core Micro Highlights */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-200 font-medium drop-shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBE0B]" />
                <span>Heavy Machinery Rental</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" />
                <span>Equipment Logistics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A43B]" />
                <span>Buy &amp; Sell Marketplace</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E]" />
                <span>Site Materials Direct</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 4. COMPACT BOTTOM STATUS BAR (Neat & balanced gap right below the content) */}
      <div className="relative z-20 mt-3 sm:mt-4 py-2 sm:py-2.5 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <Container size="xl">
          <div className="flex items-center justify-between gap-3 text-xs">
            {/* Left: Active Slide Info */}
            <div className="flex items-center gap-2 truncate">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFBE0B] text-[#141B29] uppercase tracking-wider shrink-0">
                Featured
              </span>
              <span className="text-slate-200 text-xs truncate">
                <strong className="text-white">{currentSlide.pillLabel}</strong>: {currentSlide.featuredTitle}
              </span>
            </div>

            {/* Right: Dots, Counter, and Play/Pause */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((slide, idx) => {
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
                      aria-label={`Slide ${idx + 1}: ${slide.pillLabel}`}
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
