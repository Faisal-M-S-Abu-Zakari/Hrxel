"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/newLogo-removebg-preview.png";
import { useSwitch } from "@/context/switchContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isEnglish, toggleLanguage } = useSwitch();

  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  const navItems = [
    { id: "stats", en: "Statistics", ar: "احصائيات" },
    { id: "about", en: "About", ar: "حول" },
    { id: "consultants", en: "Consultants", ar: "المستشارون" },
    { id: "contact", en: "Contact", ar: "اتصل بنا" },
  ];

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

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#283949] shadow-md px-3 text-white"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="h-auto w-auto rounded-md"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center gap-6">
          {navItems.map(({ id, en, ar }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-sm font-medium hover:text-[#F39921] transition"
            >
              {isEnglish ? en : ar}
            </Link>
          ))}
          {/* Services Dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-sm font-medium hover:text-[#F39921] transition"
            >
              {isEnglish ? "Services" : "الخدمات"}
            </Button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 mt-2 w-56 bg-white text-black rounded-md shadow-lg"
                >
                  {serviceItems.map(({ id, en, ar }) => (
                    <Link
                      key={id}
                      href={`#${id}`}
                      className="block px-4 py-2 text-sm hover:bg-[#F39921] hover:text-white transition"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {isEnglish ? en : ar}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="border-white text-white text-sm font-medium hover:text-[#F39921] transition"
          >
            {isEnglish ? "العربية" : "English"}
          </Button>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden container py-4 border-t border-[#ffffff22] bg-[#283949]"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map(({ id, en, ar }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="text-sm font-medium hover:text-[#F39921] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isEnglish ? en : ar}
                </Link>
              ))}

              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-sm font-medium hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Services" : "الخدمات"}
                </Button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 mt-2 w-56 bg-white text-black rounded-md shadow-lg"
                    >
                      {serviceItems.map(({ id, en, ar }) => (
                        <Link
                          key={id}
                          href={`#${id}`}
                          className="block px-4 py-2 text-sm hover:bg-[#F39921] hover:text-white transition"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {isEnglish ? en : ar}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button className="bg-[#F39921] hover:bg-[#d9821b] w-full text-white rounded-xl">
                {isEnglish
                  ? "We know best... start with us"
                  : "حنّا أدرى... ابدأ معنا"}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
