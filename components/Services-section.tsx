"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSwitch } from "@/context/switchContext";
import ServiceCard from "./ServiceCard";
import {
  individualServices,
  companyServices,
  executiveServices,
} from "@/constants/services";

export function ServicesSection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-gradient-to-br from-white via-[#fefaf4] to-[#f8f9fb]"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {isEnglish ? "Our Services" : "خدماتنا"}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
            {isEnglish
              ? "Comprehensive solutions tailored to your needs"
              : "حلول شاملة مصممة خصيصا لتلبية احتياجاتكم"}
          </p>
        </div>

        <Tabs
          defaultValue="individuals"
          className="max-w-5xl mx-auto"
          dir={isEnglish ? "ltr" : "rtl"}
        >
          <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="individuals">
              {isEnglish ? "Individual Services" : "خدمات الأفراد"}
            </TabsTrigger>
            <TabsTrigger value="companies">
              {isEnglish ? "Corporate Services" : "خدمات الشركة"}
            </TabsTrigger>
            <TabsTrigger value="executive">
              {isEnglish ? "Executive Search" : "توظيف القيادات"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individuals">
            <ServiceCard
              title={isEnglish ? "Services for Individuals" : "خدمات الأفراد"}
              desc={
                isEnglish
                  ? "Designed to help job seekers or those wishing to develop their career paths."
                  : "مصممة لمساعدة الباحثين عن عمل أو الراغبين في تطوير مساراتهم المهنية"
              }
              items={individualServices}
              isEnglish={isEnglish}
            />
          </TabsContent>

          <TabsContent value="companies">
            <ServiceCard
              title={isEnglish ? "Services for Companies" : "خدمات الشركات"}
              desc={
                isEnglish
                  ? "It aims to support establishments in building an effective work environment and achieving institutional excellence."
                  : "تهدف إلى دعم المنشآت في بناء بيئة عمل فعّالة وتحقيق التميز المؤسسي.  "
              }
              items={companyServices}
              isEnglish={isEnglish}
            />
          </TabsContent>

          <TabsContent value="executive">
            <ServiceCard
              title={isEnglish ? "Executive Search" : "البحث التنفيذي "}
              desc={
                isEnglish
                  ? "Designed to attract senior leaders (directors, deputies, executives)"
                  : "مخصصة لاستقطاب القيادات العليا (مدراء، نواب، تنفيذيين)"
              }
              items={executiveServices}
              isEnglish={isEnglish}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
