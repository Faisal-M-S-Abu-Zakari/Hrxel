"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/newLogo-removebg-preview.png";
import { useSwitch } from "@/context/switchContext";
import Link from "next/link";

export function HeroSection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  return (
    <section
      className="relative pt-0 md:pt-10 pb-16 md:pb-28 bg-gradient-to-br from-[#1a2836] via-[#283949] to-[#354a5d] min-h-[calc(100vh-64px)] overflow-hidden"
      style={textStyle}
    >
      <div className="container relative z-10 px-4 md:px-6 mx-auto flex items-center justify-center">
        <div
          className={`grid gap-12 md:gap-20 lg:gap-32 lg:grid-cols-2 items-center ${
            isEnglish ? "" : "flex-row-reverse px-3"
          }`}
          dir={isEnglish ? "ltr" : "rtl"}
        >
          {/* Text content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                HR<span className="text-[#F39921]">X</span>EL
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                {isEnglish
                  ? "Your Partner for Human Capital Solutions & Organizational Excellence"
                  : "شريكك لحلول رأس المال البشري والتميّز المؤسسي"}
              </p>
              <p className="text-base md:text-lg font-semibold text-[#F39921]">
                {isEnglish ? "We know our market best" : "حنّا أدرى بسوقنا"}
              </p>
            </div>
            <p className="max-w-2xl text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              {isEnglish
                ? "A Saudi platform specializing in providing integrated solutions for individuals and companies in the fields of human capital, organizational excellence, and executive search, with local expertise and deep knowledge of the Saudi market."
                : "منصة سعودية متخصصة في تقديم حلول متكاملة للأفراد والشركات في مجالات رأس المال البشري والتميّز المؤسسي والبحث التنفيذي، بخبرة محلية ومعرفة عميقة بالسوق السعودي."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
              <Link href="/">
                <Button className="bg-[#F39921] hover:bg-[#e08c23] transition-all duration-300 px-6 py-4 text-lg rounded-xl text-white shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <span className="font-arabic">
                    {isEnglish
                      ? "We know best... start with us"
                      : "حنّا أدرى... ابدأ معنا"}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="order-1 lg:order-2 relative w-full max-w-[380px] md:max-w-[500px] lg:max-w-[620px] aspect-square mx-auto">
            <Image
              src={logo}
              alt="HRXEL"
              fill
              sizes="(max-width: 768px) 380px, (max-width: 1024px) 500px, 620px"
              className="object-contain p-2 sm:p-3 md:p-5 lg:p-6"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
