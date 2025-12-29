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
        direction="left"
        pauseOnHover
        gradient
        gradientColor={[255, 255, 255]}
        gradientWidth={90}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-14 flex items-center justify-center"
          >
            <div className="h-10 w-24 flex items-center justify-center">
              <Image
                src={`/marquee/${brand}`}
                alt="brand logo"
                width={100}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
