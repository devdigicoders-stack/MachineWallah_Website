"use client";

import React, { useState, useCallback } from "react";
import { MaterialsHero } from "./MaterialsHero";
import { MaterialCategoriesSection } from "./MaterialCategoriesSection";
import { MaterialApplicationsSection } from "./MaterialApplicationsSection";
import { WhyMaterialsSection } from "./WhyMaterialsSection";
import { HowMaterialsWorksSection } from "./HowMaterialsWorksSection";
import { MaterialEnquiryForm } from "./MaterialEnquiryForm";
import { MaterialsAppPromoSection } from "./MaterialsAppPromoSection";
import { MaterialsFaqSection } from "./MaterialsFaqSection";
import { MaterialsCtaSection } from "./MaterialsCtaSection";

export function MaterialsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Cement");

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSelectCategory = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      scrollToSection("material-enquiry");

      setTimeout(() => {
        const selectEl = document.getElementById("materialSpecification");
        if (selectEl) {
          selectEl.focus();
        }
      }, 500);
    },
    [scrollToSection]
  );

  const handleScrollToCategories = useCallback(() => {
    scrollToSection("material-categories");
  }, [scrollToSection]);

  const handleScrollToEnquiry = useCallback(() => {
    scrollToSection("material-enquiry");
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <MaterialsHero
        onScrollToCategories={handleScrollToCategories}
        onScrollToEnquiry={handleScrollToEnquiry}
      />

      {/* Section 2: Material Categories (anchor: material-categories) */}
      <MaterialCategoriesSection onSelectCategory={handleSelectCategory} />

      {/* Section 3: Material Applications across Construction Stages */}
      <MaterialApplicationsSection />

      {/* Section 4: Why Machine Wallah */}
      <WhyMaterialsSection />

      {/* Section 5: How Material Enquiries Work */}
      <HowMaterialsWorksSection />

      {/* Section 6: Material Requirement Form (anchor: material-enquiry) */}
      <MaterialEnquiryForm
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Section 7: Mobile App Promotion */}
      <MaterialsAppPromoSection />

      {/* Section 8: Frequently Asked Questions */}
      <MaterialsFaqSection />

      {/* Section 9: Final Contact CTA */}
      <MaterialsCtaSection onScrollToEnquiry={handleScrollToEnquiry} />
    </div>
  );
}
