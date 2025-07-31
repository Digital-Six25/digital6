"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <img
        src="/images/get-started-bg.png" // make sure it's placed in /public/images
        alt="Decorative Curve Right"
        className="absolute right-0 top-0 h-full object-contain pointer-events-none select-none z-0"
      />
      {/* Top badges */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative bg-gray-900/30 border border-gray-800 backdrop-blur-[7.9px]  p-8 group overflow-hidden"
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
                    <Button className="bg-[#FD893E] hover:bg-[#FD893E]/90 text-black px-6 py-3 rounded-full font-normal  group/btn relative">
                      {service.buttonText}
                      <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative h-[313px] w-full max-w-[509px] ml-auto  overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
