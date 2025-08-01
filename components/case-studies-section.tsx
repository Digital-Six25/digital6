"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: "/images/case-study-1.jpg",
      tags: ["Email Marketing", "SEO", "Shopify", "Meta Ads"],
      title: "219% Surge In Annual Revenue",
      description:
        "Discover how our partnership pumped an impressive $20,000 into the client's pocket in just one month, transforming their financial outlook and enabling them to invest in new opportunities.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/case-study-2.jpg",
      tags: ["Email Marketing", "SEO", "Google Ads", "Social Media"],
      title: "Unbeatable Business Insights",
      description:
        "We didn't just send emails; we built a system that gave them unmatched insights into every customer's journey, leading to more accurate smarter business decisions and a sales cycle that just got more efficient.",
      link: "#",
    },
    // {
    //   id: 3,
    //   image: "/placeholder.svg?height=200&width=300&text=Growth+Strategy",
    //   tags: ["Email Marketing", "CRO", "Analytics"],
    //   title: "Discover How We Transformed Their Business",
    //   description:
    //     "From struggling startup to industry leader, see how our comprehensive email marketing strategy delivered exceptional results and sustainable growth.",
    //   link: "#",
    // },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id}>
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white  text-black text-xs px-[22px] py-2 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="py-6 space-y-4">
                <h3 className="font-host-grotesk text-4xl font-medium text-white leading-tight">
                  {study.title}
                </h3>
                <div className="bg-primary h-[0.5px]" />
                <p className="text-white text-sm leading-relaxed font-instrument-sans">
                  {study.description}
                </p>

                <div className="pt-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
