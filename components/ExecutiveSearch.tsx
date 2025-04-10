"use client";

import ServiceCard from "./ServiceCard";
import { executiveServices } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";
import { BriefcaseBusiness } from "lucide-react";

const ExecutiveSearch = () => {
  const { isEnglish } = useSwitch();

  return (
    <div className={`mb-12 px-4 sm:px-6 md:px-8 `} id="executiveServices">
      <div>
        <ServiceCard
          title={isEnglish ? "Executive Search" : "البحث التنفيذي"}
          desc={
            isEnglish
              ? "Designed to attract senior leaders (directors, deputies, executives)"
              : "مخصصة لاستقطاب القيادات العليا (مدراء، نواب، تنفيذيين)"
          }
          icon={BriefcaseBusiness}
          items={executiveServices}
        />
      </div>
    </div>
  );
};

export default ExecutiveSearch;
