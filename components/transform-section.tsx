"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TransformSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const headingLines = ["We Transform It Into", "A Powerful", "Revenue Engine"];

  const leftTags = [
    { text: "Customer Loyalty", color: "bg-[#FD893E]" },
    { text: "Overview", color: "bg-purple-600" },
  ];

  const rightTags = [
    { text: "SMS", color: "bg-teal-500" },
    { text: "Data Management", color: "bg-yellow-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Top badges */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#FD893E] rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-instrument-sans">
              Lifetime Value
            </span>
          </div>
          <div className="text-gray-300 text-sm font-instrument-sans">
            Digital Six
          </div>
        </div>
        {/* Image and Content wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Central Image */}
          <div className="relative w-[418px] h-[472px]">
            <Image
              src="/images/lifetime-value.jpg"
              alt="Workspace Setup"
              fill
              className="object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Absolute Text Content over the image */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center space-y-10">
            {/* Subtitle */}
            <p className="text-gray-300 text-lg font-instrument-sans">
              Our team doesn't just manage your email marketing.
            </p>

            {/* Main Title with Overlapping Tags */}
            <div className="relative inline-block">
              {/* Left Tags */}
              <motion.div
                className="absolute -left-32 top-8 space-y-4 hidden lg:block"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                {leftTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      type: "spring",
                      bounce: 0.4,
                      delay: 0.2 + index * 0.15,
                    }}
                    className="flex justify-end"
                  >
                    <span
                      className={`${tag.color} text-white px-4 py-2 rounded-full text-sm font-semibold font-instrument-sans shadow-lg`}
                    >
                      {tag.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h2
                className="font-host-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
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
                {headingLines.map((line, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { ease: "easeOut", duration: 0.8 },
                      },
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.h2>

              {/* Right Tags */}
              <motion.div
                className="absolute -right-32 top-8 space-y-4 hidden lg:block"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.9,
                  delay: 0.2,
                }}
              >
                {rightTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      type: "spring",
                      bounce: 0.4,
                      delay: 0.2 + index * 0.15,
                    }}
                  >
                    <span
                      className={`${tag.color} text-white px-4 py-2 rounded-full text-sm font-semibold font-instrument-sans shadow-lg`}
                    >
                      {tag.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Tags */}
            <div className="flex flex-wrap justify-center gap-4 lg:hidden">
              {[...leftTags, ...rightTags].map((tag, index) => (
                <span
                  key={index}
                  className={`${tag.color} text-white px-4 py-2 rounded-full text-sm font-semibold font-instrument-sans shadow-lg`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
