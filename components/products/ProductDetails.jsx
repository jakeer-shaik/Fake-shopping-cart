"use client";
import { fetchProductByID } from "@/services/products";
import { ADD_TO_CART } from "@/utils/actionsType";
import { useCart } from "@/utils/CartContext";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import ProductDetailsSkeleton from "./ProductDetailSkeletion";

const ProductDetails = ({ id }) => {
  const { dispatch } = useCart();
  const {
    data: singleProduct,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => fetchProductByID(id),
    enabled: !!id,
  });
  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }
  if (error) return <div>Error!</div>;
  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: singleProduct });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center rounded-lg shadow-lg p-3">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={200}
            height={200}
            className="object-contain rounded"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl font-bold mb-4">{singleProduct.title}</h1>
          <p className="text-gray-700 text-md mb-4 text-justify">
            {singleProduct.description}
          </p>
          <div className="text-md text-gray-800 mb-4">
            Category: <span className="font-extrabold">{singleProduct.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-4">
              ${singleProduct.price}
            </span>
            <span className="text-sm text-gray-600">
              {singleProduct.rating.count} reviews
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-sm text-yellow-500">{`⭐ ${singleProduct.rating.rate}`}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
