import React from 'react';
import { Mail, Lock, Eye } from 'lucide-react';

const LoginLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* Container with the slow vertical gradient from Primary Teal to White */}
      <div className="w-full max-w-[850px] min-h-[550px] rounded-[45px] shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-[#07B4B0] via-[#7ce7db] via-[#ccf5f0] to-white border border-white/20">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center px-10 pt-8 text-white">
          <div className="flex gap-2">
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs">M</div>
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs rotate-45">
              <span className="-rotate-45">ZK</span>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <button className="text-sm font-medium hover:text-white/80 transition-opacity">Login</button>
            <button className="px-8 py-2.5 border-2 border-white rounded-full text-sm font-bold hover:bg-white hover:text-[##07B4B0] transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12 mt-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Welcome Back!</h1>
            <p className="text-white/85 text-[13px]">We missed you, Please provide your credential</p>
          </div>

          <div className="w-full max-w-[420px] space-y-4">
            {/* Email Field */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white border border-transparent rounded-[14px] py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[##07B4B0]/20 placeholder-gray-400 transition-all shadow-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white border border-transparent rounded-[14px] py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[##07B4B0]/20 placeholder-gray-400 transition-all shadow-sm"
              />
              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 cursor-pointer hover:text-[##07B4B0]" />
            </div>

            <div className="flex justify-end pr-1">
              <button className="text-[11px] font-bold text-gray-600 hover:text-[##07B4B0] transition-colors">
                Forget Password?
              </button>
            </div>

            {/* Log In Button */}
            <button className="w-full py-4 bg-[##07B4B0] text-white font-bold rounded-[14px] shadow-lg shadow-[##07B4B0]/20 hover:bg-[#00a892] active:scale-[0.98] transition-all">
              Log In
            </button>

            {/* Divider Line */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-gray-200/60"></div>
              <span className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">or</span>
              <div className="h-[1px] flex-1 bg-gray-200/60"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex justify-center items-center py-3 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:border-[##07B4B0]/30 transition-all">
                <div className="w-7 h-7 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                  <span className="font-serif font-bold text-lg leading-none">f</span>
                </div>
              </button>
              <button className="flex justify-center items-center py-3 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:border-[##07B4B0]/30 transition-all">
                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-base">
                  
                </div>
              </button>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;