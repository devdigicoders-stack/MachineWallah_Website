import React from "react";
import { Clock, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  RealPhoneCallingIcon,
  WhatsAppBadgeIcon,
  RealEmailIcon,
  RealMapPinIcon,
} from "@/components/ui/RealIcons";
import {
  BUSINESS_CONTACT,
  isPhoneConfigured,
  isWhatsAppConfigured,
  isEmailConfigured,
} from "@/config/contact";

export function ContactInfoCards() {
  const hasPhone = isPhoneConfigured();
  const hasWhatsApp = isWhatsAppConfigured();
  const hasEmail = isEmailConfigured();

  return (
    <section className="py-10 sm:py-14 bg-[#F2F8FF] border-b border-blue-100/60">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Phone Card */}
          <div className="bg-white rounded-2xl p-6 border border-blue-100/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0879D1] mb-4">
                <RealPhoneCallingIcon className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-base font-bold text-slate-900">Direct Calling</h2>
                {hasPhone ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Pending
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Urgent site requirement & direct fleet query
              </p>
              <div className="text-sm font-bold text-slate-800 break-all">
                {hasPhone ? (
                  <a
                    href={`tel:${BUSINESS_CONTACT.phoneNumber.replace(/[\s-]/g, "")}`}
                    className="text-[#0879D1] hover:underline inline-flex items-center gap-1"
                  >
                    {BUSINESS_CONTACT.phoneNumber}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-400 font-normal">
                    Helpline number being configured
                  </span>
                )}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{BUSINESS_CONTACT.businessHours}</span>
            </div>
          </div>

          {/* 2. WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#36A43B] mb-4">
                <WhatsAppBadgeIcon className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-base font-bold text-slate-900">WhatsApp Chat</h2>
                {hasWhatsApp ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Pending
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Machine photos, site locations & quick quotes
              </p>
              <div className="text-sm font-bold text-slate-800 break-all">
                {hasWhatsApp ? (
                  <a
                    href={`https://wa.me/${BUSINESS_CONTACT.whatsappNumber.replace(/[\s+-]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#36A43B] hover:underline inline-flex items-center gap-1"
                  >
                    +91 {BUSINESS_CONTACT.whatsappNumber}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-400 font-normal">
                    WhatsApp channel being configured
                  </span>
                )}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#36A43B] shrink-0" />
              <span>Direct Chat & Instant Enquiries</span>
            </div>
          </div>

          {/* 3. Email Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F4511E] mb-4">
                <RealEmailIcon className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-base font-bold text-slate-900">Email Inquiries</h2>
                {hasEmail ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Pending
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Formal RFPs, supplier registration & bulk deals
              </p>
              <div className="text-sm font-bold text-slate-800 break-all">
                {hasEmail ? (
                  <a
                    href={`mailto:${BUSINESS_CONTACT.enquiryEmail}`}
                    className="text-[#F4511E] hover:underline inline-flex items-center gap-1"
                  >
                    {BUSINESS_CONTACT.enquiryEmail}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-400 font-normal">
                    Official domain email being configured
                  </span>
                )}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#F4511E] shrink-0" />
              <span>Subject-Formatted Enquiries</span>
            </div>
          </div>

          {/* 4. Regional Coverage Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#141B29] mb-4">
                <RealMapPinIcon className="w-6 h-6 text-[#FFBE0B]" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-base font-bold text-slate-900">Regional Reach</h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Northern India Hubs & Transport Corridors
              </p>
              <div className="text-sm font-bold text-slate-800">
                Uttar Pradesh & Delhi NCR
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
              <span>PAN-India Equipment Transport</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
