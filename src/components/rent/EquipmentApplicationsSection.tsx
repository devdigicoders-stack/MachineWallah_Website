"use client";

import React from "react";
import Image from "next/image";
import {
  Pickaxe,
  Route,
  Construction,
  Tractor,
  Layers,
  Building,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ApplicationPanel {
  id: string;
  title: string;
  tagline: string;
  description: string;
  commonMachines: string[];
  image: string;
  icon: React.ElementType;
  colorBorder: string;
}

const APPLICATIONS: ApplicationPanel[] = [
  {
    id: "earthmoving",
    title: "Earthmoving & Excavation",
    tagline: "Basements, Foundations & Canals",
    description:
      "Deep basement digging, foundation trenches, canal work aur mass earth excavation ke liye heavy tracked excavators aur JCB backhoes ka use kiya jata hai.",
    commonMachines: ["Tracked Excavator (20T+)", "Backhoe Loader (JCB)", "Wheel Loader"],
    image: "/images/hero-excavator.jpg",
    icon: Pickaxe,
    colorBorder: "border-[#FFBE0B]",
  },
  {
    id: "road-construction",
    title: "Road Construction",
    tagline: "Highways, City Roads & Pavements",
    description:
      "Sub-base compaction, asphalt rolling, surface grading aur highway widening projects ke liye specialized compaction machinery.",
    commonMachines: ["Vibratory Road Roller", "Motor Grader", "Asphalt Paver"],
    image: "/images/about-construction.jpg",
    icon: Route,
    colorBorder: "border-[#0879D1]",
  },
  {
    id: "material-lifting",
    title: "Material Lifting & Handling",
    tagline: "Precast, Girders & High Structures",
    description:
      "Heavy steel structures, precast beams, roofing sheets aur heavy fabrication components ko safely lift aur place karne ke liye mobile cranes.",
    commonMachines: ["Hydra Mobile Crane (12T-25T)", "Rough Terrain Crane", "Tower Crane"],
    image: "/images/about-hero.jpg",
    icon: Construction,
    colorBorder: "border-[#36A43B]",
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    tagline: "Land Clearing, Leveling & Plot Grading",
    description:
      "Naye construction sites par overgrown trees, boulders, debris removal aur initial earth grading ke liye heavy dozers aur compact loaders.",
    commonMachines: ["Crawler Bulldozer", "Skid Steer Loader", "Backhoe Loader"],
    image: "/images/service-rent.jpg",
    icon: Tractor,
    colorBorder: "border-[#F4511E]",
  },
  {
    id: "concrete-work",
    title: "Concrete & Building Work",
    tagline: "Foundations, Slabs & RCC Casting",
    description:
      "Ready-mix concrete transport, foundation pours, high-rise slab casting aur column pumping ke liye mobile transit solutions.",
    commonMachines: ["Transit Concrete Mixer", "Boom Placer", "Concrete Pump"],
    image: "/images/service-materials.jpg",
    icon: Layers,
    colorBorder: "border-[#FFBE0B]",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    tagline: "Bridges, Drains, Metros & Utilities",
    description:
      "Large-scale public civil works, stormwater drainage lines, underground pipelines aur bridge abutments ke heavy-duty workflows.",
    commonMachines: ["Heavy Excavators", "Trenchers", "Heavy Dumpers & Rollers"],
    image: "/images/service-buysell.jpg",
    icon: Building,
    colorBorder: "border-[#0879D1]",
  },
];

export function EquipmentApplicationsSection() {
  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Project Use Cases"
            badgeColor="blue"
            title="Equipment for Different Types of Projects"
            description="Typical civil aur construction workflows jahan specific heavy machines deploy hoti hain."
            align="center"
          />
        </div>

        {/* 6 Panels Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {APPLICATIONS.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="flex flex-col bg-white rounded-2xl border border-blue-100/80 shadow-sm overflow-hidden"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B29] via-[#141B29]/30 to-transparent" />

                  {/* Icon & Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {app.tagline}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FFBE0B] flex items-center justify-center text-[#141B29] shadow">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#141B29] mb-2">
                      {app.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {app.description}
                    </p>
                  </div>

                  {/* Machine Pills */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Common Machinery Types:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {app.commonMachines.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#36A43B]" />
                          <span>{m}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Application Scope Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Equipment applicability project site conditions, access roads, ground hardness aur local availability par depend karti hai.
        </div>
      </Container>
    </section>
  );
}
