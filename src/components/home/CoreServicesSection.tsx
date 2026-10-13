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

interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  accentColor: string;
  badgeBg: string;
  textColor: string;
  pillText: string;
}

const SERVICES: ServiceCardData[] = [
  {
    title: "Rent Machines",
    description:
      "Construction aur heavy equipment rental requirements ke liye options explore karo.",
    href: "/rent-machines",
    imageSrc: "/images/service-rent.jpg",
    imageAlt: "Yellow JCB backhoe loader excavator on Indian highway road construction site",
    icon: <HardHat className="w-4 h-4 text-[#8F6600]" />,
    accentColor: "#FFBE0B",
    badgeBg: "bg-[#FFBE0B]/15",
    textColor: "text-[#8F6600]",
    pillText: "Machinery Rental",
  },
  {
    title: "Used & New Equipment",
    description:
      "Machines buy ya sell karne ke liye Machine Wallah platform explore karo.",
    href: "/buy-sell",
    imageSrc: "/images/service-buysell.jpg",
    imageAlt: "Heavy equipment machinery sales yard with rows of yellow excavators",
    icon: <Handshake className="w-4 h-4 text-[#2E8B33]" />,
    accentColor: "#36A43B",
    badgeBg: "bg-[#36A43B]/15",
    textColor: "text-[#2E8B33]",
    pillText: "Buy / Sell Machines",
  },
  {
    title: "Transport Services",
    description:
      "Heavy equipment aur material transportation requirements ke liye connect karo.",
    href: "/transport",
    imageSrc: "/images/service-transport.jpg",
    imageAlt: "Heavy duty multi-axle low-bed transport trailer truck on expressway",
    icon: <Truck className="w-4 h-4 text-[#0879D1]" />,
    accentColor: "#0879D1",
    badgeBg: "bg-[#0879D1]/15",
    textColor: "text-[#0879D1]",
    pillText: "Logistics & Trailers",
  },
  {
    title: "Construction Materials",
    description:
      "Sand, cement, aggregate, steel aur other construction materials ke liye enquiry bhejo.",
    href: "/materials",
    imageSrc: "/images/service-materials.jpg",
    imageAlt: "High quality construction materials depot with sand, aggregate, cement and steel",
    icon: <Layers className="w-4 h-4 text-[#D83B0A]" />,
    accentColor: "#F4511E",
    badgeBg: "bg-[#F4511E]/15",
    textColor: "text-[#D83B0A]",
    pillText: "Site Bulk Supplies",
  },
];

export function CoreServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20">
      <Container size="xl">
        <SectionHeading
          badge="Core Services"
          badgeColor="yellow"
          title="Ek Platform. Har Construction Solution."
          description="Apni construction requirements ke liye right service choose karo."
          align="center"
        />

        {/* 4 Cards Grid: Balanced compact cards without excess height or whitespace */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container with Crisp 16:9 Aspect Ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Service Badge Over Image */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/95 ${service.textColor} shadow-sm border border-black/5`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    {service.pillText}
                  </span>
                </div>
              </div>

              {/* Card Body - Tight, cohesive layout eliminating empty gap */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${service.badgeBg}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#141B29] group-hover:text-slate-900 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className={`${service.textColor} group-hover:translate-x-0.5 transition-transform`}>
                    Explore Service
                  </span>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${service.badgeBg} group-hover:scale-110 transition-transform`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
