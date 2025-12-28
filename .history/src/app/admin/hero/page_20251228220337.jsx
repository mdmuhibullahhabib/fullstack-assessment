"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddHero() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        bgImage: data.bgImage,
        ctaPrimary: { text: data.ctaPrimaryText, link: data.ctaPrimaryLink },
        ctaSecondary: { text: data.ctaSecondaryText, link: data.ctaSecondaryLink }
      };

      const res = await fetch("/api/admin/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (result._id) {
        alert("Hero added successfully!");
        reset();
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add hero");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-5">Add Hero Section</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("subtitle")} placeholder="Subtitle" className="border p-2"/>
        <input {...register("title")} placeholder="Title" className="border p-2"/>
        <textarea {...register("description")} placeholder="Description" className="border p-2"/>
        <input {...register("bgImage")} placeholder="Background Image URL" className="border p-2"/>
        <input {...register("ctaPrimaryText")} placeholder="Primary Button Text" className="border p-2"/>
        <input {...register("ctaPrimaryLink")} placeholder="Primary Button Link" className="border p-2"/>
        <input {...register("ctaSecondaryText")} placeholder="Secondary Button Text" className="border p-2"/>
        <input {...register("ctaSecondaryLink")} placeholder="Secondary Button Link" className="border p-2"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Hero</button>
      </form>
    </div>
  );
}
