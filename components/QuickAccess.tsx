import React from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  Bell,
  Boxes,
  Folder,
  Contact,
  ArrowRight,
} from "lucide-react";

const QUICK_ACCESS_ITEMS = [
  {
    title: "Tenders",
    description: "Current active notices & bids",
    href: "/resources?tab=tenders",
    icon: ClipboardCheck,
    hasArrow: true,
  },
  {
    title: "Notices",
    description: "Official circulars & gazettes",
    href: "/resources?tab=circulars",
    icon: Bell,
    hasArrow: true,
  },
  {
    title: "Projects",
    description: "Ongoing & physical schemes",
    href: "/projects",
    icon: Boxes,
    hasArrow: true,
  },
  {
    title: "Downloads",
    description: "Forms, DPR guidelines & audits",
    href: "/resources",
    icon: Folder,
    hasArrow: true,
  },
  {
    title: "Contact MTDC",
    description: "District nodal engineers desk",
    href: "/contact",
    icon: Contact,
    hasArrow: true,
  },
];

export default function QuickAccess() {
  return (
    <section id="quick-access" className="py-8 sm:py-10 bg-[#F6F7F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
              PUBLIC PORTAL NAVIGATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight">
            Quick Access
          </h2>
          <p className="mt-1 text-[13px] sm:text-[14px] text-gray-500 font-ibm-sans">
            Direct access to public services, tenders, and official administrative documents.
          </p>
        </div>

        {/* 5 Cards Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {QUICK_ACCESS_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobile = index === 4;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group bg-white border border-[#D9DEE2] rounded-lg p-3.5 sm:p-5 flex flex-col justify-between hover:border-[#D85C3A]/60 hover:shadow-xs transition-all duration-200 min-h-[120px] sm:min-h-[145px] ${
                  isLastOnMobile ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded bg-[#F0F4F7] flex items-center justify-center text-[#102B3C] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  {item.hasArrow && (
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#102B3C] group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
                <div className="mt-3 sm:mt-5">
                  <h3 className="font-bold text-[#102B3C] text-[13px] sm:text-[14px] group-hover:text-[#D85C3A] transition-colors leading-tight font-manrope">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10.5px] sm:text-[11px] text-gray-500 leading-snug font-ibm-sans">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
