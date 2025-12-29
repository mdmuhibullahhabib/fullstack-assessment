 "use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function useCart() {
  const { data: session, status } = useSession();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    if (!session?.user?.email) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error("Fetch cart error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status !== "loading") {
      fetchCart();
    }
  }, [session, status]);

  return {
    cartItems,
    loading,
    refetchCart: fetchCart,
  };
}
