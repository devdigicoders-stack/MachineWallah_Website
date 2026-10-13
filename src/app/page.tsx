import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreServicesSection } from "@/components/home/CoreServicesSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ExploreServicesSection } from "@/components/home/ExploreServicesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { DownloadAppSection } from "@/components/home/DownloadAppSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Machine Wallah — Har Construction Need Ka Ek Smart Solution",
  description:
    "Machine Wallah ke saath heavy machinery rent karo, construction machines buy/sell karo, low-bed transport trailers book karo aur construction materials direct mangwao — sab ek hi platform par.",
  openGraph: {
    title: "Machine Wallah — Machines | Transport | Materials",
    description:
      "All-in-one platform for construction machinery rental, transport logistics, equipment buying/selling, and building materials.",
    url: "https://machinewallah.in",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/hero-excavator.jpg",
        width: 1200,
        height: 675,
        alt: "Machine Wallah Construction Machinery Platform",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: FOUR CORE SERVICES */}
      <CoreServicesSection />

      {/* SECTION 3: ABOUT PREVIEW */}
      <AboutPreviewSection />

      {/* SECTION 4: HOW IT WORKS */}
      <HowItWorksSection />

      {/* SECTION 5: EXPLORE SERVICES (EDITORIAL PANELS) */}
      <ExploreServicesSection />

      {/* SECTION 6: WHY MACHINE WALLAH */}
      <WhyChooseSection />

      {/* SECTION 7: DOWNLOAD APP PROMOTION */}
      <DownloadAppSection />

      {/* SECTION 8: FAQ ACCORDION */}
      <FaqSection />

      {/* SECTION 9: FINAL BRAND CTA */}
      <FinalCtaSection />
    </div>
  );
}
