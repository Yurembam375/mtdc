"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  Download,
  Search,
  FileCheck,
  BookOpen,
  Calendar,
  AlertCircle,
  Shield,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

interface DocumentItem {
  id: string;
  category: "tenders" | "circulars" | "reports" | "rti" | "forms";
  title: string;
  refNo: string;
  date: string;
  closingDate?: string;
  fileSize: string;
  status: "Active" | "Corrigendum" | "Archived" | "Public";
  href: string;
}

const DOCUMENTS: DocumentItem[] = [
  {
    id: "d1",
    category: "tenders",
    title: "Expression of Interest (EoI) for empanelment of architectural & structural consultants (2026-27)",
    refNo: "MTDC/ENGG/2026/EoI-01",
    date: "14 Sep, 2026",
    closingDate: "15 Oct, 2026",
    fileSize: "1.2 MB",
    status: "Active",
    href: "#",
  },
  {
    id: "d2",
    category: "tenders",
    title: "Recruitment Notice: Assistant Project Engineers (Civil & Electrical) on contract basis",
    refNo: "MTDC/ESTT/REC/2026/08",
    date: "10 Sep, 2026",
    closingDate: "30 Sep, 2026",
    fileSize: "480 KB",
    status: "Active",
    href: "#",
  },
  {
    id: "d3",
    category: "tenders",
    title: "Guidelines for Submission of Community Livelihood Project Proposals under HADP",
    refNo: "MTDC/HADP/GUIDE/2026/02",
    date: "08 Sep, 2026",
    closingDate: "20 Oct, 2026",
    fileSize: "850 KB",
    status: "Active",
    href: "#",
  },
  {
    id: "d4",
    category: "tenders",
    title: "Corrigendum to Tender Notice No. MTDC/ENGG/2026/04 for Water Reservoir Schemes",
    refNo: "MTDC/ENGG/2026/04-CORR",
    date: "02 Sep, 2026",
    closingDate: "25 Sep, 2026",
    fileSize: "340 KB",
    status: "Corrigendum",
    href: "#",
  },
  {
    id: "d5",
    category: "circulars",
    title: "Office Memorandum regarding Revised Schedule of Rates (SOR) for Hill Road Excavations",
    refNo: "MTDC/TECH/SOR/2026/19",
    date: "28 Aug, 2026",
    fileSize: "2.1 MB",
    status: "Public",
    href: "#",
  },
  {
    id: "d6",
    category: "circulars",
    title: "Notification of District-wise Nodal Engineers for Disaster Contingency Management",
    refNo: "MTDC/ADMN/DISASTER/2026/03",
    date: "15 Aug, 2026",
    fileSize: "510 KB",
    status: "Public",
    href: "#",
  },
  {
    id: "d7",
    category: "reports",
    title: "MTDC Annual Administrative & Financial Progress Report (FY 2024–25)",
    refNo: "MTDC/ACCTS/AR/2025",
    date: "10 Jul, 2026",
    fileSize: "4.8 MB",
    status: "Archived",
    href: "#",
  },
  {
    id: "d8",
    category: "rti",
    title: "Proactive Disclosures under Section 4(1)(b) of the Right to Information Act, 2005",
    refNo: "MTDC/RTI/SEC4/2026",
    date: "01 Apr, 2026",
    fileSize: "1.6 MB",
    status: "Public",
    href: "#",
  },
  {
    id: "d9",
    category: "forms",
    title: "Contractor Registration & Enrolment Application Form (Class I, II, and III)",
    refNo: "FORM-MTDC-CONTR-01",
    date: "01 Jan, 2026",
    fileSize: "720 KB",
    status: "Public",
    href: "#",
  },
];

const TABS = [
  { id: "all", label: "All Documents" },
  { id: "tenders", label: "Tenders & Bids" },
  { id: "circulars", label: "Circulars & Gazettes" },
  { id: "reports", label: "Annual Reports" },
  { id: "rti", label: "RTI & Disclosures" },
  { id: "forms", label: "Application Forms" },
];

function ResourcesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [selectedTab, setSelectedTab] = useState(tabParam || "all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) {
      setSelectedTab(tabParam);
    }
  }, [tabParam]);

  const filteredDocs = DOCUMENTS.filter((doc) => {
    const matchesTab = selectedTab === "all" || doc.category === selectedTab;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.refNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="DOCUMENT REPOSITORY"
        title="Public Resources, Tenders &amp; Downloads"
        description="Official document clearinghouse of MTDC: Notice Inviting Tenders (NIT), Expression of Interest (EoI), circulars, audited annual reports, and RTI proactive disclosures."
        breadcrumbs={[{ label: "Resources" }]}
      />

      {/* 2. Main Document Repository Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Controls Bar */}
          <div className="bg-white border border-[#D9DEE2] rounded-lg p-4 sm:p-5 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded text-[12px] font-medium transition-all shrink-0 cursor-pointer ${
                    selectedTab === tab.id
                      ? "bg-[#061D2B] text-white font-semibold"
                      : "bg-[#F6F7F5] text-gray-600 hover:bg-gray-200/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by tender title or ref no..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#F6F7F5] border border-[#D9DEE2] rounded text-[12.5px] font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
              />
            </div>
          </div>

          {/* Document Table / List */}
          <div className="bg-white border border-[#D9DEE2] rounded-lg shadow-xs overflow-hidden">
            <div className="px-6 py-4 border-b border-[#D9DEE2] bg-[#F9FAFB] flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#102B3C] font-ibm-mono uppercase tracking-wider">
                Showing {filteredDocs.length} Documents
              </span>
              <span className="text-[11px] text-gray-500 font-ibm-mono hidden sm:inline">
                National E-Procurement Portal Compliant
              </span>
            </div>

            {filteredDocs.length === 0 ? (
              <div className="p-12 text-center">
                <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 font-ibm-sans text-sm">
                  No documents found matching the search criteria.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-[#D9DEE2]/70">
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFB] transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold font-ibm-mono uppercase tracking-wider border ${
                            doc.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : doc.status === "Corrigendum"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {doc.status}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">
                          {doc.refNo}
                        </span>
                      </div>

                      <h3 className="font-bold text-[#102B3C] text-[14.5px] sm:text-[15px] font-manrope leading-snug hover:text-[#D85C3A] cursor-pointer">
                        {doc.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-4 text-[11px] font-ibm-mono text-gray-500 flex-wrap">
                        <span className="flex items-center gap-1 text-[#D85C3A] font-semibold">
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF • {doc.fileSize}</span>
                        </span>
                        <span>Published: {doc.date}</span>
                        {doc.closingDate && (
                          <span className="text-amber-800 font-medium">
                            Closing: {doc.closingDate}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <Link
                        href={doc.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white border border-[#D9DEE2] hover:border-[#D85C3A] text-xs font-semibold text-[#102B3C] hover:text-[#D85C3A] transition-all font-ibm-sans shadow-2xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. RTI & Citizen Charter Summary Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* RTI Card */}
            <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#102B3C] text-[15px] font-manrope">
                    Right to Information (RTI) Cell
                  </h4>
                  <p className="text-[11px] text-gray-400 font-ibm-mono">
                    Mandatory Section 4(1)(b) Compliance
                  </p>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-600 font-ibm-sans leading-relaxed">
                Citizens can file RTI applications concerning MTDC project sanctions, contractor bill payments, and administrative decisions directly to the State Public Information Officer (SPIO), MTDC Administrative Office, Lamphelpat.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs font-ibm-sans">
                <span className="text-gray-500 font-ibm-mono text-[11px] sm:text-xs">Statutory Fee: ₹10 (IPO/DD)</span>
                <Link
                  href="/contact"
                  className="font-semibold text-[#D85C3A] hover:text-[#C04E2E] inline-flex items-center gap-1 shrink-0 whitespace-nowrap group transition-colors"
                >
                  <span className="group-hover:underline">Contact SPIO</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Citizen Charter Card */}
            <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[#102B3C] text-[15px] font-manrope">
                    Citizen Charter &amp; Service Standards
                  </h4>
                  <p className="text-[11px] text-gray-400 font-ibm-mono">
                    Service Delivery Guarantee
                  </p>
                </div>
              </div>
              <p className="text-[12.5px] text-gray-600 font-ibm-sans leading-relaxed">
                Outlining guaranteed timeframes for contractor security refunds, public grievance redressals, technical sanction approvals, and tender document issuance in conformity with Manipur public service norms.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs font-ibm-sans">
                <span className="text-gray-500 font-ibm-mono text-[11px] sm:text-xs">Grievance SLA: 15 Working Days</span>
                <Link
                  href="#grievance"
                  className="font-semibold text-[#D85C3A] hover:text-[#C04E2E] inline-flex items-center gap-1 shrink-0 whitespace-nowrap group transition-colors"
                >
                  <span className="group-hover:underline">View Charter</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F6F7F5] min-h-screen py-24 text-center font-ibm-sans text-gray-500 flex items-center justify-center">
          <div className="animate-pulse flex items-center gap-2 text-sm text-[#102B3C] font-medium">
            <span>Loading Resources...</span>
          </div>
        </div>
      }
    >
      <ResourcesContent />
    </Suspense>
  );
}
