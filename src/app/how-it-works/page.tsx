import { Metadata } from "next";
import { HowItWorksPageClient } from "@/components/how-it-works/HowItWorksPageClient";

export const metadata: Metadata = {
  title: "How It Works — Choose. Share. Connect. | Machine Wallah",
  description:
    "Machine Wallah par construction machinery rentals, buy/sell, heavy transport aur building materials explore karne ka simple 3-stage process samjhein.",
  keywords: [
    "Machine Wallah How It Works",
    "Construction machinery rental process",
    "How to rent JCB excavator",
    "Buy sell machinery process India",
    "Heavy equipment transport workflow",
    "Construction materials quotation process",
    "Machines Transport Materials",
  ],
  openGraph: {
    title: "How It Works — Choose. Share. Connect. | Machine Wallah",
    description:
      "Simple Process. Better Connections. Machine Wallah par machinery rental, buy/sell, transport aur materials ke workflows ko step-by-step explore karein.",
    url: "https://machinewallah.com/how-it-works",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/service-rent.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah How It Works Process",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — Machine Wallah",
    description:
      "Choose. Share. Connect. Learn how Machine Wallah connects contractors with machinery, transport and building materials.",
    images: ["/images/service-rent.jpg"],
  },
};

export default function HowItWorksPage() {
  return <HowItWorksPageClient />;
}
