"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// import logos from public/home
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
    <section className="bg-white py-6 overflow-hidden">
      <Marquee
        speed={40}
        direction="left"
        gradient={true}
        gradientColor={[255, 255, 255]}
        gradientWidth={80}
        pauseOnHover={true}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="mx-12 flex items-center justify-center opacity-60 hover:opacity-100 transition"
          >
            <Image
              src={logo}
              alt="brand"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
