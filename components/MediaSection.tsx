import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MediaSection() {
  return (
    <section id="media" className="py-10 sm:py-12 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                FIELD DOCUMENTATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
              MTDC in Action
            </h2>
            <p className="mt-1 text-[13.5px] sm:text-[14px] text-gray-500 font-ibm-sans">
              Documenting field progress, infrastructure handovers, and community engagements across hill tracts.
            </p>
          </div>

          <Link
            href="/media"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors font-ibm-sans shrink-0 group self-start sm:self-end"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Media Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Large Featured Media Card (7 cols) */}
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[420px] rounded-lg overflow-hidden border border-[#D9DEE2] group shadow-xs">
            <Image
              src="/assets/media-road.jpg"
              alt="All-weather Hill Road Construction & Slope Stabilization, Senapati"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D2B] via-[#061D2B]/60 to-transparent" />

            {/* Bottom Overlay Content */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10">
              <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                <span className="px-2 py-0.5 bg-[#D85C3A] text-white text-[9.5px] font-bold tracking-wider uppercase font-ibm-mono rounded-[2px]">
                  FEATURED INFRASTRUCTURE
                </span>
                <span className="text-[11px] text-gray-300 font-ibm-mono font-medium">
                  Geo-tag: 25.26° N, 94.01° E
                </span>
              </div>

              <h3 className="text-lg sm:text-[21px] lg:text-[22px] font-bold font-manrope text-white leading-snug tracking-tight">
                All-weather Hill Road Construction &amp; Slope Stabilization, Senapati
              </h3>

              <p className="mt-2 text-[12.5px] sm:text-[13px] text-gray-200/90 font-ibm-sans leading-relaxed max-w-xl">
                Concrete retaining walls and drainage corridors executed to prevent monsoon landslides
                and provide uninterrupted transport access to isolated ridge communities.
              </p>
            </div>
          </div>

          {/* Right Two Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Card 1: Handloom */}
            <div className="relative h-44 sm:h-48 lg:h-[198px] rounded-lg overflow-hidden border border-[#D9DEE2] group shadow-xs">
              <Image
                src="/assets/media-handloom.jpg"
                alt="Women SHG Handloom & Craft Training Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D2B] via-[#061D2B]/55 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
                <span className="text-[10px] font-bold text-[#D85C3A] font-ibm-mono tracking-wider uppercase block mb-1">
                  KANGPOKPI DISTRICT
                </span>
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white font-manrope leading-snug">
                  Women SHG Handloom &amp; Craft Training Facility
                </h4>
              </div>
            </div>

            {/* Card 2: Reservoir */}
            <div className="relative h-44 sm:h-48 lg:h-[198px] rounded-lg overflow-hidden border border-[#D9DEE2] group shadow-xs">
              <Image
                src="/assets/media-reservoir.jpg"
                alt="Gravity-feed Village Water Reservoir System"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D2B] via-[#061D2B]/55 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
                <span className="text-[10px] font-bold text-[#D85C3A] font-ibm-mono tracking-wider uppercase block mb-1">
                  CHANDEL DISTRICT
                </span>
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white font-manrope leading-snug">
                  Gravity-feed Village Water Reservoir System
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
