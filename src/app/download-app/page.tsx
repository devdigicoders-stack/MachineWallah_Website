import { Metadata } from "next";
import { DownloadAppClient } from "@/components/download-app/DownloadAppClient";

export const metadata: Metadata = {
  title: "Download App — Construction Ka Smart Platform | Machine Wallah",
  description:
    "Machine rental, buying/selling, transport aur construction materials — Machine Wallah mobile app ke actual workflows, features aur platform previews explore karein.",
  keywords: [
    "Machine Wallah App",
    "Construction machinery app India",
    "JCB excavator rental app",
    "Heavy equipment transport app",
    "Construction materials procurement app",
    "Machines Transport Materials",
    "Download Machine Wallah",
  ],
  openGraph: {
    title: "Download Machine Wallah Mobile App — Machines | Transport | Materials",
    description:
      "Construction Ka Smart Platform. Ab Aapke Phone Par. Machine rental, buying/selling, transport aur construction materials requirements conveniently explore karein.",
    url: "https://machinewallah.com/download-app",
    siteName: "Machine Wallah",
    images: [
      {
        url: "/images/app-screen-home.png",
        width: 800,
        height: 600,
        alt: "Machine Wallah Mobile App Home Screen",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download App — Machine Wallah",
    description:
      "Construction Ka Smart Platform. Ab Aapke Phone Par. Explore real app workflows for machines, transport, and materials.",
    images: ["/images/app-screen-home.png"],
  },
};

export default function DownloadAppPage() {
  return <DownloadAppClient />;
}
