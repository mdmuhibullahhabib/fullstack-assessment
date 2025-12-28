"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddHeroPage() {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm();

  const heroMutation = useMutation({
    mutationFn: async (heroData) => {
      const res = await fetch("/api/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(heroData),
      });

      return res.json();
    },
    onSuccess: () => {
      toast.success("Hero added successfully ✅");
      queryClient.invalidateQueries(["hero"]);
      reset();
      setLoading(false);
    },
    onError: () => {
      toast.error("Hero add failed ❌");
      setLoading(false);
    },
  });

  /* ================= Submit ================= */
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let imageUrl = "";

      // 🔥 Image Upload like your Payment code
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
          text: data.primaryText,
          link: data.primaryLink,
        },
        ctaSecondary: {
          text: data.secondaryText,
          link: data.secondaryLink,
        },
      };

      heroMutation.mutate(payload);

    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Add Hero Section</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input {...register("subtitle")} placeholder="Subtitle" className="input" />
        <input {...register("title")} placeholder="Title" className="input" />
        <textarea {...register("description")} placeholder="Description" className="input" />

        <input
          type="file"
          {...register("bgImage")}
          className="file-input"
        />

        <input {...register("primaryText")} placeholder="Primary Button Text" className="input" />
        <input {...register("primaryLink")} placeholder="Primary Button Link" className="input" />

        <input {...register("secondaryText")} placeholder="Secondary Button Text" className="input" />
        <input {...register("secondaryLink")} placeholder="Secondary Button Link" className="input" />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#ee4b22] text-white px-6 py-3"
        >
          {loading ? "Uploading..." : "Add Hero"}
        </button>
      </form>
    </div>
  );
}
