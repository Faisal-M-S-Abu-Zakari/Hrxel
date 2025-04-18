"use client";

import { Button } from "@/components/ui/button";
import { useSwitch } from "@/context/switchContext";
import Link from "next/link";

export function CTASection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-[#2c3e50] via-[#3a5067] to-[#4b6584] text-gray-800"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="mb-16 text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isEnglish ? "Ready to Get Started?" : "جاهز للانطلاق؟"}
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              {isEnglish
                ? "Take the first step towards transforming your career or organization."
                : "ابدأ الآن بخطوتك الأولى نحو تطوير مسارك المهني أو مؤسستك."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/">
                <Button className="bg-[#F39921] hover:bg-[#e08c23] transition-all duration-300 px-6 py-4 text-lg rounded-xl text-white shadow-md hover:shadow-lg hover:-translate-y-1  cursor-pointer">
                  <span className="font-arabic">
                    {isEnglish
                      ? "We know best... start with us"
                      : "حنّا أدرى... ابدأ معنا"}
                  </span>
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/">
                <Button
                  className="bg-white text-primary border border-primary hover:bg-gray-100  transition duration-300 px-6 py-4 text-lg rounded-xl  shadow-md hover:shadow-lg hover:-translate-y-1  cursor-pointer"
                  size="lg"
                  asChild
                >
                  <Link href="#contact">
                    {isEnglish ? "Talk to Us" : "تحدث معنا"}
                  </Link>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
