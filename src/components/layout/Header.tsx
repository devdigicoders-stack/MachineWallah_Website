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

  const isServicesActive = pathname.startsWith("/services");

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
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-[#0879D1] bg-blue-50/80"
                  : "text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70"
              }`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-[#0879D1] bg-blue-50/80"
                  : "text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70"
              }`}
            >
              About Us
            </Link>

            {/* Services Mega Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] ${
                  isServicesActive || isServicesOpen
                    ? "text-[#0879D1] bg-blue-50/80"
                    : "text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-[#0879D1]" : "text-slate-400"
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
                  <div className="px-3 pt-2 pb-2 mb-1 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Our 4 Core Solutions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5">
                    {NAV_SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                        role="menuitem"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${getServiceBg(
                            service.colorName
                          )}`}
                        >
                          {getServiceIcon(service.colorName)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#141B29] group-hover:text-[#0879D1] transition-colors">
                              {service.title}
                            </span>
                            {service.badge && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
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
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/how-it-works"
                  ? "text-[#0879D1] bg-blue-50/80"
                  : "text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70"
              }`}
            >
              How It Works
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-[#0879D1] bg-blue-50/80"
                  : "text-slate-700 hover:text-[#141B29] hover:bg-slate-100/70"
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
              className="shadow-sm font-bold hover:shadow-md transition-all text-xs"
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
              className="text-xs px-3 py-1.5"
            >
              App
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#141B29] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B]"
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
        <div
          className="fixed inset-0 top-[65px] z-40 lg:hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 top-[65px] w-full max-w-sm bg-white shadow-2xl p-5 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {/* Top Title inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="relative w-[165px] h-[52px]">
                  <Image
                    src={SITE_CONFIG.logoPath}
                    alt="Machine Wallah Logo"
                    fill
                    sizes="165px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                  Menu
                </span>
              </div>

              {/* Main Links */}
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`px-3 py-2.5 rounded-xl font-bold text-base transition-colors ${
                    pathname === "/"
                      ? "bg-blue-50 text-[#0879D1]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`px-3 py-2.5 rounded-xl font-bold text-base transition-colors ${
                    pathname === "/about"
                      ? "bg-blue-50 text-[#0879D1]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  About Us
                </Link>

                {/* Services Section with color-coded items */}
                <div className="pt-2">
                  <div className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Services
                  </div>
                  <div className="space-y-1.5 pl-1">
                    {NAV_SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          pathname === s.href
                            ? "bg-slate-100 ring-1 ring-slate-200"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${getServiceBg(
                            s.colorName
                          )}`}
                        >
                          {getServiceIcon(s.colorName)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-[#141B29]">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 truncate">
                            {s.shortDesc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/how-it-works"
                  className={`px-3 py-2.5 rounded-xl font-bold text-base transition-colors ${
                    pathname === "/how-it-works"
                      ? "bg-blue-50 text-[#0879D1]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  How It Works
                </Link>

                <Link
                  href="/contact"
                  className={`px-3 py-2.5 rounded-xl font-bold text-base transition-colors ${
                    pathname === "/contact"
                      ? "bg-blue-50 text-[#0879D1]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Button
                href="/download-app"
                variant="yellow"
                size="lg"
                fullWidth
                leftIcon={<Smartphone className="w-5 h-5 text-[#141B29]" />}
                className="font-bold shadow-md"
              >
                Download Mobile App
              </Button>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
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
