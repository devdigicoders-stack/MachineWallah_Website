import { Metadata } from "next";
import { BuySellPageClient } from "@/components/buysell/BuySellPageClient";

export const metadata: Metadata = {
  title: "Buy / Sell Machines — Construction Machinery Marketplace",
  description:
    "New ya used construction machines buy karni ho ya apni machinery sell karni ho — Machine Wallah par buying aur selling requirements explore karein.",
  keywords: [
    "Buy Construction Equipment India",
    "Sell Used JCB",
    "Used Excavator for sale",
    "Construction machinery marketplace",
    "Second hand road roller",
    "Buy Hydra crane",
    "Machine Wallah Buy Sell",
    "Heavy equipment sale India",
  ],
  openGraph: {
    title: "Buy / Sell Machines — Construction Machinery Marketplace | Machine Wallah",
    description:
      "Buy Smart. Sell Easy. Connect Better. Explore buying and selling requirements for 8+ heavy construction machine categories.",
    url: "https://machinewallah.com/buy-sell",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/service-buysell.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah Buy and Sell Construction Machinery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy / Sell Machines — Construction Machinery Marketplace | Machine Wallah",
    description:
      "Buy Smart. Sell Easy. Connect Better. Direct connection between machinery buyers and owners.",
    images: ["/images/service-buysell.jpg"],
  },
};

export default function BuySellMachinesPage() {
  return <BuySellPageClient />;
}
