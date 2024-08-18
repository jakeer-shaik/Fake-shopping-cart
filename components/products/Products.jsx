"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/services/products"; 
import { useQuery } from "@tanstack/react-query";
import ProductSuspense from "./ProductSuspense";

const Products = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <ProductSuspense />
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
