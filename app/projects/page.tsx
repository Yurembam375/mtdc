"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, MapPin, ArrowRight, Layers, CheckCircle2, Clock, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";

const ALL_PROJECTS: (ProjectData & { category: string; outlay: string; completion: string })[] = [
  {
    id: "p1",
    imageSrc: "/assets/project-crc.jpg",
    badge: "COMMUNITY INFRASTRUCTURE",
    refCode: "Ref: MTDC-CCPUR-094",
    location: "Churachandpur District",
    title: "Community Resource Centre",
    description:
      "Multi-purpose community facility with training hall, women's self-help group workshop, and digital library for youth skill enablement.",
    status: "Completed • FY 2025-26",
    statusType: "completed",
    href: "#project-crc",
    category: "community",
    outlay: "₹2.85 Cr",
    completion: "100%",
  },
  {
    id: "p2",
    imageSrc: "/assets/project-road.jpg",
    badge: "INFRASTRUCTURE & CONNECTIVITY",
    refCode: "Ref: MTDC-UKH-112",
    location: "Ukhrul District",
    title: "Rural Connectivity Initiative",
    description:
      "Construction of all-weather bituminous road and retaining drainage systems connecting 8 remote village habitations across hill terrains.",
    status: "Phase II In Progress",
    statusType: "progress",
    href: "#project-road",
    category: "roads",
    outlay: "₹14.20 Cr",
    completion: "68%",
  },
  {
    id: "p3",
    imageSrc: "/assets/project-livelihood.jpg",
    badge: "LIVELIHOOD DEVELOPMENT",
    refCode: "Ref: MTDC-TML-078",
    location: "Tamenglong District",
    title: "Integrated Livelihood Centre",
    description:
      "Post-harvest processing unit and cold-chain facility for indigenous horticulture, organic citrus, and agro-forestry produce.",
    status: "Execution Phase",
    statusType: "execution",
    href: "#project-livelihood",
    category: "livelihood",
    outlay: "₹4.60 Cr",
    completion: "42%",
  },
  {
    id: "p4",
    imageSrc: "/assets/media-road.jpg",
    badge: "INFRASTRUCTURE & CONNECTIVITY",
    refCode: "Ref: MTDC-SEN-204",
    location: "Senapati District",
    title: "Hill Road & Slope Stabilization, Senapati",
    description:
      "Heavy hillside retaining structures, RCC culvert installation, and 18.5 km blacktopped link connecting interior agricultural clusters.",
    status: "Completed • FY 2025-26",
    statusType: "completed",
    href: "#project-senapati",
    category: "roads",
    outlay: "₹18.45 Cr",
    completion: "100%",
  },
  {
    id: "p5",
    imageSrc: "/assets/media-handloom.jpg",
    badge: "WOMEN EMPOWERMENT",
    refCode: "Ref: MTDC-KPK-042",
    location: "Kangpokpi District",
    title: "Women SHG Handloom & Craft Training Facility",
    description:
      "Modernized weaving shed with 40 fly-shuttle frame looms, natural yarn processing area, and tribal handicraft design development lab.",
    status: "Completed • FY 2025-26",
    statusType: "completed",
    href: "#project-kangpokpi",
    category: "livelihood",
    outlay: "₹1.75 Cr",
    completion: "100%",
  },
  {
    id: "p6",
    imageSrc: "/assets/media-reservoir.jpg",
    badge: "WATER & SANITATION",
    refCode: "Ref: MTDC-CDL-155",
    location: "Chandel District",
    title: "Gravity-feed Village Water Reservoir System",
    description:
      "High-altitude mountain spring catchment tapping, multi-chamber sedimentation filtration, and continuous gravity distribution for 6 villages.",
    status: "Phase II In Progress",
    statusType: "progress",
    href: "#project-chandel",
    category: "water",
    outlay: "₹6.30 Cr",
    completion: "74%",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "roads", label: "Roads & Connectivity" },
  { id: "community", label: "Community Assets" },
  { id: "livelihood", label: "Livelihood & Crafts" },
  { id: "water", label: "Water & Reservoirs" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.refCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="REGIONAL FOOTPRINT"
        title="Statewide Project Portfolio & Execution Directory"
        description="Explore developmental initiatives, completed civic assets, and ongoing hill infrastructure schemes executed by MTDC across all 16 districts of Manipur."
        breadcrumbs={[{ label: "Projects" }]}
      />

      {/* 2. Portfolio Stats Bar */}
      <section className="bg-white border-b border-[#D9DEE2] py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-manrope text-[#102B3C] block leading-none">
                  16
                </span>
                <span className="text-[11px] font-medium font-ibm-mono text-gray-500 uppercase mt-0.5 block">
                  Districts Covered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#F0F4F7] text-[#D85C3A] flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-manrope text-[#102B3C] block leading-none">
                  ₹340+ Cr
                </span>
                <span className="text-[11px] font-medium font-ibm-mono text-gray-500 uppercase mt-0.5 block">
                  Active Works Outlay
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#F0F4F7] text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-manrope text-[#102B3C] block leading-none">
                  100+
                </span>
                <span className="text-[11px] font-medium font-ibm-mono text-gray-500 uppercase mt-0.5 block">
                  Assets Delivered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#F0F4F7] text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-manrope text-[#102B3C] block leading-none">
                  24
                </span>
                <span className="text-[11px] font-medium font-ibm-mono text-gray-500 uppercase mt-0.5 block">
                  Ongoing In-Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search and Category Filters */}
      <section className="py-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-[#D9DEE2] rounded-lg p-4 sm:p-5 shadow-xs">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded text-[12px] font-medium transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#061D2B] text-white font-semibold"
                      : "bg-[#F6F7F5] text-gray-600 hover:bg-gray-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search district, ref code, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#F6F7F5] border border-[#D9DEE2] rounded text-[12.5px] font-ibm-sans focus:outline-none focus:border-[#D85C3A] text-[#102B3C]"
              />
            </div>
          </div>

          {/* 4. Projects Grid */}
          <div className="mt-8">
            {filteredProjects.length === 0 ? (
              <div className="bg-white border border-[#D9DEE2] rounded-lg p-12 text-center">
                <p className="text-gray-500 font-ibm-sans text-sm">
                  No projects found matching the criteria. Try clearing your search or filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs font-semibold text-[#D85C3A] hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>

          {/* Centered Disclaimer */}
          <p className="mt-12 text-center text-[10.5px] sm:text-[11px] text-gray-400 font-ibm-mono tracking-normal">
            Note: Projects shown are illustrative representative prototypes for MTDC developmental
            initiatives in accordance with state guidelines.
          </p>
        </div>
      </section>
    </div>
  );
}
