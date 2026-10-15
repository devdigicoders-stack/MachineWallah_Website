/**
 * Public Business Contact Configuration for Machine Wallah
 *
 * Store only public business contact information here.
 * Never store API keys, database credentials, or secret tokens.
 *
 * To activate live WhatsApp or Email enquiry buttons, configure the
 * actual company numbers/addresses below or set the corresponding
 * environment variables in .env.local:
 * - NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. "919876543210" without + or dashes)
 * - NEXT_PUBLIC_PHONE_NUMBER (e.g. "+91 98765 43210")
 * - NEXT_PUBLIC_ENQUIRY_EMAIL (e.g. "enquiries@machinewallah.com")
 */

export interface BusinessContactConfig {
  whatsappNumber: string;
  phoneNumber: string;
  enquiryEmail: string;
  companyName: string;
  businessHours: string;
  officeAddress: string;
}

export const BUSINESS_CONTACT: BusinessContactConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919129895577",
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 91298 95577",
  enquiryEmail: process.env.NEXT_PUBLIC_ENQUIRY_EMAIL || "machinewallah291@gmail.com",
  companyName: "Machine Wallah",
  businessHours: "Monday to Saturday: 9:00 AM – 7:00 PM (IST)",
  officeAddress: "Uttar Pradesh & Delhi NCR, India",
};

/**
 * Check if the company WhatsApp number is properly configured with valid digits.
 */
export function isWhatsAppConfigured(): boolean {
  const num = BUSINESS_CONTACT.whatsappNumber.replace(/[\s+-]/g, "");
  return num.length >= 10 && !num.includes("0000000000");
}

/**
 * Check if the company enquiry email is configured with a valid email address.
 */
export function isEmailConfigured(): boolean {
  const email = BUSINESS_CONTACT.enquiryEmail.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && !email.includes("domain-to-be-provided");
}

/**
 * Check if the company phone number is configured.
 */
export function isPhoneConfigured(): boolean {
  const num = BUSINESS_CONTACT.phoneNumber.replace(/[\s+-]/g, "");
  return num.length >= 10 && !num.includes("0000000000");
}
