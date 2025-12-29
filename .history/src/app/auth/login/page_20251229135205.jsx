"use client";

import React from "react";
import { Mail, Lock, Eye } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  // ================= LOGIN SUBMIT =================
  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      toast.error("Login failed ❌");
    } else {
      toast.success("Login successful 🎉");
      router.push("/");
    }
  };

  "use server";
  
  import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
  import bcrypt from "bcrypt";
  
  
  export const loginUser = async (payload) =>{
      const { email, password } = payload;
      const userCollection = await dbConnect(collectionNamesobj.usersCollection);
      const user = await userCollection.findOne({email})
      
      if(!user) return null
      const isPasswordOk = bcrypt.compare(password, user.password)
      if(!isPasswordOk) return null
  
      return user;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[850px] min-h-[550px] rounded-[45px] shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-[#00bfa5] via-[#7ce7db] via-[#ccf5f0] to-white border border-white/20">

        {/*  NAVBAR  */}
        <div className="flex justify-between items-center px-10 pt-8 text-white">
          <div className="flex gap-2">
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs">M</div>
            <div className="w-9 h-9 border border-white/60 rounded flex items-center justify-center font-bold text-xs rotate-45">
              <span className="-rotate-45">ZK</span>
            </div>
          </div>

          <div className="flex gap-10 items-center">
            <button className="px-8 py-2.5 border-2 border-white rounded-full text-sm font-bold">
              Login
            </button>
            <Link href="/auth/register" className="text-sm font-medium ">
              Sign Up
            </Link>
          </div>
        </div>

        {/* ===== FORM BODY ===== */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12 mt-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome Back!
            </h1>
            <p className="text-white/85 text-[13px]">
              We missed you, Please provide your credential
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[420px] space-y-4"
          >
            {/* ===== EMAIL ===== */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white rounded-[14px] py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00bfa5]/30 shadow-sm"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ===== PASSWORD ===== */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white rounded-[14px] py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#00bfa5]/30 shadow-sm"
                {...register("password", { required: "Password is required" })}
              />
              <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-[11px] font-bold text-gray-600 hover:text-[#00bfa5]"
              >
                Forget Password?
              </button>
            </div>

            {/* ===== LOGIN BUTTON ===== */}
            <button
              type="submit"
              className="w-full py-4 bg-[#00bfa5] text-white font-bold rounded-[14px] shadow-lg shadow-[#00bfa5]/20 hover:bg-[#00a892] transition-all"
            >
              Log In
            </button>

            {/* ===== DIVIDER ===== */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-gray-200/60"></div>
              <span className="text-gray-400 text-[11px] font-medium uppercase">
                or
              </span>
              <div className="h-[1px] flex-1 bg-gray-200/60"></div>
            </div>

            {/* ===== GOOGLE LOGIN ===== */}
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white py-3 rounded-[14px] hover:shadow transition"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
