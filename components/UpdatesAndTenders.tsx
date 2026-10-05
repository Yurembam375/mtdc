import React from "react";
import LatestUpdates from "./LatestUpdates";
import Tenders from "./Tenders";

export default function UpdatesAndTenders() {
  return (
    <section id="updates" className="py-12 sm:py-14 bg-[#F6F7F5] border-b border-[#D9DEE2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <LatestUpdates />
          <Tenders />
        </div>
      </div>
    </section>
  );
}
