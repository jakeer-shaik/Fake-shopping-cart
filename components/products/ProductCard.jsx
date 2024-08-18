"use client";
import { useCart } from "@/utils/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ADD_TO_CART } from "../../utils/actionsType";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const { image, title, price, id } = product;
  const handlerAddToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
    toast.success("Added to cart Successfully!", {
      position: "top-center",
    });
  };
  return (
    <>
      <Toaster />
      <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="px-1">
          <Link href={`/product/${id}`}>
            <div className="relative w-full h-64 lg:h-80">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        <div className="p-4">
          <h3 className="text-md font-bold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-bold text-gray-800">
              ${price.toFixed(2)}
            </h4>
            <button
              onClick={() => handlerAddToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
