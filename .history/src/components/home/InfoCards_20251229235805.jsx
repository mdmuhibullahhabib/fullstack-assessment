import { ArrowRight } from 'lucide-react';

const InfoCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 sm:px-8 mt-8 max-w-7xl mx-auto font-sans">
      
      {/* Left Card */}
      <div className="flex-1 bg-[#ee4b22] p-6 md:p-10 text-white rounded-xl flex flex-col justify-between max-w-sm w-full">
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

      {/* Right Card */}
      <div className="flex-1 bg-[#4cb5b0] p-6 md:p-10 text-white rounded-xl flex flex-col justify-between max-w-sm w-full">
        <div>
          <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
          <p className="text-3xl sm:text-4xl font-bold mb-4">35 Millions</p>
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
