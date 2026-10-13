"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TransportFaqItem {
  id: string;
  question: string;
  answer: string;
}

const TRANSPORT_FAQS: TransportFaqItem[] = [
  {
    id: "faq-1",
    question: "Machine Wallah par transport enquiry kaise bhejein?",
    answer:
      "Website par 'Tell Us Your Transport Requirement' form me vehicle category (jaise low-bed trailer ya flatbed), load description, pickup city aur drop location details fill karke submit karein. Iske baad requirement ko follow-up ke liye process kiya jata hai.",
  },
  {
    id: "faq-2",
    question: "Kaunse transport vehicle categories explore kar sakte hain?",
    answer:
      "Aap Flatbed trucks, Low-bed heavy trailers, Tippers / dump trucks, Commercial cargo trucks, Weather-protected container trucks, Heavy-duty modular trailers, Mini trucks / pickups aur Specialized machinery carriers jaise 8+ primary fleet options explore kar sakte hain.",
  },
  {
    id: "faq-3",
    question: "Transport charges kaise decide hote hain?",
    answer:
      "Transport charges fixed nahi hote. Yeh total transit distance (km), load weight aur tonnage, cargo dimensions (ODC status), road toll expenses, diesel cost aur loading/unloading turnaround time ke according mutually discuss aur quote kiye jaate hain.",
  },
  {
    id: "faq-4",
    question: "Kya heavy machinery transport ke liye enquiry kar sakte hain?",
    answer:
      "Haan, 10T to 35T+ tracked excavators, road compactors, motor graders, hydra cranes aur heavy crawler equipment ke site-to-site inter-city ya local movement ke liye low-bed trailer requirements aasani se share ki ja sakti hain.",
  },
  {
    id: "faq-5",
    question: "Pickup aur delivery locations kaise share karein?",
    answer:
      "Form me loading point (city/district/state) aur destination drop site address clearly enter karein. Agar delivery site par narrow access roads, sharp turns ya bridge weight restrictions hain, toh unhe additional details me mention kar sakte hain.",
  },
  {
    id: "faq-6",
    question: "Kya enquiry submit karne se booking confirm ho jaati hai?",
    answer:
      "Nahi, website par enquiry submit karna informational request hai aur yeh automatic booking confirmation nahi hota. Actual vehicle placement date, advance payment terms aur transit agreement transporter ke saath direct coordination ke baad finalize hota hai.",
  },
  {
    id: "faq-7",
    question: "Kya transport service ke liye permit ya special arrangement required ho sakta hai?",
    answer:
      "Oversized ya over-dimensional consignments (ODC) ke liye state RTO permissions, night-movement permits, pilot escort vehicles aur site par crane loading/unloading arrangements required ho sakte hain, jo transporter ke saath directly arrange aur finalize kiye jaate hain.",
  },
];

export function TransportFaqSection() {
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
            badge="Logistics Knowledge Base"
            badgeColor="blue"
            title="Frequently Asked Questions"
            description="Transport enquiries, vehicle selection, freight charges aur route permits se jude aam sawal."
            align="center"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {TRANSPORT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-blue-100/80 bg-white overflow-hidden transition-all duration-200 hover:border-[#0879D1]/40 shadow-sm"
              >
                <button
                  type="button"
                  id={`transport-faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`transport-faq-content-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0879D1] gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#141B29] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#0879D1]/20 border-[#0879D1]/50" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 ${
                        isOpen ? "text-[#0879D1]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`transport-faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`transport-faq-btn-${faq.id}`}
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
            Koi customized freight requirement hai? Form me specific notes share karein ya direct Contact Us page visit karein.
          </p>
        </div>
      </Container>
    </section>
  );
}
