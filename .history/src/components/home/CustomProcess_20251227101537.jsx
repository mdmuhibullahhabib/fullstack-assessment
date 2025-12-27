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
        <section className="bg-white py-20 px-4 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* ===== TOP SECTION ===== */}
                {/* Main container has the light teal background */}
                <div className="relative bg-[#E6F7F8] flex flex-col md:flex-row items-stretch min-h-[480px] rounded-br-[100px]">

                    {/* Left Content Box (White with bgImage and Torn Edge) */}
                    <div
                        className="relative z-10 w-full md:w-[65%] p-10 md:p-20 flex flex-col justify-center items-start md:clip-path-torn bg-white"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${bgImage.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="mb-4">
                            <span className="px-5 py-1.5 rounded-full border border-teal-200 text-teal-500 text-[11px] font-bold uppercase tracking-[0.2em]">
                                Process
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-[42px] font-bold text-[#1a2b3c] leading-[1.2] mb-6">
                            Do You Want Custom Project With <br className="hidden lg:block"/> Textilery? Contact Us Now
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for
                            apparel production. Our commitment to ethical manufacturing ensures that
                            every garment is crafted with care and integrity.
                        </p>

                        <button className="border-[1.5px] border-teal-400 text-teal-500 px-8 py-3 rounded-md font-bold text-xs hover:bg-teal-500 hover:text-white transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Right Content (Image of hanging clothes) */}
                    <div className="w-full md:w-[35%] relative flex items-center justify-center p-6 md:p-0">
                        <div className="relative w-full h-[400px] transform md:scale-125 md:-translate-x-10">
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
                <div className="mt-20">
                    {/* First Row: 4 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {steps.slice(0, 4).map((step) => (
                            <StepCard key={step.number} step={step} />
                        ))}
                    </div>

                    {/* Second Row: 3 Cards (Centered) */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {steps.slice(4).map((step) => (
                            <div key={step.number} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
                                <StepCard step={step} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Styles for the Torn Effect */}
            <style jsx>{`
                @media (min-width: 768px) {
                    .md\:clip-path-torn {
                        clip-path: polygon(
                            0% 0%, 
                            92% 0%, 
                            100% 5%, 
                            90% 15%, 
                            98% 25%, 
                            92% 35%, 
                            100% 45%, 
                            90% 55%, 
                            98% 65%, 
                            92% 75%, 
                            100% 85%, 
                            90% 95%, 
                            95% 100%, 
                            0% 100%
                        );
                    }
                }
            `}</style>
        </section>
    );
}

// Sub-component for Step Cards to keep code clean
function StepCard({ step }) {
    return (
        <div className="relative bg-white p-10 pt-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start transition-all hover:shadow-lg group">
            {/* Step Number Circle */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[11px] font-bold text-gray-400 group-hover:text-teal-500 transition-colors">
                {step.number}
            </div>

            <div className="mb-6 transform transition-transform group-hover:scale-110">
                {step.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed">
                {step.desc}
            </p>
        </div>
    );
}