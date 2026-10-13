"use client";

import React, { useState, useCallback } from "react";
import { BuySellHero } from "./BuySellHero";
import { ChooseBuySellSection } from "./ChooseBuySellSection";
import { BuySellCategoriesSection } from "./BuySellCategoriesSection";
import { HowBuyingWorksSection } from "./HowBuyingWorksSection";
import { HowSellingWorksSection } from "./HowSellingWorksSection";
import { WhyBuySellSection } from "./WhyBuySellSection";
import { BuySellEnquiryForm, BuySellTab } from "./BuySellEnquiryForm";
import { BuySellAppPromoSection } from "./BuySellAppPromoSection";
import { BuySellFaqSection } from "./BuySellFaqSection";
import { BuySellCtaSection } from "./BuySellCtaSection";

export function BuySellPageClient() {
  const [activeTab, setActiveTab] = useState<BuySellTab>("buy");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Backhoe Loader (JCB)"
  );

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSelectBuyFlow = useCallback(() => {
    setActiveTab("buy");
    scrollToSection("buying-process");
  }, [scrollToSection]);

  const handleSelectSellFlow = useCallback(() => {
    setActiveTab("sell");
    scrollToSection("selling-process");
  }, [scrollToSection]);

  const handleSendBuyingEnquiry = useCallback(() => {
    setActiveTab("buy");
    scrollToSection("buy-sell-enquiry");
  }, [scrollToSection]);

  const handleSendSellingEnquiry = useCallback(() => {
    setActiveTab("sell");
    scrollToSection("buy-sell-enquiry");
  }, [scrollToSection]);

  const handleSelectCategory = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      scrollToSection("buy-sell-enquiry");

      setTimeout(() => {
        const selectEl = document.getElementById("machineCategory");
        if (selectEl) {
          selectEl.focus();
        }
      }, 500);
    },
    [scrollToSection]
  );

  const handleScrollToEnquiry = useCallback(() => {
    scrollToSection("buy-sell-enquiry");
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <BuySellHero
        onScrollToBuy={handleSelectBuyFlow}
        onScrollToSell={handleSelectSellFlow}
      />

      {/* Section 2: Choose Buy or Sell Split Cards */}
      <ChooseBuySellSection
        onSelectBuy={handleSelectBuyFlow}
        onSelectSell={handleSelectSellFlow}
      />

      {/* Section 3: Machine Categories */}
      <BuySellCategoriesSection onSelectCategory={handleSelectCategory} />

      {/* Section 4: How Buying Works (anchor: buying-process) */}
      <HowBuyingWorksSection onSendBuyingEnquiry={handleSendBuyingEnquiry} />

      {/* Section 5: How Selling Works (anchor: selling-process) */}
      <HowSellingWorksSection onSendSellingEnquiry={handleSendSellingEnquiry} />

      {/* Section 6: Why Machine Wallah */}
      <WhyBuySellSection />

      {/* Section 7: Dynamic Buy / Sell Enquiry Form (anchor: buy-sell-enquiry) */}
      <BuySellEnquiryForm
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Section 8: Mobile App Promotion */}
      <BuySellAppPromoSection />

      {/* Section 9: FAQ */}
      <BuySellFaqSection />

      {/* Section 10: Final Contact CTA */}
      <BuySellCtaSection onScrollToEnquiry={handleScrollToEnquiry} />
    </div>
  );
}
