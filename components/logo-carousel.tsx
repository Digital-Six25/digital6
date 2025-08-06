"use client";

import Image from "next/image";

export default function LogoCarousel() {
  return (
    <div className="relative w-full bg-white overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-full z-10  pointer-events-none" />
      <div className="flex w-max animate-marquee space-x-24 px-2">
        {[
          "Coochie.webp",
          "images.jpeg",
          "ITR.jpg",
          "JB Metro.png",
          "jim-logo.png",
          "fitstop-logo.png",
          "cdk9-logo.png",
          "rededucation-logo.png",
        ].map((logo, i) => (
          <Image
            key={i}
            src={`/images/${logo}`}
            alt={`Logo ${i + 1}`}
            width={120}
            height={40}
            className="object-contain"
          />
        ))}
        {[
          "Coochie.webp",
          "images.jpeg",
          "ITR.jpg",
          "JB Metro.png",
          "jim-logo.png",
          "fitstop-logo.png",
          "cdk9-logo.png",
          "rededucation-logo.png",
        ].map((logo, i) => (
          <Image
            key={`duplicate-${i}`}
            src={`/images/${logo}`}
            alt={`Logo duplicate ${i + 1}`}
            width={120}
            height={40}
            className="object-contain"
          />
        ))}

        {[
          "Coochie.webp",
          "images.jpeg",
          "ITR.jpg",
          "JB Metro.png",
          "jim-logo.png",
          "fitstop-logo.png",
          "cdk9-logo.png",
          "rededucation-logo.png",
        ].map((logo, i) => (
          <Image
            key={`duplicate-${i}`}
            src={`/images/${logo}`}
            alt={`Logo duplicate ${i + 1}`}
            width={120}
            height={40}
            className="object-contain"
          />
        ))}
        {[
          "Coochie.webp",
          "images.jpeg",
          "ITR.jpg",
          "JB Metro.png",
          "jim-logo.png",
          "fitstop-logo.png",
          "cdk9-logo.png",
          "rededucation-logo.png",
        ].map((logo, i) => (
          <Image
            key={`duplicate-${i}`}
            src={`/images/${logo}`}
            alt={`Logo duplicate ${i + 1}`}
            width={120}
            height={40}
            className="object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
