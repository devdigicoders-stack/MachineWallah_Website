"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Machine Wallah kya hai?",
    answer:
      "Machine Wallah ek informational aur digital platform hai jo construction machinery rental, equipment buy/sell marketplace, transport logistics aur direct construction materials ke liye users ko relevant providers aur suppliers se connect karta hai.",
  },
  {
    id: "faq-2",
    question: "Machine rent karne ke liye kya karna hoga?",
    answer:
      "Aap hamari website ya mobile application par 'Rent Machines' section mein jakar apni requirement share kar sakte hain — jaise required machine type (JCB, Excavator, Roller ya Crane), project location aur expected duration. Uske baad relevant machine owners se connect ho sakte hain.",
  },
  {
    id: "faq-3",
    question: "Kya Machine Wallah par machines buy aur sell kar sakte hain?",
    answer:
      "Haan, Machine Wallah ke Buy / Sell marketplace par contractors aur owners apni used ya new heavy machinery list kar sakte hain, aur interested buyers machinery details, hours aur condition dekhkar direct connect kar sakte hain.",
  },
  {
    id: "faq-4",
    question: "Transport service ke liye enquiry kaise bhejein?",
    answer:
      "Agar aapko heavy equipment ya bulk construction items ek site se doosri site move karne hain, toh 'Transport Services' page par jakar pickup location, drop location aur vehicle type (jaise low-bed trailer ya flatbed) specify karke enquiry send kar sakte hain.",
  },
  {
    id: "faq-5",
    question: "Construction materials ke liye supplier se kaise connect karein?",
    answer:
      "Construction Materials vertical mein jakar RMC ready-mix concrete, sand (reti), aggregates (gitti), cement ya TMT steel ki required quantity aur site address share karein. Platform aapko relevant material suppliers se connect karta hai.",
  },
  {
    id: "faq-6",
    question: "Machine Wallah app kaise download karein?",
    answer:
      "Machine Wallah mobile application jald hi Google Play Store aur Apple App Store par launch hone wali hai. Tab tak aap hamari website ke zariye direct enquiry submit kar sakte hain ya updates ke liye Download App page visit kar sakte hain.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F2F8FF] border-t border-blue-100/60">
      <Container size="lg">
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeColor="blue"
          title="Frequently Asked Questions"
          description="Machine Wallah platform aur services se jude aam sawalon ke jawab."
          align="center"
        />

        <div className="mt-8 sm:mt-10 space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-blue-100/80 bg-white shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-200 hover:shadow-sm"
              >
                <button
                  type="button"
                  id={`button-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`content-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-[#141B29]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FFBE0B]/20 border-[#FFBE0B]/50" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 ${
                        isOpen ? "text-[#8F6600]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`content-${faq.id}`}
                    role="region"
                    aria-labelledby={`button-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100/60 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
