import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative bg-[#061D2B] text-white border-b border-white/10 overflow-hidden py-10 sm:py-14">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061D2B] via-[#082536] to-[#04141E] z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D85C3A]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-ibm-mono text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-manrope tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-[13.5px] sm:text-[15px] text-gray-300 font-ibm-sans leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
