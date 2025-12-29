import React from 'react';
import { ArrowRight } from 'lucide-react';

const InfoCards = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-6 px-4 md:px-0 mt-10 md:mt-0">
      
      {/* Left Card - Quality Product */}
      <div className="bg-[#ee4b22] p-6 md:p-10 text-white w-full sm:w-[300px] flex flex-col justify-between rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-3">Quality Product</h2>
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
      <div className="bg-[#4cb5b0] p-6 md:p-10 text-white w-full sm:w-[300px] flex flex-col justify-between rounded-lg shadow-lg">
        <div>
          <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
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
