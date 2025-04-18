import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  labelAr: string;
  labelEn: string;
  suffix?: string;
  isEnglish: boolean;
  delay: number;
}

export function StatCard({
  icon: Icon,
  value,
  labelAr,
  labelEn,
  suffix,
  isEnglish,
  delay,
}: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden py-12 px-6 bg-gradient-to-br from-[#1a2836] via-[#223344] to-[#2f4156] border-b-4 border-[#fca311] rounded-xl shadow-[0_4px_20px_rgba(252,163,17,0.15)]"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#283949] to-[#283949] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-[#dacb4a]" />
        </div>

        <div className="text-xl font-bold text-[#deddc1]">
          {inView ? (
            <CountUp
              end={value}
              duration={2}
              suffix={suffix}
              separator=","
              decimal="."
              decimals={0}
              enableScrollSpy
              scrollSpyDelay={100}
            />
          ) : (
            <span className="opacity-0">
              {value}
              {suffix}
            </span>
          )}
        </div>

        <p className="mt-1 text-center text-sm text-[#deddc1]">
          {isEnglish ? labelEn : labelAr}
        </p>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#283949]/10 to-[#283949]/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
