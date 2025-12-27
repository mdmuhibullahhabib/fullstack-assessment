"use client"
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
        <section className="bg-white py-20  font-sans">
            <div className=" mx-auto">

                {/* ===== TOP SECTION ===== */}
                <div className="relative bg-[#E6F7F8] overflow-hidden flex flex-col md:pl-8 md:py-[60px]  md:flex-row items-stretch -mb-2 ">

                    {/* Left Content Box (White with bgImage and Torn Edge) */}
                    <div
                        className="relative w-full md:w-[60%] p-10 mt-9 md:pl-5 flex flex-col  items-start "
                        style={{
                            backgroundImage: `url(${bgImage.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div 
                        className="ml-16"
                        >
                            <div className="mb-3">
                                <span className="px-5 py-1.5 rounded-full border border-teal-200 text-teal-500 text-[11px] font-bold uppercase tracking-[0.2em]">
                                    Process
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] leading-[1.2] mb-6">
                                Do You Want Custom Project With Textilery? Contact Us Now
                            </h3>

                            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                                At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for
                                apparel production. Our commitment to ethical manufacturing ensures that
                                every garment is crafted with care and integrity.
                            </p>

                            <button className="border-[1.5px] border-teal-400 text-teal-500 px-8 py-2.5 rounded-md font-bold text-xs hover:bg-teal-500 hover:text-white transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Content (Image of hanging clothes) */}
                    <div className="w-full md:w-[40%] relative flex items-center justify-center py-10">
                        <div className="relative w-[85%] h-[450px]">
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
                <div className="flex flex-wrap justify-center gap-6 px-">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`
                relative bg-white p-8 pt-12 rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] 
                border border-gray-100 flex flex-col items-start transition-all hover:-translate-y-2
                w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]
                ${index >= 4 ? 'lg:translate-y-2' : ''}
              `}
                        >
                            {/* Step Number Circle */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-xs font-black text-gray-300">
                                {step.number}
                            </div>

                            <div className="mb-6 bg-orange-50 p-3 rounded-xl">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[14px] text-gray-500 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}