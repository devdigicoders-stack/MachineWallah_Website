import React from "react";
import Link from "next/link";
import {
  MousePointerClick,
  FileText,
  PhoneForwarded,
  ArrowRight,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Choose Your Service",
    description:
      "Rent Machines, Buy/Sell Machinery, Transport Services ya Construction Materials mein se apni zaroorat select karein.",
    icon: <MousePointerClick className="w-6 h-6 text-[#8F6600]" />,
    accentBg: "bg-[#FFBE0B]/15",
    accentBorder: "border-[#FFBE0B]/30",
    accentText: "text-[#8F6600]",
  },
  {
    number: "02",
    title: "Share Your Requirement",
    description:
      "Machine model, rental duration, pickup/drop location ya material quantity ki details aasaani se share karein.",
    icon: <FileText className="w-6 h-6 text-[#0879D1]" />,
    accentBg: "bg-[#0879D1]/15",
    accentBorder: "border-[#0879D1]/30",
    accentText: "text-[#0879D1]",
  },
  {
    number: "03",
    title: "Connect & Move Forward",
    description:
      "Relevant machine owners, transporters ya material suppliers se direct connect karein aur apna deal aage badhayein.",
    icon: <PhoneForwarded className="w-6 h-6 text-[#2E8B33]" />,
    accentBg: "bg-[#36A43B]/15",
    accentBorder: "border-[#36A43B]/30",
    accentText: "text-[#2E8B33]",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <SectionHeading
          badge="Simple Process"
          badgeColor="blue"
          title="Machine Wallah Kaise Kaam Karta Hai?"
          description="Chahe machinery rent par leni ho ya transport book karna ho, प्रक्रिया bilkul saral hai."
          align="center"
        />

        {/* 3 Step Connected Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line across desktop steps */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-blue-200 -z-0 -translate-y-8"
          />

          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-blue-100/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step Number Pill */}
              <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-[#141B29] text-white text-xs font-black tracking-widest shadow-sm">
                STEP {step.number}
              </div>

              {/* Icon Circle */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${step.accentBg} border ${step.accentBorder} group-hover:scale-110 transition-transform duration-200`}
              >
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#141B29] mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile App vs Website Clarification Note */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-white border border-blue-200/80 p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-700 shadow-sm">
          <Info className="w-5 h-5 text-[#0879D1] shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-bold text-[#141B29]">Note: </span>
            <span>
              Website ke zariye aap apni general requirements aur enquiries submit kar sakte hain, jabki real-time marketplace interaction aur live tracking features hamari official mobile app par uplabdh hain.
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Button
            href="/how-it-works"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold border-slate-300 bg-white hover:bg-slate-50 hover:border-[#141B29]"
          >
            Learn More About The Workflow
          </Button>
        </div>
      </Container>
    </section>
  );
}
