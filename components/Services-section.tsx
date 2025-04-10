"use client";

import { useSwitch } from "@/context/switchContext";
import IndividualServices from "./IndividualServices";
import CorporateServices from "./CorporateServices";
import ExecutiveSearch from "./ExecutiveSearch";

export function ServicesSection() {
  const { isEnglish } = useSwitch();

  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  return (
    <section
      id="services"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
      className="py-20 md:py-28 bg-gradient-to-br from-[#1a2836] via-[#283949] to-[#354a5d]"
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {isEnglish ? "Our Services" : "خدماتنا"}
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            {isEnglish
              ? "Comprehensive solutions tailored to your needs."
              : "حلول شاملة مصممة خصيصًا لتلبية احتياجاتكم."}
          </p>
        </div>

        <div className="space-y-12">
          <IndividualServices />
          <CorporateServices />
          <ExecutiveSearch />
        </div>
      </div>
    </section>
  );
}
