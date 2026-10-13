import { Metadata } from "next";
import { MaterialsPageClient } from "@/components/materials/MaterialsPageClient";

export const metadata: Metadata = {
  title: "Construction Materials — Cement, Sand, Bricks, Steel & RMC Supplies",
  description:
    "Cement, sand, bricks, TMT steel, RMC aur other construction materials ke liye apni requirement Machine Wallah par share karein aur supplier quotation options explore karein.",
  keywords: [
    "Construction Materials India",
    "Cement bulk supply",
    "Sand M-Sand suppliers",
    "Fly ash bricks AAC blocks",
    "TMT Steel rebar Fe500D",
    "Ready-Mix Concrete RMC",
    "Stone aggregates gitti",
    "Paver blocks supplier",
    "Machine Wallah Materials",
    "Building materials quotation",
  ],
  openGraph: {
    title: "Construction Materials — Cement, Sand, Steel & RMC | Machine Wallah",
    description:
      "Quality Construction Starts with the Right Materials. Cement, sand, bricks, steel, RMC aur other building materials ke liye direct supplier quotation explore karein.",
    url: "https://machinewallah.com/materials",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/service-materials.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah Construction Materials Supplies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Materials — Building Materials | Machine Wallah",
    description:
      "Quality Construction Starts with the Right Materials. Share requirements for cement, sand, bricks, TMT steel and RMC.",
    images: ["/images/service-materials.jpg"],
  },
};

export default function ConstructionMaterialsPage() {
  return <MaterialsPageClient />;
}
