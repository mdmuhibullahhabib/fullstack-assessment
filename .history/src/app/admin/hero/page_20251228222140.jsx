"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast, Toaster } from "react-hot-toast";
import { FiImage, FiSend } from "react-icons/fi";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddHero() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ================= Hero Mutation ================= */
  const heroMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/admin/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Hero save failed");
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success("Hero section added successfully ");
      reset();
    },
    onError: () => {
      toast.error("Hero add করতে সমস্যা হয়েছে");
    },
  });

  /* ================= Submit ================= */
  const onSubmit = async (data) => {
    try {
      let imageUrl = "";

      // 🔹 Upload image to ImgBB
      if (data.bgImage[0]) {
        const formData = new FormData();
        formData.append("image", data.bgImage[0]);

        const imgRes = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const imgData = await imgRes.json();
        imageUrl = imgData?.data?.display_url;
      }

      const payload = {
        subtitle: data.subtitle,
        title: data.title,
        description: data.description,
        bgImage: imageUrl,
        ctaPrimary: {
          text: data.ctaPrimaryText,
          link: data.ctaPrimaryLink,
        },
        ctaSecondary: {
          text: data.ctaSecondaryText,
          link: data.ctaSecondaryLink,
        },
        createdAt: new Date(),
      };

      heroMutation.mutate(payload);
      console.log(payload)
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে ❌");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Toaster />

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add Hero Section
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Subtitle */}
          <div>
            <label className="block mb-1 font-medium">Subtitle</label>
            <input
              {...register("subtitle", { required: true })}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ee4b22]"
              placeholder="Elevate Your Brand"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              {...register("title", { required: true })}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ee4b22]"
              placeholder="High Quality Garments"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full border rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#ee4b22]"
              placeholder="Hero section description..."
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Background Image Or Video</label>
            <div className="flex items-center gap-3 border rounded-lg px-4 py-2">
              <FiImage className="text-xl text-gray-500" />
              <input
                type="file"
                {...register("bgImage", { required: true })}
                className="w-full"
              />
            </div>
          </div>

          {/* CTA Primary */}
          <div>
            <label className="block mb-1 font-medium">Primary Button Text</label>
            <input
              {...register("ctaPrimaryText")}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Contact Us"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Primary Button Link</label>
            <input
              {...register("ctaPrimaryLink")}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="/contact"
            />
          </div>

          {/* CTA Secondary */}
          <div>
            <label className="block mb-1 font-medium">
              Secondary Button Text
            </label>
            <input
              {...register("ctaSecondaryText")}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Learn More"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Secondary Button Link
            </label>
            <input
              {...register("ctaSecondaryLink")}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="/about"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              disabled={heroMutation.isPending}
              className="w-full flex items-center justify-center gap-2 bg-[#ee4b22] text-white py-3 rounded-lg font-semibold hover:bg-[#d8401b] transition disabled:opacity-60"
            >
              <FiSend />
              {heroMutation.isPending ? "Saving..." : "Add Hero Section"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
