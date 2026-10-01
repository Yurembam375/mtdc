import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Landmark,
  Users,
  Share2,
  Gavel,
  Globe,
} from "lucide-react";

interface GovLinkItem {
  title: string;
  url: string;
  displayUrl: string;
  icon: React.ElementType;
}

const GOV_LINKS: GovLinkItem[] = [
  {
    title: "Govt. of Manipur",
    url: "https://manipur.gov.in",
    displayUrl: "manipur.gov.in",
    icon: Landmark,
  },
  {
    title: "Dept. of Tribal Affairs",
    url: "https://tahmanipur.gov.in",
    displayUrl: "tahmanipur.gov.in",
    icon: Users,
  },
  {
    title: "State Citizen Portal",
    url: "https://serviceonline.gov.in",
    displayUrl: "serviceonline.gov.in",
    icon: Share2,
  },
  {
    title: "e-Procurement Portal",
    url: "https://manipurtenders.gov.in",
    displayUrl: "manipurtenders.gov.in",
    icon: Gavel,
  },
  {
    title: "Digital India",
    url: "https://digitalindia.gov.in",
    displayUrl: "digitalindia.gov.in",
    icon: Globe,
  },
];

export default function GovernmentLinks() {
  return (
    <section className="py-12 sm:py-14 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Left-Aligned Heading */}
        <div className="mb-6 sm:mb-8 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
              STATE &amp; CENTRAL NODAL PORTALS
            </span>
          </div>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
            Important Government Links
          </h2>
          <p className="mt-1 text-[13px] sm:text-[14px] text-gray-500 font-ibm-sans">
            Official government web directories, digital citizen portals, and procurement gateways.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {GOV_LINKS.map((link, index) => {
            const Icon = link.icon;
            const isLastOnMobile = index === 4;
            return (
              <Link
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white border border-[#D9DEE2] rounded-lg p-3.5 sm:p-5 flex flex-col justify-between hover:border-[#D85C3A]/60 hover:shadow-xs transition-all duration-200 min-h-[110px] sm:min-h-[115px] ${
                  isLastOnMobile ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#061D2B] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D85C3A] transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#102B3C] text-[12.5px] sm:text-[14px] font-manrope group-hover:text-[#D85C3A] transition-colors leading-tight">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-gray-400 font-ibm-mono leading-none truncate">
                    {link.displayUrl}
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
