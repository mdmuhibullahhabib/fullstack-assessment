"use client";

import React from "react";
import { Mail, Lock, Eye, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { registerUser } from "@/app/actions/auth/registerUser";
import Link from "next/link";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await registerUser(data);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[850px] min-h-[550px] rounded-[45px] shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-[#4cb5b0] via-[#7dded8] via-[#ccf5f0] to-white border border-white/20">

        {/* ================= NAVBAR ================= */}
        <div className="flex justify-between items-center px-10 pt-8 text-white">
          <div className="flex gap-2">
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs">
              M
            </div>
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs rotate-45">
              <span className="-rotate-45">ZK</span>
            </div>
          </div>

          <div className="flex gap-10 items-center">
            <Link
              href="/auth/login"
              className=""
            >
              Login
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-2.5 border-2 border-white rounded-full text-sm font-bold hover:bg-white hover:text-[#4cb5b0]"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* ================= FORM BODY ================= */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12 mt-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-white/85 text-[13px]">
              Please fill the details to sign up
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[420px] space-y-4"
          >
            {/* ===== Name ===== */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white rounded-[14px] py-4 pl-12 pr-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4cb5b0]/30"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* ===== Email ===== */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white rounded-[14px] py-4 pl-12 pr-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4cb5b0]/30"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ===== Password ===== */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white rounded-[14px] py-4 pl-12 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4cb5b0]/30"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* ===== SUBMIT ===== */}
            <button
              type="submit"
              className="w-full py-4 bg-[#4cb5b0] text-white font-bold rounded-[14px] shadow-lg shadow-[#4cb5b0]/20 hover:bg-[#43a7a3] active:scale-[0.98] transition-all"
            >
              Sign Up
            </button>

            {/* ===== Divider ===== */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-gray-200/60" />
              <span className="text-gray-400 text-[11px] uppercase">or</span>
              <div className="h-[1px] flex-1 bg-gray-200/60" />
            </div>

            {/* ===== Social ===== */}
            <div className="text-center text-xs text-gray-500">
              Social signup coming soon
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
