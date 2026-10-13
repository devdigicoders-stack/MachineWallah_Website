import React from "react";
import {
  Layers,
  FileText,
  Users,
  HardHat,
  Smartphone,
} from "lucide-react";
import { WhatsAppBadgeIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface WhyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

const WHY_POINTS: WhyItem[] = [
  {
    title: "Multiple Services in One Place",
    description:
      "Machinery rental, equipment trading, heavy transport logistics aur site materials — charon primary needs ek hi digital platform par.",
    icon: <Layers className="w-6 h-6 text-[#FFBE0B]" />,
    iconBg: "bg-[#FFBE0B]/15",
    iconColor: "text-[#8F6600]",
    borderHover: "hover:border-[#FFBE0B]",
  },
  {
    title: "Easy Requirement Sharing",
    description:
      "Apni site requirements ko machine specifications, location aur timeframe ke sath structured tarike se share karein bina kisi confusion ke.",
    icon: <FileText className="w-6 h-6 text-[#0879D1]" />,
    iconBg: "bg-[#0879D1]/15",
    iconColor: "text-[#0879D1]",
    borderHover: "hover:border-[#0879D1]",
  },
  {
    title: "Buyer and Provider Connections",
    description:
      "Contractors, machine owners, trailer transporters aur material suppliers ke beech transparent interaction aur enquiry sharing facilitate karta hai.",
    icon: <Users className="w-6 h-6 text-[#36A43B]" />,
    iconBg: "bg-[#36A43B]/15",
    iconColor: "text-[#2E8B33]",
    borderHover: "hover:border-[#36A43B]",
  },
  {
    title: "Construction-Focused Experience",
    description:
      "General marketplaces ke mukable, hamara pura design aur workflow heavy construction equipment aur building supplies ke mutabiq tailor-made hai.",
    icon: <HardHat className="w-6 h-6 text-[#F4511E]" />,
    iconBg: "bg-[#F4511E]/15",
    iconColor: "text-[#D83B0A]",
    borderHover: "hover:border-[#F4511E]",
  },
  {
    title: "Convenient Mobile Platform",
    description:
      "On-ground site managers aur fleet owners apne phone se kisi bhi waqt requirements check aur manage kar sakte hain.",
    icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderHover: "hover:border-indigo-400",
  },
  {
    title: "Simple Communication",
    description:
      "Unnecessary complex processes ke bina direct phone calls, WhatsApp messages aur structured web enquiry options uplabdh hain.",
    icon: <WhatsAppBadgeIcon className="w-6 h-6" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-[#25D366]",
    borderHover: "hover:border-emerald-400",
  },
];

export function WhyChooseAboutSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <SectionHeading
          badge="Platform Strengths"
          badgeColor="blue"
          title="Why Machine Wallah?"
          description="Construction operations ko simplified aur digitally connected banane ke key features."
          align="center"
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-100/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.iconBg}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#141B29] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Core Value Advantage</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
