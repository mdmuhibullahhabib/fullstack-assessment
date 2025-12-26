"use client";

import Link from "next/link";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* ===== Top Bar ===== */}
      <div className="bg-teal-500 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <p>📍 Kashimpur, Gazipur Sadar / Gazipur</p>
          <div className="flex items-center gap-4">
            <span>📞 +880 01713-027875</span>
            <div className="flex gap-2">
              <span>f</span>
              <span>x</span>
              <span>▶</span>
              <span>📷</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          
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
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/products">Our Products</Link>
            <Link href="/blogs">Blogs</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ShoppingCart className="cursor-pointer" />
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
              M
            </div>
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded"
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

        {/* ===== Mobile Menu ===== */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col gap-4 px-4 py-4 text-gray-700">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/products">Our Products</Link>
              <Link href="/blogs">Blogs</Link>

              <div className="flex items-center gap-4 pt-4">
                <ShoppingCart />
                <User />
                <Link
                  href="/contact"
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
