import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const PROJECTS: ProjectData[] = [
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
    href: "/projects#p1",
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
    href: "/projects#p2",
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
    href: "/projects#p3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-12 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                REGIONAL FOOTPRINT
              </span>
            </div>
            <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
              Our Projects
            </h2>
            <p className="mt-1 text-[13.5px] sm:text-[14px] text-gray-500 font-ibm-sans">
              Development initiatives supporting communities and creating opportunities across Manipur.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D85C3A] hover:text-[#C04E2E] transition-colors font-ibm-sans shrink-0 group self-start sm:self-end"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Centered Disclaimer in IBM Plex Mono */}
        <p className="mt-10 text-center text-[10.5px] sm:text-[11px] text-gray-400 font-ibm-mono tracking-normal">
          Note: Projects shown are illustrative representative prototypes for MTDC developmental
          initiatives in accordance with state guidelines.
        </p>
      </div>
    </section>
  );
}
