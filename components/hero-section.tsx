"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={"/images/hero-bg.jpg"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(2.4) translateX(20%)" }}
        height={100}
        width={100}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      {/* Content */}
      <div className="relative z-10 px-12 py-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-16">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#E7B939] to-[#C75752] bg-clip-text text-transparent">
              digital 6
            </span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Review Badge */}
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-[#6AE5CE]">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F5D96B] text-[#F5D96B]"
                  />
                ))}
              </div>
              <Image
                src={"/images/google-logo.png"}
                alt="google logo"
                width={16}
                height={16}
              />
              <span className="text-white text-sm">
                {" "}
                <span className="font-bold">84+</span> 5 Star Reviews
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1
                className={`text-white transition-all duration-1000 ease-out font-host-grotesk font-medium text-[88px] leading-[0.95] tracking-[-0.02em] capitalize ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Email Is Your <br />
                Most <span className="text-[#FD893E]">Profitable</span>
                <br />
                Channel.
              </h1>

              <p
                className={`text-3xl  transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                If email isn't driving{" "}
                <span className="text-white font-semibold">40%</span> of your
                revenue,
                <br />
                you're leaving money on the table.
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-full font-normal transition-all duration-300 hover:scale-105 group/btn relative font-instrument-sans">
              Turn your inbox into income
              <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
              </div>
            </Button>

            {/* Partner Logos */}
            <div className="flex items-center space-x-12 pt-12">
              <div>
                <Image
                  src={"/images/klaviyo-logo.png"}
                  alt="klaviyo logo"
                  height={150}
                  width={150}
                />
              </div>
              <div>
                <Image
                  src={"/images/hubspot-logo.png"}
                  alt="klaviyo logo"
                  height={67}
                  width={189}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col justify-center">
            {/* Form Title */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="relative">
                <div className="relative inline-flex h-2 w-2 rounded-full bg-primary  animate-pulse"></div>
              </div>
              <h3 className="text-white text-lg font-normal font-instrument-sans">
                Let's Talk Strategy
              </h3>
            </div>

            {/* Form Container */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/60 p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="">
                      First Name <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      Last Name <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="">
                      Email Address <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      Phone Number <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="">
                    Company Name <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="">More Information (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 resize-none font-instrument-sans text-sm"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="group relative text-white font-semibold flex items-center font-instrument-sans"
                  >
                    <span className="relative z-10">Submit Enquiry</span>
                    <div className="ml-3 w-8 h-8 bg-[#FD893E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
