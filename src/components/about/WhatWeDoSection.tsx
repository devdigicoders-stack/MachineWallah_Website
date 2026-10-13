import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  Handshake,
  Truck,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServiceBlock {
  title: string;
  description: string;
  href: string;
  colorHex: string;
  colorName: "yellow" | "green" | "blue" | "orange";
  badgeBg: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const WHAT_WE_DO_SERVICES: ServiceBlock[] = [
  {
    title: "Rent Machines",
    description:
      "Different construction equipment rental requirements ko explore aur share karne ka convenient platform.",
    href: "/rent-machines",
    colorHex: "#FFBE0B",
    colorName: "yellow",
    badgeBg: "bg-[#FFBE0B]/15",
    textColor: "text-[#8F6600]",
    borderColor: "hover:border-[#FFBE0B]",
    icon: <HardHat className="w-5 h-5 text-[#8F6600]" />,
    imageSrc: "/images/service-rent.jpg",
    imageAlt: "Yellow JCB backhoe loader excavator on road construction project",
  },
  {
    title: "Buy / Sell Machines",
    description:
      "Machinery buyers aur sellers ko relevant opportunities explore karne mein help karta hai.",
    href: "/buy-sell",
    colorHex: "#36A43B",
    colorName: "green",
    badgeBg: "bg-[#36A43B]/15",
    textColor: "text-[#2E8B33]",
    borderColor: "hover:border-[#36A43B]",
    icon: <Handshake className="w-5 h-5 text-[#2E8B33]" />,
    imageSrc: "/images/service-buysell.jpg",
    imageAlt: "Construction machinery sales yard with rows of yellow excavators",
  },
  {
    title: "Transport Services",
    description:
      "Heavy machines, equipment aur construction materials ki transportation requirements ke liye connect karo.",
    href: "/transport",
    colorHex: "#0879D1",
    colorName: "blue",
    badgeBg: "bg-[#0879D1]/15",
    textColor: "text-[#0879D1]",
    borderColor: "hover:border-[#0879D1]",
    icon: <Truck className="w-5 h-5 text-[#0879D1]" />,
    imageSrc: "/images/service-transport.jpg",
    imageAlt: "Heavy low-bed trailer truck carrying excavator machine",
  },
  {
    title: "Construction Materials",
    description:
      "Construction material requirements ko suppliers tak pahunchane ke liye enquiry share karo.",
    href: "/materials",
    colorHex: "#F4511E",
    colorName: "orange",
    badgeBg: "bg-[#F4511E]/15",
    textColor: "text-[#D83B0A]",
    borderColor: "hover:border-[#F4511E]",
    icon: <Layers className="w-5 h-5 text-[#D83B0A]" />,
    imageSrc: "/images/service-materials.jpg",
    imageAlt: "Construction materials yard with sand, gravel, cement and steel",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <SectionHeading
          badge="What We Do"
          badgeColor="yellow"
          title="Four Essential Services. One Platform."
          description="Chahe equipment rent karna ho ya bulk materials procure karna ho, hamare four core pillars har stage par madad karte hain."
          align="center"
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_DO_SERVICES.map((service) => (
            <div
              key={service.href}
              className={`group flex flex-col justify-between rounded-3xl bg-white border-2 border-slate-100 ${service.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div>
                {/* Image Section with Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-white/95 ${service.textColor} shadow-xs`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.colorHex }}
                      />
                      {service.title}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${service.badgeBg}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#141B29] group-hover:text-slate-900 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  href={service.href}
                  className={`inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-sm font-bold ${service.textColor} group-hover:translate-x-0.5 transition-all`}
                >
                  <span>Learn More</span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${service.badgeBg} group-hover:scale-110 transition-transform`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
