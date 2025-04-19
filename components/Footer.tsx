"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useSwitch } from "@/context/switchContext";
import logo from "@/public/logo-mark.jpg";
import { content, socialLinks } from "@/constants/services";
const serviceItems = [
  {
    id: "human-capital",
    en: "Human Capital Service",
    ar: "خدمات رأس المال البشري",
  },
  {
    id: "organizational-excellence",
    en: "Organizational Excellence Service",
    ar: "خدمات التميز المؤسسي",
  },
  {
    id: "supply-chain",
    en: "Supply Chain Service",
    ar: "خدمات سلاسل الإمداد",
  },
  {
    id: "legal-advisory",
    en: "Legal Advisory Corporate Compliance",
    ar: "الاستشارات القانونية والامتثال المؤسسي",
  },
  {
    id: "individual-career",
    en: "Individual Career Development Service",
    ar: "خدمات الأفراد وتطوير المسار المهني",
  },
];
export function Footer() {
  const { isEnglish } = useSwitch();
  const lang = isEnglish ? content.en : content.ar;
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
                ? "A Saudi consulting firm reshaping human capital, building institutional excellence, enhancing governance, and advancing supply chains and individual development... with Saudi nationals who understand their market."
                : "شركة استشارية سعودية تعمل على إعادة تشكيل رأس المال البشري، وبناء التميز المؤسسي، وتعزيز الحوكمة، وتطوير سلاسل التوريد والتطوير الفردي... من خلال كوادر سعودية تفهم سوقها."}
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
              {serviceItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="hover:text-[#F39921] transition"
                  >
                    {isEnglish ? item.en : item.ar}
                  </Link>
                </li>
              ))}
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
                <Link
                  href="#contact"
                  className="hover:text-[#F39921] transition"
                >
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
          {/* Social & Contact */}
          <div>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F39921] transition px-3"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <span className="font-medium">{lang.emailLabel}</span>
                <a
                  href="mailto:info@hrxel.com"
                  className="hover:text-[#F39921] transition"
                >
                  info@hrxel.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">{lang.phoneLabel}:</span>
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
