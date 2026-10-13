import { Metadata } from "next";
import { RentPageClient } from "@/components/rent/RentPageClient";

export const metadata: Metadata = {
  title: "Rent Machines — Construction Equipment Rental",
  description:
    "JCB, excavator, crane, road roller aur doosri construction machines ke rental requirements ke liye Machine Wallah par enquiry share karein aur relevant options explore karein.",
  keywords: [
    "Rent Machines India",
    "JCB rental",
    "Excavator hire",
    "Hydra crane rent",
    "Road roller hire",
    "Construction equipment rental",
    "Machine Wallah Rent Machines",
    "Heavy machinery on rent",
  ],
  openGraph: {
    title: "Rent Machines — Construction Equipment Rental | Machine Wallah",
    description:
      "Right Machine. Right Project. Smart Rental Connections. Explore 8+ machinery categories aur apni site requirement share karein.",
    url: "https://machinewallah.com/rent-machines",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/hero-excavator.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah Construction Equipment Rental",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Machines — Construction Equipment Rental | Machine Wallah",
    description:
      "Explore JCBs, heavy excavators, mobile hydra cranes, and rollers for construction projects across India.",
    images: ["/images/hero-excavator.jpg"],
  },
};

export default function RentMachinesPage() {
  return <RentPageClient />;
}
