"use client";
import Image from "next/image";

export default function TransformSection() {
  const leftTags = [
    { text: "Customer Loyalty", color: "bg-[#FD893E]" },
    { text: "Overview", color: "bg-purple-600" },
  ];

  const rightTags = [
    { text: "SMS", color: "bg-teal-500" },
    { text: "Data Management", color: "bg-yellow-500" },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
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
              <div className="absolute -left-32 top-8 space-y-4 hidden lg:block">
                {leftTags.map((tag, index) => (
                  <div key={index} className="flex justify-end">
                    <span
                      className={`${tag.color} text-white px-4 py-2 rounded-full text-sm font-semibold font-instrument-sans shadow-lg`}
                    >
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-host-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                We Transform It Into
                <br />A Powerful
                <br />
                Revenue Engine
              </h2>

              {/* Right Tags */}
              <div className="absolute -right-32 top-8 space-y-4 hidden lg:block">
                {rightTags.map((tag, index) => (
                  <div key={index}>
                    <span
                      className={`${tag.color} text-white px-4 py-2 rounded-full text-sm font-semibold font-instrument-sans shadow-lg`}
                    >
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
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
