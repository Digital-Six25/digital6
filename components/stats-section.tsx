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

            // Helper to get staggered opacity transforms for each letter
            const getLetterOpacityTransforms = (length: number) => {
              const transforms = [];
              for (let i = 0; i < length; i++) {
                const delayIn = i / (length * 2);
                const delayOut = 0.5 + i / (length * 2);
                transforms.push(
                  useTransform(
                    scrollYProgress,
                    [delayIn, 0.5, delayOut + 0.1],
                    [0, 1, 0]
                  )
                );
              }
              return transforms;
            };

            const valueLetters = stat.value.split("");
            const valueOpacities = getLetterOpacityTransforms(
              valueLetters.length
            );

            const labelLetters = stat.label.split("");
            const labelOpacities = getLetterOpacityTransforms(
              labelLetters.length
            );

            return (
              <div key={index} ref={ref} className="text-center">
                <div
                  style={{ scale: scale as any }}
                  className="text-6xl md:text-7xl lg:text-8xl font-medium font-host-grotesk mb-4 text-primary inline-block"
                >
                  {valueLetters.map((char, i) => (
                    <motion.span
                      key={i}
                      style={{ opacity: valueOpacities[i] }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  style={{ scale: scale as any }}
                  className="h-px w-60 bg-white mx-auto mb-4"
                />

                <div
                  style={{ scale: scale as any }}
                  className="text-gray-400 text-lg md:text-xl font-instrument-sans max-w-md mx-auto inline-block"
                >
                  {labelLetters.map((char, i) => (
                    <motion.span
                      key={i}
                      style={{ opacity: labelOpacities[i] }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
