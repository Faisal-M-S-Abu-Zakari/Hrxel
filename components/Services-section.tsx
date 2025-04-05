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

  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-gradient-to-br from-white via-[#fefaf4] to-[#f8f9fb]"
      dir={isEnglish ? "ltr" : "rtl"}
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
          <TabsList className="grid w-full grid-cols-3 mb-8">
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
                  ? "Designed to help job seekers or those looking to develop their career paths"
                  : "مصممة لمساعدة الباحثين عن عمل أو من يسعون لتطوير مسارهم المهني"
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
                  ? "Aimed at supporting organizations in building an effective work environment"
                  : "دعم المؤسسات في بناء بيئة عمل فعالة وتحقيق التميز المؤسسي"
              }
              items={companyServices}
              isEnglish={isEnglish}
            />
          </TabsContent>

          <TabsContent value="executive">
            <ServiceCard
              title={isEnglish ? "Executive Search" : "توظيف القيادات"}
              desc={
                isEnglish
                  ? "Specialized for recruiting senior leadership (managers, executives)"
                  : "متخصصة في توظيف القيادات العليا مثل المديرين والتنفيذيين"
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
