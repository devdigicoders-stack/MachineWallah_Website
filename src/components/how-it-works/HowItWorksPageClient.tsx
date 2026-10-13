"use client";

import React, { useCallback } from "react";
import { HowItWorksHero } from "./HowItWorksHero";
import { PlatformOverviewSection } from "./PlatformOverviewSection";
import { ServiceSelectorTabs } from "./ServiceSelectorTabs";
import { RentWorkflowSection } from "./RentWorkflowSection";
import { BuySellWorkflowSection } from "./BuySellWorkflowSection";
import { TransportWorkflowSection } from "./TransportWorkflowSection";
import { MaterialsWorkflowSection } from "./MaterialsWorkflowSection";
import { WebsiteVsAppSection } from "./WebsiteVsAppSection";
import { HowItWorksFaqSection } from "./HowItWorksFaqSection";
import { HowItWorksCtaSection } from "./HowItWorksCtaSection";

export function HowItWorksPageClient() {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleScrollToProcess = useCallback(() => {
    scrollToSection("platform-process");
  }, [scrollToSection]);

  const handleScrollToServices = useCallback(() => {
    scrollToSection("service-workflows");
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <HowItWorksHero
        onScrollToProcess={handleScrollToProcess}
        onScrollToServices={handleScrollToServices}
      />

      {/* Section 2: Platform Overview (anchor: platform-process) */}
      <PlatformOverviewSection />

      {/* Section 3: Interactive Service Selection (anchor: service-workflows) */}
      <ServiceSelectorTabs />

      {/* Section 4: Rent Machines Workflow (anchor: rent-workflow) */}
      <RentWorkflowSection />

      {/* Section 5: Buy / Sell Workflow (anchor: buy-sell-workflow) */}
      <BuySellWorkflowSection />

      {/* Section 6: Transport Workflow (anchor: transport-workflow) */}
      <TransportWorkflowSection />

      {/* Section 7: Materials Workflow (anchor: materials-workflow) */}
      <MaterialsWorkflowSection />

      {/* Section 8: Website vs Mobile App Comparison */}
      <WebsiteVsAppSection />

      {/* Section 9: Frequently Asked Questions */}
      <HowItWorksFaqSection />

      {/* Section 10: Final CTA */}
      <HowItWorksCtaSection onScrollToServices={handleScrollToServices} />
    </div>
  );
}
