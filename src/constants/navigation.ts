import { NavItem, ServiceNavItem } from "@/types";

export const NAV_SERVICES: ServiceNavItem[] = [
  {
    title: "Rent Machines",
    shortDesc: "JCB, Excavators, Rollers, Cranes on monthly & daily rent",
    href: "/services/rent",
    badge: "Verified Owners",
    colorHex: "#FFBE0B",
    colorName: "yellow",
  },
  {
    title: "Transport Services",
    shortDesc: "Trailers, Low-bed, Flatbed, Dumpers for machinery & freight",
    href: "/services/transport",
    badge: "Inter-City & Local",
    colorHex: "#0879D1",
    colorName: "blue",
  },
  {
    title: "Buy / Sell Machines",
    shortDesc: "Used & new construction machinery with verified inspections",
    href: "/services/buy-sell",
    badge: "Best Value",
    colorHex: "#36A43B",
    colorName: "green",
  },
  {
    title: "Construction Materials",
    shortDesc: "RMC Concrete, Sand, Aggregates, Cement, Bricks & TMT Steel",
    href: "/services/materials",
    badge: "Direct Plant Rates",
    colorHex: "#F4511E",
    colorName: "orange",
  },
];

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // Services dropdown handled separately in Header
  { label: "How It Works", href: "/how-it-works" },
  { label: "Download App", href: "/download-app" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Download Mobile App", href: "/download-app" },
  { label: "Contact & Enquiry", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
