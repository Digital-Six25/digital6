"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      label: "Dedicated Digital Email Marketing Specialists",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <img
        src="/images/stats-bg.png"
        alt="Decorative Curve"
        className="absolute left-0 top-0 h-full object-contain pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="space-y-[150px]">
          {stats.map((stat, index) => {
            const ref = useRef(null);

            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ["start end", "end start"],
            });

            const scale = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.5, 1, 0.5]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0, 1, 0]
            );

            return (
              <div key={index} ref={ref} className="text-center">
                <motion.div
                  style={{ scale, opacity }}
                  className="text-6xl md:text-7xl lg:text-8xl font-medium font-host-grotesk mb-4 text-primary"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  style={{ scale, opacity }}
                  className="h-px w-60 bg-white mx-auto mb-4"
                />
                <motion.div
                  style={{ scale, opacity }}
                  className="text-gray-400 text-lg md:text-xl font-instrument-sans max-w-md mx-auto"
                >
                  {stat.label}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
