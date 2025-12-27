
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
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== TOP SECTION WITH TORN EDGE ===== */}
        <div className="relative bg-[#E6F7F8] rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch mb-20 min-h-[450px]">
          
          {/* Left Side Content */}
          <div className="relative z-20 w-full md:w-[60%] bg-white p-10 md:p-16 flex flex-col justify-center items-start md:clip-path-torn shadow-sm">
            <span className="inline-block border border-teal-300 text-teal-500 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-6">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2] mb-6">
              Do You Want Custom Project With <br /> Textilery? Contact Us Now
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8">
              At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for 
              apparel production. Our commitment to ethical manufacturing ensures that 
              every garment is crafted with care and integrity.
            </p>
            <button className="border-2 border-teal-400 text-teal-500 px-8 py-2.5 rounded-md font-bold text-sm hover:bg-teal-50 transition-all uppercase">
              Learn More
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-[40%] flex items-center justify-center p-8 bg-[#E6F7F8]">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src={rightImage}
                alt="Garments on hangers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .md\:clip-path-torn {
                clip-path: polygon(0% 0%, 94% 0%, 100% 4%, 93% 12%, 100% 21%, 95% 32%, 100% 44%, 92% 56%, 100% 68%, 94% 81%, 100% 93%, 92% 100%, 0% 100%);
              }
            }
          `}</style>
        </div>

        {/* ===== PROCESS STEPS GRID ===== */}
        <div className="space-y-8">
          {/* Top Row: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.slice(0, 4).map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>

          {/* Bottom Row: 3 Items (Centered) */}
          <div className="flex flex-wrap justify-center gap-8">
            {steps.slice(4).map((step) => (
              <div key={step.number} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StepCard({ step }) {
  return (
    <div className="relative bg-white p-10 pt-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-start transition-all hover:shadow-lg group">
      {/* Step Number Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-teal-500 transition-colors">
        {step.number}
      </div>
      
      <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
        {step.icon}
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {step.title}
      </h3>
      <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
        {step.desc}
      </p>
    </div>
  );
}