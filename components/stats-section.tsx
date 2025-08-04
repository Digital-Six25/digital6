"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      value: "$20M+",
      label: "Client Revenue Generated",
    },
    {
      value: "10x",
      label: "Average Client ROI",
    },
    {
      value: "1000+",
      label: "Clients Serviced",
    },
    {
      value: "75+",
      label: "Combined Years of Email Marketing Experience",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const letterVariant: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 10,
      transition: {
        delay: i * 0.05, // exit delay now matches each character
        duration: 0.4,
        ease: [0.42, 0, 1, 1],
      },
    }),
  };

  return (
    <section className="relative bg-black min-h-[50vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/stats-bg.png"
        alt="Decorative Curve"
        className="absolute left-0 top-0 h-full object-contain pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95 }}
            className="space-y-6"
          >
            <div className="text-primary text-5xl md:text-6xl lg:text-7xl font-medium font-host-grotesk inline-block">
              {stats[activeIndex].value.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.div className="h-px w-60 bg-white mx-auto" />

            <div className="text-gray-400 text-lg md:text-xl font-instrument-sans max-w-md mx-auto inline-block">
              {stats[activeIndex].label.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
