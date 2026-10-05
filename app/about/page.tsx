import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Building2,
  Users2,
  FileCheck,
  MapPin,
  ArrowRight,
  Landmark,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About MTDC | Manipur Tribal Development Corporation Limited",
  description:
    "Learn about the history, mandate, leadership, and institutional vision of Manipur Tribal Development Corporation Limited (MTDC), Government of Manipur.",
};

const STATS = [
  { label: "FOUNDED", value: "1979", subtext: "45+ Years of Dedicated Service" },
  { label: "COVERAGE", value: "16", subtext: "Districts Across Manipur" },
  { label: "ACTIVE WORKS", value: "₹340+", subtext: "Crores Infrastructure Outlay" },
  { label: "FACILITIES", value: "100+", subtext: "Community Assets Delivered" },
];

const LEADERSHIP = [
  {
    role: "Department of Tribal Affairs & Hills",
    designation: "Administrative Ministry",
    title: "Government of Manipur",
    desc: "Overseeing state-wide tribal welfare policies, fund sanctions, and institutional mandates.",
  },
  {
    role: "Board of Directors",
    designation: "Governing Apex Body",
    title: "MTDC Board",
    desc: "Formulating strategic corporate direction, approving annual budgets, and reviewing major infrastructure contracts.",
  },
  {
    role: "Managing Director",
    designation: "Executive Leadership",
    title: "Executive Head & Administration",
    desc: "Directing day-to-day administrative operations, inter-departmental coordination, and state developmental priorities.",
  },
  {
    role: "Chief Engineer & Technical Wing",
    designation: "Engineering Execution",
    title: "Technical Directorate",
    desc: "Ensuring structural compliance, DPR formulation, site supervision, and rigorous quality audit across all hill zones.",
  },
];

const DIVISIONS = [
  {
    name: "Engineering & Infrastructure Division",
    desc: "Civil, electrical, and structural design and execution of roads, bridges, and community civic centres.",
    icon: Building2,
  },
  {
    name: "Planning, DPR & Estimation Cell",
    desc: "Geotechnical surveying, topographical mapping, architectural drafting, and schedule of rates estimation.",
    icon: FileCheck,
  },
  {
    name: "Hill Districts Field Engineering Wings",
    desc: "Decentralized executive engineers stationed across Ukhrul, Churachandpur, Tamenglong, Senapati, and Chandel.",
    icon: MapPin,
  },
  {
    name: "Finance, Audit & Monitoring Directorate",
    desc: "Public Financial Management System (PFMS) tracking, statutory audits, and central grant reconciliations.",
    icon: Landmark,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F6F7F5] min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="ABOUT MTDC"
        title="Supporting Development Across Manipur"
        description="Manipur Tribal Development Corporation Limited (MTDC) is a Government of Manipur undertaking established to support the development and welfare of Scheduled Tribes and other communities through development-oriented initiatives."
        breadcrumbs={[{ label: "About MTDC" }]}
      />

      {/* 2. Key Stats Strip */}
      <section className="bg-white border-b border-[#D9DEE2] py-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#D9DEE2]">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col ${idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""}`}>
                <span className="text-[10px] font-bold text-[#D85C3A] font-ibm-mono tracking-wider uppercase">
                  {stat.label}
                </span>
                <span className="text-3xl lg:text-4xl font-extrabold text-[#102B3C] font-manrope mt-1">
                  {stat.value}
                </span>
                <span className="text-[12px] text-gray-500 font-ibm-sans mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Corporate Overview & Legal Mandate */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Narrative */}
            <div className="lg:col-span-7 bg-white border border-[#D9DEE2] rounded-lg p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                    INSTITUTIONAL CHARTER
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
                  Building Pathways to Inclusive Socio-Economic Growth
                </h2>
                <div className="mt-4 space-y-3.5 text-[13.5px] sm:text-[14px] text-gray-700 font-ibm-sans leading-relaxed">
                  <p>
                    Manipur Tribal Development Corporation Limited was incorporated under the Companies Act as a wholly-owned Government of Manipur undertaking. Operating under the administrative control of the Department of Tribal Affairs & Hills, the Corporation serves as the specialized nodal engineering and project execution arm.
                  </p>
                  <p>
                    Our mandate encompasses the formulation, design, tendering, and turnkey execution of public infrastructure projects in the hill and scheduled areas. These include all-weather rural roads, bridges, drinking water supply networks, multi-purpose community resource centres, residential school complexes, and market sheds.
                  </p>
                  <p className="text-gray-500">
                    Through rigorous adherence to state public works standards, social environmental safeguards, and digital transparency, MTDC continues to bridge connectivity divides and foster community resilience across Manipur.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[#D9DEE2]/60 flex flex-wrap gap-3.5 sm:gap-4 items-center">
                <Link
                  href="/projects"
                  className="w-[215px] max-w-full h-11 inline-flex items-center justify-center gap-2 rounded bg-[#D85C3A] hover:bg-[#C04E2E] text-white text-[13px] font-medium tracking-wide transition-all shadow-xs"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="w-[215px] max-w-full h-11 inline-flex items-center justify-center gap-2 rounded bg-[#061D2B] hover:bg-[#102B3C] text-white text-[13px] font-medium tracking-wide transition-all shadow-xs"
                >
                  <span>Contact Headquarters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Statutory Info Box */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
              <div className="bg-white border border-[#D9DEE2] rounded-lg p-6 shadow-xs flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 pb-4 border-b border-[#D9DEE2]">
                  <div className="w-10 h-10 rounded-md bg-[#061D2B] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#D85C3A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#102B3C] text-[15px] font-manrope">
                      Statutory Corporation Profile
                    </h3>
                    <p className="text-[10.5px] text-gray-400 font-ibm-mono uppercase mt-0.5">
                      Govt. of Manipur Undertaking
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex-1 flex flex-col justify-between space-y-2 font-ibm-mono text-[11px]">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 uppercase">CIN</span>
                    <span className="font-bold text-[#102B3C]">U45201MN1974SGC001607</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 uppercase">INCORPORATION</span>
                    <span className="font-bold text-[#102B3C]">October, 1979</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 uppercase">NODAL MINISTRY</span>
                    <span className="font-bold text-[#102B3C]">Tribal Affairs &amp; Hills</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 uppercase">JURISDICTION</span>
                    <span className="font-bold text-[#D85C3A]">All 16 Districts</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500 uppercase">REGISTERED OFFICE</span>
                    <span className="font-bold text-[#102B3C] text-right">Lamphelpat, Imphal West</span>
                  </div>
                </div>
              </div>

              {/* Core Values Card */}
              <div className="bg-[#061D2B] text-white rounded-lg p-6 shadow-xs border border-white/10 shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[#D85C3A]" />
                  <span className="text-[11px] font-bold text-[#D85C3A] font-ibm-mono tracking-wider uppercase">
                    OUR COMMITMENT
                  </span>
                </div>
                <h4 className="text-[16px] font-bold font-manrope leading-snug">
                  Transparency, Quality &amp; Community Partnership
                </h4>
                <p className="mt-2 text-[12px] text-gray-300 font-ibm-sans leading-relaxed">
                  Every project undertaken by MTDC is formulated in close consultation with local tribal autonomous councils, traditional village authorities, and district administrative administrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Pillars */}
      <section className="py-12 bg-white border-y border-[#D9DEE2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              STRATEGIC ORIENTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              Vision &amp; Institutional Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-7 relative overflow-hidden">
              <div className="w-10 h-10 rounded-md bg-[#D85C3A] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#102B3C] font-manrope">Our Vision</h3>
              <p className="mt-3 text-[13.5px] text-gray-600 font-ibm-sans leading-relaxed">
                To transform the socio-economic landscape of Manipur’s hill regions by establishing modern, disaster-resilient, and culturally harmonious infrastructure that empowers every tribal citizen to realize their full human potential.
              </p>
            </div>

            <div className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-7 relative overflow-hidden">
              <div className="w-10 h-10 rounded-md bg-[#061D2B] text-white flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-[#D85C3A]" />
              </div>
              <h3 className="text-xl font-bold text-[#102B3C] font-manrope">Our Mission</h3>
              <p className="mt-3 text-[13.5px] text-gray-600 font-ibm-sans leading-relaxed">
                To engineer and deliver durable public utilities, ensure 100% all-weather connectivity for remote habitations, create sustainable livelihood hubs, and administer state and central welfare grants with peak fiscal integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Organizational Wings */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#D85C3A] text-sm font-bold leading-none">—</span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono">
                  OPERATIONAL ARCHITECTURE
                </span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#102B3C] font-manrope tracking-tight leading-snug">
                Administrative &amp; Engineering Divisions
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIVISIONS.map((div) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.name}
                  className="bg-white border border-[#D9DEE2] rounded-lg p-5 flex flex-col justify-between hover:border-[#D85C3A]/60 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-[#F0F4F7] text-[#102B3C] flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-[#D85C3A]" />
                    </div>
                    <h3 className="font-bold text-[#102B3C] text-[14.5px] font-manrope leading-snug">
                      {div.name}
                    </h3>
                    <p className="mt-2 text-[12px] text-gray-500 font-ibm-sans leading-relaxed">
                      {div.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Leadership Framework */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#D9DEE2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D85C3A] font-ibm-mono block mb-1">
              GOVERNANCE HIERARCHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B3C] font-manrope tracking-tight">
              Institutional Leadership &amp; Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERSHIP.map((item) => (
              <div
                key={item.role}
                className="bg-[#F6F7F5] border border-[#D9DEE2] rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9.5px] font-bold text-[#D85C3A] font-ibm-mono uppercase tracking-wider block">
                    {item.designation}
                  </span>
                  <h4 className="mt-1 font-bold text-[#102B3C] text-[15px] font-manrope">
                    {item.role}
                  </h4>
                  <p className="mt-2 text-[12px] text-gray-500 font-ibm-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
