"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Smartphone,
  HardHat,
  Truck,
  Handshake,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_SERVICES, MAIN_NAV_ITEMS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { RealCallIcon, RealPhoneCallingIcon } from "@/components/ui/RealIcons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll detection for sticky header shadow & glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Service icon resolver
  const getServiceIcon = (colorName: string) => {
    switch (colorName) {
      case "yellow":
        return <HardHat className="w-5 h-5 text-[#8F6600]" />;
      case "blue":
        return <Truck className="w-5 h-5 text-[#0879D1]" />;
      case "green":
        return <Handshake className="w-5 h-5 text-[#2E8B33]" />;
      case "orange":
        return <Layers className="w-5 h-5 text-[#D83B0A]" />;
      default:
        return <HardHat className="w-5 h-5 text-slate-600" />;
    }
  };

  const getServiceBg = (colorName: string) => {
    switch (colorName) {
      case "yellow":
        return "bg-[#FFBE0B]/15 group-hover:bg-[#FFBE0B]/25";
      case "blue":
        return "bg-[#0879D1]/12 group-hover:bg-[#0879D1]/20";
      case "green":
        return "bg-[#36A43B]/15 group-hover:bg-[#36A43B]/25";
      case "orange":
        return "bg-[#F4511E]/12 group-hover:bg-[#F4511E]/20";
      default:
        return "bg-slate-100 group-hover:bg-slate-200";
    }
  };

  // Helper to determine if a specific service (child) route is active (including rewrites)
  const isServiceActive = (serviceHref: string) => {
    if (pathname === serviceHref) return true;
    if (pathname.startsWith(serviceHref + "/")) return true;

    if (serviceHref === "/services/rent") {
      return pathname === "/rent-machines" || pathname.startsWith("/services/rent");
    }
    if (serviceHref === "/services/transport") {
      return pathname === "/transport" || pathname.startsWith("/services/transport");
    }
    if (serviceHref === "/services/buy-sell") {
      return pathname === "/buy-sell" || pathname.startsWith("/services/buy-sell");
    }
    if (serviceHref === "/services/materials") {
      return pathname === "/materials" || pathname.startsWith("/services/materials");
    }
    return false;
  };

  // Helper to determine if the Services (parent) dropdown is active
  const isParentServicesActive =
    pathname.startsWith("/services") ||
    pathname === "/rent-machines" ||
    pathname === "/transport" ||
    pathname === "/buy-sell" ||
    pathname === "/materials";

  return (
    <>
      {/* Top Bar for trust badge & quick enquiry prompt */}
      <div className="bg-[#141B29] text-slate-300 text-[11px] border-b border-slate-800 hidden sm:block">
        <Container size="xl" className="py-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#36A43B]" />
              <span>India&apos;s All-in-One Heavy Machinery &amp; Transport Platform</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Machines • Transport • Materials</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Need help? Call:</span>
            <a
              href={SITE_CONFIG.contact.phoneLink}
              className="font-medium text-[#FFBE0B] hover:underline flex items-center gap-1"
            >
              <RealCallIcon className="w-3 h-3" />
              <span>{SITE_CONFIG.contact.phonePlaceholder}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "glass-header shadow-md border-b border-slate-200/80 py-1"
            : "bg-white border-b border-slate-100 py-1 sm:py-1.5"
        }`}
      >
        <Container size="xl" className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] rounded-xl py-0.5 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Machine Wallah Home"
          >
            <div className="relative w-[160px] sm:w-[175px] md:w-[190px] h-[42px] sm:h-[46px] md:h-[50px]">
              <Image
                src={SITE_CONFIG.logoPath}
                alt="Machine Wallah — Machines | Transport | Materials"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 175px, 190px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === "/"
                  ? "active text-[#0879D1] bg-blue-50/90 font-bold border border-blue-200/70 shadow-xs"
                  : "font-semibold text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70 border border-transparent"
              }`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === "/about"
                  ? "active text-[#0879D1] bg-blue-50/90 font-bold border border-blue-200/70 shadow-xs"
                  : "font-semibold text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70 border border-transparent"
              }`}
            >
              About Us
            </Link>

            {/* Services Mega Dropdown (Parent) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`active-parent flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] cursor-pointer ${
                  isParentServicesActive || isServicesOpen
                    ? "active font-bold text-[#0879D1] bg-blue-50/90 border border-blue-200/80 shadow-xs"
                    : "font-semibold text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70 border border-transparent"
                }`}
              >
                <span>Services</span>
                {isParentServicesActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1] shrink-0 animate-pulse" />
                )}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen
                      ? "rotate-180 text-[#0879D1]"
                      : isParentServicesActive
                      ? "text-[#0879D1]"
                      : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] rounded-2xl glass-dropdown border border-slate-200 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3 pt-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Our 4 Core Solutions
                    </span>
                    {isParentServicesActive && (
                      <span className="text-[10px] font-bold text-[#0879D1] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        Active Category
                      </span>
                    )}
                  </div>

                  {/* Child Service Links */}
                  <div className="grid grid-cols-1 gap-1.5">
                    {NAV_SERVICES.map((service) => {
                      const isChildActive = isServiceActive(service.href);
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className={`active-child group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                            isChildActive
                              ? "active bg-blue-50/90 border border-blue-200 shadow-xs ring-1 ring-blue-200/60"
                              : "hover:bg-slate-50 border border-transparent hover:border-slate-100"
                          }`}
                          role="menuitem"
                          aria-current={isChildActive ? "page" : undefined}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isChildActive
                                ? "bg-white shadow-xs ring-2 ring-[#0879D1]/30"
                                : getServiceBg(service.colorName)
                            }`}
                          >
                            {getServiceIcon(service.colorName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`text-sm transition-colors ${
                                  isChildActive
                                    ? "text-[#0879D1] font-black"
                                    : "font-bold text-[#141B29] group-hover:text-[#0879D1]"
                                }`}
                              >
                                {service.title}
                              </span>
                              {isChildActive ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#0879D1] text-white shadow-xs shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                  Active
                                </span>
                              ) : (
                                service.badge && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                    {service.badge}
                                  </span>
                                )
                              )}
                            </div>
                            <p
                              className={`text-xs line-clamp-1 mt-0.5 ${
                                isChildActive ? "text-slate-600 font-medium" : "text-slate-500"
                              }`}
                            >
                              {service.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2.5 border-t border-slate-100 px-3 flex items-center justify-between text-xs text-slate-500">
                    <span>Direct connect via WhatsApp &amp; Call</span>
                    <span className="font-semibold text-[#0879D1] flex items-center gap-1 group-hover:underline">
                      No Commission Booking
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works */}
            <Link
              href="/how-it-works"
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === "/how-it-works"
                  ? "active text-[#0879D1] bg-blue-50/90 font-bold border border-blue-200/70 shadow-xs"
                  : "font-semibold text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70 border border-transparent"
              }`}
            >
              How It Works
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === "/contact"
                  ? "active text-[#0879D1] bg-blue-50/90 font-bold border border-blue-200/70 shadow-xs"
                  : "font-semibold text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70 border border-transparent"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA: Highlighted Download App Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/download-app"
              variant="yellow"
              size="sm"
              leftIcon={<Smartphone className="w-3.5 h-3.5 text-[#141B29]" />}
              className={`shadow-sm font-bold hover:shadow-md transition-all text-xs ${
                pathname === "/download-app" ? "active ring-2 ring-[#FFBE0B] ring-offset-2" : ""
              }`}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/download-app"
              variant="yellow"
              size="sm"
              leftIcon={<Smartphone className="w-3.5 h-3.5" />}
              className={`text-xs px-2.5 py-1.5 sm:px-3 ${
                pathname === "/download-app" ? "active ring-2 ring-[#FFBE0B] ring-offset-1" : ""
              }`}
            >
              App
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#141B29] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-[340px] xs:max-w-[360px] sm:max-w-sm bg-white shadow-2xl flex flex-col h-full z-10 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Drawer Header (Single Clean Logo + Dedicated Close Button) */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
                aria-label="Machine Wallah Home"
              >
                <div className="relative w-[155px] h-[46px]">
                  <Image
                    src={SITE_CONFIG.logoPath}
                    alt="Machine Wallah"
                    fill
                    sizes="155px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFBE0B]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 2. Scrollable Navigation Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {/* Primary Top Links */}
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    pathname === "/"
                      ? "active bg-blue-50 text-[#0879D1] border border-blue-200/80"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    pathname === "/about"
                      ? "active bg-blue-50 text-[#0879D1] border border-blue-200/80"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  About Us
                </Link>
              </div>

              {/* Services Section */}
              <div className="pt-1">
                <div className="px-3.5 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Services
                  </span>
                </div>
                <div className="space-y-1.5">
                  {NAV_SERVICES.map((s) => {
                    const isChildActive = isServiceActive(s.href);
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          isChildActive
                            ? "bg-blue-50/90 text-[#0879D1] border border-blue-200/80 shadow-xs"
                            : "hover:bg-slate-50 text-slate-700 border border-transparent"
                        }`}
                        aria-current={isChildActive ? "page" : undefined}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            isChildActive
                              ? "bg-white shadow-xs ring-1 ring-[#0879D1]/30"
                              : getServiceBg(s.colorName)
                          }`}
                        >
                          {getServiceIcon(s.colorName)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm leading-tight ${
                              isChildActive
                                ? "text-[#0879D1] font-bold"
                                : "text-[#141B29] font-semibold"
                            }`}
                          >
                            {s.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {s.shortDesc}
                          </div>
                        </div>
                        {isChildActive && (
                          <span className="w-2 h-2 rounded-full bg-[#0879D1] shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Additional Secondary Links */}
              <div className="flex flex-col space-y-1 pt-1 border-t border-slate-100">
                <Link
                  href="/how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    pathname === "/how-it-works"
                      ? "active bg-blue-50 text-[#0879D1] border border-blue-200/80"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  How It Works
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    pathname === "/contact"
                      ? "active bg-blue-50 text-[#0879D1] border border-blue-200/80"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* 3. Bottom Actions (Download App + Direct Phone with Safe-Area Padding) */}
            <div className="p-4 pb-8 sm:pb-6 border-t border-slate-100 bg-slate-50/90 space-y-2.5 shrink-0">
              <Button
                href="/download-app"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="yellow"
                size="md"
                fullWidth
                leftIcon={<Smartphone className="w-4 h-4 text-[#141B29]" />}
                className={`font-bold shadow-sm ${
                  pathname === "/download-app" ? "active ring-2 ring-[#FFBE0B] ring-offset-1" : ""
                }`}
              >
                Download Mobile App
              </Button>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-2xs">
                <span className="flex items-center gap-1.5 font-medium">
                  <RealPhoneCallingIcon className="w-3.5 h-3.5 text-[#0879D1]" />
                  <span>Call Support</span>
                </span>
                <a
                  href={SITE_CONFIG.contact.phoneLink}
                  className="font-bold text-[#141B29] hover:underline"
                >
                  {SITE_CONFIG.contact.phonePlaceholder}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
