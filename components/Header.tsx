"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Boxes,
  Image as ImageIcon,
  FileText,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Our Work", href: "/our-work", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Boxes },
  { name: "Media", href: "/media", icon: ImageIcon },
  { name: "Resources", href: "/resources", icon: FileText },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close on Escape & lock body scrolling when sidebar is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#D9DEE2] shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Left: MTDC Logo + Text */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 shrink-0">
            <Image
              src="/assets/mtdc-logo.png"
              alt="MTDC Manipur Tribal Development Corporation Limited Emblem"
              fill
              sizes="44px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col font-ibm-sans">
            <span className="font-extrabold text-[#102B3C] text-[16px] tracking-tight leading-tight group-hover:text-[#D85C3A] transition-colors">
              MTDC LIMITED
            </span>
            <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase leading-tight mt-0.5">
              MANIPUR TRIBAL DEVELOPMENT
            </span>
            <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase leading-none">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 font-ibm-sans">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[14px] transition-colors py-1 ${
                  isActive
                    ? "text-[#102B3C] font-bold"
                    : "text-gray-600 hover:text-[#102B3C] font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#102B3C] hover:text-[#D85C3A] rounded-md focus:outline-hidden cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Off-canvas Sidebar & Backdrop */}
      {/* Dimmed Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#061D2B]/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[290px] sm:w-[320px] max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden font-ibm-sans ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
        role="dialog"
        aria-modal="true"
      >
        {/* Top: Header branding + Close Button */}
        <div>
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D9DEE2]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/assets/mtdc-logo.png"
                  alt="MTDC Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#102B3C] text-[14.5px] tracking-tight leading-tight">
                  MTDC LIMITED
                </span>
                <span className="text-[9px] font-semibold text-gray-500 tracking-wider uppercase leading-none mt-0.5">
                  GOVT. OF MANIPUR
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-[#102B3C] hover:bg-[#F0F4F7] rounded-md transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 sm:p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-220px)]">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 font-ibm-mono block mb-2">
              Menu Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13.5px] transition-all font-ibm-sans ${
                    isActive
                      ? "bg-[#061D2B] text-white font-bold shadow-xs"
                      : "text-[#102B3C] hover:bg-[#F0F4F7] hover:text-[#D85C3A] font-medium"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#D85C3A]" : "text-gray-400"}`} />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Contact & Public Desk */}
        <div className="p-4 border-t border-[#D9DEE2] bg-[#F9FAFB] space-y-3">
          <div className="text-[11px] font-ibm-mono text-gray-500">
            <span className="font-semibold text-gray-700 block">Headquarters:</span>
            <span>Lamphelpat, Imphal West - 795004</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[12px] font-semibold text-white bg-[#D85C3A] hover:bg-[#C04E2E] rounded-md transition-colors font-ibm-sans shadow-xs text-center"
            >
              <span>Public Desk / Inquiry</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
