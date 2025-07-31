"use client";

import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { id: 1, src: `/images/kings-bottle-logo.png`, alt: `Partner Logo` },
    { id: 2, src: `/images/jim-logo.png`, alt: `Partner Logo` },
    { id: 3, src: `/images/fitstop-logo.png`, alt: `Partner Logo` },
    { id: 4, src: `/images/cdk9-logo.png`, alt: `Partner Logo` },
    { id: 5, src: `/images/rededucation-logo.png`, alt: `Partner Logo` },
  ];

  const duplicatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <section className="bg-white h-[86px] w-full overflow-hidden flex items-center">
      <div className="flex animate-scroll-left min-w-max">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center shrink-0 ${
              index !== duplicatedLogos.length - 1 ? "mr-[98px]" : ""
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
