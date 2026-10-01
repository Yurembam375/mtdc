import React from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label?: string;
  subLabel?: string;
  highlightLabel?: boolean;
}

export default function StatItem({
  icon,
  value,
  label,
  subLabel,
  highlightLabel,
}: StatItemProps) {
  return (
    <div className="flex items-center gap-3 py-2 px-3 sm:px-4">
      <div className="w-8 h-8 rounded bg-[#D85C3A]/25 border border-[#D85C3A]/40 flex items-center justify-center shrink-0 text-[#D85C3A]">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-xl sm:text-[22px] font-black text-white tracking-tight leading-none">
            {value}
          </span>
          {label && (
            <span
              className={`text-[10px] font-bold tracking-wider uppercase leading-none ${
                highlightLabel ? "text-[#D85C3A]" : "text-gray-200"
              }`}
            >
              {label}
            </span>
          )}
        </div>
        {subLabel && (
          <span className="text-[9px] font-semibold tracking-wider text-gray-300 uppercase mt-0.5 leading-tight">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
}
