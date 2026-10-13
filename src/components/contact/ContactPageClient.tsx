"use client";

import React, { useCallback } from "react";
import { ContactHero } from "./ContactHero";
import { ContactInfoCards } from "./ContactInfoCards";
import { ContactEnquiryForm } from "./ContactEnquiryForm";
import { ContactFaqSection } from "./ContactFaqSection";
import { ContactCtaSection } from "./ContactCtaSection";

export function ContactPageClient() {
  const scrollToForm = useCallback(() => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <ContactHero onScrollToForm={scrollToForm} />

      {/* 2. Contact Information Cards */}
      <ContactInfoCards />

      {/* 3. Select Your Service + Dynamic Enquiry Form + WhatsApp/Email Actions */}
      <ContactEnquiryForm />

      {/* 4. Contact FAQs */}
      <ContactFaqSection />

      {/* 5. Final Contact CTA */}
      <ContactCtaSection onScrollToForm={scrollToForm} />
    </div>
  );
}
