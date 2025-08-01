"use client";

import CtaButton from "./cta-button";

export default function EmailRevenueSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top badges */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#FD893E] rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-sm font-instrument-sans">
              Email Revenue
            </span>
          </div>

          <div className="text-gray-400 text-sm font-instrument-sans">
            Digital Six
          </div>
        </div>

        {/* Main Content with Rotating Text */}
        <div className="text-center space-y-8">
          {/* Title with Overlapping Circular Text */}
          <div className="relative">
            {/* Rotating circular text that overlaps the first letter */}
            <div className="absolute -top-[18px] left-[310px] z-20">
              <div className="w-24 h-24 relative">
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="email-circle"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text className="text-sm fill-[#FD893E] font-instrument-sans font-medium">
                    <textPath href="#email-circle" startOffset="0%">
                      EMAIL REVENUE • EMAIL REVENUE • EMAIL REVENUE •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <h2 className="font-host-grotesk text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight relative z-10">
              Email Should Drive
              <br />
              <span className="text-[#FD893E]">40%</span> Of Your Total
              <br />
              Revenue.
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed font-instrument-sans">
              Email should be doing the heavy lifting — converting your traffic,
              bringing customers back, and scaling your revenue on autopilot.
              Our email packages are built to do exactly that. Whether you're
              looking to launch your first email campaign or scale an existing
              one, we'll help you get there and behave like scenes.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed font-instrument-sans">
              Our specialists use Klaviyo & HubSpot's advanced features to
              deliver hyper-targeted campaigns that captivate subscribers with
              timely, relevant messages. Intelligent automation, engaging
              content, and dynamic personalization help us nurture leads, retain
              customers, and transform browsers into loyal buyers.
            </p>
          </div>

          {/* CTA Button */}
          <CtaButton path="#contact" text="Let's Get Started" />
        </div>
      </div>
    </section>
  );
}
