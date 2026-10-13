"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AppFaqItem {
  id: string;
  question: string;
  answer: string;
}

const APP_FAQS: AppFaqItem[] = [
  {
    id: "app-faq-1",
    question: "Machine Wallah app kya hai?",
    answer:
      "Machine Wallah ek mobile application hai jo construction industry ke contractors, fleet owners aur material suppliers ko connect karne ke liye design kiya gaya hai. Isme machinery rental, buying/selling, transport aur raw material requirements ko structure karne ke workflows available hain.",
  },
  {
    id: "app-faq-2",
    question: "Machine Wallah app se kaunse services explore kar sakte hain?",
    answer:
      "App ke through aap char core services explore kar sakte hain: Rent Machines (JCB, Excavators, Cranes), Buy / Sell Machines (New & used equipment), Transport Services (Low-bed trailers, tippers, trucks), aur Construction Materials (Cement, Sand, Steel, RMC, Aggregates).",
  },
  {
    id: "app-faq-3",
    question: "Kya app Android aur iOS dono par available hai?",
    answer:
      "Official Android Play Store aur iOS App Store links confirmation aur rollout status ke baad website par add kiye jayenge. Tab tak aap website par services aur workflows explore kar sakte hain.",
  },
  {
    id: "app-faq-4",
    question: "Kya app ke through machine rental requirements share kar sakte hain?",
    answer:
      "Haan. App workflow ke anusaar customer apni required machine type (jaise Excavator ya Backhoe), expected tenure aur site location provide karke rental enquiry share kar sakta hai, aur machine owners ke saath direct discussion kar sakta hai.",
  },
  {
    id: "app-faq-5",
    question: "Kya machinery buying aur selling ke liye app use kar sakte hain?",
    answer:
      "Haan. App screens me buying flow (machine preference, budget, seller details, photos) aur selling flow (equipment condition, photos upload, demand price, listing manage) dono supported hain.",
  },
  {
    id: "app-faq-6",
    question: "Kya transport aur materials services app mein available hain?",
    answer:
      "Haan. Transport flow me route mapping, vehicle category (trailers, flatbeds, tippers) aur load specs submit kiye ja sakte hain. Materials flow me RMC, sand, gitti aur cement ke specifications contextual units me nearby suppliers tak share kiye ja sakte hain.",
  },
  {
    id: "app-faq-7",
    question: "App download karne mein problem ho to kya karein?",
    answer:
      "Agar official links ya access me koi issue ho, toh aap hamare Contact Us page ke through directly team se connect kar sakte hain ya updates ke liye support contact use kar sakte hain.",
  },
];

export function AppFaqSection() {
  const [openId, setOpenId] = useState<string | null>("app-faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="lg">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="App FAQ"
            badgeColor="blue"
            title="Frequently Asked Questions"
            description="Machine Wallah mobile application, features aur platform download status se jude common sawal."
            align="center"
          />
        </div>

        {/* Accessible Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {APP_FAQS.map((faq) => {
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
            Official app links aur compatibility details official launch announcements ke through update kiye jayenge.
          </span>
        </div>
      </Container>
    </section>
  );
}
