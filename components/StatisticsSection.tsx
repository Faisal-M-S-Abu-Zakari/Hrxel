"use client";
import { useSwitch } from "@/context/switchContext";

import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { stats } from "@/constants/services";

export function StatisticsSection() {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        ...textStyle,
        backgroundColor: "#283949",
        color: "#deddc1",
      }}
      dir={isEnglish ? "ltr" : "rtl"}
      id="stats"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-4"
      >
        <h2
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
          style={{ color: "#deddc1" }}
        >
          {isEnglish ? "Our Statistics" : "إحصائياتنا"}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.Icon}
              value={stat.value}
              labelAr={stat.labelAr}
              labelEn={stat.labelEn}
              suffix={stat.suffix}
              isEnglish={isEnglish}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
