"use client";

import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-8">Our Products</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p._id} className="bg-white border rounded p-4">
              <img src={p.image} className="mb-4" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">${p.price}</p>

              <button
                onClick={() => addToCart(p)}
                className="mt-3 w-full bg-green-500 text-white py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
