import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export interface ProjectData {
  id: string;
  imageSrc: string;
  badge: string;
  refCode: string;
  location: string;
  title: string;
  description: string;
  status: string;
  statusType?: "completed" | "progress" | "execution";
  href: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const getStatusStyle = () => {
    switch (project.statusType) {
      case "progress":
        return "bg-amber-50 text-amber-700 border-amber-200/80";
      case "execution":
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "completed":
      default:
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
    }
  };

  return (
    <div
      id={project.id}
      className="scroll-mt-24 bg-white border border-[#D9DEE2] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#D85C3A]/60 hover:shadow-xs transition-all duration-200 group"
    >
      <div>
        {/* Card Image Banner */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Top Left Badge */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2 py-0.5 bg-[#061D2B]/90 text-white text-[9.5px] font-semibold tracking-wider uppercase font-ibm-mono rounded-[2px] shadow-xs">
              {project.badge}
            </span>
          </div>

          {/* Bottom Right Reference Code */}
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="px-2 py-0.5 bg-white/95 text-[#102B3C] text-[9.5px] font-ibm-mono font-medium rounded-[2px] border border-gray-300 shadow-xs">
              {project.refCode}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-[11.5px] text-[#D85C3A] font-ibm-mono font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D85C3A] shrink-0" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-bold text-[#102B3C] text-[16px] font-manrope group-hover:text-[#D85C3A] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-2 text-[12.5px] text-gray-500 font-ibm-sans leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-[#D9DEE2]/60 mt-2">
        <span
          className={`inline-block px-2.5 py-0.5 text-[11px] font-medium font-ibm-mono border rounded-[3px] ${getStatusStyle()}`}
        >
          {project.status}
        </span>

        <Link
          href={project.href}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#102B3C] group-hover:text-[#D85C3A] transition-colors font-ibm-sans"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
