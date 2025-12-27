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
              {/* <button className="flex justify-center items-center py-3 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:border-[##07B4B0]/30 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;