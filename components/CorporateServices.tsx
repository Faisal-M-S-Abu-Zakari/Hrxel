"use client";

import ServiceCard from "./ServiceCard";
import { companyServices } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";
import { Building2 } from "lucide-react";

const CorporateServices = () => {
  const { isEnglish } = useSwitch();

  return (
    <div className="mb-12 px-4 sm:px-6 md:px-8" id="companyServices">
      <div>
        <ServiceCard
          title={isEnglish ? "Services for Companies" : "خدمات الشركات"}
          desc={
            isEnglish
              ? "It aims to support establishments in building an effective work environment and achieving institutional excellence."
              : "تهدف إلى دعم المنشآت في بناء بيئة عمل فعّالة وتحقيق التميز المؤسسي."
          }
          icon={Building2}
          items={companyServices}
        />
      </div>
    </div>
  );
};

export default CorporateServices;
