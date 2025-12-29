"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TextLogoMarquee() {
  const brands = [
    "images1.png",
    "images2.png",
    "images3.png",
    "images4.png",
    "images5.png",
  ];

  return (
    <section className="bg-white py-6 overflow-hidden">
      <Marquee
        speed={40}
        pauseOnHover
        gradient
        gradientColor={[255, 255, 255]}
        gradientWidth={90}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-6 sm:mx-10 flex items-center justify-center w-28 sm:w-32 h-12"
          >
            <Image
              src={`/marquee/${brand}`}
              alt="brand logo"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
