import { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — WhatsApp & Email Enquiries | Machine Wallah",
  description:
    "Machine Wallah team se direct baat karein. Construction machinery rentals, equipment buying/selling, heavy transport trailers aur building materials ke liye WhatsApp ya Email enquiry bhejein.",
  keywords: [
    "Machine Wallah Contact",
    "Machine Wallah WhatsApp Enquiry",
    "Construction equipment contact India",
    "Rent machine customer care",
    "Heavy trailer transport helpline",
    "Building materials quotation contact",
    "Machine Wallah phone number",
    "Machinery rental Lucknow Delhi NCR",
  ],
  openGraph: {
    title: "Contact Us — WhatsApp & Email Enquiries | Machine Wallah",
    description:
      "Machines, Transport, Materials — Direct WhatsApp & Email Connect. Zero brokerage, transparent assistance for construction machinery and materials.",
    url: "https://machinewallah.com/contact",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/service-rent.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Wallah Contact Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Machine Wallah",
    description:
      "Direct WhatsApp and Email enquiry for construction machinery rental, transport and materials.",
    images: ["/images/service-rent.jpg"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
