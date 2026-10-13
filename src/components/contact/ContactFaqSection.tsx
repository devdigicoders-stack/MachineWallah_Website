"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FaqItem {
  question: string;
  answer: string;
}

const CONTACT_FAQS: FaqItem[] = [
  {
    question: "Machine Wallah par enquiry bhejne ka koi brokerage ya commission charge hota hai?",
    answer:
      "Bilkul nahi! Machine Wallah par requirement share karna bilkul transparent aur brokerage-free hai. Hum contractors, fleet owners aur material suppliers ke beech direct connections establish karte hain bina kisi hidden margin ya middleman commission ke.",
  },
  {
    question: "WhatsApp enquiry aur Email enquiry me se kaun sa option prefer karein?",
    answer:
      "Instant site requirement, machinery photos, ya quick availability check ke liye 'Send via WhatsApp' best aur sabse fast option hai. Formal quotation, corporate tenders, purchase orders (PO), ya bulk material contracts ke liye 'Send via Email' zyada convenient hai.",
  },
  {
    question: "Agar mere system ya browser par default email app configured nahi hai to kya karein?",
    answer:
      "Aapko chinta karne ki zaroorat nahi hai. Form ke neeche diye gaye 'Copy Formatted Requirement' button par click karein. Aapki complete requirement perfectly format hokar clipboard par copy ho jayegi. Uske baad aap use apne Gmail, Yahoo, Outlook web ya WhatsApp par seedhe paste karke bhej sakte hain.",
  },
  {
    question: "Enquiry dispatch karne ke baad Machine Wallah team kitni der me connect karegi?",
    answer:
      "Standard business hours (Mon-Sat, 9:00 AM – 7:00 PM IST) ke dauran hamari operations team within same day aapse connect karti hai. Urgent site emergencies ke liye WhatsApp channel prioritize hota hai.",
  },
  {
    question: "Kya main ek enquiry me multiple machines ya route combinations share kar sakta hoon?",
    answer:
      "Haan! Aap relevant category select karke 'Requirement Details' section me multiple machines (e.g. 1 JCB + 1 Excavator) ya complex transport routes ke complete details mention kar sakte hain.",
  },
  {
    question: "Kya website enquiry ke alawa mobile app se bhi requirements post kar sakte hain?",
    answer:
      "Haan, bilkul! Machine Wallah Android mobile application active hai jahan aap dynamic fleet listings browse kar sakte hain, direct owner connects le sakte hain aur real-time transport options explore kar sakte hain.",
  },
];

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="lg">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Common Questions"
            badgeColor="blue"
            title="Frequently Asked Questions"
            description="Enquiries, response timing aur direct communication se jude aam sawalon ke seedhe javab."
            align="center"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {CONTACT_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-200 shadow-md"
                    : "border-blue-100/80 hover:border-blue-200 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0879D1]"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#0879D1] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
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
