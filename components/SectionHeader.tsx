import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  actionText,
  actionHref,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 ${
        centered ? "text-center items-center" : ""
      }`}
    >
      <div className={centered ? "max-w-xl mx-auto" : "max-w-2xl"}>
        <div className="flex items-center gap-1.5 mb-1.5 justify-start">
          <span className="text-[#D85C3A] text-xs font-bold leading-none">—</span>
          <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#D85C3A]">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#102B3C] tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-xs sm:text-[13px] text-[#687783] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors group self-start md:self-end shrink-0"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}
