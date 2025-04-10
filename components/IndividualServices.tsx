"use client";
import { UserCheck } from "lucide-react";

import ServiceCard from "./ServiceCard";
import { individualServices } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";

const IndividualServices = () => {
  const { isEnglish } = useSwitch();

  return (
    <div className="mb-12 px-4 sm:px-6 md:px-8" id="individualServices">
      <div>
        <ServiceCard
          title={isEnglish ? "Services for Individuals" : "خدمات الأفراد"}
          desc={
            isEnglish
              ? "Designed to help job seekers or those wishing to develop their career paths."
              : "مصممة لمساعدة الباحثين عن عمل أو الراغبين في تطوير مساراتهم المهنية"
          }
          icon={UserCheck}
          items={individualServices}
        />
      </div>
    </div>
  );
};

export default IndividualServices;
