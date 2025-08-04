"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: "/images/case-study-1.jpg",
      tags: ["Email Marketing"],
      title: "219% Surge In Annual Revenue",
      description:
        "Discover how our partnership pumped an impressive $20,000 into the client's pocket in just one month, transforming their financial outlook and enabling them to invest in new opportunities.",
      link: "https://digitalsix.com.au/case-study/igniting-revenue-growth-with-klaviyo-a-digital-six-success-story/",
    },
    {
      id: 2,
      image: "/images/case-study-2.jpg",
      tags: ["Email Marketing"],
      title: "Unbeatable Business Insights",
      description:
        "We didn't just send emails; we built a system that gave them unmatched insights into every customer's journey, leading to more accurate smarter business decisions and a sales cycle that just got more efficient.",
      link: "https://digitalsix.com.au/case-study/streamlining-quotes-unlocking-insights-with-klaviyo-a-digital-six-success-story/",
    },
    // {
    //   id: 3,
    //   image: "/images/case-study-3.jpg",
    //   tags: ["Email Marketing", "CRO", "Analytics"],
    //   title: "Discover How We Transformed Their Business",
    //   description:
    //     "From struggling startup to industry leader, see how our comprehensive email marketing strategy delivered exceptional results and sustainable growth.",
    //   link: "#",
    // },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ overflowY: "hidden", maxHeight: "100%" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="flex-shrink-0 w-full sm:w-[48%] snap-start rounded-xl"
              variants={cardVariants}
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden group rounded-xl">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white text-black text-xs px-[22px] py-2 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="py-6 space-y-4">
                <h3 className="font-host-grotesk text-3xl font-medium text-white leading-tight">
                  {study.title}
                </h3>
                <div className="bg-primary h-[1px]" />
                <p className="text-white text-sm leading-relaxed font-instrument-sans">
                  {study.description}
                </p>

                <Link
                  href={study.link}
                  target="_blank"
                  className="pt-4 flex justify-start"
                >
                  <button
                    type="submit"
                    className="group relative text-white font-semibold flex font-instrument-sans"
                  >
                    <span className="relative z-10 flex items-center underline-wrapper cursor-pointer">
                      <span>View Case Study</span>
                      <div className="ml-3 w-8 h-8 bg-[#FD893E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4 text-black arrow-icon" />
                      </div>
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
          height: 0px;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Button underline effect style */}
      <style jsx>{`
        .underline-wrapper {
          position: relative;
        }
        .underline-wrapper::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #fd893e;
          transition: width 0.3s ease;
          transform-origin: left;
        }
        button.group:hover .underline-wrapper::after {
          width: 80%;
          transform-origin: left;
        }
        button.group:not(:hover) .underline-wrapper::after {
          width: 0;
          transform-origin: right;
        }
      `}</style>
    </section>
  );
}
