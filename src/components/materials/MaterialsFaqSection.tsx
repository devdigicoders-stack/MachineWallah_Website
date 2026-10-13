"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface MaterialFaqItem {
  id: string;
  question: string;
  answer: string;
}

const MATERIAL_FAQS: MaterialFaqItem[] = [
  {
    id: "faq-1",
    question: "Machine Wallah par material enquiry kaise bhejein?",
    answer:
      "Website par 'Share Your Material Requirement' form me apni contact details, required material category (jaise Cement, Sand, Steel, RMC), technical specification, quantity aur delivery location enter karke submit karein. Iske baad quotation discussion ke liye details process ki jaati hain.",
  },
  {
    id: "faq-2",
    question: "Kaunse construction materials ke liye enquiry kar sakte hain?",
    answer:
      "Aap Cement (OPC/PPC), Sand / M-Sand, Bricks & AAC Blocks, TMT Steel & Reinforcement, Ready-Mix Concrete (RMC), Stone Aggregates (10mm, 20mm, 40mm gitti), Paver Blocks & Tiles aur other custom building materials ke liye enquiry create kar sakte hain.",
  },
  {
    id: "faq-3",
    question: "Material ka price kaise determine hota hai?",
    answer:
      "Material pricing fixed nahi hoti. Prices supplier quotations, material grade/brand (jaise Fe 500D steel ya OPC 53 cement), required volume/quantity, transit distance, loading-unloading conditions aur market commodity rates par depend karti hain.",
  },
  {
    id: "faq-4",
    question: "Kya bulk quantity ke liye enquiry kar sakte hain?",
    answer:
      "Haan, commercial projects, residential towers, infrastructure contracts aur individual home builds dono ke liye bulk quantity requirements (jaise multiple truckloads of sand, trailer-loads of TMT steel, ya bulk cement bags) share ki ja sakti hain.",
  },
  {
    id: "faq-5",
    question: "Material grade aur quality kaise confirm karein?",
    answer:
      "Material quality aur technical specification confirmation ke liye customers ko suppliers se batch test certificates, manufacturer test certificates (MTC), lab test reports aur standard BIS certification documentation directly verify karne ki salah di jaati hai.",
  },
  {
    id: "faq-6",
    question: "Delivery location aur date kaise share karein?",
    answer:
      "Enquiry form me apne project site ka clear address, city/district aur preferred unloading date mention karein. Site access (jaise heavy truck ya transit mixer clearance) aur crane/labour availability ki details additional requirements field me add kar sakte hain.",
  },
  {
    id: "faq-7",
    question: "Kya enquiry submit karne se material order confirm ho jata hai?",
    answer:
      "Nahi, Machine Wallah par enquiry submit karna ek informational requirement request hai aur isse purchase order confirm nahi hota. Final purchase price, delivery schedule, billing terms aur payment agreements aap aur material supplier aapas me directly agree aur finalize karte hain.",
  },
];

export function MaterialsFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="lg">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            badge="Material Knowledge Base"
            badgeColor="blue"
            title="Frequently Asked Questions"
            description="Construction material procurement, quotations, specifications aur delivery terms se jude basic sawal."
            align="center"
          />
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {MATERIAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#0879D1]/50 bg-blue-50/30 shadow-md"
                    : "border-blue-100/80 bg-white hover:border-blue-200 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4511E]"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#F4511E] text-white"
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
                      isOpen ? "rotate-180 text-[#F4511E]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-0 border-t border-slate-100/80 text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
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
            Still have questions? Apni requirement form me describe karein ya hamare team se direct support connect karein.
          </span>
        </div>
      </Container>
    </section>
  );
}
