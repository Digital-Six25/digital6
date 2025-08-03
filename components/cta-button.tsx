"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { getLenis } from "@/lib/lenis";

interface CtaButtonProps {
  path: string;
  text: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ path, text }) => {
  const handleClick = () => {
    const target = document.querySelector(path) as HTMLElement | null;

    if (target) {
      const lenis = getLenis();
      lenis.scrollTo(target);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="relative h-[50px] px-6 py-3 w-fit overflow-hidden bg-[#FD893E] rounded-full font-normal font-instrument-sans shadow-2xl transition-all duration-500 group text-black"
    >
      <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
        <span className="absolute top-0 left-0 h-full w-0 bg-[#6AE5CE] rounded-full transition-all duration-500 group-hover:w-full" />
      </span>

      <span className="relative z-10 flex items-center transition-colors duration-300">
        {text}
        <span className="ml-3 w-8 h-8 rounded-full flex items-center justify-center bg-black group-hover:bg-[#FD893E] relative z-10 overflow-hidden">
          <ArrowUpRight className="w-4 h-4 text-white arrow-icon" />
        </span>
      </span>
    </Button>
  );
};

export default CtaButton;
