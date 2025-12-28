"use client";
import useHero from "@/hooks/useHero";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const { hero } = useHero();
  console.log(hero, "hero")
  console.log(hero, "hero")


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
