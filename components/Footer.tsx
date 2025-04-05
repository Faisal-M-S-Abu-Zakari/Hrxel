"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useSwitch } from "@/context/switchContext";
import logo from "@/public/logo.jpg";

export function Footer() {
  const { isEnglish } = useSwitch();

  return (
    <footer
      className="bg-gradient-to-br from-[#1f1f1f] via-[#2c2c2c] to-[#1a1a1a] text-white py-12 "
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-20 h-20">
                <Image
                  src={logo}
                  alt="HRXEL Logo"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full rounded-full border-4 border-primary shadow-lg"
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
                  href="#services"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Individual Services" : "خدمات الأفراد"}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#F39921] transition"
                >
                  {isEnglish ? "Corporate Services" : "خدمات الشركات"}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
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
                <Link href="#" className="hover:text-[#F39921] transition">
                  {isEnglish ? "Careers" : "الوظائف"}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F39921] transition">
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
                href="#"
                className="text-gray-400 hover:text-[#F39921] transition"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F39921] transition"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F39921] transition px-3"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F39921] transition"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Email: info@hrxel.com</p>
              <p>{isEnglish ? "Phone" : "الهاتف"}: +966 12 345 6789</p>
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
