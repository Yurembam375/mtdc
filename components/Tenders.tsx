"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileText, X, Calendar, Download, ShieldCheck, Clock } from "lucide-react";

interface TenderItem {
  id: string;
  refNo: string;
  title: string;
  fileSize: string;
  date: string;
  closingDate: string;
  status: "Active" | "Corrigendum";
  description: string;
}

const TENDERS: TenderItem[] = [
  {
    id: "t1",
    refNo: "MTDC/ENGG/2026/EoI-01",
    title:
      "Expression of Interest (EoI) for empanelment of architectural & structural consultants (2026-27)",
    fileSize: "1.2 MB",
    date: "14 Sep 2026",
    closingDate: "15 Oct 2026 (15:00 hrs)",
    status: "Active",
    description:
      "Inviting eligible registered architectural firms and structural design consultants with minimum 5 years hill-terrain experience for empanelment across MTDC civic infrastructure works.",
  },
  {
    id: "t2",
    refNo: "MTDC/ESTT/REC/2026/08",
    title:
      "Recruitment Notice: Assistant Project Engineers (Civil & Electrical) on contract basis",
    fileSize: "480 KB",
    date: "10 Sep 2026",
    closingDate: "30 Sep 2026 (17:00 hrs)",
    status: "Active",
    description:
      "Engagement of dynamic degree/diploma holders in Civil and Electrical engineering for field site supervision across district development divisions.",
  },
  {
    id: "t3",
    refNo: "MTDC/HADP/GUIDE/2026/02",
    title:
      "Guidelines for Submission of Community Livelihood Project Proposals under HADP",
    fileSize: "850 KB",
    date: "08 Sep 2026",
    closingDate: "20 Oct 2026 (17:00 hrs)",
    status: "Active",
    description:
      "Comprehensive DPR guidelines, eligibility criteria, and financial sanction ceilings for community councils, SHG federations, and village development committees.",
  },
  {
    id: "t4",
    refNo: "MTDC/ENGG/2026/04-CORR",
    title:
      "Corrigendum to Tender Notice No. MTDC/ENGG/2026/04 for Water Reservoir Schemes",
    fileSize: "340 KB",
    date: "02 Sep 2026",
    closingDate: "25 Sep 2026 (14:00 hrs)",
    status: "Corrigendum",
    description:
      "Addendum regarding revised technical specifications for high-density polyethylene (HDPE) pipeline fittings and site handover timelines in Chandel district.",
  },
];

export default function Tenders() {
  const [selectedTender, setSelectedTender] = useState<TenderItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTender(null);
      }
    };
    if (selectedTender) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedTender]);

  return (
    <>
      <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-7 shadow-xs h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              TENDERS &amp; PROCUREMENTS
            </span>
            <h3 className="text-xl sm:text-[24px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-tight">
              Tenders
            </h3>
          </div>
          <Link
            href="/resources?tab=tenders"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors font-ibm-sans group cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Tender List */}
        <div className="flex-1 flex flex-col justify-between divide-y divide-[#D9DEE2]/60">
          {TENDERS.map((tender, index) => (
            <div
              key={tender.id}
              className={`group flex flex-col justify-center cursor-pointer ${
                index === 0 ? "pb-4" : index === TENDERS.length - 1 ? "pt-4" : "py-4"
              }`}
              onClick={() => setSelectedTender(tender)}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[14px] sm:text-[14.5px] font-bold text-[#102B3C] font-manrope group-hover:text-[#D85C3A] transition-colors leading-snug">
                  {tender.title}
                </span>
              </div>

              {/* Meta row */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-ibm-mono">
                <div className="flex items-center gap-1.5 text-[#D85C3A]">
                  <FileText className="w-3.5 h-3.5 text-[#D85C3A] shrink-0" />
                  <span>PDF • {tender.fileSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-normal">{tender.date}</span>
                  <span className="text-[#D85C3A] font-semibold group-hover:underline text-[11px] whitespace-nowrap">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tender Details Modal */}
      {selectedTender && (
        <div
          className="fixed inset-0 z-50 bg-[#061D2B]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setSelectedTender(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tender-modal-title"
        >
          <div
            className="bg-white rounded-lg border border-[#D9DEE2] max-w-3xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#061D2B] text-white px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-[#102B3C]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#D85C3A]" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-ibm-mono text-gray-300">
                    MTDC NOTICE INVITING TENDER / PROCUREMENT
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-300 font-ibm-mono">
                  <span>Ref: {selectedTender.refNo}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTender(null)}
                className="text-gray-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Close tender details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-5 py-4 sm:px-6 sm:py-4.5 space-y-3">
              {/* Status and Document format */}
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded text-[10.5px] font-semibold font-ibm-mono border ${
                    selectedTender.status === "Corrigendum"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-emerald-50 text-emerald-800 border-emerald-200"
                  }`}
                >
                  {selectedTender.status}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#F0F4F7] text-[#102B3C] text-[10.5px] font-medium font-ibm-mono">
                  Document Size: {selectedTender.fileSize}
                </span>
              </div>

              {/* Title */}
              <h3
                id="tender-modal-title"
                className="text-lg sm:text-[20px] font-extrabold text-[#102B3C] font-manrope leading-snug"
              >
                {selectedTender.title}
              </h3>

              {/* Summary Description */}
              <p className="text-[12.5px] sm:text-[13px] text-gray-700 font-ibm-sans leading-relaxed">
                {selectedTender.description}
              </p>

              {/* Timeline Box */}
              <div className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#D85C3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-gray-400 font-ibm-mono block">
                      PUBLISHED DATE
                    </span>
                    <span className="text-[12.5px] font-bold text-[#102B3C] font-ibm-sans">
                      {selectedTender.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D85C3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-gray-400 font-ibm-mono block">
                      SUBMISSION DEADLINE
                    </span>
                    <span className="text-[12.5px] font-bold text-[#D85C3A] font-ibm-sans">
                      {selectedTender.closingDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guidelines Note */}
              <div className="flex items-start gap-2 text-[11.5px] text-gray-500 font-ibm-sans bg-amber-50/50 border border-amber-200/50 p-2.5 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Bidders must submit bids through the state e-procurement portal or submit sealed physical tenders at the MTDC Imphal office prior to the closing deadline.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 sm:px-6 sm:py-3 bg-[#F9FAFB] border-t border-[#D9DEE2] flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <Link
                href="/resources?tab=tenders"
                onClick={() => setSelectedTender(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-[12px] font-semibold text-white bg-[#D85C3A] hover:bg-[#C04E2E] rounded transition-colors font-ibm-sans"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open in Resources &amp; Downloads</span>
              </Link>
              <button
                type="button"
                onClick={() => setSelectedTender(null)}
                className="w-full sm:w-auto px-4 py-1.5 text-[12px] font-medium text-gray-700 bg-white border border-[#D9DEE2] hover:bg-gray-50 rounded transition-colors font-ibm-sans cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
