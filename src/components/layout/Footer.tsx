"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Clock,
  ArrowUpRight,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import {
  RealPhoneCallingIcon,
  RealEmailIcon,
  RealMapPinIcon,
  RealVerifiedBadgeIcon,
} from "@/components/ui/RealIcons";
import {
  NAV_SERVICES,
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/constants/navigation";

export function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Check if any actual social links exist
  const hasSocials = Object.values(SITE_CONFIG.socialLinks || {}).some(
    (url) => Boolean(url) && url !== "#"
  );

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

  return (
    <footer className="bg-[#141B29] text-white border-t border-slate-800">
      {/* Top CTA Banner inside Footer (only on inner pages) */}
      {pathname !== "/" && (
        <div className="border-b border-slate-800/80 bg-[#0D121C]">
          <Container size="xl" className="py-8 sm:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 via-[#1A2336] to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFBE0B]">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile App Available Soon</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Machine Owner ya Contractor hain? Apne phone se manage karein.
                </h3>
                <p className="text-sm text-slate-300 max-w-xl">
                  Rent machines, book transport, buy/sell machinery and order construction materials at direct transparent rates.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  href="/download-app"
                  variant="yellow"
                  size="md"
                  leftIcon={<Smartphone className="w-4 h-4" />}
                  className="font-bold shadow-md hover:scale-105"
                >
                  Download App
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Send Enquiry
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer Links & Info */}
      <Container size="xl" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Brand Logo in dedicated white card perfectly matching logo size */}
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white rounded-xl p-1.5 sm:p-2 shadow-md border border-slate-200/90 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B]"
              aria-label="Machine Wallah Home"
            >
              <div className="relative w-[174px] sm:w-[195px] md:w-[210px] h-[58px] sm:h-[65px] md:h-[70px]">
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt="Machine Wallah — Machines | Transport | Materials"
                  fill
                  sizes="(max-width: 640px) 174px, (max-width: 768px) 195px, 210px"
                  className="object-contain object-center"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Construction machinery, verified transport, buy/sell equipment aur quality materials ka all-in-one ecosystem. Transparent rates, direct owner contact aur zero hassle.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <RealVerifiedBadgeIcon className="w-4 h-4 text-[#36A43B] shrink-0" />
              <span>Verified Machine Owners &amp; Direct Transporters</span>
            </div>
          </div>

          {/* Column 2: 4 Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFBE0B]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_SERVICES.map((service) => {
                const isActive = isServiceActive(service.href);
                return (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className={`active-child group inline-flex items-center gap-2 transition-colors ${
                        isActive
                          ? "active text-[#FFBE0B] font-bold"
                          : "text-slate-300 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.colorHex }}
                      />
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {service.title}
                      </span>
                      {isActive ? (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FFBE0B]/20 text-[#FFBE0B] border border-[#FFBE0B]/40">
                          Active
                        </span>
                      ) : (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:underline inline-block ${
                        isActive
                          ? "active text-[#FFBE0B] font-bold underline"
                          : "text-slate-300 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <RealPhoneCallingIcon className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Call / Helpline</div>
                  <a
                    href={SITE_CONFIG.contact.phoneLink}
                    className="text-white hover:underline font-medium"
                  >
                    {SITE_CONFIG.contact.phonePlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <RealEmailIcon className="w-4 h-4 text-[#0879D1] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <span className="text-slate-300 font-mono text-xs">
                    {SITE_CONFIG.contact.emailPlaceholder}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <RealMapPinIcon className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Registered Office</div>
                  <span className="text-slate-300 text-xs">
                    {SITE_CONFIG.contact.addressPlaceholder}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#36A43B] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {SITE_CONFIG.contact.hours}
                </span>
              </div>
            </div>

            {/* Social links (only if actual URLs provided) */}
            {hasSocials && (
              <div className="pt-2">
                <span className="text-xs text-slate-400">Follow us:</span>
                <div className="flex items-center gap-2 mt-2">
                  {/* Populated when real URLs are provided */}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#0B0F17] py-6 text-xs text-slate-400">
        <Container
          size="xl"
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>
              &copy; {currentYear} <strong className="text-white font-semibold">Machine Wallah</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400">
              Machines | Transport | Materials
            </span>
          </div>

          <div className="flex items-center gap-5">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
