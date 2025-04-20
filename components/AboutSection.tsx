"use client";

import Image from "next/image";
import { useSwitch } from "@/context/switchContext";
import { sections } from "@/constants/services";

const AboutHRXEL = () => {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  return (
    <section
      className="relative pt-24 pb-32 bg-gradient-to-br from-[#2c3e50] via-[#3a5067] to-[#4b6584] min-h-screen overflow-hidden"
      style={textStyle}
      id="about"
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-white text-4xl font-extrabold tracking-tight">
            {isEnglish ? "About US" : "من نحن"}
          </h1>
          <div className="mt-2 h-1 w-24 bg-white mx-auto rounded-full" />
        </div>
        <div className="space-y-28">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 animate-fade-in-up`}
            >
              {/* Styled Image Container with Custom Border Color */}
              <div
                className="flex-1 border-4 border-[#fca311] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 py-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={section.src}
                  alt={isEnglish ? section.titleEn : section.titleAr}
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
              <div className="flex-1 text-white text-lg leading-relaxed space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {isEnglish ? section.titleEn : section.titleAr}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {(isEnglish ? section.textEn : section.textAr).map(
                    (point, i) => (
                      <li key={i}>{point}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHRXEL;
