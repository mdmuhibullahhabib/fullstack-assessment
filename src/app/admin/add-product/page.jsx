"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let imageUrl = null;

      if (data.img && data.img[0]) {
        const formData = new FormData();
        formData.append("image", data.img[0]);

        const res = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });
        const imgData = await res.json();
        imageUrl = imgData?.data?.display_url || null;
      }

      const payload = {
        name: data.name,
        price: data.price,
        img: imageUrl,
        createdAt: new Date(),
      };

      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Product added successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <Toaster/>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter product name"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            {...register("price", { required: true })}
            placeholder="৳1,000.00 → ৳10,000.00"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Image</label>
          <input
            {...register("img", { required: true })}
            type="file"
            accept="image/*"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.img && <p className="text-red-500 text-sm mt-1">Image is required</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
