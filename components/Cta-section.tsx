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
      className={`py-16 md:py-24 bg-gray-50 text-gray-800  `}
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {isEnglish ? "Ready to Get Started?" : "جاهز للانطلاق؟"}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl">
              {isEnglish
                ? "Take the first step towards transforming your career or organization."
                : "ابدأ الآن بخطوتك الأولى نحو تطوير مسارك المهني أو مؤسستك."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <Button
              className="bg-accent text-black hover:bg-accent/80 font-semibold px-8 py-3 text-lg rounded-xl shadow-md transition"
              size="lg"
              asChild
            >
              <Link href="#contact">
                {isEnglish ? "Join Now" : "انضم الآن"}
              </Link>
            </Button>

            <Button
              className="bg-white text-primary border border-primary hover:bg-gray-100 px-8 py-3 text-lg rounded-xl transition"
              size="lg"
              asChild
            >
              <Link href="#contact">
                {isEnglish ? "Talk to Us" : "تحدث معنا"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
