"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("/api/hero")
      .then(res => res.json())
      .then(data => setHero(data));
  }, []);

  if (!hero) return null;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {hero.title}
          </h1>
          <p className="text-gray-600 mb-6">
            {hero.subtitle}
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded">
            {hero.buttonText}
          </button>
        </div>

        <div>
          <img
            src={hero.image}
            alt="Hero"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}
