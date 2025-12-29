import React from 'react';
import { ArrowRight } from 'lucide-react';

const InfoCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto font-sans md:absolute md:ml-[700px] md:mt-[-130px] gap-6 md: px-4">
      
      {/* Left Card - Quality Product */}
      <div className="flex-1 bg-[#ee4b22] p-6 md:p-10 text-white w-full max-w-[269px] flex flex-col justify-between rounded-lg">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Quality Product</h2>
          <p className="text-sm leading-relaxed mb-4 opacity-90 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Samed consectetur.
          </p>
        </div>
        <a 
          href="#" 
          className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold hover:underline mt-4"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>

      {/* Right Card - Project Overview */}
      <div className="flex-1 bg-[#4cb5b0] p-6 md:p-10 text-white w-full max-w-[269px] flex flex-col justify-between rounded-lg">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Project Overview</h3>
          <p className="text-4xl font-bold mb-4 text-center md:text-left">35 Millions</p>
        </div>
        <a 
          href="#" 
          className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold hover:underline mt-4"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>

    </div>
  );
};

export default InfoCards;
