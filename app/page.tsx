import GovernmentBar from "@/components/GovernmentBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpdatesAndTenders from "@/components/UpdatesAndTenders";
import AboutMTDC from "@/components/AboutMTDC";
import Projects from "@/components/Projects";
import MediaSection from "@/components/MediaSection";
import GovernmentLinks from "@/components/GovernmentLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Latest Updates & Tenders */}
      <UpdatesAndTenders />

      {/* 4. About MTDC Section */}
      <AboutMTDC />

      {/* 5. Our Projects Regional Footprint */}
      <Projects />

      {/* 6. MTDC in Action / Media Documentation */}
      <MediaSection />

      {/* 7. Important Government Links */}
      <GovernmentLinks />
    </>
  );
}
