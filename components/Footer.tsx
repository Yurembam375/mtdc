import React from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "About MTDC", href: "/about" },
      { name: "Board & Leadership", href: "/about" },
      { name: "Development Areas", href: "/our-work" },
      { name: "District Projects", href: "/projects" },
      { name: "Photo & Press Gallery", href: "/media" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Active Tenders", href: "/resources?tab=tenders" },
      { name: "Archived Notices", href: "/resources?tab=circulars" },
      { name: "Annual Reports", href: "/resources?tab=reports" },
      { name: "Recruitment & Careers", href: "/resources?tab=tenders" },
      { name: "Citizen Charter", href: "/resources" },
    ],
  },
  {
    title: "PUBLIC SERVICE & RTI",
    links: [
      { name: "Right to Information (RTI)", href: "/resources?tab=rti" },
      { name: "PIO & Appellate Authority", href: "/resources?tab=rti" },
      { name: "Grievance Redressal", href: "/contact" },
      { name: "Helpline Directory", href: "/contact" },
      { name: "Feedback Form", href: "/contact" },
    ],
  },
  {
    title: "LEGAL & POLICIES",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Accessibility Statement", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Hyperlinking Policy", href: "#" },
      { name: "Website Disclaimer", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#061D2B] text-white mt-auto">
      {/* Main Footer Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/assets/mtdc-logo.png"
                  alt="MTDC Limited Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-white leading-tight font-manrope">
                  MTDC Limited
                </h3>
                <p className="text-[11px] text-gray-400 font-normal leading-tight mt-1 font-ibm-sans">
                  A Govt. of Manipur Undertaking
                </p>
              </div>
            </div>

            <p className="text-[12px] text-gray-400 leading-relaxed font-normal max-w-sm font-ibm-sans">
              Spearheading socio-economic growth, sustainable infrastructure, connectivity, and
              tribal community empowerment across the hill districts of Manipur.
            </p>

            <div className="mt-6 space-y-1 text-xs">
              <p className="font-bold text-white text-[11.5px] font-ibm-sans">Registered Office:</p>
              <p className="font-ibm-mono text-[11px] text-gray-400">
                Lamphelpat, Imphal West, Manipur - 795004, India
              </p>
              <p className="font-ibm-mono text-[11px] text-gray-400">
                CIN: U45201MN1974SGC001607
              </p>
            </div>
          </div>

          {/* Right 4 Navigation Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-bold tracking-wider text-white uppercase font-ibm-mono mb-3.5">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-[12px] font-ibm-sans">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors block py-0.5 leading-snug"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Divider & Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11.5px] text-gray-400 font-ibm-sans">
            © 2026 Manipur Tribal Development Corporation Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[12px] text-gray-400 font-ibm-sans">
              Website visitors:
            </span>
            <span className="text-[20px] font-bold text-white font-ibm-mono tracking-wide leading-none ml-1">
              24285
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
