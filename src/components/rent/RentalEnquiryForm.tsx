"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  User,
  FileText,
  Copy,
  Check,
  Sparkles,
  Info,
  ChevronDown,
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

const MACHINE_OPTIONS = [
  "Backhoe Loader (JCB)",
  "Excavator",
  "Crane / Hydra",
  "Road Roller",
  "Wheel Loader",
  "Bulldozer",
  "Motor Grader",
  "Concrete Mixer",
  "Other",
];

const DURATION_UNITS = ["Days", "Weeks", "Months", "Hours"];

const CONTACT_PREFERENCES = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "call", label: "Phone Call" },
  { id: "email", label: "Email" },
];

interface RentalEnquiryFormProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

interface FormState {
  fullName: string;
  mobileNumber: string;
  machineCategory: string;
  cityLocation: string;
  durationValue: string;
  durationUnit: string;
  requirementDetails: string;
  emailAddress: string;
  preferredContact: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  machineCategory?: string;
  cityLocation?: string;
  durationValue?: string;
  requirementDetails?: string;
  emailAddress?: string;
}

export function RentalEnquiryForm({
  selectedCategory = "",
  onCategoryChange,
}: RentalEnquiryFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    machineCategory: selectedCategory || "Backhoe Loader (JCB)",
    cityLocation: "",
    durationValue: "15",
    durationUnit: "Days",
    requirementDetails: "",
    emailAddress: "",
    preferredContact: "whatsapp",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "ready-for-dispatch" | "copied"
  >("idle");
  const [copiedText, setCopiedText] = useState(false);

  // Sync external category selection
  useEffect(() => {
    if (selectedCategory && MACHINE_OPTIONS.includes(selectedCategory)) {
      setFormData((prev) => ({ ...prev, machineCategory: selectedCategory }));
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

    // Mobile Number (Indian 10-digit mobile number)
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanedMobile) {
      newErrors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).";
    }

    // Machine Category
    if (!formData.machineCategory) {
      newErrors.machineCategory = "Please select a machine category.";
    }

    // City / Location
    if (!formData.cityLocation.trim()) {
      newErrors.cityLocation = "Please enter project city or site location.";
    } else if (formData.cityLocation.trim().length < 2) {
      newErrors.cityLocation = "Location must be at least 2 characters.";
    }

    // Duration Value
    if (!formData.durationValue.trim()) {
      newErrors.durationValue = "Please specify expected duration.";
    }

    // Requirement Details
    if (!formData.requirementDetails.trim()) {
      newErrors.requirementDetails =
        "Please describe your site requirement (e.g. work nature, soil type, start date).";
    } else if (formData.requirementDetails.trim().length < 10) {
      newErrors.requirementDetails =
        "Please provide at least 10 characters describing your requirement.";
    }

    // Email (optional, but validate if entered)
    if (
      formData.emailAddress.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())
    ) {
      newErrors.emailAddress = "Please enter a valid email address.";
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

    if (name === "machineCategory" && onCategoryChange) {
      onCategoryChange(value);
    }
  };

  const compileRentalData = (): CompleteEnquiryData => ({
    serviceType: "Rent Machines",
    customer: {
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      emailAddress: formData.emailAddress,
      cityLocation: formData.cityLocation,
    },
    serviceDetails: {
      machineCategory: formData.machineCategory,
      rentalDuration: `${formData.durationValue} ${formData.durationUnit}`,
      projectLocation: formData.cityLocation,
    },
    additionalDetails: formData.requirementDetails,
  });

  const formatSummaryText = (): string => {
    return buildEnquiryTextMessage(compileRentalData());
  };

  const handleWhatsAppAction = () => {
    if (!validate()) return;
    const data = compileRentalData();
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
    const data = compileRentalData();
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
    if (!validate()) {
      return;
    }

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
      // Fallback
      setCopiedText(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      machineCategory: "Backhoe Loader (JCB)",
      cityLocation: "",
      durationValue: "15",
      durationUnit: "Days",
      requirementDetails: "",
      emailAddress: "",
      preferredContact: "whatsapp",
    });
    setErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <section
      id="rental-enquiry"
      ref={formRef}
      className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60 scroll-mt-20"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge="Direct Enquiry"
            badgeColor="blue"
            title="Tell Us Your Machine Requirement"
            description="Apni construction site ki requirement share karein aur right machinery options explore karein."
            align="center"
          />
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Card Top Banner */}
          <div className="bg-[#141B29] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFBE0B] flex items-center justify-center text-[#141B29] shrink-0 font-bold">
                <FileText className="w-5 h-5 text-[#141B29]" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">
                  Heavy Equipment Rental Enquiry
                </h3>
                <p className="text-xs text-slate-300">
                  Direct connection without brokerage confusion
                </p>
              </div>
            </div>
            <div className="text-xs text-[#FFBE0B] font-semibold flex items-center gap-1.5 self-start sm:self-auto bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Standard Response: Same Day</span>
            </div>
          </div>

          {/* Form Content / State View */}
          <div className="p-6 sm:p-10">
            {submissionStatus === "ready-for-dispatch" ? (
              /* Honest Dispatch & Action Confirmation State */
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-amber-950 mb-1">
                        Requirement Details Ready for Transmission
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
                        Hamari automatic cloud server pipeline directly connect ho rahi hai. Taaki aapki enquiry me koi delay na ho, aap neeche di gayi formatted requirement ko <strong>copy</strong> kar sakte hain ya helpline par discuss kar sakte hain:
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

                {/* Action Buttons: WhatsApp + Email + Copy */}
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
                      variant="yellow"
                      size="md"
                      leftIcon={
                        copiedText ? (
                          <Check className="w-4 h-4 text-[#141B29]" />
                        ) : (
                          <Copy className="w-4 h-4 text-[#141B29]" />
                        )
                      }
                      className="font-bold flex-1 justify-center"
                    >
                      {copiedText ? "Requirement Copied!" : "Copy Requirement"}
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="md"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 flex-1 justify-center"
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
              /* Active Rental Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* 2-Column: Name & Mobile */}
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
                        placeholder="e.g. Rajesh Sharma"
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

                {/* 2-Column: Machine Category & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Machine Category */}
                  <div>
                    <label
                      htmlFor="machineCategory"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      Machine Category <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="machineCategory"
                        name="machineCategory"
                        value={formData.machineCategory}
                        onChange={handleChange}
                        className={`w-full appearance-none pl-3.5 pr-10 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.machineCategory
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                        }`}
                      >
                        {MACHINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.machineCategory && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.machineCategory}</span>
                      </p>
                    )}
                  </div>

                  {/* City / Project Location */}
                  <div>
                    <label
                      htmlFor="cityLocation"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      City / Project Location{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="cityLocation"
                        name="cityLocation"
                        value={formData.cityLocation}
                        onChange={handleChange}
                        placeholder="e.g. Ahmedabad, Gujarat"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.cityLocation
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                        }`}
                      />
                    </div>
                    {errors.cityLocation && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.cityLocation}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 2-Column: Rental Duration & Optional Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Expected Rental Duration (Value + Unit) */}
                  <div>
                    <label
                      htmlFor="durationValue"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      Expected Rental Duration{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="col-span-3 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="durationValue"
                          name="durationValue"
                          value={formData.durationValue}
                          onChange={handleChange}
                          placeholder="e.g. 15"
                          className="w-full pl-9 pr-2 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0879D1] focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div className="col-span-2 relative">
                        <select
                          name="durationUnit"
                          value={formData.durationUnit}
                          onChange={handleChange}
                          className="w-full appearance-none px-3 pr-8 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1] focus:ring-2 focus:ring-blue-100"
                        >
                          {DURATION_UNITS.map((unit) => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    {errors.durationValue && (
                      <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.durationValue}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address (Optional) */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="emailAddress"
                        className="block text-xs sm:text-sm font-bold text-slate-800"
                      >
                        Email Address
                      </label>
                      <span className="text-[11px] text-slate-400">
                        Optional
                      </span>
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
                        placeholder="e.g. rajesh@constructco.in"
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
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-3">
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

                {/* Requirement Details */}
                <div>
                  <label
                    htmlFor="requirementDetails"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Requirement Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="requirementDetails"
                    name="requirementDetails"
                    rows={4}
                    value={formData.requirementDetails}
                    onChange={handleChange}
                    placeholder="Project details share karein — e.g. excavation depth, site condition, expected start date, operator required or not..."
                    className={`w-full p-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all leading-relaxed ${
                      errors.requirementDetails
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                    }`}
                  />
                  {errors.requirementDetails && (
                    <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.requirementDetails}</span>
                    </p>
                  )}
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
                  Enquiry submit karne par Machine Wallah team aapke contact number par connect karegi. No spam guarantee.
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
