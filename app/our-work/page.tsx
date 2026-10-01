import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Route,
  Building2,
  Droplets,
  Layers,
  Sprout,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HardHat,
  FileCheck2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Work | Manipur Tribal Development Corporation Limited",
  description:
    "Explore the key intervention sectors of MTDC: Hill road connectivity, community assets, water reservoirs, women handloom clusters, and agricultural infrastructure across Manipur.",
};

const SECTORS = [
  {
    id: "connectivity",
    title: "Hill Road Connectivity & Slope Stabilization",
    badge: "TRANSPORTATION INFRASTRUCTURE",
    desc: "Forming and blacktopping all-weather bituminous arterial and village link roads through rugged terrain. Incorporating reinforced concrete retaining walls, gabions, and drainage chutes to safeguard against torrential monsoon landslides.",
    metrics: "420+ km executed across 8 hill districts",
    image: "/assets/media-road.jpg",
    icon: Route,
    highlights: [
      "Heavy hillside earthwork cutting & camber correction",
      "Bituminous macadam wearing courses conforming to IRC specs",
      "Perforated slope drainage and vegetative geo-textile reinforcement",
    ],
  },
  {
    id: "community",
    title: "Community Resource Centres & Civic Spaces",
    badge: "CIVIC ASSETS",
    desc: "Constructing multi-tier community resource centres that combine autonomous tribal council assembly halls, women's self-help group training centres, solar-powered digital libraries, and youth skill workshops.",
    metrics: "85+ centres completed & commissioned",
    image: "/assets/project-crc.jpg",
    icon: Building2,
    highlights: [
      "Earthquake-resistant RCC framed structures (Zone V compliance)",
      "Solar rooftop hybrid power generation units with battery backups",
      "Universal accessibility ramps, wide doorways, and sanitation amenities",
    ],
  },
  {
    id: "water",
    title: "Gravity-feed Village Water Supply & Reservoirs",
    badge: "WATER & SANITATION",
    desc: "Tapping perennial spring water sources on high mountain ridges and routing potable water to isolated habitations through gravity transmission pipelines, sedimentation filtration chambers, and mass storage reservoirs.",
    metrics: "140+ village gravity schemes commissioned",
    image: "/assets/media-reservoir.jpg",
    icon: Droplets,
    highlights: [
      "Zero-energy gravity flow design minimizing operational expenditure",
      "Multi-stage sand filtration and chlorination dosing tanks",
      "Community pipeline networks reaching household terminal standposts",
    ],
  },
  {
    id: "handloom",
    title: "Women SHG Handloom & Traditional Craft Clusters",
    badge: "LIVELIHOOD PROMOTION",
    desc: "Establishing state-of-the-art weaving sheds and craft training facilities equipped with fly-shuttle frame looms, solar lighting, and natural dyeing units to upscale traditional Manipuri tribal loin and frame loom textiles.",
    metrics: "2,400+ women artisans engaged",
    image: "/assets/media-handloom.jpg",
    icon: Layers,
    highlights: [
      "Spacious naturally ventilated workshops with timber architecture",
      "Common facility centres for bulk raw material procurement",
      "Direct market linkage facilitation with TRIFED and state emporiums",
    ],
  },
  {
    id: "agriculture",
    title: "Integrated Livelihood & Cold Chain Facilities",
    badge: "AGRO-FORESTRY",
    desc: "Building post-harvest processing centres, solar drying pavilions, and cold-chain transit facilities for organic hill produce such as Kachai lemon, ginger, turmeric, king chilli, and seasonal fruits.",
    metrics: "12 regional processing hubs operational",
    image: "/assets/project-livelihood.jpg",
    icon: Sprout,
    highlights: [
      "Controlled temperature cold storage chambers for perishable crops",
      "Commercial solar conduction dryers and grading/packaging tables",
      "Farmer Producer Organization (FPO) management and aggregation wings",
    ],
  },
  {
    id: "education",
    title: "Residential Tribal Hostels & Health Infrastructure",
    badge: "SOCIAL WELFARE",
    desc: "Constructing safe, hygienic, and well-furnished residential school hostels for tribal boys and girls in remote subdivisional headquarters, alongside civil infrastructure for primary health sub-centres.",
    metrics: "32 hostel blocks & health centres delivered",
    image: "/assets/hero-bg.jpg",
    icon: GraduationCap,
    highlights: [
      "Dormitory wings, modern kitchens, dining halls, and clean dorms",
      "Rainwater harvesting collection tanks and solar hot water systems",
      "Perimeter security fencing and safe playfields",
    ],
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Participatory Survey & DPR",
    desc: "Detailed topographical survey, soil testing, and joint consultation with local village authorities to finalize Detailed Project Reports.",
    icon: HardHat,
  },
  {
    step: "02",
    title: "E-Tendering & Transparency",
    desc: "Strict adherence to Manipur State Public Procurement Rules via the national e-tender portal with competitive technical and financial bidding.",
    icon: FileCheck2,
  },
  {
    step: "03",
    title: "Rigorous Site Supervision",
    desc: "Routine on-site material testing, lab cube compression checks, and drone-assisted visual inspection by MTDC Executive Engineers.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Social Audit & Handover",
    desc: "Joint verification with user committees, social audit compliance, and final operational handover to local community administrators.",
    icon: CheckCircle2,
  },
];

export default function OurWorkPage() {
  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="SECTORAL PORTFOLIO"
        title="Our Work: Transforming Hill Infrastructure"
        description="From all-weather hill connectivity to gravity drinking water schemes, community resource centres, and tribal handloom empowerment clusters, explore MTDC's core engineering and welfare domains."
        breadcrumbs={[{ label: "Our Work" }]}
      />

      {/* 2. Sectors Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              AREAS OF INTERVENTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              Six Pillars of Sustainable Tribal Development
            </h2>
            <p className="mt-2 text-[13.5px] text-gray-500 font-ibm-sans">
              Every initiative is engineered to address local terrain challenges and foster long-term community prosperity.
            </p>
          </div>

          <div className="space-y-10">
            {SECTORS.map((sector, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={sector.id}
                  id={sector.id}
                  className="bg-white border border-[#D9DEE2] rounded-lg overflow-hidden shadow-xs hover:border-[#D85C3A]/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-gray-100 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-[3px] bg-[#061D2B]/90 text-white font-ibm-mono text-[9px] font-bold tracking-wider uppercase">
                          {sector.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        <div className="hidden lg:inline-block px-2.5 py-0.5 rounded-[2px] bg-[#F0F4F7] text-gray-700 font-ibm-mono text-[9.5px] font-semibold tracking-wider uppercase mb-2">
                          {sector.badge}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#102B3C] font-manrope leading-snug">
                          {sector.title}
                        </h3>
                        <p className="mt-3 text-[13.5px] text-gray-600 font-ibm-sans leading-relaxed">
                          {sector.desc}
                        </p>

                        {/* Technical Highlights */}
                        <div className="mt-5 space-y-2">
                          {sector.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#D85C3A] shrink-0 mt-0.5" />
                              <span className="text-[12.5px] text-gray-700 font-ibm-sans">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Info Strip */}
                      <div className="mt-6 pt-5 border-t border-[#D9DEE2]/60 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold font-ibm-mono uppercase text-[#D85C3A]">
                            IMPACT METRIC:
                          </span>
                          <span className="text-[12px] font-medium font-ibm-sans text-gray-700">
                            {sector.metrics}
                          </span>
                        </div>

                        <Link
                          href="/projects"
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#102B3C] hover:text-[#D85C3A] font-ibm-sans transition-colors"
                        >
                          <span>View Related Projects</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Project Delivery Lifecycle */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#D9DEE2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              ENGINEERING INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              Our 4-Stage Project Execution Lifecycle
            </h2>
            <p className="mt-2 text-[13.5px] text-gray-500 font-ibm-sans">
              Ensuring public funds translate into high-durability infrastructure through standard operating procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW.map((wf) => {
              const Icon = wf.icon;
              return (
                <div
                  key={wf.step}
                  className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-6 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-manrope text-[#D85C3A]">
                        {wf.step}
                      </span>
                      <div className="w-9 h-9 rounded bg-white border border-[#D9DEE2] flex items-center justify-center text-[#102B3C]">
                        <Icon className="w-4 h-4 text-[#D85C3A]" />
                      </div>
                    </div>
                    <h4 className="font-bold text-[#102B3C] text-[15px] font-manrope">
                      {wf.title}
                    </h4>
                    <p className="mt-2 text-[12px] text-gray-500 font-ibm-sans leading-relaxed">
                      {wf.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
