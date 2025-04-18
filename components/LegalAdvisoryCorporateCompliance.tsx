"use client";

import ServiceCard from "./ServiceCard";
import { LegalAdvisoryCorporateCompliances } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";
import { BriefcaseBusiness } from "lucide-react";

const LegalAdvisoryCorporateCompliance = () => {
  const { isEnglish } = useSwitch();

  return (
    <div
      className="py-5 px-5 md:py-28 bg-gradient-to-br from-[#1a2836] via-[#223344] to-[#2f4156] border-b-4 border-[#fca311] rounded-xl shadow-[0_4px_20px_rgba(252,163,17,0.15)]"
      id="legal-advisory"
    >
      <ServiceCard
        title={
          isEnglish
            ? "Legal Advisory & Corporate Compliance "
            : "الاستشارات القانونية والامتثال المؤسسي "
        }
        icon={BriefcaseBusiness}
        items={LegalAdvisoryCorporateCompliances}
      />
    </div>
  );
};

export default LegalAdvisoryCorporateCompliance;
