"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface BuySellFaqItem {
  id: string;
  question: string;
  answer: string;
}

const BUY_SELL_FAQS: BuySellFaqItem[] = [
  {
    id: "faq-1",
    question: "Machine Wallah par machine buy karne ke liye kya karna hoga?",
    answer:
      "Website par 'Tell Us About Your Machinery Requirement' form me 'Buy Machine' tab select karein aur apni requirement (machine category, new ya used preference, location aur budget) submit karein. Iske baad Machine Wallah team suitable options aur next steps ke liye aapse connect karti hai.",
  },
  {
    id: "faq-2",
    question: "Kya new aur used machines dono explore kar sakte hain?",
    answer:
      "Haan, platform par new construction equipment ke sath-sath well-maintained used / pre-owned machines ke liye bhi enquiry options available hain. Form me aap apni condition preference (New, Used, ya Either) select kar sakte hain.",
  },
  {
    id: "faq-3",
    question: "Apni construction machine sell karne ke liye kya details chahiye?",
    answer:
      "Machine sell karne ke liye brand name (e.g. JCB, Tata Hitachi, Komatsu, CAT), exact model, manufacturing year, machine working hours, operational condition aur expected selling price provide karni hoti hai.",
  },
  {
    id: "faq-4",
    question: "Kya website par directly machine purchase ho sakti hai?",
    answer:
      "Nahi, yeh website informational aur connection platform hai jahan online payments ya checkout nahi hota. Heavy machinery ka actual transaction physical site inspection, RC/NOC documents verification aur mutual agreement ke baad dono parties ke beech directly hota hai.",
  },
  {
    id: "faq-5",
    question: "Machine ki condition aur price kaise confirm hogi?",
    answer:
      "Machine seller aur buyer direct communication ke zariye site visit aur physical trial arrange karte hain. Mechanical condition, tyres/tracks health aur price negotiation dono paksho ke beech directly finalize hota hai.",
  },
  {
    id: "faq-6",
    question: "Kya Machine Wallah app se buying aur selling explore kar sakte hain?",
    answer:
      "Haan, Machine Wallah mobile application launch hone par contractors, machine owners aur dealers direct app ke zariye equipment photos, detailed specs aur direct in-app chat/call features use kar sakenge. Tab tak aap website enquiries ke through connect kar sakte hain.",
  },
];

export function BuySellFaqSection() {
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
            badge="Common Inquiries"
            badgeColor="blue"
            title="Buy / Sell FAQ"
            description="Machinery buying, selling, inspection aur communication se jude aam sawal."
            align="center"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {BUY_SELL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/50 overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  id={`buysell-faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`buysell-faq-content-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36A43B] gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#141B29] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#36A43B]/20 border-[#36A43B]/50" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 ${
                        isOpen ? "text-[#257328]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`buysell-faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`buysell-faq-btn-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scope Note */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500">
            Kuch aur discuss karna chahte hain? Hamare enquiry form me customized notes likhein ya direct Contact Us page visit karein.
          </p>
        </div>
      </Container>
    </section>
  );
}
