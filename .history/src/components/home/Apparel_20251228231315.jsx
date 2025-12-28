"use client";

import useProducts from "@/hooks/useProducts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Apparel() {
  const { data: session } = useSession();
  const router = useRouter();
  const {products} = useProducts();

  const products = [
    {
      id: "1",
      name: "Women Apparel",
      price: "৳1,000.00 → ৳10,000.00",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: "1",
      name: "Women Apparel",
      price: "৳1,000.00 → ৳10,000.00",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    }
  ];

  // ================= ADD TO CART =================
  const handleAddToCart = async (product) => {
    // ❌ Not logged in
    if (!session?.user?.email) {
      router.push("/auth/login");
      return;
    }

    // ✅ Logged in → save to DB
    const cartData = {
      userEmail: session.user.email,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      quantity: 1,
    };

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      });

      if (res.ok) {
        toast.success("Added to cart successfully 🛒");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">Our Apparels</h2>
          <span className="text-sm text-gray-600 cursor-pointer">
            See All Products
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{p.price}</p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(p)}
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-xs py-2 rounded"
                  >
                    Add To Cart
                  </button>

                  <button className="flex-1 bg-gray-100 text-xs py-2 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
