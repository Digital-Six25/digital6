"use client";
import { motion } from "framer-motion";

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
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="space-y-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-6xl md:text-7xl lg:text-8xl font-medium font-host-grotesk mb-4 text-primary`}
              >
                {stat.value}
              </div>
              <div className="h-px w-60 bg-white mx-auto mb-4" />
              <div className="text-gray-400 text-lg md:text-xl font-instrument-sans max-w-md mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
