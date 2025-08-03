"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CtaButton from "./cta-button";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Email Flows",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-1.jpg",
      buttonText: "Let's Get Started",
    },
    {
      id: "02",
      title: "Email Campaigns",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-2.jpg",
      buttonText: "Let's Get Started",
    },
    {
      id: "03",
      title: "Ecom Specific",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-3.jpg",
      buttonText: "Let's Get Started",
    },
    {
      id: "04",
      title: "Automation",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-4.jpg",
      buttonText: "Let's Get Started",
    },
    {
      id: "05",
      title: "Segmentation",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-5.jpg",
      buttonText: "Let's Get Started",
    },
    {
      id: "06",
      title: "SMS Campaigns",
      description:
        "AOV-focused leading email marketing agency, we design strategic flows that guide customers through targeted interactions, boosting conversions and maximizing revenue with every touchpoint.",
      image: "/images/expertise-6.jpg",
      buttonText: "Let's Get Started",
    },
  ];

  const containerRef = useRef(null);

  // Scroll progress of entire container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section className="relative bg-black py-24">
      <img
        src="/images/get-started-bg.png"
        alt="Decorative Curve Right"
        className="absolute right-0 top-0 h-full object-contain pointer-events-none select-none z-0"
      />
      {/* Top badges */}
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#FD893E] rounded-full"></div>
            <span className="text-gray-400 text-sm font-instrument-sans">
              Our Expertise
            </span>
          </div>

          <div className="text-white text-sm font-instrument-sans">
            Digital Six
          </div>
        </div>

        {/* Services Card */}
        <div className="space-y-8 relative z-10">
          {services.map((service, index) => {
            const total = services.length;
            const chunk = 1 / total;

            // start and end scroll progress for this card
            const start = index * chunk;
            const end = start + chunk;

            // scale & opacity stays 1 while scroll progress is within card's chunk,
            // then scales down to 0 as next card scroll progress enters its chunk
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
            const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

            return (
              <motion.div
                key={service.id}
                style={{ scale, opacity: 1 }}
                className="sticky top-4 bg-black border border-gray-800 p-8 group overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute -left-24 -top-20 text-[254px] font-semibold text-primary/10 font-host-grotesk pointer-events-none">
                  {service.id}
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="font-host-grotesk text-3xl md:text-6xl font-normal text-white">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed font-instrument-sans max-w-lg">
                      {service.description}
                    </p>

                    <div className="pt-4">
                      <CtaButton path="#contact" text={service.buttonText} />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="relative h-[313px] w-full max-w-[509px] ml-auto overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
