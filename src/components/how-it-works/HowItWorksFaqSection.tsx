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
    question: "Machine Wallah kaise kaam karta hai?",
    answer:
      "Machine Wallah ek 3-stage simple workflow follow karta hai: Pehle apni required service (Rent, Buy/Sell, Transport ya Materials) select karein, fir specific project & quantity details share karein, aur last me available communication channels ke through direct party ke saath quote aur terms discuss karein.",
  },
  {
    id: "faq-2",
    question: "Kya website se directly booking kar sakte hain?",
    answer:
      "Nahi. Yeh website informational hai aur requirement structure karne ke liye banayi gayi hai. Koi automatic booking engine, payment gateway ya instant reservation yahan nahi hai. Final booking aur terms aap aur service provider direct agree karte hain.",
  },
  {
    id: "faq-3",
    question: "Machine rental enquiry kaise share karein?",
    answer:
      "Rent Machines page par jakar apni required machine category (jaise Excavator ya JCB), approximate rental duration (days/months), aur site location fill karein. Form submit karne par structured enquiry generate hoti hai jise WhatsApp ya call par share kiya ja sakta hai.",
  },
  {
    id: "faq-4",
    question: "Machine buying aur selling process kya hai?",
    answer:
      "Buying ke liye aap budget range, brand preference aur location specify karte hain. Selling ke liye machine model, year, working hours meter reading aur demand price provide karte hain. Website par enquiry submit karna public marketplace listing create nahi karta, balki direct team connect initiate karta hai.",
  },
  {
    id: "faq-5",
    question: "Transport quotation ke liye kya details chahiye?",
    answer:
      "Transport enquiry ke liye vehicle type (flatbed, low-bed trailer, tipper), load weight (tonnage), dimensions, loading origin aur destination drop site address required hota hai taaki transporters realistic quote share kar sakein.",
  },
  {
    id: "faq-6",
    question: "Material enquiry submit karne ke liye kya information chahiye?",
    answer:
      "Material category (Cement, Sand, Bricks, Steel, RMC, Aggregates), technical grade, required volume/quantity contextual units me, aur project delivery location share karna hota hai.",
  },
  {
    id: "faq-7",
    question: "Kya Machine Wallah mobile app available hai?",
    answer:
      "Machine Wallah ka mobile application development aur rollout phase me hai. Mobile web par aap currently services aur workflows explore kar sakte hain, aur upcoming app release ki details Download App page par check kar sakte hain.",
  },
];

export function HowItWorksFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="lg">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Process FAQ"
            badgeColor="blue"
            title="Frequently Asked Questions"
            description="Machine Wallah platform ke workflows, enquiries aur communication methods se jude essential sawal."
            align="center"
          />
        </div>

        {/* Accessible Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-md"
                    : "border-blue-100/80 bg-white hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#141B29] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#141B29]">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#141B29]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-0 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                  >
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          <span>
            Koi aur question hai? Aap hamare contact channels ke through directly connect kar sakte hain.
          </span>
        </div>
      </Container>
    </section>
  );
}
