"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo-without-bg.png";
import { motion } from "framer-motion";
import { useSwitch } from "@/context/switchContext";

export function HeroSection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <section
      className="py-12 md:py-24 bg-gradient-to-br from-white via-[#fefaf4] to-[#f8f9fb] min-h-[calc(100vh-64px)]"
      style={textStyle}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-center">
        <div
          className={`grid gap-8 md:gap-16 lg:gap-28 lg:grid-cols-2 items-center ${
            isEnglish ? "" : "flex-row-reverse px-3"
          }`}
          dir={isEnglish ? "ltr" : "rtl"}
        >
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F3141]">
                HRXEL
              </h1>
              <p className="text-lg md:text-xl text-[#283949]">
                {isEnglish
                  ? "Your Partner for Human Capital Solutions & Organizational Excellence"
                  : "شريكك لحلول رأس المال البشري والتميّز المؤسسي"}
              </p>
              <p className="text-base md:text-lg font-arabic font-medium text-[#F39921]">
                {isEnglish ? "We know our market best" : "حنّا أدرى بسوقنا"}
              </p>
            </div>
            <p className="max-w-xl text-[#243545] text-sm md:text-base lg:text-lg">
              {isEnglish
                ? "A Saudi platform specializing in providing integrated solutions for individuals and companies in the fields of human capital, organizational excellence, and executive search, with local expertise and deep knowledge of the Saudi market."
                : "منصة سعودية متخصصة في تقديم حلول متكاملة للأفراد والشركات في مجالات رأس المال البشري والتميّز المؤسسي والبحث التنفيذي، بخبرة محلية ومعرفة عميقة بالسوق السعودي."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F39921] hover:bg-[#d9821b] transition px-4 py-2 rounded-xl text-white">
                <span className="font-arabic">
                  {isEnglish
                    ? "We know best... start with us"
                    : "حنّا أدرى... ابدأ معنا"}
                </span>
              </Button>
            </div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[250px] md:max-w-[350px] lg:max-w-[500px] aspect-square bg-orange-50 rounded-full shadow-lg order-1 lg:order-2"
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt="HRXEL"
              fill
              sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 500px"
              className="object-contain p-6 sm:p-8 md:p-12 lg:p-16"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
