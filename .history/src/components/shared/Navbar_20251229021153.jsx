"use client";

import Link from "next/link";
import { Menu, X, ShoppingCart, User, LocationEditIcon } from "lucide-react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaInstagram , FaFacebookF, FaTwitter, FaYoutube, FaMobile } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSession } from "next-auth/react";
import DrawerMenu from "../user/UserDrawerMenu";

    // User icon click
    const handleUserClick = () => {
        if (status == "authenticated") {
            setUserDrawerOpen(true);
        } else {
            router.push("/auth");
        }
    };

export default function Navbar() {
  const [open, setOpen] = useState(false);
      const [userDrawerOpen, setUserDrawerOpen] = useState(false);
    const { data: session, status } = useSession();
  return (
     <>
    <header className="w-full">
      {/* ===== Top Bar ===== */}
      <div className="bg-[#4cb5b0] text-white text-[13px] font-medium border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-10">

          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-8 pl-4">
            <div className="flex items-center gap-2">
          <CiLocationOn />
              <span>Kashimpur, Gazipur Sadar / Gazipur</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobile/>
              <span>+880 01713-027875</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative h-full flex items-center  md:mr-8">
            {/* Skewed white background shape */}
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

      {/* ===== Main Navbar ===== */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between px-4 py-4">

          {/* Logo */}
          <div className=" flex gap-16">
            <div className="">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white font-bold">
              Z
            </div>
            <span className="font-bold text-lg text-gray-800">
              Company
            </span>
          </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <div className="md:flex">
            <Link  className="flex gap-2 item-center" href="/services">Our Services
            <MdOutlineKeyboardArrowDown className="text-xl mt-0.5"/>
            </Link>
            </div>

            <div className="md:flex">
            <Link className="flex gap-2 item-center" href="/products">Our Products
            <MdOutlineKeyboardArrowDown className="text-xl mt-0.5"/>
            </Link>
            </div>
            <Link href="/blogs">Blogs</Link>
          </nav>

          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ShoppingCart className="cursor-pointer" />

                        {/* User Icon */}
                        <button
                            onClick={handleUserClick}
                            className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
                        >
                            {status == "authenticated" ? (
                                <img
                                    src={fakeUser?.avatar}
                                    alt="user"
                                    className="h-8 w-8 rounded-full border"
                                />
                            ) : (
                                <Link
                                    href="/auth"
                                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                                >
                                    লগ ইন
                                </Link>
                            )}
                        </button>
            <Link
              href="/auth/login"
             className="px-4 py-2 border border-[#ee4b22] text-gray-800 rounded-lg hover:bg-[#ee4b22] hover:text-white"
             >
              Login
            </Link>

            <Link
              href="/contact"
              className="bg-[#ee4b22] text-white px-4 py-2"
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
                  className="bg-[#ee4b22] text-white px-4 py-2 rounded"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
                <DrawerMenu
                isOpen={userDrawerOpen}
                onClose={() => setUserDrawerOpen(false)}
                // user={user}
            />
           </>
  );
}
