"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import omar from "@/public/omar.jpeg";
import hamza from "@/public/hamza.jpeg";
import { useSwitch } from "@/context/switchContext";
import { CheckCircle } from "lucide-react";

export function ConsultantsSection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <section
      id="consultants"
      className={`py-12 md:py-20 bg-gray-50 ${
        isEnglish ? "text-left" : "text-right"
      } ${isEnglish ? "ltr" : "rtl"}`}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {isEnglish ? "Meet Our Consultants" : "تعرف على مستشارينا"}
            </h2>

            <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              {isEnglish
                ? "Expert guidance from industry professionals with deep local knowledge."
                : ".إرشاد احترافي من خبراء يمتلكون فهماً عميقاً للسوق المحلي"}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full ">
            {/* Dr. Hamza Card */}
            <Card
              className="overflow-hidden rounded-xl shadow-xl border-0 group p-0"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <div className="relative h-96 w-full overflow-hidden bg-gray-100">
                <Image
                  src={hamza}
                  alt="Dr. Hamza"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-1" style={textStyle}>
                    {isEnglish ? "Dr. Hamza" : "د. حمزة"}
                  </h2>
                  <p className="text-white/80 mb-4" style={textStyle}>
                    {isEnglish
                      ? "Your Human Capital Solutions Advisor"
                      : " مستشارك في حلول رأس المال البشري"}
                  </p>
                </div>
              </div>

              <CardContent className="p-6" style={textStyle}>
                <ul className="space-y-4">
                  {(isEnglish
                    ? [
                        "Holds a PhD from the UK .",
                        "Holds a Master's degree from the USA in Human Resources Management.",
                        "Led recruitment and selection teams at major companies.",
                        "Develop effective policies and strategies to improve organizational efficiency.",
                      ]
                    : [
                        "حاصل على الدكتوراه من بريطانيا",
                        "حاصل على الماجستير من أمريكا في إدارة الموارد البشرية",
                        "قاد فرق التوظيف والاستقطاب في كبرى الشركات",
                        "طور سياسات واستراتيجيات فعّالة لرفع كفاءة المنظمات",
                      ]
                  ).map((text, i) => (
                    <li key={i} className="flex  gap-3 items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-gray-800 ">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Eng. Omar Card */}
            <Card
              className="overflow-hidden rounded-xl shadow-xl border-0 group p-0"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <div className="relative h-96 w-full overflow-hidden bg-gray-100">
                <Image
                  src={omar}
                  alt="Eng. Omar Al-Ghamdi"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-1" style={textStyle}>
                    {isEnglish ? "Eng. Omar Al-Ghamdi" : "م. عمر الغامدي"}
                  </h2>
                  <p className="text-white/80 mb-4" style={textStyle}>
                    {isEnglish
                      ? "Your consultant for institutional excellence services"
                      : " مستشارك في خدمات التميز المؤسسي"}
                  </p>
                </div>
              </div>

              <CardContent className="p-6" style={textStyle}>
                <ul className="space-y-4">
                  {(isEnglish
                    ? [
                        "Expert in organizational compliance and development",
                        "Master of Business Administration",
                        "Held leadership positions at BAE Systems and participated in international conferences",
                        "Received innovation awards and contributed to building performance strategies and improving work environments",
                      ]
                    : [
                        "خبير في الامتثال والتطوير المؤسسي",
                        "حاصل على الماجستير في ادارة الاعمال",
                        "شغل مناصب قيادية في شركة BAE Systems وشارك في مؤتمرات دولية",
                        "حصل على جوائز الابتكار وساهم في بناء استراتيجيات الأداء وتحسين بيئات العمل",
                      ]
                  ).map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-gray-800 ">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
