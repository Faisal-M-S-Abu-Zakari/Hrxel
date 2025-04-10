"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useSwitch } from "@/context/switchContext";
import logo from "@/public/newLogo.jpg";

export function Footer() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <footer
      className={`bg-[#283949] text-white py-12 ${
        isEnglish ? "font-elegant" : "font-arabic rtl"
      }`}
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-[#F39921]">
                <Image
                  src={logo}
                  alt="HRXEL Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              {isEnglish
                ? "A Saudi platform specializing in human capital solutions, organizational excellence, and executive search."
                : "منصة سعودية متخصصة في حلول رأس المال البشري، والتميز المؤسسي، والبحث التنفيذي."}
            </p>
            <p className="text-lg font-arabic text-[#F39921]">
              {isEnglish
                ? "We know best... start with us"
                : "حنّا أدرى... ابدأ معنا"}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {isEnglish ? "Services" : "الخدمات"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#individualServices"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Individual Services" : "خدمات الأفراد"}
                </Link>
              </li>
              <li>
                <Link
                  href="#companyServices"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Company Services" : "خدمات الشركات"}
                </Link>
              </li>
              <li>
                <Link
                  href="#executiveServices"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Executive Search" : "البحث التنفيذي"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {isEnglish ? "Company" : "الشركة"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-[#F39921] transition">
                  {isEnglish ? "About Us" : "من نحن"}
                </Link>
              </li>
              <li>
                <Link
                  href="#consultants"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Our Consultants" : "مستشارونا"}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Our Services" : "خدماتنا"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F39921] transition">
                  {isEnglish ? "Contact" : "تواصل معنا"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              {isEnglish ? "Connect With Us" : "تواصل معنا"}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link
                href="https://twitter.com/hrxel_company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F39921] transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/hrxel.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F39921] transition px-3"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hrxel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F39921] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:info@hrxel.com"
                  className="hover:text-[#F39921] transition"
                >
                  info@hrxel.com
                </a>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="font-medium">
                  {isEnglish ? "Phone" : "الهاتف"}:
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
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>
            © {new Date().getFullYear()} HRXEL.{" "}
            {isEnglish ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
}
