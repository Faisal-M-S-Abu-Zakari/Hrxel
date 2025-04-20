import BackToTop from "@/components/BackToTop";
import { ConsultantsSection } from "@/components/Consultants-section";
import { CTASection } from "@/components/Cta-section";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero-section";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "./../components/Services-section";
import { StatisticsSection } from "@/components/StatisticsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatisticsSection />
        <AboutSection />
        <ConsultantsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
