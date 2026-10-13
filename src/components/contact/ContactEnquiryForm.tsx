"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  Info,
  ChevronDown,
  User,
  MapPin,
  Calendar,
  Truck,
  Wrench,
  ShoppingBag,
  Tag,
  Package,
  HelpCircle,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { WhatsAppIcon, RealCallIcon, RealEmailIcon } from "@/components/ui/RealIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BUSINESS_CONTACT,
  isWhatsAppConfigured,
  isEmailConfigured,
} from "@/config/contact";
import {
  ServiceType,
  CompleteEnquiryData,
  buildEnquiryTextMessage,
  buildEnquiryEmailSubject,
  buildWhatsAppUrl,
  buildMailtoUrl,
} from "@/utils/enquiryFormatter";

const SERVICE_TABS: { id: ServiceType; label: string; icon: React.ElementType }[] = [
  { id: "Rent Machines", label: "Rent Machines", icon: Wrench },
  { id: "Buy Machine", label: "Buy Machine", icon: ShoppingBag },
  { id: "Sell Machine", label: "Sell Machine", icon: Tag },
  { id: "Transport", label: "Transport", icon: Truck },
  { id: "Construction Materials", label: "Materials", icon: Package },
  { id: "General Enquiry", label: "General", icon: HelpCircle },
];

const RENT_MACHINE_OPTIONS = [
  "Backhoe Loader (JCB 3DX)",
  "Excavator (10 - 30 Ton)",
  "Mobile Crane / Hydra",
  "Vibratory Road Roller",
  "Wheel Loader",
  "Bulldozer",
  "Motor Grader",
  "Concrete Mixer / Pump",
  "Piling Rig",
  "Other Heavy Machinery",
];

const BUY_MACHINE_OPTIONS = [
  "Backhoe Loader (JCB)",
  "Hydraulic Excavator",
  "Pick & Carry Crane",
  "Road Roller / Compactor",
  "Wheel Loader",
  "Bulldozer / Crawler",
  "Concrete Boom Pump",
  "Other Equipment",
];

const TRANSPORT_VEHICLE_OPTIONS = [
  "Low-Bed Trailer",
  "Semi Low-Bed Trailer",
  "Flat-Bed Heavy Trailer",
  "Hydraulic Multi-Axle",
  "Heavy Duty Tipper (10-14 Tyre)",
  "Container Trailer",
  "Other Specialized Carrier",
];

const MATERIAL_CATEGORIES = [
  "Cement (OPC / PPC)",
  "TMT Steel Rebars",
  "Crushed Stone Aggregates (10mm / 20mm / 40mm)",
  "River Sand / M-Sand",
  "Red Clay Bricks / AAC Blocks",
  "Ready-Mix Concrete (RMC)",
  "Fly Ash / GGBS",
  "Other Construction Supplies",
];

const MATERIAL_UNITS = ["Metric Tonnes", "Bags", "Brass", "Cubic Feet (cft)", "Numbers", "Truckloads"];

interface FormState {
  // Shared
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  cityLocation: string;
  requirementDetails: string;

  // Rent
  rentCategory: string;
  rentDuration: string;
  rentProjectLocation: string;

  // Buy
  buyCategory: string;
  buyCondition: string;
  buyBudget: string;
  buyPreferredBrand: string;

  // Sell
  sellCategory: string;
  sellBrand: string;
  sellModel: string;
  sellYear: string;
  sellCondition: string;
  sellExpectedPrice: string;

  // Transport
  transportVehicle: string;
  transportLoad: string;
  transportPickup: string;
  transportDrop: string;
  transportWeight: string;
  transportDate: string;

  // Materials
  materialCategory: string;
  materialSpec: string;
  materialQuantity: string;
  materialUnit: string;
  materialDeliveryLocation: string;
  materialDate: string;

  // General
  generalSubject: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

export function ContactEnquiryForm() {
  const [activeService, setActiveService] = useState<ServiceType>("Rent Machines");
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    cityLocation: "",
    requirementDetails: "",

    // Rent
    rentCategory: "Backhoe Loader (JCB 3DX)",
    rentDuration: "15 Days",
    rentProjectLocation: "",

    // Buy
    buyCategory: "Backhoe Loader (JCB)",
    buyCondition: "Used",
    buyBudget: "",
    buyPreferredBrand: "",

    // Sell
    sellCategory: "Backhoe Loader (JCB)",
    sellBrand: "",
    sellModel: "",
    sellYear: "",
    sellCondition: "Good (Operational)",
    sellExpectedPrice: "",

    // Transport
    transportVehicle: "Low-Bed Trailer",
    transportLoad: "",
    transportPickup: "",
    transportDrop: "",
    transportWeight: "",
    transportDate: "",

    // Materials
    materialCategory: "Cement (OPC / PPC)",
    materialSpec: "",
    materialQuantity: "",
    materialUnit: "Metric Tonnes",
    materialDeliveryLocation: "",
    materialDate: "",

    // General
    generalSubject: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedText, setCopiedText] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [lastActionStatus, setLastActionStatus] = useState<{
    type: "whatsapp" | "email" | "copied" | null;
    message: string;
    isWarning?: boolean;
  } | null>(null);

  const hasWhatsApp = isWhatsAppConfigured();
  const hasEmail = isEmailConfigured();

  // Sync / Handle Tab Change
  const handleServiceChange = (service: ServiceType) => {
    setActiveService(service);
    setErrors({});
    setLastActionStatus(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Comprehensive Client-Side Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Shared: Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // 2. Shared: Mobile Number (10 digits starting with 6, 7, 8, or 9)
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanedMobile) {
      newErrors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    // 3. Shared: City / Location
    if (!formData.cityLocation.trim()) {
      newErrors.cityLocation = "Please enter your city or location.";
    } else if (formData.cityLocation.trim().length < 2) {
      newErrors.cityLocation = "Location must be at least 2 characters.";
    }

    // 4. Shared: Optional Email
    if (
      formData.emailAddress.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())
    ) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }

    // 5. Shared: Requirement Details
    if (!formData.requirementDetails.trim()) {
      newErrors.requirementDetails =
        "Please provide your requirement details or notes.";
    } else if (formData.requirementDetails.trim().length < 8) {
      newErrors.requirementDetails =
        "Please describe your requirement in at least 8 characters.";
    }

    // 6. Service-Specific Validations
    switch (activeService) {
      case "Rent Machines":
        if (!formData.rentDuration.trim()) {
          newErrors.rentDuration = "Please specify rental duration (e.g. 15 Days, 2 Months).";
        }
        break;

      case "Buy Machine":
        // Condition, Budget, Preferred Brand are optional or select-based
        break;

      case "Sell Machine":
        if (!formData.sellBrand.trim()) {
          newErrors.sellBrand = "Please specify machine brand (e.g. JCB, CAT, Tata Hitachi).";
        }
        if (!formData.sellModel.trim()) {
          newErrors.sellModel = "Please specify machine model (e.g. 3DX Plus, EX200).";
        }
        if (formData.sellYear.trim()) {
          const year = parseInt(formData.sellYear.trim(), 10);
          const currentYear = new Date().getFullYear();
          if (isNaN(year) || year < 1990 || year > currentYear) {
            newErrors.sellYear = `Enter a valid year between 1990 and ${currentYear}.`;
          }
        }
        break;

      case "Transport":
        if (!formData.transportLoad.trim()) {
          newErrors.transportLoad = "Please specify load type or machinery (e.g. 20-Ton Excavator).";
        }
        if (!formData.transportPickup.trim()) {
          newErrors.transportPickup = "Please enter pickup location.";
        }
        if (!formData.transportDrop.trim()) {
          newErrors.transportDrop = "Please enter drop location.";
        }
        if (formData.transportWeight.trim()) {
          const w = parseFloat(formData.transportWeight.trim());
          if (isNaN(w) || w <= 0) {
            newErrors.transportWeight = "Weight must be a positive number.";
          }
        }
        if (formData.transportDate.trim()) {
          const today = new Date().toISOString().split("T")[0];
          if (formData.transportDate < today) {
            newErrors.transportDate = "Preferred date cannot be in the past.";
          }
        }
        break;

      case "Construction Materials":
        if (!formData.materialSpec.trim()) {
          newErrors.materialSpec = "Please specify material grade or specification (e.g. OPC 53 Grade, Fe 550D TMT).";
        }
        if (!formData.materialQuantity.trim()) {
          newErrors.materialQuantity = "Please enter required quantity.";
        } else {
          const q = parseFloat(formData.materialQuantity.trim());
          if (isNaN(q) || q <= 0) {
            newErrors.materialQuantity = "Quantity must be greater than zero.";
          }
        }
        if (!formData.materialDeliveryLocation.trim()) {
          newErrors.materialDeliveryLocation = "Please enter delivery site location.";
        }
        if (formData.materialDate.trim()) {
          const today = new Date().toISOString().split("T")[0];
          if (formData.materialDate < today) {
            newErrors.materialDate = "Delivery date cannot be in the past.";
          }
        }
        break;

      case "General Enquiry":
        if (!formData.generalSubject.trim()) {
          newErrors.generalSubject = "Please enter enquiry subject.";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile CompleteEnquiryData from current state
  const compileEnquiryData = (): CompleteEnquiryData => {
    return {
      serviceType: activeService,
      customer: {
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        emailAddress: formData.emailAddress,
        cityLocation: formData.cityLocation,
      },
      serviceDetails: {
        // Rent
        machineCategory: formData.rentCategory,
        rentalDuration: formData.rentDuration,
        projectLocation: formData.rentProjectLocation || formData.cityLocation,

        // Buy
        buyMachineCategory: formData.buyCategory,
        newUsedPreference: formData.buyCondition,
        budget: formData.buyBudget,
        preferredBrandModel: formData.buyPreferredBrand,

        // Sell
        sellMachineCategory: formData.sellCategory,
        brand: formData.sellBrand,
        model: formData.sellModel,
        manufacturingYear: formData.sellYear,
        condition: formData.sellCondition,
        expectedPrice: formData.sellExpectedPrice,

        // Transport
        vehicleCategory: formData.transportVehicle,
        loadType: formData.transportLoad,
        pickupLocation: formData.transportPickup,
        dropLocation: formData.transportDrop,
        approximateWeight: formData.transportWeight,
        weightUnit: "Tonnes",
        preferredDate: formData.transportDate,

        // Materials
        materialCategory: formData.materialCategory,
        materialSpecification: formData.materialSpec,
        quantity: formData.materialQuantity,
        quantityUnit: formData.materialUnit,
        deliveryLocation: formData.materialDeliveryLocation || formData.cityLocation,
        materialDeliveryDate: formData.materialDate,

        // General
        subject: formData.generalSubject,
      },
      additionalDetails: formData.requirementDetails,
    };
  };

  // Handler 1: WhatsApp Enquiry
  const handleWhatsAppClick = () => {
    if (!validateForm()) {
      setLastActionStatus({
        type: null,
        message: "Please fill all required fields correctly before sending.",
        isWarning: true,
      });
      return;
    }

    const data = compileEnquiryData();
    const formattedMsg = buildEnquiryTextMessage(data);

    if (hasWhatsApp) {
      const url = buildWhatsAppUrl(data, BUSINESS_CONTACT.whatsappNumber);
      window.open(url, "_blank", "noopener,noreferrer");
      setLastActionStatus({
        type: "whatsapp",
        message:
          "WhatsApp opened in a new tab with your formatted enquiry. Please tap 'Send' inside WhatsApp to complete dispatch.",
      });
    } else {
      // Unconfigured safe fallback
      navigator.clipboard.writeText(formattedMsg);
      setLastActionStatus({
        type: "whatsapp",
        message:
          "Official company WhatsApp number is currently being configured by management. Your complete formatted enquiry has been copied to your clipboard so you can paste and send it directly!",
        isWarning: true,
      });
    }
  };

  // Handler 2: Email Enquiry
  const handleEmailClick = () => {
    if (!validateForm()) {
      setLastActionStatus({
        type: null,
        message: "Please fill all required fields correctly before sending.",
        isWarning: true,
      });
      return;
    }

    const data = compileEnquiryData();
    const formattedMsg = buildEnquiryTextMessage(data);

    if (hasEmail) {
      const mailtoUrl = buildMailtoUrl(data, BUSINESS_CONTACT.enquiryEmail);
      window.location.href = mailtoUrl;
      setLastActionStatus({
        type: "email",
        message:
          "Default email client opened with pre-filled subject and body. Please tap 'Send' inside your email application.",
      });
    } else {
      // Unconfigured safe fallback
      navigator.clipboard.writeText(
        `Subject: ${buildEnquiryEmailSubject(data)}\n\n${formattedMsg}`
      );
      setLastActionStatus({
        type: "email",
        message:
          "Official company enquiry email is currently being configured. Your formatted email subject and body have been copied to your clipboard so you can paste and send them easily!",
        isWarning: true,
      });
    }
  };

  // Handler 3: Copy Formatted Enquiry to Clipboard
  const handleCopySummary = async () => {
    if (!validateForm()) {
      setLastActionStatus({
        type: null,
        message: "Please fill the required fields to generate a complete summary.",
        isWarning: true,
      });
      return;
    }

    const data = compileEnquiryData();
    const formatted = buildEnquiryTextMessage(data);

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedText(true);
      setLastActionStatus({
        type: "copied",
        message: "Formatted enquiry copied to clipboard successfully!",
      });
      setTimeout(() => setCopiedText(false), 3000);
    } catch {
      setLastActionStatus({
        type: "copied",
        message: "Summary ready! Select the text in preview to copy manually.",
      });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      cityLocation: "",
      requirementDetails: "",
      rentCategory: "Backhoe Loader (JCB 3DX)",
      rentDuration: "15 Days",
      rentProjectLocation: "",
      buyCategory: "Backhoe Loader (JCB)",
      buyCondition: "Used",
      buyBudget: "",
      buyPreferredBrand: "",
      sellCategory: "Backhoe Loader (JCB)",
      sellBrand: "",
      sellModel: "",
      sellYear: "",
      sellCondition: "Good (Operational)",
      sellExpectedPrice: "",
      transportVehicle: "Low-Bed Trailer",
      transportLoad: "",
      transportPickup: "",
      transportDrop: "",
      transportWeight: "",
      transportDate: "",
      materialCategory: "Cement (OPC / PPC)",
      materialSpec: "",
      materialQuantity: "",
      materialUnit: "Metric Tonnes",
      materialDeliveryLocation: "",
      materialDate: "",
      generalSubject: "",
    });
    setErrors({});
    setLastActionStatus(null);
  };

  return (
    <section id="enquiry-form" className="py-12 sm:py-16 bg-[#B1771B] text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-black/15 blur-3xl"
      />

      <Container size="xl" className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Select &amp; Enquire</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Dynamic Service Enquiry
          </h2>

          <p className="text-base text-amber-50/95 leading-relaxed font-normal">
            Apni specific requirement select karein aur structured WhatsApp ya Email enquiry direct dispatch karein — zero brokerage, instant connection.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-white shadow-2xl overflow-hidden text-[#141B29]">
          {/* Service Selector Tabs Header */}
          <div className="bg-slate-900 p-3 sm:p-4 border-b border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Select Your Service Type
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {SERVICE_TABS.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeService === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleServiceChange(tab.id)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FFBE0B] text-[#141B29] shadow-md shadow-amber-500/20 scale-[1.02]"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Action Feedback Banner */}
            {lastActionStatus && (
              <div
                className={`p-4 rounded-2xl border text-sm flex items-start gap-3 animate-in fade-in duration-200 ${
                  lastActionStatus.isWarning
                    ? "bg-amber-50 border-amber-200 text-amber-900"
                    : "bg-emerald-50 border-emerald-200 text-emerald-950"
                }`}
              >
                {lastActionStatus.isWarning ? (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                ) : (
                  <Check className="w-5 h-5 text-[#36A43B] shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-semibold text-xs sm:text-sm leading-relaxed">
                    {lastActionStatus.message}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Customer requirement is preserved locally and formatted according to Machine Wallah standards.
                  </p>
                </div>
              </div>
            )}

            {/* SHARED SECTION: CUSTOMER DETAILS */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <User className="w-4 h-4 text-[#0879D1]" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
                  Customer Details
                </h3>
                <span className="text-xs text-slate-400 font-normal ml-auto">
                  * Required fields
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Kumar"
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      placeholder="e.g. Lucknow / Delhi NCR"
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

                {/* Optional Email Address */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="emailAddress"
                      className="block text-xs sm:text-sm font-bold text-slate-800"
                    >
                      Email Address
                    </label>
                    <span className="text-[11px] text-slate-400 font-normal">
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
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
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
            </div>

            {/* DYNAMIC SERVICE SPECIFIC FIELDS */}
            <div className="bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFBE0B]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    {activeService} — Requirement Details
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  Service Specific
                </span>
              </div>

              {/* 1. RENT MACHINES FIELDS */}
              {activeService === "Rent Machines" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="rentCategory"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Machine Category <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="rentCategory"
                        name="rentCategory"
                        value={formData.rentCategory}
                        onChange={handleInputChange}
                        className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1] focus:ring-1 focus:ring-blue-100"
                      >
                        {RENT_MACHINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rentDuration"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Rental Duration <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="rentDuration"
                      name="rentDuration"
                      value={formData.rentDuration}
                      onChange={handleInputChange}
                      placeholder="e.g. 15 Days / 3 Months"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 ${
                        errors.rentDuration
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-slate-300 focus:border-[#0879D1] focus:ring-blue-100"
                      }`}
                    />
                    {errors.rentDuration && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">
                        {errors.rentDuration}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rentProjectLocation"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Project Site Location
                    </label>
                    <input
                      type="text"
                      id="rentProjectLocation"
                      name="rentProjectLocation"
                      value={formData.rentProjectLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Highway Site, Kanpur Road"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1] focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>
              )}

              {/* 2. BUY MACHINE FIELDS */}
              {activeService === "Buy Machine" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <label
                      htmlFor="buyCategory"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Machine Category <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="buyCategory"
                        name="buyCategory"
                        value={formData.buyCategory}
                        onChange={handleInputChange}
                        className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                      >
                        {BUY_MACHINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      New / Used Preference
                    </label>
                    <div className="flex gap-2">
                      {["New", "Used", "Any"].map((c) => (
                        <label
                          key={c}
                          className={`flex-1 text-center py-2 px-1 text-xs font-bold rounded-xl border cursor-pointer transition-all ${
                            formData.buyCondition === c
                              ? "bg-[#141B29] text-white border-[#141B29]"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="buyCondition"
                            value={c}
                            checked={formData.buyCondition === c}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="buyBudget"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Budget (Approx)
                    </label>
                    <input
                      type="text"
                      id="buyBudget"
                      name="buyBudget"
                      value={formData.buyBudget}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹18L - ₹25L"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="buyPreferredBrand"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Preferred Brand / Model
                    </label>
                    <input
                      type="text"
                      id="buyPreferredBrand"
                      name="buyPreferredBrand"
                      value={formData.buyPreferredBrand}
                      onChange={handleInputChange}
                      placeholder="e.g. JCB 3DX / CAT 320D"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                    />
                  </div>
                </div>
              )}

              {/* 3. SELL MACHINE FIELDS */}
              {activeService === "Sell Machine" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="sellCategory"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Machine Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="sellCategory"
                          name="sellCategory"
                          value={formData.sellCategory}
                          onChange={handleInputChange}
                          className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                        >
                          {BUY_MACHINE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="sellBrand"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Brand <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="sellBrand"
                        name="sellBrand"
                        value={formData.sellBrand}
                        onChange={handleInputChange}
                        placeholder="e.g. JCB, Tata Hitachi, CAT"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.sellBrand
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.sellBrand && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.sellBrand}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="sellModel"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Model <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="sellModel"
                        name="sellModel"
                        value={formData.sellModel}
                        onChange={handleInputChange}
                        placeholder="e.g. 3DX Plus / EX200"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.sellModel
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.sellModel && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.sellModel}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="sellYear"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Manufacturing Year
                      </label>
                      <input
                        type="number"
                        id="sellYear"
                        name="sellYear"
                        value={formData.sellYear}
                        onChange={handleInputChange}
                        placeholder="e.g. 2021"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.sellYear
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.sellYear && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.sellYear}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="sellCondition"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Condition
                      </label>
                      <div className="relative">
                        <select
                          id="sellCondition"
                          name="sellCondition"
                          value={formData.sellCondition}
                          onChange={handleInputChange}
                          className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                        >
                          <option value="Excellent (Ready to Work)">Excellent (Ready to Work)</option>
                          <option value="Good (Operational)">Good (Operational)</option>
                          <option value="Average (Minor Work Needed)">Average (Minor Work Needed)</option>
                          <option value="Needs Maintenance">Needs Maintenance</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="sellExpectedPrice"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Expected Price
                      </label>
                      <input
                        type="text"
                        id="sellExpectedPrice"
                        name="sellExpectedPrice"
                        value={formData.sellExpectedPrice}
                        onChange={handleInputChange}
                        placeholder="e.g. ₹22 Lakh"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. TRANSPORT FIELDS */}
              {activeService === "Transport" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="transportVehicle"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Vehicle Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="transportVehicle"
                          name="transportVehicle"
                          value={formData.transportVehicle}
                          onChange={handleInputChange}
                          className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                        >
                          {TRANSPORT_VEHICLE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="transportLoad"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Load Type / Machinery <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="transportLoad"
                        name="transportLoad"
                        value={formData.transportLoad}
                        onChange={handleInputChange}
                        placeholder="e.g. Excavator, Crane, Steel Beams"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.transportLoad
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.transportLoad && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.transportLoad}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                      <label
                        htmlFor="transportPickup"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Pickup Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="transportPickup"
                        name="transportPickup"
                        value={formData.transportPickup}
                        onChange={handleInputChange}
                        placeholder="e.g. Lucknow"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.transportPickup
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.transportPickup && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.transportPickup}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="transportDrop"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Drop Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="transportDrop"
                        name="transportDrop"
                        value={formData.transportDrop}
                        onChange={handleInputChange}
                        placeholder="e.g. Kanpur"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.transportDrop
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.transportDrop && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.transportDrop}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="transportWeight"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Approx. Weight (Tonnes)
                      </label>
                      <input
                        type="text"
                        id="transportWeight"
                        name="transportWeight"
                        value={formData.transportWeight}
                        onChange={handleInputChange}
                        placeholder="e.g. 20"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.transportWeight
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.transportWeight && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.transportWeight}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="transportDate"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="transportDate"
                        name="transportDate"
                        value={formData.transportDate}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.transportDate
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.transportDate && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.transportDate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. MATERIALS FIELDS */}
              {activeService === "Construction Materials" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="materialCategory"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Material Category <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="materialCategory"
                          name="materialCategory"
                          value={formData.materialCategory}
                          onChange={handleInputChange}
                          className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0879D1]"
                        >
                          {MATERIAL_CATEGORIES.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="materialSpec"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Material Specification <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="materialSpec"
                        name="materialSpec"
                        value={formData.materialSpec}
                        onChange={handleInputChange}
                        placeholder="e.g. UltraTech PPC / Fe 550D TMT Rebar"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.materialSpec
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.materialSpec && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.materialSpec}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="materialQuantity"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Quantity & Unit <span className="text-rose-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          id="materialQuantity"
                          name="materialQuantity"
                          value={formData.materialQuantity}
                          onChange={handleInputChange}
                          placeholder="e.g. 500"
                          className={`col-span-2 px-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                            errors.materialQuantity
                              ? "border-rose-400"
                              : "border-slate-300 focus:border-[#0879D1]"
                          }`}
                        />
                        <div className="relative">
                          <select
                            name="materialUnit"
                            value={formData.materialUnit}
                            onChange={handleInputChange}
                            className="w-full appearance-none pl-2 pr-6 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none"
                          >
                            {MATERIAL_UNITS.map((u) => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-3.5 pointer-events-none" />
                        </div>
                      </div>
                      {errors.materialQuantity && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.materialQuantity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="materialDeliveryLocation"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Delivery Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="materialDeliveryLocation"
                        name="materialDeliveryLocation"
                        value={formData.materialDeliveryLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Site in Lucknow Outer"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.materialDeliveryLocation
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.materialDeliveryLocation && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.materialDeliveryLocation}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="materialDate"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
                      >
                        Preferred Delivery Date
                      </label>
                      <input
                        type="date"
                        id="materialDate"
                        name="materialDate"
                        value={formData.materialDate}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                          errors.materialDate
                            ? "border-rose-400"
                            : "border-slate-300 focus:border-[#0879D1]"
                        }`}
                      />
                      {errors.materialDate && (
                        <p className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.materialDate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 6. GENERAL ENQUIRY FIELDS */}
              {activeService === "General Enquiry" && (
                <div>
                  <label
                    htmlFor="generalSubject"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="generalSubject"
                    name="generalSubject"
                    value={formData.generalSubject}
                    onChange={handleInputChange}
                    placeholder="e.g. Partner Inquiry / Transporter Registration / General Question"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none ${
                      errors.generalSubject
                        ? "border-rose-400"
                        : "border-slate-300 focus:border-[#0879D1]"
                    }`}
                  />
                  {errors.generalSubject && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.generalSubject}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* REQUIREMENT DETAILS / MESSAGE TEXTAREA */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="requirementDetails"
                  className="block text-xs sm:text-sm font-bold text-slate-800"
                >
                  Requirement Details / Additional Notes{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  Minimum 8 characters
                </span>
              </div>
              <textarea
                id="requirementDetails"
                name="requirementDetails"
                rows={4}
                value={formData.requirementDetails}
                onChange={handleInputChange}
                placeholder="Specific site requirements, terrain condition, timeline, operator requirement ya material dispatch instructions share karein..."
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

            {/* MESSAGE PREVIEW DRAWER (ACCORDION) */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-bold text-slate-700 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFBE0B]" />
                  <span>Preview Generated Enquiry Message</span>
                </span>
                <span className="text-[#0879D1] text-xs font-semibold">
                  {showPreview ? "Hide Preview" : "Show Message Preview"}
                </span>
              </button>

              {showPreview && (
                <div className="p-4 bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border-t border-slate-800">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    {buildEnquiryTextMessage(compileEnquiryData())}
                  </pre>
                </div>
              )}
            </div>

            {/* WHATSAPP AND EMAIL ACTION BUTTONS */}
            <div className="pt-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Send via WhatsApp Button (Green #36A43B) */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-white flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg active:scale-[0.99] ${
                    hasWhatsApp
                      ? "bg-[#36A43B] hover:bg-[#2b8630] shadow-emerald-600/20"
                      : "bg-[#36A43B]/80 hover:bg-[#36A43B] shadow-emerald-600/10"
                  }`}
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Send via WhatsApp</span>
                </button>

                {/* 2. Send via Email Button (Navy #141B29 / Blue #0879D1) */}
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-white flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg active:scale-[0.99] ${
                    hasEmail
                      ? "bg-[#141B29] hover:bg-[#1f293d] shadow-slate-900/20"
                      : "bg-[#141B29]/90 hover:bg-[#141B29] shadow-slate-900/10"
                  }`}
                >
                  <RealEmailIcon className="w-5 h-5 shrink-0" />
                  <span>Send via Email</span>
                </button>
              </div>

              {/* Utility / Helper Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#36A43B]" />
                        <span>Enquiry Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Formatted Requirement</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 font-medium transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Form</span>
                  </button>
                </div>

                <div className="text-slate-400 text-[11px] text-center sm:text-right">
                  Client-side formatted • Aapko WhatsApp/Email par Send press karna hoga
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
