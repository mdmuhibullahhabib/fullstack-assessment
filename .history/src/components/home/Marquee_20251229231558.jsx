"use client";

import Marquee from "react-fast-marquee";

export default function TextLogoMarquee() {
  const brands = [
    "images1",
    "images2",
    "images3",
    "images4",
    "images1",
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
            {/* Fake Logo Style */}
            <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm md:text-base tracking-wide">
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
              <span>{brand}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
