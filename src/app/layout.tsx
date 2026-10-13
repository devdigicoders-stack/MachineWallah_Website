import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/constants/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Machine Wallah — Machines | Transport | Materials",
    template: "%s | Machine Wallah",
  },
  description:
    "Machine Wallah is India's all-in-one platform for heavy construction machinery rental, transport logistics, buying/selling used & new equipment, and quality construction materials.",
  keywords: [
    "Machine Wallah",
    "Construction Machinery Rental",
    "JCB Rent",
    "Excavator Rental",
    "Machinery Transport",
    "Low Bed Trailer Transport",
    "Buy Sell Used Construction Machines",
    "RMC Concrete Supply",
    "Construction Materials India",
    "Heavy Equipment Platform",
  ],
  authors: [{ name: "Machine Wallah" }],
  creator: "Machine Wallah",
  metadataBase: new URL("https://machinewallah.in"),
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://machinewallah.in",
    siteName: "Machine Wallah",
    title: "Machine Wallah — Machines | Transport | Materials",
    description:
      "All-in-one platform for construction machinery rental, transport, buying/selling and construction materials.",
    images: [
      {
        url: "/images/logo.png",
        width: 640,
        height: 640,
        alt: "Machine Wallah Logo",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFBE0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#0F172A]"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
