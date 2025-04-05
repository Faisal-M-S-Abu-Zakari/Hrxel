"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo-without-bg.png";
import { motion } from "framer-motion";
import { useSwitch } from "@/context/switchContext";

export function HeroSection() {
  const { isEnglish } = useSwitch();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#fefaf4] to-[#f8f9fb] h=[calc(100vh-64px)]">
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-center">
        <div
          className={`grid gap-28 lg:grid-cols-2 items-center ${
            isEnglish ? "" : "flex-row-reverse px-3"
          }`}
          dir={isEnglish ? "ltr" : "rtl"}
        >
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F3141]">
                HRXEL
              </h1>
              <p className="text-xl text-[#283949]">
                {isEnglish
                  ? "Your Partner for Human Capital Solutions & Organizational Excellence"
                  : "شريكك لحلول رأس المال البشري والتميّز المؤسسي"}
              </p>
              <p className="text-lg font-arabic font-medium text-[#F39921]">
                {isEnglish ? "We know our market best" : "حنّا أدرى بسوقنا"}
              </p>
            </div>
            <p className="max-w-xl text-[#243545] text-base md:text-lg">
              {isEnglish
                ? "A Saudi platform specializing in providing integrated solutions for individuals and companies in the fields of human capital, organizational excellence, and executive search, with local expertise and deep knowledge of the Saudi market."
                : "منصة سعودية متخصصة في تقديم حلول متكاملة للأفراد والشركات في مجالات رأس المال البشري والتميّز المؤسسي واستقطاب التنفيذيين، بخبرة محلية ومعرفة عميقة بالسوق السعودي."}
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
            className="relative w-full max-w-[500px] aspect-square bg-orange-50 rounded-full shadow-lg"
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={logo}
              alt="HRXEL"
              fill
              className="object-contain p-10 md:p-16"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
