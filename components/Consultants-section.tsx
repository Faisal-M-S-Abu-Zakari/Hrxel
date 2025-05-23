"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import omar from "@/public/omar.jpg";
import hamza from "@/public/hamza.jpg";
import omar2 from "@/public/omar2.jpeg";
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
      className={`py-12 md:py-20 bg-gradient-to-br from-[#2c3e50] via-[#3a5067] to-[#4b6584] ${
        isEnglish ? "text-left" : "text-right"
      } ${isEnglish ? "ltr" : "rtl"}`}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              {isEnglish ? "Meet Our Consultants" : "تعرف على مستشارينا"}
            </h2>

            <p className="max-w-[900px] text-gray-300 text-lg md:text-xl leading-relaxed">
              {isEnglish
                ? "Expert guidance from industry professionals with deep local knowledge."
                : ".إرشاد احترافي من خبراء يمتلكون فهماً عميقاً للسوق المحلي"}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto px-2 sm:px-0">
            {/* Dr. Hamza Card */}
            <Card
              className="overflow-hidden rounded-xl shadow-xl border-0 group p-0 bg-[#dadada]"
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <div className="relative h-96 w-full overflow-hidden bg-gray-100">
                <Image
                  src={hamza}
                  alt="Dr. Hamza"
                  fill
                  className="object-cover  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-1" style={textStyle}>
                    {isEnglish ? "Dr. Hamza Al-Ghamdi" : " د. حمزه الغامدي"}
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
                        "He holds a PhD and Master's degree in Human Resources Management from prestigious universities in Britain and America.",
                        "He led recruitment and attraction teams in major government and private entities inside and outside the Kingdom.",
                        "Provide integrated solutions in developing policies, strategies, and benefits and compensation systems within qualitative human capital projects.",
                        "He managed comprehensive national recruitment projects from A to Z, including leadership and specialized positions in vital sectors.",
                      ]
                    : [
                        "حاصل على الدكتوراه والماجستير في إدارة الموارد البشرية من جامعات مرموقة في بريطانيا وأمريكا",
                        "قاد فرق التوظيف والاستقطاب في جهات حكومية وخاصة كبرى داخل وخارج المملكة",
                        "قدّم حلولاً متكاملة في تطوير السياسات، الاستراتيجيات، ونُظم المزايا والتعويضات ضمن مشاريع نوعية في رأس المال البشري",
                        " أدار مشاريع توظيف وطنية شاملة من الألف إلى الياء، شملت قيادات ومناصب تخصصية في قطاعات حيوية",
                      ]
                  ).map((text, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-black-900">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Eng. Omar Card */}
            <Card
              className="overflow-hidden rounded-xl shadow-xl border-0 group p-0 bg-[#dadada] "
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <div className="relative h-96 w-full overflow-hidden bg-gray-100">
                <Image
                  src={omar}
                  alt="Eng. Omar Al-Ghamdi"
                  fill
                  className="object-cover  "
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

              <CardContent className="p-6 " style={textStyle}>
                <ul className={`${isEnglish ? "space-y-14" : "space-y-16"}`}>
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
                      <span className="text-sm leading-relaxed text-black-900">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* Eng. Omar 2 Card */}
            <Card
              className="overflow-hidden rounded-xl shadow-xl border-0 group p-0 bg-[#dadada] "
              dir={isEnglish ? "ltr" : "rtl"}
            >
              <div className="relative h-96 w-full overflow-hidden bg-gray-100">
                <Image
                  src={omar2}
                  alt="A. Omar Al-Marghlani"
                  fill
                  className="object-cover  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-1" style={textStyle}>
                    {isEnglish ? "A. Omar Al-Marghlani" : "أ. عمر المرغلاني"}
                  </h2>
                  <p className="text-white/80 mb-4" style={textStyle}>
                    {isEnglish
                      ? "Your Legal Advisory & Corporate Compliance"
                      : " مستشارك في الاستشارات القانونية والامتثال المؤسسي "}
                  </p>
                </div>
              </div>

              <CardContent className="p-6 " style={textStyle}>
                <ul className="space-y-2">
                  {(isEnglish
                    ? [
                        "He holds a Master of Laws (LL.M.) from the University of Pennsylvania, USA, with a focus on commercial law, arbitration, and intellectual property.",
                        "A licensed attorney with practical experience in pleading and representing companies before judicial authorities in various labor and commercial cases.",
                        "Provided advanced legal advice in the areas of corporate compliance, company formation, and drafting commercial contracts to local and private entities.",
                        "He is characterized by a professional and analytical style, combining legal rigor and regulatory knowledge, making him a valuable addition to the HRXEL Governance team.",
                      ]
                    : [
                        " حاصل على ماجستير في القانون (LL.M) من جامعة بنسلفانيا – الولايات المتحدة، مع تركيز على القانون التجاري، التحكيم، والملكية الفكرية.",
                        "محامٍ مرخص يتمتع بخبرة عملية في الترافع وتمثيل الشركات أمام الجهات القضائية في قضايا عمالية وتجارية متنوعة.",
                        " قدّم استشارات قانونية متقدمة في مجالات الامتثال المؤسسي، تأسيس الشركات، وصياغة العقود التجارية لجهات محلية وخاصة.",
                        "يتميز بأسلوب احترافي وتحليلي، ويجمع بين الدقة القانونية والمعرفة التنظيمية، مما يجعله إضافة نوعية لفريق الحوكمة في HRXEL.",
                      ]
                  ).map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-black-900">
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
