"use client";

import React, { useState, useCallback } from "react";
import { RentHero } from "./RentHero";
import { MachineCategoriesSection } from "./MachineCategoriesSection";
import { WhyRentSection } from "./WhyRentSection";
import { EquipmentApplicationsSection } from "./EquipmentApplicationsSection";
import { HowRentalWorksSection } from "./HowRentalWorksSection";
import { RentalEnquiryForm } from "./RentalEnquiryForm";
import { RentalFaqSection } from "./RentalFaqSection";
import { RentalAppPromoSection } from "./RentalAppPromoSection";
import { RentalCtaSection } from "./RentalCtaSection";

export function RentPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Backhoe Loader (JCB)"
  );

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSelectCategory = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      // Smoothly scroll to the enquiry form
      scrollToSection("rental-enquiry");

      // Give visual focus to the category dropdown after scroll
      setTimeout(() => {
        const selectEl = document.getElementById("machineCategory");
        if (selectEl) {
          selectEl.focus();
        }
      }, 500);
    },
    [scrollToSection]
  );

  const handleScrollToCategories = useCallback(() => {
    scrollToSection("categories");
  }, [scrollToSection]);

  const handleScrollToEnquiry = useCallback(() => {
    scrollToSection("rental-enquiry");
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <RentHero
        onScrollToCategories={handleScrollToCategories}
        onScrollToEnquiry={handleScrollToEnquiry}
      />

      {/* Section 2: Machine Categories */}
      <MachineCategoriesSection onSelectCategory={handleSelectCategory} />

      {/* Section 3: Why Rent Through Machine Wallah */}
      <WhyRentSection />

      {/* Section 4: Equipment Applications */}
      <EquipmentApplicationsSection />

      {/* Section 5: How Rental Enquiries Work */}
      <HowRentalWorksSection />

      {/* Section 6: Rental Enquiry Form */}
      <RentalEnquiryForm
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Section 7: Rental FAQ */}
      <RentalFaqSection />

      {/* Section 8: Mobile App Promotion */}
      <RentalAppPromoSection />

      {/* Section 9: Final Call to Action */}
      <RentalCtaSection onScrollToEnquiry={handleScrollToEnquiry} />
    </div>
  );
}
