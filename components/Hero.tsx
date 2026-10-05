import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Map, CreditCard, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#061D2B] overflow-hidden min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
      {/* Background Image with Gate and Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Manipur Tribal Development Corporation Entrance and Administrative Office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-center"
        />
        {/* Responsive Overlay: Deep navy on mobile for crystal clear readability, fading gradient on desktop */}
        <div className="absolute inset-0 bg-[#061D2B]/85 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#061D2B] sm:via-[#061D2B]/95 sm:via-40% md:via-[#061D2B]/85 sm:to-transparent z-10" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-14 w-full flex flex-col justify-between">
        <div className="max-w-2xl">

          {/* Main Heading with increased line gap */}
          <h1 className="text-white font-manrope font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-[38px] sm:leading-[46px] md:leading-[52px] lg:leading-[56px] tracking-tight sm:tracking-[-1.14px]">
            Building pathways to inclusive<br className="hidden sm:inline" /> development.
          </h1>

          {/* Description with relaxed line spacing */}
          <p className="mt-4 sm:mt-5 text-gray-200/95 max-w-xl font-ibm-sans font-normal text-[14px] sm:text-[16px] lg:text-[17.5px] leading-[25px] sm:leading-[27px] lg:leading-[30px]">
            Manipur Tribal Development Corporation Limited works towards supporting social
            and economic development across communities and sectors in Manipur.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
            <Link
              href="#quick-access"
              className="w-full sm:w-[215px] h-12 inline-flex items-center justify-center gap-2 rounded bg-[#D85C3A] hover:bg-[#C04E2E] text-white text-[13.5px] font-semibold tracking-wide transition-all shadow-sm group cursor-pointer font-ibm-sans text-center"
            >
              <span>Explore Public Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-[215px] h-12 inline-flex items-center justify-center gap-2 rounded bg-[#102B3C]/90 hover:bg-[#102B3C] border border-white/20 hover:border-white/40 text-white text-[13.5px] font-semibold tracking-wide transition-all backdrop-blur-xs group cursor-pointer font-ibm-sans text-center"
            >
              <span>About MTDC</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-8 sm:mt-12 lg:mt-14 pt-5 sm:pt-6 border-t border-white/15 max-w-3xl">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 bg-[#0A2232]/75 sm:bg-transparent border border-white/10 sm:border-0 rounded-md sm:rounded-none p-2 sm:p-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#102B3C]/90 border border-white/15 flex items-center justify-center shrink-0 text-[#D85C3A]">
                <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-[17px] sm:text-[24px] font-extrabold text-white leading-none font-manrope">
                    16
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#D85C3A] tracking-wider uppercase leading-none font-ibm-mono truncate">
                    DISTRICTS
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9.5px] font-medium text-gray-400 uppercase mt-0.5 sm:mt-1 leading-tight tracking-wider font-ibm-mono truncate">
                  COVERED
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 bg-[#0A2232]/75 sm:bg-transparent border border-white/10 sm:border-0 rounded-md sm:rounded-none p-2 sm:p-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#102B3C]/90 border border-white/15 flex items-center justify-center shrink-0 text-[#D85C3A]">
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-[17px] sm:text-[24px] font-extrabold text-white leading-none font-manrope">
                    ₹340+
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#D85C3A] tracking-wider uppercase leading-none font-ibm-mono">
                    CR
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9.5px] font-medium text-gray-400 uppercase mt-0.5 sm:mt-1 leading-tight tracking-wider font-ibm-mono truncate">
                  OUTLAY
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 bg-[#0A2232]/75 sm:bg-transparent border border-white/10 sm:border-0 rounded-md sm:rounded-none p-2 sm:p-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#102B3C]/90 border border-white/15 flex items-center justify-center shrink-0 text-[#D85C3A]">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-[17px] sm:text-[24px] font-extrabold text-white leading-none font-manrope">
                    100+
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9.5px] font-medium text-gray-400 uppercase mt-0.5 sm:mt-1 leading-tight tracking-wider font-ibm-mono truncate">
                  DELIVERED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
