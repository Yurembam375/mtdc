"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X, FileText, Calendar, Building, CheckCircle, ExternalLink } from "lucide-react";

interface UpdateItem {
  id: string;
  day: string;
  monthYear: string;
  tag: string;
  category: string;
  refNo: string;
  title: string;
  description: string;
  details: string;
  bullets: string[];
  authority: string;
}

const UPDATES: UpdateItem[] = [
  {
    id: "u1",
    day: "18",
    monthYear: "SEP 2026",
    tag: "Headquarters",
    category: "Administrative Review",
    refNo: "MTDC/ADMN/REV/2026/08",
    title: "MTDC conducts district-level development review meeting",
    description:
      "Comprehensive review of ongoing tribal infrastructure and connectivity works held at Imphal headquarters with district executive engineers and supervising consultants.",
    details:
      "A high-level comprehensive administrative review meeting was convened at the MTDC Headquarters, Imphal, chaired by the Managing Director with Executive Engineers, Assistant Project Engineers, and technical consultants representing all hill districts of Manipur.",
    bullets: [
      "Physical and financial progress review of 38 ongoing Hill Area Development Programme (HADP) infrastructure projects.",
      "Mandated strict pre-monsoon structural audits and slope stabilization measures for road connectivity corridors in Senapati and Ukhrul.",
      "Accelerated commissioning timelines for 14 drinking water gravity filtration schemes across Chandel and Tamenglong.",
      "Directive issued to expedite contractor bill clearance strictly within the guaranteed 15-day SLA timeline.",
    ],
    authority: "Office of the Managing Director, MTDC Imphal",
  },
  {
    id: "u2",
    day: "12",
    monthYear: "SEP 2026",
    tag: "Proposals",
    category: "Special Grants",
    refNo: "MTDC/HADP/GUIDE/2026/02",
    title: "Call for submission of project proposals",
    description:
      "Applications and detailed project proposals invited for upcoming community infrastructure and livelihood hubs under special hill area development grants for FY 2026-27.",
    details:
      "Notice is hereby given inviting Detailed Project Proposals (DPRs) and expressions from registered community councils, village development boards, and women self-help groups for upcoming grant assistance under the Hill Area Development Programme for FY 2026-27.",
    bullets: [
      "Eligible sectors: Multi-purpose community halls, agro-horticulture post-harvest units, solar drinking water installations, and rural connectivity bridges.",
      "Prescribed application templates and DPR guidelines are available under the Resources & Downloads repository.",
      "District Nodal Engineers available for technical consultation and DPR preparation assistance at respective district desks.",
      "Last date for proposal submission at MTDC Imphal Directorate: 20th October, 2026 (17:00 hrs).",
    ],
    authority: "Directorate of Planning & Execution, MTDC Limited",
  },
  {
    id: "u3",
    day: "05",
    monthYear: "SEP 2026",
    tag: "New Initiatives",
    category: "Decentralized Hubs",
    refNo: "MTDC/WELF/INIT/2026/14",
    title: "MTDC announces new community development initiative",
    description:
      "Sanction accord of 14 new development works with focus on women SHG infrastructure, farm roads, and solar drinking water installations.",
    details:
      "The Government of Manipur, Department of Tribal Affairs & Hills, has accorded administrative approval and expenditure sanction for 14 decentralized community infrastructure initiatives across hill districts.",
    bullets: [
      "Establishment of 5 modernized Women SHG Handloom & Craft Processing Centres equipped with ergonomic frame looms.",
      "Installation of 6 solar-powered gravity village water supply schemes in water-stressed tribal habitations.",
      "Construction of 3 all-weather farm link corridors enabling direct market access for remote indigenous produce.",
      "Total estimated outlay sanctioned: ₹18.75 Crores with a 12-month completion mandate.",
    ],
    authority: "Department of Tribal Affairs & Hills, Govt. of Manipur & MTDC",
  },
];

export default function LatestUpdates() {
  const [selectedUpdate, setSelectedUpdate] = useState<UpdateItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedUpdate(null);
      }
    };
    if (selectedUpdate) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedUpdate]);

  return (
    <>
      <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-7 shadow-xs h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              PRESS & NOTIFICATIONS
            </span>
            <h3 className="text-xl sm:text-[24px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-tight">
              Latest Updates
            </h3>
          </div>
          <Link
            href="/resources?tab=circulars"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors font-ibm-sans group cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Update List */}
        <div>
          {UPDATES.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-start gap-4">
                {/* Date Box */}
                <div className="shrink-0 w-13 h-13 sm:w-14 sm:h-14 bg-[#061D2B] text-white rounded-md text-center py-2 px-1 flex flex-col items-center justify-center">
                  <span className="text-[19px] sm:text-[21px] font-bold font-manrope leading-none">
                    {item.day}
                  </span>
                  <span className="text-[8.5px] font-medium tracking-wider text-gray-300 mt-1 uppercase font-ibm-mono leading-none">
                    {item.monthYear}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category & Tag */}
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-[#F0F4F7] text-gray-700 text-[10.5px] font-medium font-ibm-mono leading-none">
                      {item.tag}
                    </span>
                    <span className="text-gray-400 text-xs leading-none">•</span>
                    <span className="text-gray-500 text-[11.5px] font-normal font-ibm-sans">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    onClick={() => setSelectedUpdate(item)}
                    className="text-[14.5px] sm:text-[15px] font-bold text-[#102B3C] font-manrope hover:text-[#D85C3A] transition-colors leading-snug cursor-pointer"
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-1 text-[12px] sm:text-[12.5px] text-gray-500 font-ibm-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Action Link: Read More */}
                  <button
                    type="button"
                    onClick={() => setSelectedUpdate(item)}
                    className="mt-2 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#D85C3A] hover:underline font-ibm-sans cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {index < UPDATES.length - 1 && (
                <div className="border-b border-[#D9DEE2]/60 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Read More Official Notice Modal */}
      {selectedUpdate && (
        <div
          className="fixed inset-0 z-50 bg-[#061D2B]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setSelectedUpdate(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
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
                    MANIPUR TRIBAL DEVELOPMENT CORPORATION LIMITED
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-[11px] text-gray-300 font-ibm-mono">
                  <span>{selectedUpdate.refNo}</span>
                  <span>•</span>
                  <span>{selectedUpdate.day} {selectedUpdate.monthYear}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedUpdate(null)}
                className="text-gray-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-5 py-4 sm:px-6 sm:py-4.5 space-y-3">
              {/* Category & Tag */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded bg-[#F0F4F7] text-[#102B3C] text-[10.5px] font-semibold font-ibm-mono">
                  {selectedUpdate.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#D85C3A]/10 text-[#D85C3A] text-[10.5px] font-semibold font-ibm-mono">
                  {selectedUpdate.category}
                </span>
              </div>

              {/* Title */}
              <h3
                id="modal-title"
                className="text-lg sm:text-[20px] font-extrabold text-[#102B3C] font-manrope leading-snug"
              >
                {selectedUpdate.title}
              </h3>

              {/* Detailed Background Text */}
              <p className="text-[12.5px] sm:text-[13px] text-gray-700 font-ibm-sans leading-relaxed">
                {selectedUpdate.details}
              </p>

              {/* Bullet Key Points */}
              <div className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3">
                <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-[#102B3C] font-ibm-mono mb-2">
                  Key Resolutions &amp; Directives
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {selectedUpdate.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-gray-600 font-ibm-sans leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Issuing Authority */}
              <div className="pt-2 text-[11px] text-gray-500 font-ibm-mono border-t border-[#D9DEE2]/60">
                <span className="font-semibold text-gray-700">Issuing Authority:</span>{" "}
                {selectedUpdate.authority}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 sm:px-6 sm:py-3 bg-[#F9FAFB] border-t border-[#D9DEE2] flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <Link
                href="/resources?tab=circulars"
                onClick={() => setSelectedUpdate(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-[12px] font-medium text-[#102B3C] bg-white border border-[#D9DEE2] rounded hover:border-[#D85C3A] hover:text-[#D85C3A] transition-colors font-ibm-sans"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View All Official Circulars</span>
              </Link>
              <button
                type="button"
                onClick={() => setSelectedUpdate(null)}
                className="w-full sm:w-auto px-4 py-1.5 text-[12px] font-semibold text-white bg-[#061D2B] hover:bg-[#102B3C] rounded transition-colors font-ibm-sans cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
