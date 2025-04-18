"use client";

import ServiceCard from "./ServiceCard";
import { SupplyChainServices } from "@/constants/services";
import { useSwitch } from "@/context/switchContext";
import { Building2 } from "lucide-react";

const SupplyChainService = () => {
  const { isEnglish } = useSwitch();

  return (
    <div
      className="py-5 px-5 md:py-28 bg-gradient-to-br from-[#1a2836] via-[#223344] to-[#2f4156] border-b-4 border-[#fca311] rounded-xl shadow-[0_4px_20px_rgba(252,163,17,0.15)]"
      id="supply-chain"
    >
      <ServiceCard
        title={isEnglish ? "Supply Chain Services" : "خدمات سلاسل الإمداد "}
        icon={Building2}
        items={SupplyChainServices}
      />
    </div>
  );
};

export default SupplyChainService;
