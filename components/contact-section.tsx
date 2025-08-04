"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top badges */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#FD893E] rounded-full"></div>
            <span className="text-gray-300 sm:text-lg font-normal font-instrument-sans">
              Get In Touch
            </span>
          </div>

          <div className="text-gray-300 sm:text-lg font-normal font-instrument-sans">
            Digital Six
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[540px]">
            {/* Left Side - Background Image with Content */}
            <div className="relative w-full h-[540px]">
              <Image
                src="/images/contact.jpg"
                alt="Contact Background"
                fill
                className="object-cover"
              />

              {/* Black overlay 60% */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-center"
                style={{ paddingLeft: "64px" }}
              >
                <div className="space-y-0">
                  <motion.h2
                    className="font-host-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.35,
                        },
                      },
                      hidden: {},
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.8, ease: "easeOut" },
                        },
                      }}
                    >
                      Let's Talk Strategy
                    </motion.div>
                  </motion.h2>

                  <div style={{ marginTop: "44px" }}>
                    <p className="text-gray-200 text-lg leading-relaxed font-instrument-sans max-w-md">
                      Email should be doing the heavy lifting — converting your
                      traffic, bringing customers back, and scaling your revenue
                      on autopilot.
                    </p>
                  </div>

                  <div className="space-y-4" style={{ marginTop: "75px" }}>
                    <div>
                      <a
                        href="tel:1300946735"
                        className="text-[#FD893E] text-xl font-semibold hover:text-[#FD893E]/80 transition-colors font-instrument-sans border-b-2 border-[#FD893E] pb-1"
                      >
                        1300 946 735
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:hello@digitalsix.com.au"
                        className="text-[#FD893E] text-xl font-semibold hover:text-[#FD893E]/80 transition-colors font-instrument-sans border-b-2 border-[#FD893E] pb-1"
                      >
                        hello@digitalsix.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div
              className="p-8 lg:p-12 flex flex-col justify-center"
              style={{ backgroundColor: "#151515" }}
              id="contact"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-instrument-sans relative">
                      First Name
                      <span className="text-red-500 absolute -top-1 -right-2 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-instrument-sans relative">
                      Last Name
                      <span className="text-red-500 absolute -top-1 -right-2 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-instrument-sans relative">
                      Email Address
                      <span className="text-red-500 absolute -top-1 -right-2 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-instrument-sans relative">
                      Phone Number
                      <span className="text-red-500 absolute -top-1 -right-2 text-sm">
                        *
                      </span>
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-instrument-sans relative">
                    Company Name
                    <span className="text-red-500 absolute -top-1 -right-2 text-sm">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-instrument-sans">
                    More Information (Optional)
                  </label>
                  <textarea
                    rows={1}
                    className="w-full bg-transparent border-0 border-b border-[#E3E8EF] text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 resize-none font-instrument-sans"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="group relative text-white font-semibold flex font-instrument-sans"
                  >
                    <span className="relative z-10 flex items-center underline-wrapper cursor-pointer">
                      <span>Submit Enquiry</span>
                      <div className="ml-3 w-8 h-8 bg-[#FD893E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4 text-black arrow-icon" />
                      </div>
                    </span>
                  </button>

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
                      transform-origin: left; /* immediate */
                    }
                    button.group:not(:hover) .underline-wrapper::after {
                      width: 0;
                      transform-origin: right; /* immediate */
                    }
                  `}</style>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
