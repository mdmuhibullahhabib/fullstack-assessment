import Image from "next/image";
import { Scissors, Pipette, Zap, Activity, Repeat, ClipboardCheck, Box } from "lucide-react";
// Import your local assets here
// import bgImage from "../../../public/home/ProcessImage-1.png";
// import rightImage from "../../../public/home/ProcessImage-2.png";

export default function CustomProcess() {
  const steps = [
    { number: 1, title: "Dyeing", desc: "Adding color to biodegradable materials.", icon: <Pipette className="w-8 h-8 text-orange-500" /> },
    { number: 2, title: "Cutting", desc: "Eco-friendly clothing items for all shapes and sizes.", icon: <Scissors className="w-8 h-8 text-orange-500" /> },
    { number: 3, title: "Sewing", desc: "Vouching for the ultimate sturdiness and durability of the fabric.", icon: <Activity className="w-8 h-8 text-orange-500" /> },
    { number: 4, title: "Snipping of thread", desc: "A neat edge, a soft and smooth finish.", icon: <Zap className="w-8 h-8 text-orange-500" /> },
    { number: 5, title: "Ironing", desc: "Ironing it before shipping.", icon: <Repeat className="w-8 h-8 text-orange-500" /> },
    { number: 6, title: "Checking", desc: "Going through each clothing piece to ensure quality standards.", icon: <ClipboardCheck className="w-8 h-8 text-orange-500" /> },
    { number: 7, title: "Package", desc: "Folding and packing with the utmost care.", icon: <Box className="w-8 h-8 text-orange-500" /> },
  ];

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP CTA SECTION */}
        <div className="relative bg-[#E8F7F7] rounded-3xl flex flex-col md:flex-row items-center min-h-[400px] mb-20">
          
          {/* Left Content with Torn Edge Effect */}
          <div className="relative z-10 w-full md:w-[60%] bg-white p-8 md:p-12 md:rounded-l-3xl shadow-sm md:clip-path-torn">
            <span className="inline-block border border-teal-400 text-teal-500 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
              Do You Want Custom Project With <br /> Textilery? Contact Us Now
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
              At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. 
              Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
            </p>
            <button className="border-2 border-teal-400 text-teal-500 px-6 py-2 rounded-md font-medium hover:bg-teal-50 transition-colors">
              Learn More
            </button>
            
            {/* Custom CSS for the "Torn Paper" look on the right side of the white box */}
            <style jsx>{`
              @media (min-width: 768px) {
                .md\:clip-path-torn {
                  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 92% 15%, 100% 25%, 94% 35%, 100% 45%, 92% 55%, 100% 65%, 94% 75%, 100% 85%, 92% 95%, 100% 100%, 0% 100%);
                }
              }
            `}</style>
          </div>

          {/* Right Image (Floating Clothes) */}
          <div className="w-full md:w-[40%] flex justify-center p-8">
             <div className="relative w-full h-[300px]">
                {/* Replace with your rightImage source */}
                <div className="text-center text-teal-700 font-bold"></div>
             </div>
          </div>
        </div>

        {/* PROCESS STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-1
                ${i >= 4 ? 'lg:translate-x-1/2' : ''} // Staggers the bottom row
              `}
            >
              {/* Step Number Circle */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-xs font-bold text-gray-400">
                {step.number}
              </div>
              
              <div className="mb-4">
                {step.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}