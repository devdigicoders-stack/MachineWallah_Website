import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { WhatWeDoSection } from "@/components/about/WhatWeDoSection";
import { WhoWeServeSection } from "@/components/about/WhoWeServeSection";
import { WhyChooseAboutSection } from "@/components/about/WhyChooseAboutSection";
import { HowWeConnectSection } from "@/components/about/HowWeConnectSection";
import { AppPromoAboutSection } from "@/components/about/AppPromoAboutSection";
import { ContactCtaAboutSection } from "@/components/about/ContactCtaAboutSection";

export const metadata: Metadata = {
  title: "About Us — Building Better Connections for Every Construction Need",
  description:
    "Machine Wallah ek construction-focused all-in-one platform hai jiska purpose machine owners, buyers, sellers, transport providers aur material suppliers ke beech connection ko simple banana hai.",
  openGraph: {
    title: "About Machine Wallah — Machines | Transport | Materials",
    description:
      "Empowering India's construction ecosystem with heavy machinery rentals, equipment trading, logistics trailers, and raw materials.",
    url: "https://machinewallah.in/about",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Machine Wallah About Us Infrastructure Construction",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* SECTION 1: PREMIUM ABOUT HERO */}
      <AboutHero />

      {/* SECTION 2: WHO WE ARE */}
      <WhoWeAreSection />

      {/* SECTION 3: MISSION AND VISION */}
      <MissionVisionSection />

      {/* SECTION 4: WHAT WE DO */}
      <WhatWeDoSection />

      {/* SECTION 5: WHO WE SERVE */}
      <WhoWeServeSection />

      {/* SECTION 6: WHY MACHINE WALLAH */}
      <WhyChooseAboutSection />

      {/* SECTION 7: HOW WE CONNECT */}
      <HowWeConnectSection />

      {/* SECTION 8: MOBILE APP PROMOTION */}
      <AppPromoAboutSection />

      {/* SECTION 9: CONTACT CTA */}
      <ContactCtaAboutSection />
    </div>
  );
}
