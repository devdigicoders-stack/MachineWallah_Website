"use client";

import React, { useState, useCallback } from "react";
import { TransportHero } from "./TransportHero";
import { TransportCategoriesSection } from "./TransportCategoriesSection";
import { WhatCanBeTransportedSection } from "./WhatCanBeTransportedSection";
import { WhyTransportSection } from "./WhyTransportSection";
import { HowTransportWorksSection } from "./HowTransportWorksSection";
import { TransportEnquiryForm } from "./TransportEnquiryForm";
import { TransportAppPromoSection } from "./TransportAppPromoSection";
import { TransportFaqSection } from "./TransportFaqSection";
import { TransportCtaSection } from "./TransportCtaSection";

export function TransportPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Low-Bed Trailer"
  );

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSelectCategory = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      scrollToSection("transport-enquiry");

      setTimeout(() => {
        const selectEl = document.getElementById("transportCategory");
        if (selectEl) {
          selectEl.focus();
        }
      }, 500);
    },
    [scrollToSection]
  );

  const handleScrollToCategories = useCallback(() => {
    scrollToSection("transport-categories");
  }, [scrollToSection]);

  const handleScrollToEnquiry = useCallback(() => {
    scrollToSection("transport-enquiry");
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <TransportHero
        onScrollToCategories={handleScrollToCategories}
        onScrollToEnquiry={handleScrollToEnquiry}
      />

      {/* Section 2: Transport Vehicle Categories (anchor: transport-categories) */}
      <TransportCategoriesSection onSelectCategory={handleSelectCategory} />

      {/* Section 3: What Can Be Transported */}
      <WhatCanBeTransportedSection />

      {/* Section 4: Why Machine Wallah */}
      <WhyTransportSection />

      {/* Section 5: How Transport Enquiry Works */}
      <HowTransportWorksSection />

      {/* Section 6: Transport Requirement Form (anchor: transport-enquiry) */}
      <TransportEnquiryForm
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Section 7: Mobile App Promotion */}
      <TransportAppPromoSection />

      {/* Section 8: Frequently Asked Questions */}
      <TransportFaqSection />

      {/* Section 9: Final Contact CTA */}
      <TransportCtaSection onScrollToEnquiry={handleScrollToEnquiry} />
    </div>
  );
}
