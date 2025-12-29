"use client";

import useProducts from "@/hooks/useProducts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Apparel() {
  const { data: session } = useSession();
  const router = useRouter();
  const { products } = useProducts();

  const handleAddToCart = async (product) => {
 
    if (!session?.user?.email) {
      router.push("/auth/login");
      return;
    }

    const cartData = {
      name: product.name,
      image: product.img,
      price: product.price,
      quantity: 1,
    };

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Added to cart 🛒");
      } else {
        toast.error(data.message || "Failed to add");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Our Apparels</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-4">${p.price}</p>

                <button
                  onClick={() => handleAddToCart(p)}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white text-xs py-2 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
