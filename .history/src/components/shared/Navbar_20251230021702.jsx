"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMobile,
  FaUser,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSession } from "next-auth/react";
import DrawerMenu from "../user/UserDrawerMenu";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import CartDrawer from "../cart/CartDrawer";
import useCart from "@/hooks/useCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  const { cart, isLoading } = useCart();
  const cartLength = cart?.length || 0;

  // User icon click handler
  const handleUserClick = () => {
    if (status === "authenticated") {
      setUserDrawerOpen(true);
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <header className="w-full">

        {/* ================= TOP BAR ================= */}
        <div className="bg-[#4cb5b0] text-white text-xs md:text-[13px] font-medium border-b border-white/10">
          <div className="max-w-6xl mx-auto flex justify-between items-center h-10 px-4">

            {/* Left: Contact Info */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-1">
                <CiLocationOn />
                <span>Kashimpur, Gazipur</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobile />
                <span>+880 01713-027875</span>
              </div>
            </div>

            {/*  Social Icons */}
                    <div className="relative h-full flex items-center  md:mr-8">
              <div className="absolute right-0 top-0 bottom-[-2px] md:w-[115px] bg-white origin-top-right transform translate-x-4"></div>

              {/* Social Icons */}
              <div className="relative flex items-center md:ml-8 gap-3 text-[#ee4b22]">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN NAVBAR ================= */}
        <div className="bg-white shadow">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white font-bold">
                Z
              </div>
              <span className="font-bold text-lg text-gray-800">
                Company
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>

              <Link href="/services" className="flex items-center gap-1">
                Our Services
                <MdOutlineKeyboardArrowDown />
              </Link>

              <Link href="/products" className="flex items-center gap-1">
                Our Products
                <MdOutlineKeyboardArrowDown />
              </Link>

              <Link href="/blogs">Blogs</Link>
            </nav>

            {/* Right Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">

              {/* Cart */}
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="relative p-2 rounded-full hover:bg-gray-100"
              >
                <FiShoppingCart className="h-6 w-6 text-gray-600" />
                {!isLoading && cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-red-600 text-xs text-white font-bold">
                    {cartLength}
                  </span>
                )}
              </button>

              {/* User */}
              <button
                onClick={handleUserClick}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {status === "authenticated" ? (
                  <FaUser className="text-xl" />
                ) : (
                  <span className="px-4 py-2 border border-[#ee4b22] rounded-lg hover:bg-[#ee4b22] hover:text-white">
                    Login
                  </span>
                )}
              </button>

              {/* Contact */}
              <Link
                href="/contact"
                className="bg-[#ee4b22] text-white px-4 py-2 rounded"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {open && (
            <div className="md:hidden bg-white border-t">
              <nav className="flex flex-col gap-4 px-4 py-4 text-gray-700">

                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/products">Our Products</Link>
                <Link href="/blogs">Blogs</Link>

                <div className="flex items-center gap-6 pt-4">

                  {/* Cart */}
                  <button
                    onClick={() => setCartDrawerOpen(true)}
                    className="relative flex flex-col items-center text-xs"
                  >
                    <FiShoppingCart className="text-xl" />
                    Cart
                    {!isLoading && cartLength > 0 && (
                      <span className="absolute top-0 right-2 bg-red-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartLength}
                      </span>
                    )}
                  </button>

                  {/* User */}
                  <button onClick={handleUserClick}>
                    <FaUser className="text-xl" />
                  </button>

                  <Link
                    href="/contact"
                    className="bg-[#ee4b22] text-white px-4 py-2 rounded"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Drawers */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
      />

      <DrawerMenu
        isOpen={userDrawerOpen}
        onClose={() => setUserDrawerOpen(false)}
      />
    </>
  );
}
