import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service for Machine Wallah website and mobile applications.",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      badge="Legal & Terms"
      badgeColor="navy"
      title="Terms & Conditions"
      description="Terms of service governing the use of Machine Wallah platform for equipment rentals, logistics booking, buying/selling and material supplies."
      phaseNote="Formal terms & conditions will be reviewed and updated before production deployment."
    />
  );
}
