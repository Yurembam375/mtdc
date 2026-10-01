"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Calendar, MapPin, ArrowRight, Eye, Play, FileText, Download } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "All-weather Hill Road Construction & Slope Stabilization",
    district: "Senapati District",
    category: "roads",
    date: "18 Sep, 2026",
    geoTag: "Geo-tag: 25.26° N, 94.01° E",
    image: "/assets/media-road.jpg",
    caption:
      "Reinforced concrete retaining wall and asphalt blacktopping on arterial hill highway connecting remote habitations.",
  },
  {
    id: "g2",
    title: "Women SHG Handloom & Craft Training Facility",
    district: "Kangpokpi District",
    category: "livelihood",
    date: "14 Sep, 2026",
    geoTag: "Geo-tag: 24.98° N, 93.92° E",
    image: "/assets/media-handloom.jpg",
    caption:
      "Women artisans operating fly-shuttle frame looms in the naturally ventilated tribal craft training hall.",
  },
  {
    id: "g3",
    title: "Gravity-feed Village Water Reservoir System",
    district: "Chandel District",
    category: "water",
    date: "09 Sep, 2026",
    geoTag: "Geo-tag: 24.32° N, 94.01° E",
    image: "/assets/media-reservoir.jpg",
    caption:
      "High-ridge spring catchment treatment plant and dual storage tanks providing continuous clean drinking water.",
  },
  {
    id: "g4",
    title: "Community Resource Centre & Digital Library",
    district: "Churachandpur District",
    category: "community",
    date: "02 Sep, 2026",
    geoTag: "Geo-tag: 24.33° N, 93.68° E",
    image: "/assets/project-crc.jpg",
    caption:
      "Solar-powered multi-purpose civic building completed and handed over to the local community development committee.",
  },
  {
    id: "g5",
    title: "Integrated Livelihood Post-Harvest Complex",
    district: "Tamenglong District",
    category: "livelihood",
    date: "26 Aug, 2026",
    geoTag: "Geo-tag: 24.98° N, 93.49° E",
    image: "/assets/project-livelihood.jpg",
    caption:
      "Farmers Producer Organization grading, packing, and cold-store facility for organic mountain produce.",
  },
  {
    id: "g6",
    title: "Administrative Headquarters & Operational Wing",
    district: "Imphal West",
    category: "administration",
    date: "15 Aug, 2026",
    geoTag: "Lamphelpat-795004",
    image: "/assets/hero-bg.jpg",
    caption:
      "Main administrative office and engineering planning directorate of Manipur Tribal Development Corporation Limited.",
  },
];

const PRESS_RELEASES = [
  {
    title: "MTDC Concludes Annual District Review Meeting for HADP Hill Schemes (2026–27)",
    date: "18 Sep, 2026",
    fileSize: "680 KB",
    href: "#",
  },
  {
    title: "Sanction of 14 New Village Gravity Water Supply Works in Chandel and Tengnoupal",
    date: "11 Sep, 2026",
    fileSize: "520 KB",
    href: "#",
  },
  {
    title: "Empanelment of Quality Audit Engineering Consultants for Hill District Infrastructure",
    date: "03 Sep, 2026",
    fileSize: "1.1 MB",
    href: "#",
  },
];

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="FIELD DOCUMENTATION"
        title="MTDC Media &amp; Field Documentation Archive"
        description="Documenting field progress, infrastructure handovers, community interactions, and press notifications across all hill districts of Manipur."
        breadcrumbs={[{ label: "Media" }]}
      />

      {/* 2. Photo Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                  VISUAL ARCHIVE
                </span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
                Field Documentation Gallery
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { id: "all", label: "All Media" },
                { id: "roads", label: "Roads & Highways" },
                { id: "livelihood", label: "Livelihood & SHG" },
                { id: "water", label: "Water Schemes" },
                { id: "community", label: "Community Centres" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded text-[11.5px] font-medium transition-all shrink-0 cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-[#061D2B] text-white font-semibold"
                      : "bg-white border border-[#D9DEE2] text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#D9DEE2] rounded-lg overflow-hidden shadow-xs hover:border-[#D85C3A]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-52 sm:h-56 bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061D2B]/90 via-[#061D2B]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Geotag badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-[2px] bg-black/80 backdrop-blur-xs text-white text-[9px] font-ibm-mono font-medium">
                        {item.geoTag}
                      </span>
                    </div>

                    {/* District Bottom Overlay */}
                    <div className="absolute bottom-2.5 left-3 z-10">
                      <span className="text-[10px] font-bold text-[#D85C3A] font-ibm-mono tracking-wider uppercase block">
                        {item.district}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-ibm-mono mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-bold text-[#102B3C] text-[15.5px] font-manrope leading-snug group-hover:text-[#D85C3A] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] text-gray-500 font-ibm-sans leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Press Releases & Circulars */}
      <section className="py-12 bg-white border-t border-[#D9DEE2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              OFFICIAL COMMUNICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              Press Releases &amp; Media Statements
            </h2>
            <p className="mt-2 text-[13.5px] text-gray-500 font-ibm-sans">
              Official press notes, public briefings, and media declarations published by MTDC.
            </p>
          </div>

          <div className="space-y-3.5">
            {PRESS_RELEASES.map((pr) => (
              <div
                key={pr.title}
                className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D85C3A]/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-white border border-[#D9DEE2] flex items-center justify-center shrink-0 mt-0.5 text-[#D85C3A]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102B3C] text-[14px] font-manrope leading-snug hover:text-[#D85C3A] cursor-pointer">
                      {pr.title}
                    </h4>
                    <div className="mt-1 flex items-center gap-3 text-[11px] font-ibm-mono text-gray-500">
                      <span>{pr.date}</span>
                      <span>•</span>
                      <span className="text-[#D85C3A]">PDF • {pr.fileSize}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={pr.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-[#D9DEE2] text-xs font-semibold text-[#102B3C] hover:text-[#D85C3A] hover:border-[#D85C3A] transition-colors shrink-0 font-ibm-sans"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
