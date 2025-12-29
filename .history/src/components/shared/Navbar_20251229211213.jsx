"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMobile, FaUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSession } from "next-auth/react";
import DrawerMenu from "../user/UserDrawerMenu";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import CartDrawer from "../cart/CartDrawer";
import usecart from "@/hooks/useCart";


// Fake cart items
const sampleCartItems = [
  {
    name: "Red Hoodie",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    price: 30,
    quantity: 1,
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1593032465176-5d211d53370d",
    price: 50,
    quantity: 2,
  },
];

export default function Navbar({ cartCount = 2, onSearch }) {
  const [open, setOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const {cart,, isLoading , refetch} = usecart()
  const cartLength = cart?.length || 0;

  // User icon click
  const handleUserClick = () => {
    if (status == "authenticated") {
      setUserDrawerOpen(true);
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <header className="w-full">
        {/*  Top Bar  */}
        <div className="bg-[#4cb5b0] text-white text-[13px] font-medium border-b border-white/10">
          <div className="max-w-6xl mx-auto flex justify-between items-center h-10">

            {/* Left Side: Contact Info */}
            <div className="flex items-center gap-8 pl-4">
              <div className="flex items-center gap-1">
                <CiLocationOn />
                <span>Kashimpur, Gazipur Sadar / Gazipur</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobile />
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

        {/*  Main Navbar  */}
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
                  <Link className="flex gap-2 item-center" href="/services">Our Services
                    <MdOutlineKeyboardArrowDown className="text-xl mt-0.5" />
                  </Link>
                </div>

                <div className="md:flex">
                  <Link className="flex gap-2 item-center" href="/products">Our Products
                    <MdOutlineKeyboardArrowDown className="text-xl mt-0.5" />
                  </Link>
                </div>
                <Link href="/blogs">Blogs</Link>
              </nav>

            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition duration-150 relative"
              >
                <FiShoppingCart className="h-6 w-6 text-gray-600" />
                {!isLoading && cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    {cartLength}
                  </span>
                )}
              </button>

              {/* User Icon */}
              <button
                onClick={handleUserClick}
                className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
              >
                {status == "authenticated" ? (
                  <FaUser className="text-xl" />

                ) : (
                  <Link
                    href="/auth/login"
                    className="px-4 py-2 border border-[#ee4b22] text-gray-800 rounded-lg hover:bg-[#ee4b22] hover:text-white"
                  >
                    Login
                  </Link>
                )}
              </button>


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

          {/*  Mobile Menu  */}
          {open && (
            <div className="md:hidden bg-white border-t">
              <nav className="flex flex-col gap-4 px-4 py-4 text-gray-700">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/products">Our Products</Link>
                <Link href="/blogs">Blogs</Link>

                <div className="flex items-center gap-4 pt-4">
                  {/* Cart */}
                  <button
                    onClick={() => setDrawerOpen(true)}
                    className="flex flex-col items-center text-xs relative text-gray-500"
                  >
                    <FiShoppingCart className="text-xl mb-1" />
                    Cart
                    {cartCount > 0 && (
                      <span className="absolute top-0 right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>

                  {/* User Icon */}
                  <button
                    onClick={handleUserClick}
                    className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
                  >
                    {status == "authenticated" ? (
                      <FaUser className="text-xl" />

                    ) : (
                      <Link
                        href="/auth/login"
                        className="px-4 py-2 border border-[#ee4b22] text-gray-800 rounded-lg hover:bg-[#ee4b22] hover:text-white"
                      >
                        Login
                      </Link>
                    )}
                  </button>

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

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      {/* userdrawer */}
      <DrawerMenu
        isOpen={userDrawerOpen}
        onClose={() => setUserDrawerOpen(false)}
      // user={user}
      />
    </>
  );
}
