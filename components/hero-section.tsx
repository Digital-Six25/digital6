"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import CtaButton from "./cta-button";
import LogoCarousel from "./logo-carousel";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const headingLines = [
    <>
      Email Is Your <br />
    </>,
    <>
      Most <span className="text-[#FD893E]">Profitable</span>
      <br />
    </>,
    <>Channel.</>,
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    "0-2/name": "",
    more_information__optional_: "",
  });

  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.firstname },
        { name: "lastname", value: formData.lastname },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "0-2/name", value: formData["0-2/name"] },
        {
          name: "more_information__optional_",
          value: formData.more_information__optional_,
        },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/8236697/0774c732-7f19-4801-b566-d055c1f0bbc3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotData),
        }
      );

      if (response.ok) {
        setStatus("Success! Thanks for contacting us.");
        setShowStatus(true);

        setTimeout(() => {
          setShowStatus(false);
          setStatus("");
        }, 3000);

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          "0-2/name": "",
          more_information__optional_: "",
        });
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("trackCustom", "LeadFormSubmission");
        }
      } else {
        setStatus("Submission failed. Please try again.");
        setShowStatus(true);

        setTimeout(() => {
          setShowStatus(false);
          setStatus("");
        }, 3000);
        const errorText = await response.text();
        console.error("HubSpot error response:", errorText);
      }
    } catch (error) {
      setStatus("Submission error. Please try again.");
      setShowStatus(true);

      setTimeout(() => {
        setShowStatus(false);
        setStatus("");
      }, 3000);
      console.error("Submission exception:", error);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
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
      <div className="relative z-10 px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-12">
          <Image
            src={"/images/d6-logo.png"}
            alt="Digital6 logo"
            width={150}
            height={50}
          />
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Review Badge */}
            <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 w-fit border border-[#6AE5CE]">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-[#F5D96B] text-[#F5D96B]"
                  />
                ))}
              </div>
              <Image
                src={"/images/google-logo.png"}
                alt="google logo"
                width={14}
                height={14}
                className="sm:w-4 sm:h-4"
              />
              <span className="text-white text-xs sm:text-sm">
                <span className="font-bold">84+</span> 5 Star Reviews
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-white font-host-grotesk font-medium text-5xl sm:text-6xl md:text-[88px] leading-[1.1] sm:leading-[1] tracking-[-0.02em] capitalize"
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
                {headingLines.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                      },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.h1>

              <p
                className={`text-xl sm:text-3xl text-white  transition-all duration-1000 ease-out delay-300 ${
                  isInView
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
            <CtaButton path="#contact" text="Turn your inbox into income" />

            {/* Partner Logos */}
            <div className="flex items-center space-x-6 sm:space-x-12 pt-8 sm:pt-12">
              <div className="mb-4 sm:mb-0">
                <Image
                  src={"/images/klaviyo-logo.png"}
                  alt="klaviyo logo"
                  height={200}
                  width={200}
                />
              </div>
              <div className="mb-4 sm:mb-0">
                <Image
                  src={"/images/hubspot-logo.png"}
                  alt="hubspot logo"
                  height={45}
                  width={120}
                  className="sm:h-[67px] sm:w-[189px] h-[67px] w-[220px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col justify-center mt-10 lg:mt-0 px-0 sm:px-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="relative inline-flex h-2 w-2 rounded-full bg-primary  animate-pulse"></div>
              </div>
              <h3 className="text-white text-base sm:text-lg font-normal font-instrument-sans">
                Let's Talk Strategy
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border text-white border-white/60 p-4 sm:p-6 rounded-md">
              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm mb-1">
                      First Name <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      name="firstname"
                      type="text"
                      required
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm mb-1">
                      Last Name <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      name="lastname"
                      type="text"
                      required
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                      Email Address <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-1">
                      Phone Number <span className="text-red-600">*</span>{" "}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-1">
                    Company Name <span className="text-red-600">*</span>{" "}
                  </label>
                  <input
                    name="0-2/name"
                    type="text"
                    required
                    value={formData["0-2/name"]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 font-instrument-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="moreInfo" className="block text-sm mb-1">
                    More Information (Optional)
                  </label>
                  <textarea
                    name="more_information__optional_"
                    rows={4}
                    value={formData.more_information__optional_}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder:text-gray-400 focus:border-[#FD893E] focus:outline-none pb-2 resize-none font-instrument-sans text-sm"
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
                      transform-origin: left;
                    }
                    button.group:not(:hover) .underline-wrapper::after {
                      width: 0;
                      transform-origin: right;
                    }
                  `}</style>
                </div>
                {showStatus && (
                  <p
                    className={`${
                      status.startsWith("Success")
                        ? "text-primary"
                        : "text-red-500"
                    } font-instrument-sans text-right`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
    </div>
  );
}
