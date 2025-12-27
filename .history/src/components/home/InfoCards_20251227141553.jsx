import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrows

const InfoCards = () => {
  return (
    <div className="flex justify-end flex-col md:flex-row w-full max-w-4xl font-sans">
      {/* Left Card - Quality Product */}
      <div className="flex-1 bg-[#FF4D30] p-10 text-white h-[270px] w-[269px]">
        <h2 className="text-2xl font-bold mb-4">Quality Product</h2>
        <p className="text-sm leading-relaxed mb-8 opacity-90">
          Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.
        </p>
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>

      {/* Right Card - Project Overview */}
      <div className="flex-1 bg-[#00A99D] p-10 text-white">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-4xl font-bold mb-8">35 Millions</p>
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          Read More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default InfoCards;