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

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white text-[#1F3141] backdrop-blur shadow-sm px-3"
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <div className="container flex h-16 items-center justify-between">
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

          <span className="hidden md:inline-block text-sm font-arabic font-medium text-[#283949]">
            {isEnglish ? "We know our market best" : "حنّا أدرى بسوقنا"}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
          >
            {isEnglish ? "About" : "حول"}
          </Link>

          <Link
            href="#consultants"
            className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
          >
            {isEnglish ? "Consultants" : "المستشارون"}
          </Link>

          <Link
            href="#services"
            className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
          >
            {isEnglish ? "Services" : "الخدمات"}
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
          >
            {isEnglish ? "Contact" : "اتصل بنا"}
          </Link>

          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="border-[#F39921] text-[#F39921] hover:bg-[#f3992111]"
          >
            {isEnglish ? "العربية" : "English"}
          </Button>
        </nav>

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

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t border-[#e5e7eb] bg-white">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "About" : "حول"}
            </Link>

            <Link
              href="#consultants"
              className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Consultants" : "المستشارون"}
            </Link>

            <Link
              href="#services"
              className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Services" : "الخدمات"}
            </Link>

            <Link
              href="#contact"
              className="text-sm font-medium text-[#283949] hover:text-[#F39921] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {isEnglish ? "Contact" : "اتصل بنا"}
            </Link>

            <Button className="bg-[#F39921] hover:bg-[#d9821b] w-full text-white rounded-xl">
              <span className="font-arabic">
                {isEnglish
                  ? "We know best... start with us"
                  : "حنّا أدرى... ابدأ معنا"}
              </span>
            </Button>

            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="border-[#F39921] text-[#F39921] hover:bg-[#f3992111]"
            >
              {isEnglish ? "العربية" : "English"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
