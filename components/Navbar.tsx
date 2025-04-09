"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo-mark-without-pg.png";
import { useSwitch } from "@/context/switchContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEnglish, toggleLanguage } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white text-[#1F3141] backdrop-blur shadow-sm px-3"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center gap-6">
          {["about", "consultants", "services", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
            >
              {isEnglish
                ? section.charAt(0).toUpperCase() + section.slice(1)
                : section === "about"
                ? "حول"
                : section === "consultants"
                ? "المستشارون"
                : section === "services"
                ? "الخدمات"
                : "اتصل بنا"}
            </Link>
          ))}
        </nav>
        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="border-[#F39921] text-[#F39921] hover:bg-[#f3992111]"
          >
            {isEnglish ? "العربية" : "English"}
          </Button>
          {/* Hamburger menu on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-[#1F3141]"
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
        <div className="md:hidden container py-4 border-t border-[#e5e7eb] bg-white">
          <nav className="flex flex-col space-y-4">
            {["about", "consultants", "services", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {isEnglish
                  ? section.charAt(0).toUpperCase() + section.slice(1)
                  : section === "about"
                  ? "حول"
                  : section === "consultants"
                  ? "المستشارون"
                  : section === "services"
                  ? "الخدمات"
                  : "اتصل بنا"}
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
