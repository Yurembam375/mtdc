"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  CheckCircle2,
  Users,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const DISTRICT_DIVISIONS = [
  {
    division: "Churachandpur & Pherzawl Division",
    engineer: "Executive Engineer (Civil)",
    office: "Sub-Divisional Engineering Office, Tuibong, Churachandpur",
    phone: "+91 3874 234120",
    email: "ee.ccpur@mtdc.mn.gov.in",
  },
  {
    division: "Ukhrul & Kamjong Division",
    engineer: "Executive Engineer (Civil)",
    office: "Mini Secretariat Complex, Viewland, Ukhrul - 795142",
    phone: "+91 3870 265214",
    email: "ee.ukhrul@mtdc.mn.gov.in",
  },
  {
    division: "Tamenglong & Noney Division",
    engineer: "Executive Engineer (Civil)",
    office: "District Engineering Wing, Old DC Office Road, Tamenglong",
    phone: "+91 3877 222180",
    email: "ee.tml@mtdc.mn.gov.in",
  },
  {
    division: "Senapati & Kangpokpi Division",
    engineer: "Executive Engineer (Civil)",
    office: "Executive Engineering Complex, National Highway 2, Senapati",
    phone: "+91 3871 222305",
    email: "ee.senapati@mtdc.mn.gov.in",
  },
  {
    division: "Chandel & Tengnoupal Division",
    engineer: "Executive Engineer (Civil)",
    office: "District Operations Cell, DC Office Complex, Chandel",
    phone: "+91 3872 261190",
    email: "ee.chandel@mtdc.mn.gov.in",
  },
];

const DISTRICTS_LIST = [
  "Bishnupur",
  "Chandel",
  "Churachandpur",
  "Imphal East",
  "Imphal West",
  "Jiribam",
  "Kakching",
  "Kamjong",
  "Kangpokpi",
  "Noney",
  "Pherzawl",
  "Senapati",
  "Tamenglong",
  "Tengnoupal",
  "Thoubal",
  "Ukhrul",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "Churachandpur",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact Administrative Headquarters &amp; District Wings"
        description="Connect with Manipur Tribal Development Corporation Limited headquarters in Lamphelpat, Imphal West, or reach out to our district nodal executive engineers."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* 2. Main Contact Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Headquarters Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 h-full">
              {/* HQ Card */}
              <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-7 shadow-xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                      HEADQUARTERS
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#102B3C] font-manrope leading-snug">
                    MTDC Administrative Office
                  </h2>
                  <p className="mt-1 text-[13px] text-gray-500 font-ibm-sans">
                    Department of Tribal Affairs &amp; Hills, Govt. of Manipur
                  </p>
                </div>

                <div className="mt-6 flex-1 flex flex-col justify-between gap-4 text-[13px] font-ibm-sans">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102B3C] block font-manrope">
                        Location &amp; Postal Address
                      </span>
                      <span className="text-gray-600 block mt-0.5 font-ibm-mono text-[11.5px]">
                        Lamphelpat, Imphal West, Manipur - 795004, India
                      </span>
                      <span className="text-[10.5px] text-gray-400 font-ibm-mono block mt-0.5">
                        CIN: U45201MN1974SGC001607
                      </span>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102B3C] block font-manrope">
                        Administrative PBX Phone
                      </span>
                      <span className="text-gray-600 block mt-0.5 font-ibm-mono text-[11.5px]">
                        +91 385 2414210 / 2414225
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102B3C] block font-manrope">
                        Official Correspondence Email
                      </span>
                      <span className="text-gray-600 block mt-0.5 font-ibm-mono text-[11.5px]">
                        contact@mtdc.mn.gov.in / mtdc.imphal@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102B3C] block font-manrope">
                        Working Hours
                      </span>
                      <span className="text-gray-600 block mt-0.5 font-ibm-mono text-[11.5px]">
                        Monday – Friday: 9:30 AM – 5:00 PM (IST)
                      </span>
                      <span className="text-[10.5px] text-gray-400 font-ibm-mono block">
                        Closed on Second Saturdays, Sundays &amp; State Gazetted Holidays
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Redressal Guarantee */}
              <div className="bg-[#061D2B] text-white rounded-lg p-6 shadow-xs border border-white/10 shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#D85C3A]" />
                  <span className="text-[11px] font-bold text-[#D85C3A] font-ibm-mono uppercase tracking-wider">
                    CITIZEN CHARTER COMMITMENT
                  </span>
                </div>
                <h4 className="text-[15px] font-bold font-manrope">
                  Public Grievance Redressal Mechanism
                </h4>
                <p className="mt-2 text-[12px] text-gray-300 font-ibm-sans leading-relaxed">
                  All grievances lodged through the public portal or postal dispatch are assigned a unique tracking acknowledgment and addressed within 15 working days by the designated nodal officer.
                </p>
              </div>
            </div>

            {/* Right Column: Public Inquiry / Grievance Form */}
            <div className="lg:col-span-7 bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                    ONLINE PUBLIC DESK
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
                  Submit an Inquiry or Grievance
                </h2>
                <p className="mt-1 text-[13px] text-gray-500 font-ibm-sans">
                  Please complete the form below. Your request will be directed to the concerned engineering division.
                </p>
              </div>

              {submitted ? (
                <div className="mt-8 p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300 flex-1 flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-emerald-900 font-manrope">
                    Grievance / Inquiry Received
                  </h3>
                  <p className="mt-1.5 text-xs text-emerald-700 font-ibm-sans max-w-md mx-auto">
                    Thank you, {formData.name}. Your submission has been registered with reference ID{" "}
                    <span className="font-mono font-bold">MTDC-GRV-2026-098</span>. Our nodal desk will follow up shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Thangminlun Haokip"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. citizen@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98620 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
                      />
                    </div>

                    {/* District */}
                    <div>
                      <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                        Concerned District *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
                      >
                        {DISTRICTS_LIST.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist} District
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                      Subject / Nature of Inquiry *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Inquiry regarding ongoing village road construction tender"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-xs font-bold text-[#102B3C] font-ibm-sans uppercase mb-1">
                      Message / Grievance Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please provide specific location, village name, and relevant project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[120px] px-3.5 py-2.5 rounded bg-[#F6F7F5] border border-[#D9DEE2] text-xs font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C] resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#D85C3A] hover:bg-[#C04E2E] text-white text-xs font-bold uppercase tracking-wider font-ibm-mono transition-all shadow-xs cursor-pointer"
                    >
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. District Nodal Engineers Directory */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#D9DEE2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              FIELD ENGINEERING DESK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              District Nodal Executive Engineers Directory
            </h2>
            <p className="mt-1.5 text-[13.5px] text-gray-500 font-ibm-sans">
              Stationed across division headquarters for localized supervision, contractor coordination, and community consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISTRICT_DIVISIONS.map((div) => (
              <div
                key={div.division}
                className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-5 flex flex-col justify-between hover:border-[#D85C3A]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#D85C3A] mb-2 font-ibm-mono text-[10px] font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>DIVISIONAL OFFICE</span>
                  </div>
                  <h4 className="font-bold text-[#102B3C] text-[15px] font-manrope">
                    {div.division}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-ibm-mono mt-0.5">
                    {div.engineer}
                  </p>
                  <p className="text-[12px] text-gray-600 font-ibm-sans mt-2.5 leading-relaxed">
                    {div.office}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#D9DEE2]/60 space-y-1.5 font-ibm-mono text-[11px]">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-3 h-3 text-[#D85C3A]" />
                    <span>{div.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-3 h-3 text-[#D85C3A]" />
                    <span className="truncate">{div.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
