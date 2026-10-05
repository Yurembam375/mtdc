import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GovPortal {
  id: string;
  name: string;
  url: string;
  image: string;
  alt: string;
}

const GOV_PORTALS: GovPortal[] = [
  {
    id: "mygov",
    name: "MyGov",
    url: "https://www.mygov.in",
    image: "/assets/logo-mygov.png",
    alt: "myGov मेरी सरकार Official Portal",
  },
  {
    id: "g20",
    name: "G20 India",
    url: "https://www.g20.org",
    image: "/assets/logo-g20.png",
    alt: "G20 भारत 2023 INDIA Official Portal",
  },
  {
    id: "amrit-mahotsav",
    name: "Azadi Ka Amrit Mahotsav",
    url: "https://amritmahotsav.nic.in",
    image: "/assets/logo-amrit-mahotsav.png",
    alt: "75 Azadi Ka Amrit Mahotsav Official Portal",
  },
  {
    id: "digital-india",
    name: "Digital India",
    url: "https://www.digitalindia.gov.in",
    image: "/assets/logo-digital-india.png",
    alt: "Digital India Power To Empower Official Portal",
  },
];

export default function GovernmentLinks() {
  return (
    <section className="py-8 sm:py-14 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Left-Aligned Heading */}
        <div className="mb-5 sm:mb-8 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
              NATIONAL &amp; STATE INITIATIVES
            </span>
          </div>
          <h2 className="text-xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
            Important Government Links
          </h2>
          <p className="mt-1 text-[12.5px] sm:text-[14px] text-gray-500 font-ibm-sans">
            Official government web directories, digital citizen portals, and procurement gateways.
          </p>
        </div>

        {/* 4 Portals in a single horizontal row across all screen sizes */}
        <div className="flex items-center justify-between sm:grid sm:grid-cols-4 gap-2 sm:gap-8 pt-2 overflow-x-auto scrollbar-none">
          {GOV_PORTALS.map((portal) => (
            <Link
              key={portal.id}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${portal.name} Official Portal`}
              className="flex-1 sm:flex-initial flex items-center justify-center p-1 sm:p-3 transition-all duration-200 hover:scale-105 cursor-pointer group shrink-0"
            >
              <div className="relative h-9 sm:h-14 w-[76px] sm:w-[160px] md:w-[190px] flex items-center justify-center">
                <Image
                  src={portal.image}
                  alt={portal.alt}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 160px, 200px"
                  className="object-contain filter group-hover:drop-shadow-xs transition-all duration-200"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
