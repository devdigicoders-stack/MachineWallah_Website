"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  Tag,
  MapPin,
  User,
  FileText,
  Copy,
  Check,
  Sparkles,
  Info,
  ChevronDown,
  Calendar,
  Layers,
  Banknote,
  Wrench,
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

const MACHINE_OPTIONS = [
  "Backhoe Loader (JCB)",
  "Excavator",
  "Crane / Hydra",
  "Road Roller",
  "Wheel Loader",
  "Bulldozer",
  "Motor Grader",
  "Concrete Equipment",
  "Other",
];

const BUY_CONDITIONS = ["New", "Used", "Either"];

const SELL_CONDITIONS = [
  "Excellent (Ready to Work)",
  "Good (Operational)",
  "Average (Minor Work Needed)",
  "Needs Major Maintenance",
];

const CONTACT_PREFERENCES = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "call", label: "Phone Call" },
  { id: "email", label: "Email" },
];

export type BuySellTab = "buy" | "sell";

interface BuySellEnquiryFormProps {
  activeTab?: BuySellTab;
  onTabChange?: (tab: BuySellTab) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

interface FormState {
  // Shared
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  cityLocation: string;
  machineCategory: string;
  requirementDetails: string;
  preferredContact: string;

  // Buy specific
  preferredCondition: string;
  budgetRange: string;
  preferredBrandModel: string;

  // Sell specific
  machineBrand: string;
  machineModel: string;
  manufacturingYear: string;
  machineCondition: string;
  expectedPrice: string;
  workingHours: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  cityLocation?: string;
  machineCategory?: string;
  requirementDetails?: string;

  // Buy
  preferredCondition?: string;

  // Sell
  machineBrand?: string;
  machineModel?: string;
  manufacturingYear?: string;
  machineCondition?: string;
}

export function BuySellEnquiryForm({
  activeTab = "buy",
  onTabChange,
  selectedCategory = "",
  onCategoryChange,
}: BuySellEnquiryFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState<BuySellTab>(activeTab);

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    cityLocation: "",
    machineCategory: selectedCategory || "Backhoe Loader (JCB)",
    requirementDetails: "",
    preferredContact: "whatsapp",

    preferredCondition: "Used",
    budgetRange: "",
    preferredBrandModel: "",

    machineBrand: "",
    machineModel: "",
    manufacturingYear: "",
    machineCondition: "Good (Operational)",
    expectedPrice: "",
    workingHours: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "ready-for-dispatch"
  >("idle");
  const [copiedText, setCopiedText] = useState(false);

  // Sync external tab
  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  // Sync external category
  useEffect(() => {
    if (selectedCategory && MACHINE_OPTIONS.includes(selectedCategory)) {
      setFormData((prev) => ({ ...prev, machineCategory: selectedCategory }));
    }
  }, [selectedCategory]);

  const handleTabSwitch = (tab: BuySellTab) => {
    setCurrentTab(tab);
    setErrors({});
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // Mobile Number (Indian 10-digit)
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanedMobile) {
      newErrors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).";
    }

    // City / Location
    if (!formData.cityLocation.trim()) {
      newErrors.cityLocation = "Please enter city or site location.";
    } else if (formData.cityLocation.trim().length < 2) {
      newErrors.cityLocation = "Location must be at least 2 characters.";
    }

    // Machine Category
    if (!formData.machineCategory) {
      newErrors.machineCategory = "Please select a machine category.";
    }

    // Requirement Details
    if (!formData.requirementDetails.trim()) {
      newErrors.requirementDetails =
        "Please describe your requirements (e.g. usage type, urgent timeline).";
    } else if (formData.requirementDetails.trim().length < 10) {
      newErrors.requirementDetails =
        "Please provide at least 10 characters of details.";
    }

    // Email (optional, validate format if entered)
    if (
      formData.emailAddress.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())
    ) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    // Sell-specific validations
    if (currentTab === "sell") {
      if (!formData.machineBrand.trim()) {
        newErrors.machineBrand = "Please specify machine brand (e.g. JCB, CAT, Tata Hitachi).";
      }

      if (!formData.machineModel.trim()) {
        newErrors.machineModel = "Please specify model name / number.";
      }

      if (formData.manufacturingYear.trim()) {
        const year = parseInt(formData.manufacturingYear.trim(), 10);
        const currentYear = new Date().getFullYear();
        if (isNaN(year) || year < 1990 || year > currentYear) {
          newErrors.manufacturingYear = `Enter a valid year between 1990 and ${currentYear}.`;
        }
      }

      if (!formData.machineCondition) {
        newErrors.machineCondition = "Please select machine condition.";
      }
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

  const compileBuySellData = (): CompleteEnquiryData => {
    const isBuy = currentTab === "buy";
    if (isBuy) {
      return {
        serviceType: "Buy Machine",
        customer: {
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          emailAddress: formData.emailAddress,
          cityLocation: formData.cityLocation,
        },
        serviceDetails: {
          buyMachineCategory: formData.machineCategory,
          newUsedPreference: formData.preferredCondition,
          budget: formData.budgetRange,
          preferredBrandModel: formData.preferredBrandModel,
        },
        additionalDetails: formData.requirementDetails,
      };
    } else {
      return {
        serviceType: "Sell Machine",
        customer: {
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          emailAddress: formData.emailAddress,
          cityLocation: formData.cityLocation,
        },
        serviceDetails: {
          sellMachineCategory: formData.machineCategory,
          brand: formData.machineBrand,
          model: formData.machineModel,
          manufacturingYear: formData.manufacturingYear,
          condition: formData.machineCondition,
          expectedPrice: formData.expectedPrice,
        },
        additionalDetails: formData.workingHours
          ? `Working Hours: ${formData.workingHours}\n${formData.requirementDetails}`
          : formData.requirementDetails,
      };
    }
  };

  const formatSummaryText = (): string => {
    return buildEnquiryTextMessage(compileBuySellData());
  };

  const handleWhatsAppAction = () => {
    if (!validate()) return;
    const data = compileBuySellData();
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
    const data = compileBuySellData();
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
      cityLocation: "",
      machineCategory: "Backhoe Loader (JCB)",
      requirementDetails: "",
      preferredContact: "whatsapp",
      preferredCondition: "Used",
      budgetRange: "",
      preferredBrandModel: "",
      machineBrand: "",
      machineModel: "",
      manufacturingYear: "",
      machineCondition: "Good (Operational)",
      expectedPrice: "",
      workingHours: "",
    });
    setErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <section
      id="buy-sell-enquiry"
      ref={formRef}
      className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Direct Enquiry</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Tell Us About Your Machinery Requirement
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Chahe equipment buy karna ho ya sell karna ho — apni specific requirement share karein.
          </p>
        </div>

        {/* Main Card with Tabs */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-white shadow-2xl overflow-hidden text-[#141B29]">
          {/* Dual Tabs Header */}
          <div className="grid grid-cols-2 bg-slate-100 p-2 border-b border-slate-200">
            <button
              type="button"
              onClick={() => handleTabSwitch("buy")}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                currentTab === "buy"
                  ? "bg-white text-[#141B29] shadow-md border border-slate-200/60"
                  : "text-slate-600 hover:text-[#141B29] hover:bg-white/50"
              }`}
            >
              <ShoppingBag
                className={`w-4 h-4 ${
                  currentTab === "buy" ? "text-[#36A43B]" : "text-slate-400"
                }`}
              />
              <span>Buy Machine</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch("sell")}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                currentTab === "sell"
                  ? "bg-[#141B29] text-white shadow-md border border-slate-700"
                  : "text-slate-600 hover:text-[#141B29] hover:bg-white/50"
              }`}
            >
              <Tag
                className={`w-4 h-4 ${
                  currentTab === "sell" ? "text-[#36A43B]" : "text-slate-400"
                }`}
              />
              <span>Sell Machine</span>
            </button>
          </div>

          {/* Form Content / Submission State */}
          <div className="p-6 sm:p-10">
            {submissionStatus === "ready-for-dispatch" ? (
              /* Honest Dispatch State */
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-[#36A43B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-emerald-950 mb-1">
                        {currentTab === "buy" ? "Buying" : "Selling"} Requirement Summary Ready
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-normal">
                        Hamari automatic cloud server pipeline directly connect ho rahi hai. Taaki aapki enquiry me delay na ho, aap formatted requirement details ko <strong>copy</strong> karke helpline ya WhatsApp par discuss kar sakte hain:
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
                      variant="green"
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
              /* Active Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Notice Badge for active mode */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    {currentTab === "buy" ? (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#36A43B]" />
                        <span>Mode: Machinery Purchase Enquiry</span>
                      </>
                    ) : (
                      <>
                        <Tag className="w-3.5 h-3.5 text-[#36A43B]" />
                        <span>Mode: Machine Selling / Listing Enquiry</span>
                      </>
                    )}
                  </span>
                  <span className="text-slate-400">All fields marked * are required</span>
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
                        placeholder="e.g. Amit Patil"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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
                            : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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

                {/* Row 2: Machine Category & City / Location */}
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
                            : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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

                  {/* City / Location */}
                  <div>
                    <label
                      htmlFor="cityLocation"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      City / Location <span className="text-rose-500">*</span>
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
                        placeholder="e.g. Surat, Gujarat"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.cityLocation
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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

                {/* DYNAMIC FIELDS: BUY vs SELL */}
                {currentTab === "buy" ? (
                  /* BUY FIELDS */
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#257328] flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buyer Preferences</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Preferred Condition */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Preferred Condition <span className="text-rose-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          {BUY_CONDITIONS.map((cond) => (
                            <label
                              key={cond}
                              className={`flex-1 text-center py-2 px-1 text-xs font-bold rounded-xl border cursor-pointer transition-all ${
                                formData.preferredCondition === cond
                                  ? "bg-[#36A43B] text-white border-[#36A43B]"
                                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="preferredCondition"
                                value={cond}
                                checked={formData.preferredCondition === cond}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span>{cond}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Budget Range (Optional) */}
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Budget Range <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Banknote className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="budgetRange"
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleChange}
                            placeholder="e.g. ₹15L - ₹25L"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                          />
                        </div>
                      </div>

                      {/* Preferred Brand / Model (Optional) */}
                      <div>
                        <label
                          htmlFor="preferredBrandModel"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Preferred Brand <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="preferredBrandModel"
                          name="preferredBrandModel"
                          value={formData.preferredBrandModel}
                          onChange={handleChange}
                          placeholder="e.g. JCB 3DX, Tata Hitachi"
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* SELL FIELDS */
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#36A43B]" />
                      <span>Machine Seller Details</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Machine Brand */}
                      <div>
                        <label
                          htmlFor="machineBrand"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Machine Brand <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="machineBrand"
                          name="machineBrand"
                          value={formData.machineBrand}
                          onChange={handleChange}
                          placeholder="e.g. JCB, Tata Hitachi, CAT, Komatsu"
                          className={`w-full px-3 py-2 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.machineBrand
                              ? "border-rose-400 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
                          }`}
                        />
                        {errors.machineBrand && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.machineBrand}</span>
                          </p>
                        )}
                      </div>

                      {/* Machine Model */}
                      <div>
                        <label
                          htmlFor="machineModel"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Machine Model <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="machineModel"
                          name="machineModel"
                          value={formData.machineModel}
                          onChange={handleChange}
                          placeholder="e.g. 3DX Plus, EX200, PC210"
                          className={`w-full px-3 py-2 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.machineModel
                              ? "border-rose-400 bg-rose-50/20"
                              : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
                          }`}
                        />
                        {errors.machineModel && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.machineModel}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Manufacturing Year */}
                      <div>
                        <label
                          htmlFor="manufacturingYear"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Mfg Year <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <input
                            type="number"
                            id="manufacturingYear"
                            name="manufacturingYear"
                            min="1990"
                            max="2026"
                            value={formData.manufacturingYear}
                            onChange={handleChange}
                            placeholder="e.g. 2021"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                          />
                        </div>
                        {errors.manufacturingYear && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.manufacturingYear}</span>
                          </p>
                        )}
                      </div>

                      {/* Expected Selling Price */}
                      <div>
                        <label
                          htmlFor="expectedPrice"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Expected Price <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="expectedPrice"
                          name="expectedPrice"
                          value={formData.expectedPrice}
                          onChange={handleChange}
                          placeholder="e.g. ₹22 Lakh"
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                        />
                      </div>

                      {/* Working Hours */}
                      <div>
                        <label
                          htmlFor="workingHours"
                          className="block text-xs font-bold text-slate-800 mb-1.5"
                        >
                          Working Hours <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="workingHours"
                          name="workingHours"
                          value={formData.workingHours}
                          onChange={handleChange}
                          placeholder="e.g. 4,200 hrs"
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                        />
                      </div>
                    </div>

                    {/* Machine Condition */}
                    <div>
                      <label
                        htmlFor="machineCondition"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Machine Condition <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="machineCondition"
                          name="machineCondition"
                          value={formData.machineCondition}
                          onChange={handleChange}
                          className="w-full appearance-none px-3.5 pr-10 py-2 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:border-[#36A43B] focus:ring-1 focus:ring-emerald-200"
                        >
                          {SELL_CONDITIONS.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Row 3: Optional Email & Preferred Contact */}
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
                        placeholder="e.g. amit@infraprojects.com"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.emailAddress
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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
                              ? "bg-emerald-50 border-[#36A43B] text-[#257328] shadow-xs"
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
                                ? "border-[#36A43B] bg-[#36A43B]"
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

                {/* Requirement Details Textarea */}
                <div>
                  <label
                    htmlFor="requirementDetails"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    {currentTab === "buy" ? "Buying Requirement Details" : "Machine Selling Details"}{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="requirementDetails"
                    name="requirementDetails"
                    rows={4}
                    value={formData.requirementDetails}
                    onChange={handleChange}
                    placeholder={
                      currentTab === "buy"
                        ? "Specific project details share karein — e.g. excavation tonnage, preferred accessories like rock breaker, expected delivery timeline..."
                        : "Machine condition highlights share karein — e.g. single owner, insurance validity, tyres/track health, NOC availability..."
                    }
                    className={`w-full p-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all leading-relaxed ${
                      errors.requirementDetails
                        ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-300 focus:border-[#36A43B] focus:ring-emerald-100"
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
                  Enquiry submit karne par Machine Wallah team aapse connect karegi. No spam guarantee.
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
