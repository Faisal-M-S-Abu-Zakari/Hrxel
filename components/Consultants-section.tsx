"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import omar from "@/public/omar.jpg";
import hamza from "@/public/hamza.jpg";
import { useSwitch } from "@/context/switchContext";

export function ConsultantsSection() {
  const { isEnglish } = useSwitch();

  return (
    <section
      id="consultants"
      className={`py-12 md:py-20 bg-gray-50 ${
        isEnglish ? "text-left" : "text-right"
      } ${isEnglish ? "ltr" : "rtl"}`}
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
                : "إرشاد احترافي من خبراء يمتلكون فهماً عميقاً للسوق المحلي."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-60 w-full">
                <Image
                  src={hamza}
                  alt="Dr. Hamza"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{isEnglish ? "Dr. Hamza" : "د. حمزة"}</CardTitle>

                <CardDescription>
                  {isEnglish
                    ? "Human Capital Solutions Consultant"
                    : "استشاري حلول رأس المال البشري"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {isEnglish ? (
                    <>
                      <li>
                        PhD from the UK and Master's from the USA in Human
                        Resources Management
                      </li>

                      <li>
                        Led recruitment and talent acquisition teams in major
                        companies
                      </li>

                      <li>
                        Developed effective policies and strategies to improve
                        organizational efficiency
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        دكتوراه من المملكة المتحدة وماجستير من الولايات المتحدة
                        في إدارة الموارد البشرية
                      </li>
                      <li> قاد فرق التوظيف واكتساب المواهب في شركات كبرى</li> 
                      <li>
                        وضع سياسات واستراتيجيات فعالة لتحسين الكفاءة التنظيمية
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-60 w-full">
                <Image
                  src={omar}
                  alt="Eng. Omar Al-Ghamdi"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  {isEnglish ? "Eng. Omar Al-Ghamdi" : "م. عمر الغامدي"}
                </CardTitle>

                <CardDescription>
                  {isEnglish
                    ? "Organizational Excellence Consultant"
                    : "استشاري التميز المؤسسي"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {isEnglish ? (
                    <>
                      <li>
                        Expert in organizational compliance and development
                      </li>

                      <li>
                        Held leadership positions at BAE Systems and
                        participated in international conferences
                      </li>

                      <li>
                        Received innovation awards and contributed to building
                        performance strategies and improving work environments
                      </li>
                    </>
                  ) : (
                    <>
                      <li> خبير في الامتثال والتطوير المؤسسي</li>             
                      <li>
                        شغل مناصب قيادية في شركة BAE Systems وشارك في مؤتمرات
                        دولية
                      </li>
                      <li>
                        حصل على جوائز الابتكار وساهم في بناء استراتيجيات الأداء
                        وتحسين بيئات العمل
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
