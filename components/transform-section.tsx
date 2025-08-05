"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TransformSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const headingLines = [
    {
      desktop: "We Transform It Into",
      mobile: (
        <>
          We Transform{" "}
          <span id="word-it" className="relative inline-block">
            It
          </span>{" "}
          Into A
        </>
      ),
    },
    {
      desktop: "A Powerful",
      mobile: (
        <>
          <span id="word-powerful" className="relative inline-block">
            Powerful
          </span>
        </>
      ),
    },
    {
      desktop: "Revenue Engine",
      mobile: (
        <>
          <span id="word-revenue" className="relative inline-block">
            Revenue
          </span>
          <br />
          <span id="word-engine" className="relative inline-block">
            Engine
          </span>
        </>
      ),
    },
  ];

  const leftTags = [
    {
      text: "Customer Loyalty",
      color: "bg-teal-500",
      style: "top-[1.0rem] left-[2.5rem]",
      styleMobile: "-top-[14.2rem] -left-[2.0rem]", // Mobile
    },
    {
      text: "SMS",
      color: "bg-purple-600",
      style: "top-[7.2rem] left-[8.8rem]",
      styleMobile: "-top-[3.8rem] left-[2.5rem]", //Mobile
    },
  ];
  const rightTags = [
    {
      text: "Reviews",
      color: "bg-purple-600",
      style: "top-[3.0rem] right-[11rem]",
      styleMobile: "-top-[15.9rem] left-[14.8rem]", //Mobile
    },
    {
      text: "CRM Management",
      color: "bg-teal-500",
      style: "top-[7.4rem] right-[3.8rem]",
      styleMobile: "-top-[10rem] -right-[3rem]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black sm:py-24 overflow-hidden"
    >
      {/* Top badges */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between w-full mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#FD893E] rounded-full animate-pulse" />
            <span className="text-gray-300 sm:text-lg font-normal font-instrument-sans">
              Lifetime Value
            </span>
          </div>
          <div className="text-gray-300 sm:text-lg font-normal font-instrument-sans">
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
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center space-y-8 mt-12 sm:mt-0">
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
                    className={`absolute ${tag.style}`}
                  >
                    <span
                      className={`${tag.color} text-black whitespace-nowrap px-4 py-2 rounded-full text-base font-normal font-instrument-sans`}
                    >
                      {tag.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h2
                className="font-host-grotesk text-5xl md:text-5xl lg:text-6xl font-medium text-white leading-tight"
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
                    <span className="block lg:hidden">{line.mobile}</span>
                    <span className="hidden lg:block">{line.desktop}</span>
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
                    className={`absolute ${tag.style}`}
                  >
                    <span
                      className={`${tag.color} text-black whitespace-nowrap px-4 py-2 rounded-full text-base font-normal font-instrument-sans shadow-lg`}
                    >
                      {tag.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Tags */}
            <span id="word-it" className="relative block lg:hidden">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.2,
                }}
                className="absolute -top-56 right-14"
              >
                <span className="bg-teal-500 text-black whitespace-nowrap px-2 py-[4px] rounded-full text-sm font-light font-instrument-sans shadow-md">
                  Customer Loyalty
                </span>
              </motion.div>
            </span>

            {/* SMS tag over "Engine" */}
            <span id="word-engine" className="relative block lg:hidden">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.3,
                }}
                className="absolute -top-20 right-16"
              >
                <span className="bg-purple-600 text-black whitespace-nowrap px-2 py-[4px] rounded-full text-sm font-light font-instrument-sans shadow-md">
                  SMS
                </span>
              </motion.div>
            </span>
            <span id="word-it" className="relative block lg:hidden">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.2,
                }}
                className="absolute -top-56 left-14"
              >
                <span className="bg-teal-500 text-black whitespace-nowrap px-2 py-[4px] rounded-full text-sm font-light font-instrument-sans shadow-md">
                  CRM Management
                </span>
              </motion.div>
            </span>

            {/* SMS tag over "Engine" */}
            <span id="word-engine" className="relative block lg:hidden">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.3,
                }}
                className="absolute bottom-80 left-20"
              >
                <span className="bg-purple-600 text-black whitespace-nowrap px-2 py-[4px] rounded-full text-sm font-light font-instrument-sans shadow-md">
                  Reviews
                </span>
              </motion.div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
