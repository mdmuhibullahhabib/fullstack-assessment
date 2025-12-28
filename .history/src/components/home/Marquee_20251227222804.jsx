"use client";

import Image from "next/image";
import amazonPay from "@/public/home/amazon-pay.png";
import asana from "@/public/home/asana.png";
import alipay from "@/public/home/alipay.png";
import amazonDrive from "@/public/home/amazon-drive.png";

export default function LogoMarquee() {
  const logos = [
    amazonPay,
    asana,
    alipay,
    amazonDrive,
    amazonPay,
    asana,
  ];

  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="relative flex items-center">
        
        {/* Gradient fade left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient fade right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px] opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="brand"
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex gap-16 animate-marquee whitespace-nowrap absolute left-full">
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center justify-center min-w-[120px] opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="brand"
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
