"use client";

import React, { useCallback } from "react";
import { AppHeroSection } from "./AppHeroSection";
import { AppIntroSection } from "./AppIntroSection";
import { AppCoreServicesSection } from "./AppCoreServicesSection";
import { AppScreenshotGallery } from "./AppScreenshotGallery";
import { AppFeaturesBenefitsSection } from "./AppFeaturesBenefitsSection";
import { AppHowToStartSection } from "./AppHowToStartSection";
import { WhoCanUseAppSection } from "./WhoCanUseAppSection";
import { AppWebsiteVsMobileSection } from "./AppWebsiteVsMobileSection";
import { AppFaqSection } from "./AppFaqSection";
import { AppFinalCtaSection } from "./AppFinalCtaSection";

export function DownloadAppClient() {
  const scrollToFeatures = useCallback(() => {
    const el = document.getElementById("app-features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <AppHeroSection onScrollToFeatures={scrollToFeatures} />

      {/* Section 2: App Introduction */}
      <AppIntroSection />

      {/* Section 3: Four Core App Services (anchor: app-features) */}
      <AppCoreServicesSection />

      {/* Section 4: Interactive App Screenshot Gallery */}
      <AppScreenshotGallery />

      {/* Section 5: App Features & Benefits */}
      <AppFeaturesBenefitsSection />

      {/* Section 6: How to Get Started */}
      <AppHowToStartSection />

      {/* Section 7: Who Can Use Machine Wallah? */}
      <WhoCanUseAppSection />

      {/* Section 8: Website vs Mobile App */}
      <AppWebsiteVsMobileSection />

      {/* Section 9: App FAQs */}
      <AppFaqSection />

      {/* Section 10: Final App Download CTA */}
      <AppFinalCtaSection />
    </div>
  );
}
