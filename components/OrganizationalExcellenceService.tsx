"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { OrganizationalExcellenceServices } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";
import { BriefcaseBusiness, ChevronDown, ChevronUp } from "lucide-react";

const OrganizationalExcellenceService = () => {
  const { isEnglish } = useSwitch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-5 px-5 md:py-16 bg-gradient-to-br from-[#1a2836] via-[#223344] to-[#2f4156] border-b-4 border-[#fca311] rounded-xl shadow-[0_4px_20px_rgba(252,163,17,0.15)] transition-all duration-300 ease-in-out"
      id="organizational-excellence"
    >
      {/* Header with toggle */}
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
          <BriefcaseBusiness className="text-[#fca311]" />
          {isEnglish
            ? "Organizational Excellence Services"
            : "خدمات التميز المؤسسي"}
        </h2>
        {isOpen ? (
          <ChevronUp className="text-[#fca311] transition-transform duration-300" />
        ) : (
          <ChevronDown className="text-[#fca311] transition-transform duration-300" />
        )}
      </div>

      {/* Collapsible content */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ServiceCard items={OrganizationalExcellenceServices} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationalExcellenceService;
