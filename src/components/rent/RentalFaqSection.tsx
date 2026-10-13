"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface RentalFaqItem {
  id: string;
  question: string;
  answer: string;
}

const RENTAL_FAQS: RentalFaqItem[] = [
  {
    id: "faq-1",
    question: "Machine Wallah par machine rental enquiry kaise karein?",
    answer:
      "Website par 'Tell Us Your Machine Requirement' form fill karke ya machine category card ke 'Enquire Now' button par click karke aap apni requirement (location, expected duration, equipment type) direct submit kar sakte hain. Iske baad requirement ko follow-up ke liye process kiya jata hai.",
  },
  {
    id: "faq-2",
    question: "Kaunsi machine categories explore kar sakte hain?",
    answer:
      "Aap Backhoe Loaders (JCB), Heavy Tracked Excavators, Mobile Hydra Cranes, Soil & Asphalt Road Rollers, Wheel Loaders, Bulldozers, Motor Graders aur Concrete Transit Mixers jaise 8+ primary heavy equipment categories explore kar sakte hain. Specialized customized requirements ke liye 'Other' category select kar sakte hain.",
  },
  {
    id: "faq-3",
    question: "Kya machine rental prices fixed hote hain?",
    answer:
      "Nahi, heavy construction machinery rental charges fixed nahi hote. Yeh project location, expected hire duration (daily, weekly ya monthly), equipment brand/tonnage, diesel policy (fuel inclusive ya client scope) aur transportation distance ke according mutually discuss aur decide hote hain.",
  },
  {
    id: "faq-4",
    question: "Machine availability kaise confirm hogi?",
    answer:
      "Enquiry share karne ke baad, relevant equipment owners ke active machines aur project schedule ke mutabik availability verify ki jaati hai. Actual mobilization dates dono parties ke beech direct agreement par confirm hoti hain.",
  },
  {
    id: "faq-5",
    question: "Kya machine operator bhi available hoga?",
    answer:
      "Aamtaur par heavy machinery rentals experienced commercial operator aur helper/cleaner ke sath provide kiye jaate hain. Long-term civil contracts me dry lease (bina operator) terms bhi mutual discussion ke dwara decide kiye ja sakte hain.",
  },
  {
    id: "faq-6",
    question: "Rental duration kaise decide hoti hai?",
    answer:
      "Aap apne project requirement ke anusar flexible rental duration specify kar sakte hain — jaise temporary excavation ke liye few days, residential work ke liye 15-30 days, ya infrastructure highways ke liye 3 to 12 months. Long-term contracts me usually favorable monthly rates apply hote hain.",
  },
];

export function RentalFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Rental Knowledge Base</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Rental FAQ
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Machine rental process, rates, availability aur operators se jude aam sawal.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {RENTAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white bg-white text-[#141B29] overflow-hidden transition-all duration-200 shadow-xl"
              >
                <button
                  type="button"
                  id={`rent-faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`rent-faq-content-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B] gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#141B29] leading-snug">
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
                    id={`rent-faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`rent-faq-btn-${faq.id}`}
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
            Koi aur query hai? Aap hamare rental enquiry form me customized notes likh sakte hain ya direct Contact Us page visit kar sakte hain.
          </p>
        </div>
      </Container>
    </section>
  );
}
