import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">ShopLite</h4>
            <p className="text-gray-400">
              Your go-to destination for the best online shopping experience.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">About Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-white transition cursor-pointer">FAQ</li>
              <li className="mb-2 text-gray-400 hover:text-white transition cursor-pointer">Shipping & Returns</li>
              <li className="mb-2 text-gray-400 hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="mb-2 text-gray-400 hover:text-white transition cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a>
                <span className="text-gray-400 hover:text-white transition cursor-pointer">
                  <FaFacebookF />
                </span>
              </a>
              <a>
                <span className="text-gray-400 hover:text-white transition cursor-pointer">
                  <FaInstagram />
                </span>
              </a>
              <a>
                <span className="text-gray-400 hover:text-white transition cursor-pointer">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ShopLite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
