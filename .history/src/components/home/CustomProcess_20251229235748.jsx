"use client";
import Image from "next/image";
import { Scissors, Pipette, Zap, Activity, Repeat, ClipboardCheck, Box } from "lucide-react";
import bgImage from "../../../public/home/ProcessImage-1.png";
import rightImage from "../../../public/home/ProcessImage-2.png";

export default function CustomProcess() {
    const steps = [
        { number: 1, title: "Dyeing", desc: "Adding color to biodegradable materials.", icon: <Pipette className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 2, title: "Cutting", desc: "Eco-friendly clothing items for all shapes and sizes.", icon: <Scissors className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 3, title: "Sewing", desc: "Vouching for the ultimate sturdiness and durability of the fabric.", icon: <Activity className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 4, title: "Snipping of thread", desc: "A neat edge, a soft and smooth finish.", icon: <Zap className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 5, title: "Ironing", desc: "Ironing it before shipping.", icon: <Repeat className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 6, title: "Checking", desc: "Going through each clothing piece to ensure supreme quality standards are met.", icon: <ClipboardCheck className="w-8 h-8 text-[#FF6B5B]" /> },
        { number: 7, title: "Package", desc: "Folding and packing with the utmost care.", icon: <Box className="w-8 h-8 text-[#FF6B5B]" /> },
    ];

    return (
        <section className="bg-white py-20 font-sans">
            <div className="max-w-7xl mx-auto px-4">

                {/* ===== TOP SECTION ===== */}
                <div className="relative flex flex-col md:flex-row bg-[#E6F7F8] overflow-hidden md:items-stretch -mb-16">

                    {/* Left Box */}
                    <div
                        className="relative w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-start"
                        style={{
                            backgroundImage: `url(${bgImage.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="ml-0 md:ml-16">
                            <span className="px-5 py-1.5 rounded-full border border-teal-200 text-teal-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-3 inline-block">
                                Process
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#1a2b3c] leading-tight mb-4 md:mb-6">
                                Do You Want Custom Project With Textilery? Contact Us Now
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                                At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for
                                apparel production. Our commitment to ethical manufacturing ensures that
                                every garment is crafted with care and integrity.
                            </p>
                            <button className="border-[1.5px] border-teal-400 text-teal-500 px-6 py-2 rounded-md font-bold text-xs hover:bg-teal-500 hover:text-white transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-2/5 flex items-center justify-center py-6 md:py-10">
                        <div className="relative w-4/5 h-[300px] sm:h-[400px] md:h-[450px]">
                            <Image
                                src={rightImage}
                                alt="Clothing Preview"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* ===== PROCESS STEPS GRID ===== */}
                <div className="flex flex-wrap justify-center gap-6 mt-12 px-4 sm:px-10">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`relative bg-white p-6 pt-12 rounded-2xl shadow-md border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-2 w-full sm:w-[48%] lg:w-[30%]`}
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-xs font-black text-gray-300">
                                {step.number}
                            </div>
                            <div className="mb-4 bg-orange-50 p-3 rounded-xl">{step.icon}</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
