"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/newLogo.jpg"; // Make sure this matches the Hero logo
import { useSwitch } from "@/context/switchContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEnglish, toggleLanguage } = useSwitch();

  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  const navItems = [
    { id: "about", en: "About", ar: "حول" },
    { id: "consultants", en: "Consultants", ar: "المستشارون" },
    { id: "services", en: "Services", ar: "الخدمات" },
    { id: "contact", en: "Contact", ar: "اتصل بنا" },
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
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="border-white text-white  text-sm font-medium hover:text-[#F39921] transition"
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
      {isMenuOpen && (
        <div className="md:hidden container py-4 border-t border-[#ffffff22] bg-[#283949]">
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

            <Button className="bg-[#F39921] hover:bg-[#d9821b] w-full text-white rounded-xl">
              <span className="font-arabic">
                {isEnglish
                  ? "We know best... start with us"
                  : "حنّا أدرى... ابدأ معنا"}
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
