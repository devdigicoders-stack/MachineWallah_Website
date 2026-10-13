import React from "react";
import Link from "next/link";
import {
  Compass,
  FileCheck2,
  ArrowRight,
  Info,
} from "lucide-react";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface ConnectStage {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const STAGES: ConnectStage[] = [
  {
    step: "01",
    title: "Explore Your Service",
    description: "Apni requirement ke according service category choose karein — Rent, Buy/Sell, Transport ya Materials.",
    icon: <Compass className="w-6 h-6 text-[#8F6600]" />,
    accentBg: "bg-[#FFBE0B]/15",
    accentBorder: "border-[#FFBE0B]/30",
    accentText: "text-[#8F6600]",
  },
  {
    step: "02",
    title: "Share Your Requirement",
    description: "Machine model, site location, duration ya needed material volume ki relevant information share karein.",
    icon: <FileCheck2 className="w-6 h-6 text-[#0879D1]" />,
    accentBg: "bg-[#0879D1]/15",
    accentBorder: "border-[#0879D1]/30",
    accentText: "text-[#0879D1]",
  },
  {
    step: "03",
    title: "Connect & Proceed",
    description: "Available platform communication options (call, WhatsApp ya enquiry form) ke through next steps coordinate karein.",
    icon: <RealPhoneCallingIcon className="w-6 h-6 text-[#2E8B33]" />,
    accentBg: "bg-[#36A43B]/15",
    accentBorder: "border-[#36A43B]/30",
    accentText: "text-[#2E8B33]",
  },
];

export function HowWeConnectSection() {
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

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Connection Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            How We Connect
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Requirement sharing se lekar provider communication tak ka clean horizontal workflow.
          </p>
        </div>

        {/* Horizontal Process Visualization on Desktop / Stacked on Mobile */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-white/40 -z-0 -translate-y-8"
          />

          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white text-[#141B29] border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step Badge */}
              <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-[#141B29] text-white text-xs font-black tracking-widest shadow-sm">
                STAGE {stage.step}
              </div>

              {/* Icon Circle */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${stage.accentBg} border ${stage.accentBorder} group-hover:scale-110 transition-transform duration-200`}
              >
                {stage.icon}
              </div>

              <h3 className="text-xl font-bold text-[#141B29] mb-2.5">
                {stage.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informational Scope Note */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-white">
          <Info className="w-5 h-5 text-amber-200 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-bold text-amber-200">Important Notice: </span>
            <span className="text-amber-50">
              Yeh informational website general enquiry sharing aur communication facilitation ke liye design ki gayi hai. Full-fledged automated matching aur mobile tools hamari mobile app par uplabdh hain.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            href="/how-it-works"
            variant="yellow"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#141B29]" />}
            className="font-bold shadow-lg text-[#141B29]"
          >
            See How It Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
