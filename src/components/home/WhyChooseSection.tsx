import React from "react";
import {
  Layers,
  FileCheck2,
  Users2,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Multiple Construction Services",
    description:
      "Machinery rental, transport logistics, used/new machine trading, aur raw building materials — charon zarooraton ka ek unified digital platform.",
    icon: <Layers className="w-6 h-6 text-[#8F6600]" />,
    iconBg: "bg-[#FFBE0B]/15",
  },
  {
    title: "Simple Requirement Enquiries",
    description:
      "Site requirements share karna asaan hai. Machine type, location ya required material quantity specify karein aur enquiry generate karein.",
    icon: <FileCheck2 className="w-6 h-6 text-[#0879D1]" />,
    iconBg: "bg-[#0879D1]/15",
  },
  {
    title: "Connect with Relevant Providers",
    description:
      "Middlemen ke confusion ke bina machine owners, commercial fleet transporters aur direct material plants se coordination karein.",
    icon: <Users2 className="w-6 h-6 text-[#2E8B33]" />,
    iconBg: "bg-[#36A43B]/15",
  },
  {
    title: "Mobile-Friendly Platform",
    description:
      "Construction sites par kaam karte waqt smartphone ke through enquiry submit karna aur requirements track karna aasaan aur fast hai.",
    icon: <Smartphone className="w-6 h-6 text-[#D83B0A]" />,
    iconBg: "bg-[#F4511E]/15",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <SectionHeading
          badge="Platform Benefits"
          badgeColor="blue"
          title="Why Choose Machine Wallah?"
          description="Construction projects ko organized aur convenient banane ke liye banaya gaya modern platform."
          align="center"
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white text-[#141B29] border border-blue-100/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${benefit.iconBg} group-hover:scale-110 transition-transform duration-200`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-lg font-bold text-[#141B29] mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0879D1]" />
                <span>Modern Platform Experience</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
