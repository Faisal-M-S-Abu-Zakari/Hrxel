"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/newLogo-removebg-preview.png";
import { useSwitch } from "@/context/switchContext";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { content, socialLinks } from "@/constants/services";

// Framer Motion Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export function HeroSection() {
  const { isEnglish } = useSwitch();
  const lang = isEnglish ? content.en : content.ar;
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  return (
    <section
      className="relative pt-16 md:pt-24 pb-20 md:pb-36 bg-gradient-to-br from-[#2c3e50] via-[#3a5067] to-[#4b6584] min-h-[calc(100vh-64px)] overflow-hidden"
      style={textStyle}
      lang={isEnglish ? "en" : "ar"}
    >
      <div className="container relative z-10 px-4 md:px-8 mx-auto flex items-center justify-center">
        <div
          className={`grid gap-14 md:gap-20 lg:gap-28 lg:grid-cols-2 items-center ${
            isEnglish ? "" : "flex-row-reverse px-3"
          }`}
          dir={isEnglish ? "ltr" : "rtl"}
        >
          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
              <div className="flex flex-col items-start text-xl md:text-3xl text-gray-200 font-light animate-fade-in">
                <p>{lang.introText}</p>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold whitespace-nowrap pr-4">
                  <Typewriter
                    words={lang.typewriterWords}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>

              <p className="text-base md:text-lg font-semibold text-[#F39921]">
                {lang.slogan}
              </p>
            </div>
            <p className="max-w-2xl text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              {lang.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/">
                <Button className="bg-[#F39921] hover:bg-[#e08c23] transition-all duration-300 px-6 py-4 text-lg rounded-xl text-white shadow-md hover:shadow-lg hover:-translate-y-1">
                  {lang.heading}
                </Button>
              </Link>
            </div>
            z{/* Social & Contact */}
            <div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group px-3"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#deddc1]/10 border border-[#deddc1]/30 hover:bg-[#dacb4a]/20 hover:border-[#F39921] transition-all duration-300 ">
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-[#F39921] transition-colors duration-300 " />
                    </div>
                    <span className="sr-only">{label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-300 space-y-5 px-3">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#FFF]">
                    {lang.emailLabel}
                  </span>
                  <a
                    href="mailto:info@hrxel.com"
                    className="hover:text-[#F39921] transition"
                  >
                    info@hrxel.com
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#FFF]">
                    {lang.phoneLabel}:
                  </span>
                  <a
                    href="tel:+966594881412"
                    className="hover:text-[#F39921] transition"
                  >
                    0594881412
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2 relative w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px] aspect-square mx-auto"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Image
              src={logo}
              alt="HRXEL"
              fill
              sizes="(max-width: 768px) 380px, (max-width: 1024px) 500px, 600px"
              className="object-contain p-2 sm:p-4 md:p-6 lg:p-8"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
