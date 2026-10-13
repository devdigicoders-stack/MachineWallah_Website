"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Package,
  Layers,
  MapPin,
  Calendar,
  User,
  Copy,
  Check,
  Info,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Boxes,
  Shield,
  Truck,
  LayoutGrid,
} from "lucide-react";
import { WhatsAppIcon, RealCallIcon, RealEmailIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";
import {
  BUSINESS_CONTACT,
  isWhatsAppConfigured,
  isEmailConfigured,
} from "@/config/contact";
import {
  CompleteEnquiryData,
  buildEnquiryTextMessage,
  buildWhatsAppUrl,
  buildMailtoUrl,
} from "@/utils/enquiryFormatter";

export const MATERIAL_CATEGORY_OPTIONS = [
  "Cement",
  "Sand / M-Sand",
  "Bricks & Blocks",
  "TMT Steel & Reinforcement",
  "Ready-Mix Concrete (RMC)",
  "Stone Aggregates",
  "Paver Blocks & Tiles",
  "Other Building Materials",
];

export const CONTEXTUAL_UNITS: Record<string, string[]> = {
  Cement: ["Bags", "Tonnes", "Other"],
  "Sand / M-Sand": ["Cubic Feet (CFT)", "Tonnes", "Cubic Meters (m³)", "Other"],
  "Bricks & Blocks": ["Pieces", "Other"],
  "TMT Steel & Reinforcement": ["Tonnes", "Kilograms", "Other"],
  "Ready-Mix Concrete (RMC)": ["Cubic Meters (m³)", "Other"],
  "Stone Aggregates": ["Tonnes", "Cubic Feet (CFT)", "Other"],
  "Paver Blocks & Tiles": ["Pieces", "Square Feet", "Other"],
  "Other Building Materials": [
    "Bags",
    "Kilograms",
    "Tonnes",
    "Cubic Feet (CFT)",
    "Cubic Meters (m³)",
    "Pieces",
    "Other",
  ],
};

const MATERIAL_GUIDANCE: Record<string, string> = {
  Cement: "Tip: Mention preferred brand (e.g. UltraTech, ACC, Ambuja), grade (OPC 53, PPC) aur number of bags.",
  "Sand / M-Sand": "Tip: Mention sand type (River Sand, M-Sand, Plaster Sand) aur volume in CFT ya Tonnes.",
  "Bricks & Blocks": "Tip: Mention brick type (Red clay, AAC blocks, Fly ash) aur required pieces count.",
  "TMT Steel & Reinforcement": "Tip: Mention brand preference, rebar grade (Fe 500D, 550D), required diameters (8mm, 10mm, 12mm, 16mm, etc.) aur total tonnage.",
  "Ready-Mix Concrete (RMC)": "Tip: Concrete grade specify karein (M20, M25, M30, M35), transit mixer access aur required cubic meters (m³).",
  "Stone Aggregates": "Tip: Gitti size specify karein (10mm, 20mm, 40mm, stone dust) aur required quantity in tonnes.",
  "Paver Blocks & Tiles": "Tip: Pattern, thickness (60mm, 80mm) aur piece count ya square feet coverage mention karein.",
  "Other Building Materials": "Tip: Apni exact technical requirement, chemical brand ya specialized accessories specify karein.",
};

const CONTACT_PREFERENCES = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "call", label: "Phone Call" },
  { id: "email", label: "Email" },
];

interface MaterialEnquiryFormProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

interface FormState {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  preferredContact: string;

  materialCategory: string;
  materialSpecification: string;
  quantity: string;
  quantityUnit: string;
  deliveryLocation: string;
  preferredDeliveryDate: string;
  additionalRequirements: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  materialCategory?: string;
  materialSpecification?: string;
  quantity?: string;
  quantityUnit?: string;
  deliveryLocation?: string;
  preferredDeliveryDate?: string;
  additionalRequirements?: string;
}

export function MaterialEnquiryForm({
  selectedCategory = "",
  onCategoryChange,
}: MaterialEnquiryFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [minDate, setMinDate] = useState<string>("");

  // Next.js 16.4.0 Turbopack Date Rule: Set in useEffect to prevent SSR/hydration mismatch
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    preferredContact: "whatsapp",

    materialCategory: selectedCategory || "Cement",
    materialSpecification: "",
    quantity: "",
    quantityUnit: "Bags",
    deliveryLocation: "",
    preferredDeliveryDate: "",
    additionalRequirements: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "ready-for-dispatch"
  >("idle");
  const [copiedText, setCopiedText] = useState(false);

  // Sync external category selection if changed from cards
  useEffect(() => {
    if (selectedCategory && selectedCategory !== formData.materialCategory) {
      const units = CONTEXTUAL_UNITS[selectedCategory] || ["Other"];
      setFormData((prev) => ({
        ...prev,
        materialCategory: selectedCategory,
        quantityUnit: units[0] || "Other",
      }));
    }
  }, [selectedCategory]);

  // Contextual units update when material category changes
  const handleCategorySelect = (category: string) => {
    const availableUnits = CONTEXTUAL_UNITS[category] || ["Other"];
    setFormData((prev) => ({
      ...prev,
      materialCategory: category,
      quantityUnit: availableUnits[0] || "Other",
    }));

    if (onCategoryChange) {
      onCategoryChange(category);
    }
    if (errors.materialCategory) {
      setErrors((prev) => ({ ...prev, materialCategory: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    } else if (formData.fullName.trim().length > 60) {
      newErrors.fullName = "Name must be under 60 characters.";
    }

    // Indian 10-digit mobile number
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanMobile = formData.mobileNumber.replace(/[\s-]/g, "");
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!mobileRegex.test(cleanMobile)) {
      newErrors.mobileNumber =
        "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    // Optional email
    if (formData.emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress.trim())) {
        newErrors.emailAddress = "Please enter a valid email address.";
      }
    }

    // Material category
    if (!formData.materialCategory.trim()) {
      newErrors.materialCategory = "Please select a material category.";
    }

    // Material specification
    if (!formData.materialSpecification.trim()) {
      newErrors.materialSpecification =
        "Please specify the required material name, brand or technical grade.";
    } else if (formData.materialSpecification.trim().length < 3) {
      newErrors.materialSpecification =
        "Specification must be at least 3 characters.";
    } else if (formData.materialSpecification.trim().length > 120) {
      newErrors.materialSpecification =
        "Specification must be under 120 characters.";
    }

    // Quantity: must be greater than zero
    const qtyNum = parseFloat(formData.quantity.trim());
    if (!formData.quantity.trim()) {
      newErrors.quantity = "Please enter the required quantity.";
    } else if (isNaN(qtyNum) || qtyNum <= 0) {
      newErrors.quantity = "Quantity must be a positive number greater than 0.";
    }

    // Quantity unit
    if (!formData.quantityUnit.trim()) {
      newErrors.quantityUnit = "Please select a quantity unit.";
    }

    // Delivery location
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation =
        "Please enter the site delivery city or location.";
    } else if (formData.deliveryLocation.trim().length < 2) {
      newErrors.deliveryLocation = "Location must be at least 2 characters.";
    } else if (formData.deliveryLocation.trim().length > 100) {
      newErrors.deliveryLocation = "Location must be under 100 characters.";
    }

    // Preferred delivery date (must not be past)
    if (formData.preferredDeliveryDate) {
      const today = new Date().toISOString().split("T")[0];
      if (formData.preferredDeliveryDate < today) {
        newErrors.preferredDeliveryDate =
          "Preferred delivery date cannot be in the past.";
      }
    }

    // Optional additional requirements length
    if (formData.additionalRequirements.trim().length > 500) {
      newErrors.additionalRequirements =
        "Additional requirements must be under 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === "materialCategory") {
      handleCategorySelect(value);
    }
  };

  const compileMaterialData = (): CompleteEnquiryData => ({
    serviceType: "Construction Materials",
    customer: {
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      emailAddress: formData.emailAddress,
      cityLocation: formData.deliveryLocation,
    },
    serviceDetails: {
      materialCategory: formData.materialCategory,
      materialSpecification: formData.materialSpecification,
      quantity: formData.quantity,
      quantityUnit: formData.quantityUnit,
      deliveryLocation: formData.deliveryLocation,
      materialDeliveryDate: formData.preferredDeliveryDate,
    },
    additionalDetails: formData.additionalRequirements,
  });

  const formatSummaryText = (): string => {
    return buildEnquiryTextMessage(compileMaterialData());
  };

  const handleWhatsAppAction = () => {
    if (!validate()) return;
    const data = compileMaterialData();
    const formatted = buildEnquiryTextMessage(data);

    if (isWhatsAppConfigured()) {
      window.open(
        buildWhatsAppUrl(data, BUSINESS_CONTACT.whatsappNumber),
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      navigator.clipboard.writeText(formatted);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 3000);
    }
    setSubmissionStatus("ready-for-dispatch");
  };

  const handleEmailAction = () => {
    if (!validate()) return;
    const data = compileMaterialData();
    const formatted = buildEnquiryTextMessage(data);

    if (isEmailConfigured()) {
      window.location.href = buildMailtoUrl(data, BUSINESS_CONTACT.enquiryEmail);
    } else {
      navigator.clipboard.writeText(formatted);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 3000);
    }
    setSubmissionStatus("ready-for-dispatch");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("ready-for-dispatch");
    }, 300);
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(formatSummaryText());
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 3000);
    } catch {
      setCopiedText(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      preferredContact: "whatsapp",
      materialCategory: "Cement",
      materialSpecification: "",
      quantity: "",
      quantityUnit: "Bags",
      deliveryLocation: "",
      preferredDeliveryDate: "",
      additionalRequirements: "",
    });
    setErrors({});
    setSubmissionStatus("idle");
  };

  const currentUnits =
    CONTEXTUAL_UNITS[formData.materialCategory] || ["Other"];
  const currentTip = MATERIAL_GUIDANCE[formData.materialCategory];

  return (
    <section
      id="material-enquiry"
      ref={formRef}
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Material Requirement"
            badgeColor="blue"
            title="Share Your Material Requirement"
            description="Cement, sand, aggregates, bricks, steel ya RMC ke quotation options explore karne ke liye apni requirement details share karein."
            align="center"
          />
        </div>

        {/* Main Form Container Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-blue-100/80 shadow-xl overflow-hidden">
          {/* Card Top Accent Bar */}
          <div className="bg-gradient-to-r from-[#141B29] via-[#241E24] to-[#F4511E] p-6 sm:p-8 text-white relative">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4511E] flex items-center justify-center text-white shrink-0 shadow">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Construction Material Quotation Enquiry
                  </h3>
                  <p className="text-xs text-slate-300">
                    Direct enquiry assistance • No middleman broker fee
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-200">
                Category: {formData.materialCategory}
              </span>
            </div>
          </div>

          {/* Form Content / Ready-for-dispatch State */}
          <div className="p-4 sm:p-8 md:p-10">
            {submissionStatus === "ready-for-dispatch" ? (
              /* Honest Dispatch State */
              <div className="space-y-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-emerald-900 mb-1">
                        Requirement Structured Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                        Aapki material requirement cleanly compile ho chuki hai. Direct supplier coordination aur quote discussion ke liye structured summary niche ready hai.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preformatted Summary Box */}
                <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-100 p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-inner">
                  <pre className="whitespace-pre-wrap">{formatSummaryText()}</pre>
                </div>

                {/* Dispatch Action Buttons: WhatsApp + Email + Copy */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppAction}
                      className="w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm bg-[#36A43B] hover:bg-[#2B8630] text-white shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailAction}
                      className="w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm bg-[#141B29] hover:bg-[#1f293d] text-white shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <RealEmailIcon className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors cursor-pointer"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Summary Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-700" />
                        <span>Copy Formatted Summary</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Honest Advisory */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-800">
                      Honest Dispatch Note:
                    </strong>{" "}
                    Website par background email server active nahi hai, isliye aapka data kisi opaque black-box database me nahi chhoda jata. Aap direct copy karke Machine Wallah ya material supplier ko WhatsApp/Call par share kar sakte hain.
                  </div>
                </div>

                {/* Edit or Create New Button */}
                <div className="text-center pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-600 hover:text-[#F4511E] underline transition-colors cursor-pointer"
                  >
                    Edit Details / Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* 1. Contact Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <User className="w-4 h-4 text-[#F4511E]" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Step 1: Contact Information
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Sharma"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                            errors.fullName
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="mobileNumber"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <RealCallIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          maxLength={10}
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                            errors.mobileNumber
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.mobileNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address (Optional) */}
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <RealEmailIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          placeholder="e.g. ramesh@example.com"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                            errors.emailAddress
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      {errors.emailAddress && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {CONTACT_PREFERENCES.map((pref) => (
                          <button
                            key={pref.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                preferredContact: pref.id,
                              }))
                            }
                            className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                              formData.preferredContact === pref.id
                                ? "bg-[#141B29] text-white border-[#141B29] shadow-sm"
                                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {pref.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Material Specifications Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Boxes className="w-4 h-4 text-[#F4511E]" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Step 2: Material Specifications
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Material Category Dropdown */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="materialCategory"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Material Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="materialCategory"
                          name="materialCategory"
                          value={formData.materialCategory}
                          onChange={handleChange}
                          className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100 font-medium"
                        >
                          {MATERIAL_CATEGORY_OPTIONS.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.materialCategory && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.materialCategory}</span>
                        </p>
                      )}
                    </div>

                    {/* Material Name / Specification */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="materialSpecification"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Material Name / Specification <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="materialSpecification"
                        name="materialSpecification"
                        value={formData.materialSpecification}
                        onChange={handleChange}
                        placeholder={
                          formData.materialCategory === "Cement"
                            ? "e.g. UltraTech 53 Grade OPC"
                            : formData.materialCategory === "TMT Steel & Reinforcement"
                            ? "e.g. Fe 500D TMT Bars (12mm & 16mm)"
                            : formData.materialCategory === "Ready-Mix Concrete (RMC)"
                            ? "e.g. M25 Grade Design Mix RMC"
                            : "e.g. Brand, grade, size ya material specification"
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                          errors.materialSpecification
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                        }`}
                      />
                      {currentTip && (
                        <p className="mt-1.5 text-[11px] text-slate-500 italic">
                          {currentTip}
                        </p>
                      )}
                      {errors.materialSpecification && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.materialSpecification}</span>
                        </p>
                      )}
                    </div>

                    {/* Quantity & Contextual Unit */}
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Required Quantity <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="0.1"
                          step="any"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500"
                          className={`w-3/5 px-3 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                            errors.quantity
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                        <div className="relative w-2/5">
                          <select
                            id="quantityUnit"
                            name="quantityUnit"
                            value={formData.quantityUnit}
                            onChange={handleChange}
                            className="w-full pl-2.5 pr-7 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:border-[#F4511E] font-medium"
                          >
                            {currentUnits.map((u) => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                      {errors.quantity && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.quantity}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Delivery Date */}
                    <div>
                      <label
                        htmlFor="preferredDeliveryDate"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Preferred Delivery Date <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          id="preferredDeliveryDate"
                          name="preferredDeliveryDate"
                          min={minDate || undefined}
                          value={formData.preferredDeliveryDate}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                            errors.preferredDeliveryDate
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      {errors.preferredDeliveryDate && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.preferredDeliveryDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Delivery City / Location */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="deliveryLocation"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Delivery City / Project Site Location <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="deliveryLocation"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="e.g. Sector 62, Noida ya Ring Road, Jaipur"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none ${
                            errors.deliveryLocation
                              ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                              : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      {errors.deliveryLocation && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.deliveryLocation}</span>
                        </p>
                      )}
                    </div>

                    {/* Additional Requirements (Optional) */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="additionalRequirements"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Additional Requirements / Site Unloading Notes <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="additionalRequirements"
                        name="additionalRequirements"
                        rows={3}
                        value={formData.additionalRequirements}
                        onChange={handleChange}
                        placeholder="e.g. Unloading labour required, transit mixer clearance available, batch delivery in 3 phases, etc."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-none resize-y ${
                          errors.additionalRequirements
                            ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#F4511E] focus:ring-1 focus:ring-orange-100"
                        }`}
                      />
                      {errors.additionalRequirements && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.additionalRequirements}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Actions: WhatsApp & Email Buttons */}
                <div className="pt-2 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppAction}
                      className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-white bg-[#36A43B] hover:bg-[#2b8630] flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.99]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailAction}
                      className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-white bg-[#141B29] hover:bg-[#1f293d] flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.99]"
                    >
                      <RealEmailIcon className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    fullWidth
                    disabled={isSubmitting}
                    className="border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                  >
                    {isSubmitting ? "Structuring..." : "Review Formatted Summary First"}
                  </Button>
                </div>

                {/* Bottom Trust Line */}
                <div className="text-center text-xs text-slate-500">
                  <span>
                    Free enquiry assistance • Direct discussion with material providers • No automatic purchase commitment
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
