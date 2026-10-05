"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GovernmentBar() {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [isReading, setIsReading] = useState<boolean>(false);

  const handleFontAdjust = (delta: number) => {
    const next = Math.max(-1, Math.min(1, delta === 0 ? 0 : fontSizeLevel + delta));
    setFontSizeLevel(next);
    if (typeof document !== "undefined") {
      if (next === 1) {
        document.documentElement.style.fontSize = "17px";
      } else if (next === -1) {
        document.documentElement.style.fontSize = "15px";
      } else {
        document.documentElement.style.fontSize = "16px";
      }
    }
  };

  const handleScreenReader = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isReading) {
        window.speechSynthesis.cancel();
        setIsReading(false);
      } else {
        const announcement =
          "Manipur Tribal Development Corporation Limited official portal. Building pathways to inclusive development across communities and sectors in Manipur.";
        const utterance = new SpeechSynthesisUtterance(announcement);
        utterance.rate = 0.95;
        utterance.onend = () => setIsReading(false);
        utterance.onerror = () => setIsReading(false);
        setIsReading(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <div className="bg-[#061D2B] text-white/90 border-b border-white/10 text-[11px] font-medium tracking-wide">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-7 flex items-center justify-between">
        {/* Left branding */}
        <div className="flex items-center gap-2 font-ibm-sans">
          <span className="font-semibold text-white tracking-wider text-[11px] uppercase">
            GOVERNMENT OF MANIPUR
          </span>
          <span className="text-white/30 text-[11px]">|</span>
          <span className="text-gray-300 text-[11px] hidden sm:inline font-normal">
            Department of Tribal Affairs & Hills
          </span>
        </div>

        {/* Right Accessibility utilities */}
        <div className="flex items-center gap-4 text-gray-300 font-ibm-sans">
          <button
            type="button"
            onClick={handleScreenReader}
            className={`flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-[11px] ${
              isReading ? "text-[#D85C3A] font-semibold" : ""
            }`}
            title={isReading ? "Stop Screen Reader" : "Activate Screen Reader (Text-to-Speech)"}
            aria-label="Screen Reader Access"
          >
            <div className="relative w-3.5 h-3.5 shrink-0 flex items-center justify-center">
              <Image
                src="/assets/Icon.png"
                alt="Accessibility Screen Reader Icon"
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain"
              />
            </div>
            <span className="hidden md:inline font-normal">
              {isReading ? "Reading..." : "Screen Reader"}
            </span>
          </button>

          {/* Font Resizer */}
          <div className="flex items-center gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => handleFontAdjust(-1)}
              className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${
                fontSizeLevel === -1 ? "text-[#D85C3A] font-bold" : "hover:text-white"
              }`}
              title="Decrease Font Size"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => handleFontAdjust(0)}
              className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${
                fontSizeLevel === 0 ? "text-[#D85C3A] font-bold" : "hover:text-white"
              }`}
              title="Reset Font Size"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => handleFontAdjust(1)}
              className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${
                fontSizeLevel === 1 ? "text-[#D85C3A] font-bold" : "hover:text-white"
              }`}
              title="Increase Font Size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
