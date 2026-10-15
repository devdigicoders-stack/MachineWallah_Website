/**
 * Enquiry Message Formatter Utility for Machine Wallah
 *
 * Formats structured enquiry data into readable plain-text messages
 * for WhatsApp and Mailto email generation, adhering strictly to the
 * format specified in Step 10 instructions.
 */

export type ServiceType =
  | "Rent Machines"
  | "Buy Machine"
  | "Sell Machine"
  | "Transport"
  | "Construction Materials"
  | "General Enquiry";

export interface EnquiryCustomerDetails {
  fullName: string;
  mobileNumber: string;
  emailAddress?: string;
  cityLocation: string;
}

export interface ServiceSpecificDetails {
  // Rent Machines
  machineCategory?: string;
  rentalDuration?: string;
  projectLocation?: string;

  // Buy Machine
  buyMachineCategory?: string;
  newUsedPreference?: string;
  budget?: string;
  preferredBrandModel?: string;

  // Sell Machine
  sellMachineCategory?: string;
  brand?: string;
  model?: string;
  manufacturingYear?: string;
  condition?: string;
  expectedPrice?: string;

  // Transport
  vehicleCategory?: string;
  loadType?: string;
  pickupLocation?: string;
  dropLocation?: string;
  approximateWeight?: string;
  weightUnit?: string;
  preferredDate?: string;

  // Construction Materials
  materialCategory?: string;
  materialSpecification?: string;
  quantity?: string;
  quantityUnit?: string;
  deliveryLocation?: string;
  materialDeliveryDate?: string;

  // General Enquiry
  subject?: string;
}

export interface CompleteEnquiryData {
  serviceType: ServiceType;
  customer: EnquiryCustomerDetails;
  serviceDetails: ServiceSpecificDetails;
  additionalDetails?: string;
}

/**
 * Builds the structured plain text message body according to the required schema:
 *
 * NEW MACHINE WALLAH ENQUIRY
 * Service: [Service Type]
 *
 * CUSTOMER DETAILS
 * Name: [Name]
 * Mobile: [Mobile]
 * Email: [Email] (if provided)
 * Location: [Location]
 *
 * REQUIREMENT DETAILS
 * [Relevant Service-Specific Fields]
 *
 * ADDITIONAL DETAILS
 * [Details/Message]
 *
 * Sent from Machine Wallah Website.
 */
export function buildEnquiryTextMessage(data: CompleteEnquiryData): string {
  const lines: string[] = [];

  // Header
  lines.push("NEW MACHINE WALLAH ENQUIRY");
  lines.push(`Service: ${data.serviceType}`);
  lines.push("");

  // Customer Details
  lines.push("CUSTOMER DETAILS");
  lines.push(`Name: ${data.customer.fullName.trim()}`);
  lines.push(`Mobile: ${data.customer.mobileNumber.trim()}`);
  if (data.customer.emailAddress && data.customer.emailAddress.trim()) {
    lines.push(`Email: ${data.customer.emailAddress.trim()}`);
  }
  lines.push(`Location: ${data.customer.cityLocation.trim()}`);
  lines.push("");

  // Requirement Details (Service Specific)
  lines.push("REQUIREMENT DETAILS");
  const s = data.serviceDetails;

  switch (data.serviceType) {
    case "Rent Machines":
      if (s.machineCategory) lines.push(`Machine Category: ${s.machineCategory}`);
      if (s.rentalDuration) lines.push(`Rental Duration: ${s.rentalDuration}`);
      if (s.projectLocation) lines.push(`Project Location: ${s.projectLocation}`);
      break;

    case "Buy Machine":
      if (s.buyMachineCategory) lines.push(`Machine Category: ${s.buyMachineCategory}`);
      if (s.newUsedPreference) lines.push(`Condition Preference: ${s.newUsedPreference}`);
      if (s.budget) lines.push(`Budget: ${s.budget}`);
      if (s.preferredBrandModel) lines.push(`Preferred Brand/Model: ${s.preferredBrandModel}`);
      break;

    case "Sell Machine":
      if (s.sellMachineCategory) lines.push(`Machine Category: ${s.sellMachineCategory}`);
      if (s.brand) lines.push(`Brand: ${s.brand}`);
      if (s.model) lines.push(`Model: ${s.model}`);
      if (s.manufacturingYear) lines.push(`Manufacturing Year: ${s.manufacturingYear}`);
      if (s.condition) lines.push(`Condition: ${s.condition}`);
      if (s.expectedPrice) lines.push(`Expected Price: ${s.expectedPrice}`);
      break;

    case "Transport":
      if (s.vehicleCategory) lines.push(`Vehicle: ${s.vehicleCategory}`);
      if (s.loadType) lines.push(`Load: ${s.loadType}`);
      if (s.pickupLocation) lines.push(`Pickup: ${s.pickupLocation}`);
      if (s.dropLocation) lines.push(`Drop: ${s.dropLocation}`);
      if (s.approximateWeight) {
        const unit = s.weightUnit ? ` ${s.weightUnit}` : "";
        lines.push(`Approx. Weight: ${s.approximateWeight}${unit}`);
      }
      if (s.preferredDate) lines.push(`Preferred Date: ${s.preferredDate}`);
      break;

    case "Construction Materials":
      if (s.materialCategory) lines.push(`Material Category: ${s.materialCategory}`);
      if (s.materialSpecification) lines.push(`Specification: ${s.materialSpecification}`);
      if (s.quantity) {
        const unit = s.quantityUnit ? ` ${s.quantityUnit}` : "";
        lines.push(`Quantity: ${s.quantity}${unit}`);
      }
      if (s.deliveryLocation) lines.push(`Delivery Location: ${s.deliveryLocation}`);
      if (s.materialDeliveryDate) lines.push(`Preferred Date: ${s.materialDeliveryDate}`);
      break;

    case "General Enquiry":
    default:
      if (s.subject) lines.push(`Subject: ${s.subject}`);
      break;
  }

  // Additional Details
  if (data.additionalDetails && data.additionalDetails.trim()) {
    lines.push("");
    lines.push("ADDITIONAL DETAILS");
    lines.push(data.additionalDetails.trim());
  }

  // Footer
  lines.push("");
  lines.push("Sent from Machine Wallah Website.");

  return lines.join("\n");
}

/**
 * Builds email subject line according to the format:
 * Machine Wallah | [Service] Enquiry | [Customer Name]
 */
export function buildEnquiryEmailSubject(data: CompleteEnquiryData): string {
  const service = data.serviceType.replace(" Enquiry", "");
  const subjectDetail =
    data.serviceType === "General Enquiry" && data.serviceDetails.subject
      ? ` - ${data.serviceDetails.subject.trim()}`
      : "";
  return `Machine Wallah | ${service} Enquiry${subjectDetail} | ${data.customer.fullName.trim()}`;
}

/**
 * Builds complete WhatsApp URL:
 * https://wa.me/COMPANY_NUMBER?text=ENCODED_MESSAGE
 */
export function buildWhatsAppUrl(
  data: CompleteEnquiryData,
  companyNumber: string
): string {
  const cleanNumber = companyNumber.replace(/[\s+-]/g, "");
  const targetNumber =
    cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;
  const message = buildEnquiryTextMessage(data);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${targetNumber}?text=${encodedText}`;
}

/**
 * Builds complete Mailto URL:
 * mailto:COMPANY_EMAIL?subject=ENCODED_SUBJECT&body=ENCODED_BODY
 */
export function buildMailtoUrl(
  data: CompleteEnquiryData,
  companyEmail: string
): string {
  const subject = buildEnquiryEmailSubject(data);
  const body = buildEnquiryTextMessage(data);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${companyEmail.trim()}?subject=${encodedSubject}&body=${encodedBody}`;
}
