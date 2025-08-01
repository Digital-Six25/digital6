"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CtaButton from "./cta-button";

export default function CustomerRetentionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const lines = [
    <>
      It Costs You <span className="text-[#FD893E]">5x More</span>
    </>,
    <>To Acquire A New</>,
    <>Customer Than</>,
    <>
      {" "}
      <span className="text-[#FD893E]">Keep One</span>
    </>,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 overflow-hidden"
    >
      <img
        src="/images/get-started-bg.png" // make sure it's placed in /public/images
        alt="Decorative Curve Right"
        className="absolute right-0 top-0 h-full object-contain pointer-events-none select-none z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top badges */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
            <span className="text-gray-400 text-sm">Let's Get Started</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Phone Mockup */}
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src="/images/Floating phone _ Vertical.gif"
                  alt="Phone App Interface"
                  fill
                  className="object-cover"
                />
                {/* Phone screen overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>

              {/* Phone notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Title with Rotating Text */}
            <div className="relative mb-6">
              {/* Rotating circular text - positioned closer to title */}
              <div className="absolute -top-12 -right-2 z-20">
                <div className="w-[94px] h-[93px] relative">
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text
                      className="text-xs font-instrument-sans"
                      fill="#FFFFFF"
                      fillOpacity="0.6"
                    >
                      <textPath href="#circle" startOffset="0%">
                        DIGITAL SIX • DIGITAL SIX • DIGITAL SIX •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              <motion.h2
                className="font-host-grotesk text-white leading-[90%] tracking-[-0.03em] text-5xl sm:text-6xl font-medium text-center sm:text-left"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                  hidden: {},
                }}
              >
                {lines.map((line, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                      },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.h2>
            </div>

            <div className="space-y-6 text-gray-300 font-instrument-sans">
              <p className="text-lg leading-relaxed">
                Smart ecom-brands don't just send emails - they build revenue
                machines. Because in today's digital landscape, targeting your
                newsletter list is a strategy... it's survival.
              </p>

              <p className="text-lg leading-relaxed">
                We are your dedicated email marketing agency, committed to
                delivering impactful results. Our team of specialists crafts
                data-driven campaigns that captivate audiences, strengthen
                relationships, and drive measurable growth.
              </p>
            </div>
            <CtaButton path="#contact" text="Reignite Your Database" />
          </div>
        </div>
      </div>
    </section>
  );
}
