"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall, MessageCircle, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/RealIcons";
import { BUSINESS_CONTACT } from "@/config/contact";
import { SITE_CONFIG } from "@/constants/site";

export function FloatingContactButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber =
    BUSINESS_CONTACT.whatsappNumber.replace(/[\s+-]/g, "") || "919129895577";
  const phoneNumber =
    BUSINESS_CONTACT.phoneNumber.replace(/[\s-]/g, "") || "+919129895577";
  const displayPhone = BUSINESS_CONTACT.phoneNumber || "+91 91298 95577";

  const whatsappMessage = encodeURIComponent(
    "Namaste Machine Wallah! Mujhe construction machines / transport / materials ke baare mein jaankari chahiye."
  );

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Quick Contact & Actions"
      className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FFBE0B]"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="pointer-events-auto group relative flex items-center justify-center p-3 sm:p-3.5 rounded-full bg-[#141B29] hover:bg-[#0879D1] text-white border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0879D1] focus:ring-offset-2"
        aria-label={`Call Machine Wallah at ${displayPhone}`}
        title={`Call Machine Wallah: ${displayPhone}`}
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFBE0B] group-hover:text-white transition-colors animate-pulse" />
        
        {/* Desktop Tooltip / Pill on hover */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:px-2.5 text-xs font-bold text-white tracking-wide">
          Call {displayPhone}
        </span>

        {/* Small live notification dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center p-3 sm:p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat with Machine Wallah on WhatsApp"
        title="Chat with Machine Wallah on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-sm" />
        
        {/* Desktop Tooltip / Pill on hover */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:px-2.5 text-xs font-bold text-white tracking-wide">
          Chat on WhatsApp
        </span>

        {/* Online Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none -z-10"></span>
      </a>
    </aside>
  );
}
