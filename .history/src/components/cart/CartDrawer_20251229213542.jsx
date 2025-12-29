"use client";

import { FiX, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import usecart from "@/hooks/useCart";

export default function CartDrawer({ isOpen, onClose }) {
  const router = useRouter();
  // const { cart, loading, refe } = useCart();
  const {cart, isLoading , refetch} = usecart()

  // Subtotal handle
  const subtotal = cart?.length
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const handleCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  const handleRemove = async (id) => {
    try {
      const res = await fetch(`/api/cart?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Item removed");
        refe();
      } else {
        toast.error("Failed to remove item");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading cart...</p>;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/20 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b px-4 py-4 flex justify-between items-center">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={onClose}>
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
          {!cart || cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-3 border p-2 rounded-lg"
              >
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  alt={item.name}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-red-600 font-semibold text-sm">
                    ${item.price}
                  </p>
                </div>
                <button onClick={() => handleRemove(item._id)}>
                  <FiTrash2 className="text-red-500" />
                </button>
              </div>
            ))
          )}

          {/* Footer */}
          {cart && cart.length > 0 && (
            <div className="pt-4 border-t">
              <div className="flex justify-between mb-3 text-sm">
                <span>Subtotal</span>
                <span className="text-red-600 font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-2 bg-red-600 text-white rounded-lg"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
