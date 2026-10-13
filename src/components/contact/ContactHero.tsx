"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Clock,
  Home,
  Pause,
  Play,
  FileText,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  WhatsAppIcon,
  RealPhoneCallingIcon,
} from "@/components/ui/RealIcons";
import {
  BUSINESS_CONTACT,
  isPhoneConfigured,
  isWhatsAppConfigured,
} from "@/config/contact";

interface ContactSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  featuredTitle: string;
}

const CONTACT_SLIDES: ContactSlide[] = [
  {
    id: "support-desk",
    image: "/images/hero-excavator.jpg",
    alt: "Direct customer and contractor machinery enquiry desk",
    badge: "Direct Support Desk",
    featuredTitle: "Machinery Rentals & Equipment Deployment Consultation",
  },
  {
    id: "logistics-enquiry",
    image: "/images/service-transport.jpg",
    alt: "Commercial logistics and heavy transport coordination",
    badge: "Logistics Enquiries",
    featuredTitle: "Trailers, Low-bed & Heavy Freight Quotations",
  },
  {
    id: "trading-enquiry",
    image: "/images/service-buysell.jpg",
    alt: "Machinery buying, selling and inspection guidance",
    badge: "Machinery Trading",
    featuredTitle: "Verified Used & New Equipment Purchase / Sale Discussions",
  },
  {
    id: "materials-enquiry",
    image: "/images/service-materials.jpg",
    alt: "Bulk construction material procurement and supplier coordination",
    badge: "Materials Procurement",
    featuredTitle: "Direct Plant Rates for Cement, Sand, Steel & RMC Concrete",
  },
];

interface ContactHeroProps {
  onScrollToForm?: () => void;
}

export function ContactHero({ onScrollToForm }: ContactHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = CONTACT_SLIDES.length;
  const currentSlide = CONTACT_SLIDES[currentIndex];

  const hasPhone = isPhoneConfigured();
  const hasWhatsApp = isWhatsAppConfigured();

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

  const handleScrollToFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById("enquiry-form") || document.getElementById("contact-form");
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
      aria-label="Contact Us Hero Banner"
    >
      {/* 1. BACKGROUND IMAGES CAROUSEL - BRIGHT & CLEARLY VISIBLE */}
      <div className="absolute inset-0 z-0">
        {CONTACT_SLIDES.map((slide, index) => {
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
                Contact Us
              </span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-md mb-2">
              <span className="w-2 h-2 rounded-full bg-[#36A43B] animate-pulse" />
              <span className="tracking-wide">Direct Support &amp; Enquiries</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.14] drop-shadow-md mb-2">
              Baat Karein{" "}
              <span className="text-[#FFBE0B]">Machine Wallah</span>{" "}
              Team Se
            </h1>

            {/* Description Copy */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-100 leading-relaxed font-normal max-w-xl sm:max-w-2xl drop-shadow-md mb-2.5 sm:mb-3">
              Heavy machinery rental, buying &amp; selling, heavy equipment transport ya bulk construction materials — apni requirement share karein. Hum aapko verified options aur clear quotations provide karte hain bina kisi brokerage ke.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3">
              <Button
                onClick={handleScrollToFormClick}
                variant="yellow"
                size="md"
                rightIcon={<ChevronDown className="w-3.5 h-3.5 text-[#141B29]" />}
                className="font-bold shadow-lg hover:scale-[1.02] transition-transform text-xs sm:text-sm cursor-pointer py-2 sm:py-2.5 px-4 sm:px-5"
              >
                Share Requirement
              </Button>

              {hasWhatsApp && (
                <a
                  href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumber.replace(/[\s+-]/g, "")}?text=${encodeURIComponent("Namaste Machine Wallah! Mujhe requirement discuss karni hai.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>
              )}

              {hasPhone && (
                <a
                  href={`tel:${BUSINESS_CONTACT.phoneNumber.replace(/[\s-]/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <RealPhoneCallingIcon className="w-4 h-4" />
                  <span>Call Helpline</span>
                </a>
              )}
            </div>

            {/* Highlight Pills / Micro-Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-200 drop-shadow-sm">
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
                <Clock className="w-3.5 h-3.5 text-[#FFBE0B]" />
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#36A43B]" />
                <span>Direct Transparency — Zero Brokerage</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Instant WhatsApp &amp; Email Enquiries</span>
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
                {CONTACT_SLIDES.map((slide, idx) => {
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
