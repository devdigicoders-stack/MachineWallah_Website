"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Truck,
  MapPin,
  User,
  FileText,
  Copy,
  Check,
  Sparkles,
  Info,
  ChevronDown,
  Calendar,
  Weight,
  Layers,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { WhatsAppIcon, RealCallIcon, RealEmailIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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

const TRANSPORT_CATEGORY_OPTIONS = [
  "Flatbed Truck",
  "Low-Bed Trailer",
  "Tipper / Dump Truck",
  "Commercial Cargo Truck",
  "Container Truck",
  "Heavy-Duty Trailer",
  "Mini Truck / Pickup",
  "Specialized Machinery Carrier",
  "Not Sure / Need Guidance",
];

const WEIGHT_UNITS = ["Tonnes", "Kilograms (kg)"];

const CONTACT_PREFERENCES = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "call", label: "Phone Call" },
  { id: "email", label: "Email" },
];

interface TransportEnquiryFormProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

interface FormState {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  preferredContact: string;

  transportCategory: string;
  loadType: string;
  pickupLocation: string;
  dropLocation: string;
  approxWeight: string;
  weightUnit: string;
  loadDimensions: string;
  preferredDate: string;
  additionalDetails: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  transportCategory?: string;
  loadType?: string;
  pickupLocation?: string;
  dropLocation?: string;
  approxWeight?: string;
  preferredDate?: string;
  additionalDetails?: string;
}

export function TransportEnquiryForm({
  selectedCategory = "",
  onCategoryChange,
}: TransportEnquiryFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    preferredContact: "whatsapp",

    transportCategory: selectedCategory || "Low-Bed Trailer",
    loadType: "",
    pickupLocation: "",
    dropLocation: "",
    approxWeight: "",
    weightUnit: "Tonnes",
    loadDimensions: "",
    preferredDate: "",
    additionalDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "ready-for-dispatch"
  >("idle");
  const [copiedText, setCopiedText] = useState(false);

  // Sync external category selection
  useEffect(() => {
    if (selectedCategory && TRANSPORT_CATEGORY_OPTIONS.includes(selectedCategory)) {
      setFormData((prev) => ({ ...prev, transportCategory: selectedCategory }));
    }
  }, [selectedCategory]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // Mobile Number (Indian 10-digit mobile)
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanedMobile) {
      newErrors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).";
    }

    // Email (optional, validate format if entered)
    if (
      formData.emailAddress.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())
    ) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    // Transport Category
    if (!formData.transportCategory) {
      newErrors.transportCategory = "Please select a transport category.";
    }

    // Load Type
    if (!formData.loadType.trim()) {
      newErrors.loadType = "Please specify load / machinery / material type.";
    } else if (formData.loadType.trim().length < 2) {
      newErrors.loadType = "Load description must be at least 2 characters.";
    }

    // Pickup Location
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Please enter pickup city or site location.";
    } else if (formData.pickupLocation.trim().length < 2) {
      newErrors.pickupLocation = "Pickup location must be at least 2 characters.";
    }

    // Drop Location
    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = "Please enter drop city or site location.";
    } else if (formData.dropLocation.trim().length < 2) {
      newErrors.dropLocation = "Drop location must be at least 2 characters.";
    }

    // Approximate Weight (optional, disallow negative numbers)
    if (formData.approxWeight.trim()) {
      const weightNum = parseFloat(formData.approxWeight.trim());
      if (isNaN(weightNum) || weightNum <= 0) {
        newErrors.approxWeight = "Please enter a valid positive weight.";
      }
    }

    // Preferred Date (optional, disallow past dates)
    if (formData.preferredDate.trim()) {
      const today = minDate || new Date().toISOString().split("T")[0];
      if (formData.preferredDate < today) {
        newErrors.preferredDate = "Transport date cannot be in the past.";
      }
    }

    // Additional Requirement Details
    if (!formData.additionalDetails.trim()) {
      newErrors.additionalDetails =
        "Please provide additional requirement details (e.g. route constraints, site loading access).";
    } else if (formData.additionalDetails.trim().length < 10) {
      newErrors.additionalDetails =
        "Please provide at least 10 characters describing your transport requirements.";
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

    if (name === "transportCategory" && onCategoryChange) {
      onCategoryChange(value);
    }
  };

  const compileTransportData = (): CompleteEnquiryData => ({
    serviceType: "Transport",
    customer: {
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      emailAddress: formData.emailAddress,
      cityLocation: formData.pickupLocation,
    },
    serviceDetails: {
      vehicleCategory: formData.transportCategory,
      loadType: formData.loadType,
      pickupLocation: formData.pickupLocation,
      dropLocation: formData.dropLocation,
      approximateWeight: formData.approxWeight,
      weightUnit: formData.weightUnit,
      preferredDate: formData.preferredDate,
    },
    additionalDetails: formData.loadDimensions
      ? `Dimensions: ${formData.loadDimensions}\n${formData.additionalDetails}`
      : formData.additionalDetails,
  });

  const formatSummaryText = (): string => {
    return buildEnquiryTextMessage(compileTransportData());
  };

  const handleWhatsAppAction = () => {
    if (!validate()) return;
    const data = compileTransportData();
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
    const data = compileTransportData();
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
      transportCategory: "Low-Bed Trailer",
      loadType: "",
      pickupLocation: "",
      dropLocation: "",
      approxWeight: "",
      weightUnit: "Tonnes",
      loadDimensions: "",
      preferredDate: "",
      additionalDetails: "",
    });
    setErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <section
      id="transport-enquiry"
      ref={formRef}
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <SectionHeading
            badge="Direct Enquiry"
            badgeColor="blue"
            title="Tell Us Your Transport Requirement"
            description="Machinery ya bulk construction materials ke transportation ke liye pickup, drop aur load details share karein."
            align="center"
          />
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-blue-100/80 shadow-xl overflow-hidden">
          {/* Top Banner */}
          <div className="bg-[#141B29] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0879D1] flex items-center justify-center text-white shrink-0 font-bold">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">
                  Heavy Machinery &amp; Cargo Freight Enquiry
                </h3>
                <p className="text-xs text-slate-300">
                  Direct connection with verified trailer and freight operators
                </p>
              </div>
            </div>
            <div className="text-xs text-[#0879D1] font-semibold flex items-center gap-1.5 self-start sm:self-auto bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Standard Response: Same Day</span>
            </div>
          </div>

          {/* Form Content / State View */}
          <div className="p-4 sm:p-8 md:p-10">
            {submissionStatus === "ready-for-dispatch" ? (
              /* Honest Dispatch State */
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-[#0879D1] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-blue-950 mb-1">
                        Transport Requirement Details Ready for Transmission
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed font-normal">
                        Hamari automatic cloud server pipeline directly connect ho rahi hai. Taaki aapki logistics enquiry me koi delay na ho, aap formatted requirement details ko <strong>copy</strong> karke helpline ya WhatsApp par discuss kar sakte hain:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Formatted Summary Box */}
                <div className="rounded-2xl bg-slate-900 text-slate-200 p-5 font-mono text-xs sm:text-sm relative overflow-hidden border border-slate-800">
                  <pre className="whitespace-pre-wrap leading-relaxed font-mono">
                    {formatSummaryText()}
                  </pre>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-sans font-bold text-white flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#36A43B]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Actions: WhatsApp + Email + Copy */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppAction}
                      className="w-full py-3 px-4 rounded-xl font-extrabold text-sm text-white bg-[#36A43B] hover:bg-[#2b8630] flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.99]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailAction}
                      className="w-full py-3 px-4 rounded-xl font-extrabold text-sm text-white bg-[#141B29] hover:bg-[#1f293d] flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.99]"
                    >
                      <RealEmailIcon className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleCopySummary}
                      variant="blue"
                      size="md"
                      leftIcon={
                        copiedText ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )
                      }
                      className="font-bold flex-1 justify-center cursor-pointer text-white"
                    >
                      {copiedText ? "Requirement Copied!" : "Copy Requirement"}
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="md"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 flex-1 justify-center cursor-pointer"
                    >
                      Edit / Submit Another Enquiry
                    </Button>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-slate-500">
                    Aapki requirement client-side par securely format ki gayi hai.
                  </span>
                </div>
              </div>
            ) : (
              /* Active Transport Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Notice Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#0879D1]" />
                    <span>Mode: Heavy Equipment &amp; Cargo Freight Enquiry</span>
                  </span>
                  <span className="text-slate-400">All fields marked * are required</span>
                </div>

                {/* Section A: Contact Details */}
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    1. Contact Information
                  </div>

                  {/* Row 1: Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
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
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <RealCallIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          maxLength={10}
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="10-digit mobile (e.g. 9876543210)"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.mobileNumber
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
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
                  </div>

                  {/* Row 2: Optional Email & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Email Address (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="emailAddress"
                          className="block text-xs sm:text-sm font-bold text-slate-800"
                        >
                          Email Address
                        </label>
                        <span className="text-[11px] text-slate-400">Optional</span>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <RealEmailIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          placeholder="e.g. ramesh@transportco.in"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.emailAddress
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
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
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {CONTACT_PREFERENCES.map((pref) => (
                          <label
                            key={pref.id}
                            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border cursor-pointer transition-all ${
                              formData.preferredContact === pref.id
                                ? "bg-blue-50 border-[#0879D1] text-[#0879D1] shadow-xs"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <input
                              type="radio"
                              name="preferredContact"
                              value={pref.id}
                              checked={formData.preferredContact === pref.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                formData.preferredContact === pref.id
                                ? "border-[#0879D1] bg-[#0879D1]"
                                : "border-slate-400 bg-white"
                              }`}
                            >
                              {formData.preferredContact === pref.id && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span>{pref.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section B: Transport & Load Details */}
                <div className="space-y-4 pt-3 border-t border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Transport &amp; Route Information
                  </div>

                  {/* Row 3: Category & Load Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Transport Category */}
                    <div>
                      <label
                        htmlFor="transportCategory"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Transport Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="transportCategory"
                          name="transportCategory"
                          value={formData.transportCategory}
                          onChange={handleChange}
                          className={`w-full appearance-none pl-3.5 pr-10 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.transportCategory
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                          }`}
                        >
                          {TRANSPORT_CATEGORY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.transportCategory && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.transportCategory}</span>
                        </p>
                      )}
                    </div>

                    {/* Load / Material Type */}
                    <div>
                      <label
                        htmlFor="loadType"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Load / Material Type <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="loadType"
                        name="loadType"
                        value={formData.loadType}
                        onChange={handleChange}
                        placeholder="e.g. 20T Tracked Excavator / TMT Steel"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.loadType
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                        }`}
                      />
                      {errors.loadType && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.loadType}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Pickup Location & Drop Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Pickup Location */}
                    <div>
                      <label
                        htmlFor="pickupLocation"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Pickup Location / City <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="e.g. Ahmedabad, Gujarat"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.pickupLocation
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                          }`}
                        />
                      </div>
                      {errors.pickupLocation && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.pickupLocation}</span>
                        </p>
                      )}
                    </div>

                    {/* Drop Location */}
                    <div>
                      <label
                        htmlFor="dropLocation"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Drop Location / City <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="dropLocation"
                          name="dropLocation"
                          value={formData.dropLocation}
                          onChange={handleChange}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.dropLocation
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                          }`}
                        />
                      </div>
                      {errors.dropLocation && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.dropLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Weight, Dimensions & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Approximate Load Weight */}
                    <div>
                      <label
                        htmlFor="approxWeight"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Approx Weight <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="grid grid-cols-5 gap-1.5">
                        <div className="col-span-3 relative">
                          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                            <Weight className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="number"
                            id="approxWeight"
                            name="approxWeight"
                            min="0"
                            step="any"
                            value={formData.approxWeight}
                            onChange={handleChange}
                            placeholder="e.g. 24"
                            className="w-full pl-8 pr-1.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0879D1] focus:ring-1 focus:ring-blue-100"
                          />
                        </div>
                        <div className="col-span-2 relative">
                          <select
                            name="weightUnit"
                            value={formData.weightUnit}
                            onChange={handleChange}
                            className="w-full appearance-none px-2 pr-6 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                          >
                            {WEIGHT_UNITS.map((u) => (
                              <option key={u} value={u}>
                                {u === "Kilograms (kg)" ? "kg" : "Tonnes"}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none text-slate-400">
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                      {errors.approxWeight && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.approxWeight}</span>
                        </p>
                      )}
                    </div>

                    {/* Load Dimensions */}
                    <div>
                      <label
                        htmlFor="loadDimensions"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Dimensions <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          id="loadDimensions"
                          name="loadDimensions"
                          value={formData.loadDimensions}
                          onChange={handleChange}
                          placeholder="e.g. 12m x 2.5m x 3m"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0879D1] focus:ring-1 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          min={minDate || undefined}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1] focus:ring-1 focus:ring-blue-100"
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Requirement Details */}
                  <div>
                    <label
                      htmlFor="additionalDetails"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      Additional Requirement Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      rows={4}
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="Route ya loading conditions share karein — e.g. narrow site access road, crane loading needed at origin, bridge restriction details, expected delivery timeline..."
                      className={`w-full p-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all leading-relaxed ${
                        errors.additionalDetails
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                      }`}
                    />
                    {errors.additionalDetails && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.additionalDetails}</span>
                      </p>
                    )}
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
                    {isSubmitting ? "Formatting..." : "Review Formatted Summary First"}
                  </Button>
                </div>

                <div className="text-center text-xs text-slate-400 pt-1">
                  Enquiry submit karne par Machine Wallah logistics team aapse connect karegi. No spam guarantee.
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
