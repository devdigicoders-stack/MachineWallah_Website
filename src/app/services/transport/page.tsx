import { Metadata } from "next";
import { TransportPageClient } from "@/components/transport/TransportPageClient";

export const metadata: Metadata = {
  title: "Transport Services — Heavy Machinery & Equipment Transport",
  description:
    "Heavy machinery, construction equipment aur building materials ke transportation requirements ke liye Machine Wallah par enquiry share karein aur relevant transport options explore karein.",
  keywords: [
    "Heavy Machinery Transport India",
    "Low bed trailer hire",
    "Excavator transport",
    "Flatbed truck rental",
    "Construction equipment logistics",
    "Tipper truck transport",
    "Machine Wallah Transport",
    "ODC consignment transport",
  ],
  openGraph: {
    title: "Transport Services — Heavy Machinery & Equipment Transport | Machine Wallah",
    description:
      "Move Heavy. Move Smart. Move with Confidence. Low-bed trailers, flatbeds, tippers and cargo trucks for construction projects across India.",
    url: "https://machinewallah.com/transport",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/service-transport.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah Heavy Equipment Logistics Transport",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport Services — Heavy Machinery Transport | Machine Wallah",
    description:
      "Move Heavy. Move Smart. Move with Confidence. Direct connection with verified transporters.",
    images: ["/images/service-transport.jpg"],
  },
};

export default function TransportServicesPage() {
  return <TransportPageClient />;
}
