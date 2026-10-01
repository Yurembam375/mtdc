import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutMTDC() {
  return (
    <section id="about" className="py-10 sm:py-12 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                  ABOUT MTDC
                </span>
              </div>

              <h2 className="text-2xl sm:text-[28px] lg:text-[30px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
                Supporting development across Manipur
              </h2>

              <p className="mt-4 text-[13.5px] sm:text-[14px] text-[#102B3C] leading-relaxed font-normal font-ibm-sans">
                Manipur Tribal Development Corporation Limited (MTDC) is a Government of Manipur
                undertaking established to support the development and welfare of Scheduled Tribes
                and other communities through development-oriented initiatives across the state.
              </p>

              <p className="mt-3 text-[12.5px] sm:text-[13px] text-gray-500 leading-relaxed font-ibm-sans">
                Its areas of work encompass infrastructure, agriculture, housing, education,
                healthcare, trade, fisheries, animal husbandry, irrigation, water supply, forestry,
                arts and culture, and other areas of community and economic development.
              </p>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors font-ibm-sans group cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Information Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#D9DEE2] rounded-lg p-5 sm:p-6 shadow-xs">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#061D2B] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#102B3C] text-[15px] leading-tight font-manrope">
                      Statutory Corporation
                    </h3>
                    <p className="text-[10.5px] text-gray-400 font-medium font-ibm-mono leading-none mt-1 uppercase tracking-wider">
                      CIN: U45201MN1974SGC001607
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-[#D9DEE2]/60 my-4" />

                {/* Metadata Box */}
                <div className="bg-[#F0F4F7] rounded-md p-3 grid grid-cols-2 divide-x divide-[#D9DEE2]">
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block font-ibm-mono">
                      INCORPORATION
                    </span>
                    <span className="text-[13px] font-bold text-[#102B3C] mt-0.5 block font-ibm-mono">
                      Est. 1979
                    </span>
                  </div>

                  <div className="pl-3.5">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block font-ibm-mono">
                      JURISDICTION
                    </span>
                    <span className="text-[12px] font-bold text-[#D85C3A] mt-0.5 block font-ibm-mono">
                      All Hill & Valley
                    </span>
                  </div>
                </div>

                {/* Supporting Text */}
                <p className="mt-4 text-[11.5px] sm:text-[12px] text-gray-500 font-ibm-sans leading-relaxed">
                  Operating under the Department of Tribal Affairs & Hills, the corporation acts as
                  an engineering execution arm for comprehensive tribal transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
