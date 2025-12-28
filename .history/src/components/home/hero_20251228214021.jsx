"use client";
import useHero from "@/hooks/useHero";
import React, { useEffect, useState } from "react";
// import useHero from "../../hooks/useHero"

export default function Hero() {
  // const [hero, setHero] = useState(null);
  const { hero } = useHero();
  console.log(hero, "hero")
  console.log(hero, "hero")

  // Fake Data
  // const fakeHeroData = {
  //   subtitle: "Elevate Your Brand With",
  //   title: "High-Quality Garments. Ethically Made.",
  //   description:
  //     "At Zaheen Knitwear Ltd. We pride ourselves on being your reliable partner for apparel production. Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.",
  //   bgImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  //   ctaPrimary: { text: "Contact Us", link: "/contact" },
  //   ctaSecondary: { text: "Learn More", link: "/about" },
  // };

  // useEffect(() => {
  //   // Simulate API fetch delay
  //   const timer = setTimeout(() => {
  //     setHero(fakeHeroData);
  //   }, 500); // 0.5s delay

  //   return () => clearTimeout(timer);
  // }, []);

  if (!hero)
    return (
      <p className="text-center py-20 text-gray-500">Loading Hero...</p>
    );

  return (
    <section className="relative bg-black text-white max-h-[659px]">
      <img
        src={hero.bgImage}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative max-w-7xl mx-auto px-16 py-28 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm mb-3 text-gray-300">{hero.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{hero.title}</h1>
          <p className="text-gray-300 mb-6">{hero.description}</p>
          <div className="flex gap-4">
            <a
              href={hero?.ctaPrimary?.link}
              className="bg-[#ee4b22] px-6 py-3 inline-block"
            >
              {hero?.ctaPrimary?.text}
            </a>
            <a
              href={hero?.ctaSecondary?.link}
              className="border px-6 py-3 inline-block"
            >
              {hero?.ctaSecondary?.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
