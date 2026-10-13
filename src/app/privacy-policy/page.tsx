import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection practices of Machine Wallah.",
};

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      badge="Legal & Privacy"
      badgeColor="navy"
      title="Privacy Policy"
      description="Machine Wallah values your privacy and is committed to protecting your personal information. Comprehensive privacy terms will be published in accordance with applicable legal guidelines."
      phaseNote="Formal legal documentation draft will be reviewed and updated before production deployment."
    />
  );
}
