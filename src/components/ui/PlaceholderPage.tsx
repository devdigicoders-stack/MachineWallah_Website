import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealPhoneCallingIcon } from "@/components/ui/RealIcons";

interface PlaceholderPageProps {
  badge: string;
  badgeColor?: "yellow" | "blue" | "green" | "orange" | "navy";
  title: string;
  description: string;
  phaseNote?: string;
}

export function PlaceholderPage({
  badge,
  badgeColor = "yellow",
  title,
  description,
  phaseNote = "Detailed content, live enquiry forms and showcase features will be integrated in subsequent phases.",
}: PlaceholderPageProps) {
  const badgeColors = {
    yellow: "bg-[#FFBE0B]/15 text-[#8F6600] border-[#FFBE0B]/30",
    blue: "bg-[#0879D1]/15 text-[#0879D1] border-[#0879D1]/30",
    green: "bg-[#36A43B]/15 text-[#2E8B33] border-[#36A43B]/30",
    orange: "bg-[#F4511E]/15 text-[#D83B0A] border-[#F4511E]/30",
    navy: "bg-slate-200 text-[#141B29] border-slate-300",
  }[badgeColor];

  return (
    <div className="py-10 sm:py-14 bg-[#F2F8FF] min-h-[60vh] flex items-center">
      <Container size="lg">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-blue-100/80 shadow-md text-center max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColors}`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              {badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141B29] tracking-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{phaseNote}</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="md" leftIcon={<RealPhoneCallingIcon className="w-4 h-4" />}>
              Contact Us
            </Button>
            <Button href="/download-app" variant="yellow" size="md" leftIcon={<Smartphone className="w-4 h-4" />}>
              Download App
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
