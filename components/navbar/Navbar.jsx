"use client";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md text-black px-4 py-4 fixed w-screen z-50 top-0 h-16">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">ShopLite</Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-400 font-semibold">
            Home
          </Link>
          <Link href="/cart" className="hover:text-blue-400 font-semibold">
            Cart
          </Link>
          <Link href="/about" className="hover:text-blue-400 font-semibold">
            About us
          </Link>
        </div>
        <div className="flex items-center space-x-4 mr-2">
          <Link
            href="/cart"
            className="hover:text-gray-800 flex items-center relative transition-colors duration-200"
          >
            <FaShoppingCart className="cursor-pointer hover:fill-[#007bff] inline w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-1 py-1 text-xs text-white">
                {cart.length}
              </span>
            )}
          </Link>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDrawer}
              className="text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-3/4 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="bg-white bg-opacity-95 backdrop-blur-xl h-screen">
          <div className="flex flex-col items-center space-y-6 ">
            <div className="text-lg font-bold mt-10">
              <Link href="/" onClick={toggleDrawer}>
                ShopLite
              </Link>
            </div>
            <Link
              href="/"
              onClick={toggleDrawer}
              className="hover:text-gray-800 text-lg transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/cart"
              onClick={toggleDrawer}
              className="hover:text-gray-800 text-lg flex items-center transition-colors duration-200"
            >
              Cart
            </Link>
            <Link
              href="/about"
              onClick={toggleDrawer}
              className="hover:text-gray-800 text-lg flex items-center transition-colors duration-200"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
