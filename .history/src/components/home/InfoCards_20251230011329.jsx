import React from 'react';
import { ArrowRight } from 'lucide-react';

const InfoCards = () => {
  return (
    <div className="md:absolute jus md:ml-[700px] md:mt-[-130px] flex flex-col md:flex-row w-full max-w-4xl mx-auto font-sans">
      
      {/* Left Card - Quality Product */}
      <div className="flex-1 bg-[#ee4b22] p-8 md:p-10 text-white max-w-[269px] max-h-[270px] flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Quality Product</h2>
          <p className="text-sm leading-relaxed mb-4 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Samed consectetur.
          </p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm font-semibold hover:underline mt-4"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>

      {/* Right Card - Project Overview */}
      <div className="flex-1 bg-[#4cb5b0] p-8 md:p-10 text-white max-w-[269px] max-h-[270px] flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
          <p className="text-4xl font-bold mb-4">35 Millions</p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm font-semibold hover:underline mt-4"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default InfoCards;
