// components/ProductDetailsSkeleton.js
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 animate-pulse mt-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-neutral-300 w-full h-96 rounded-md"></div>
        <div>
          <div className="h-8 bg-neutral-300 w-3/4 mb-4 rounded-md"></div>
          <div className="h-4 bg-neutral-300 w-full mb-4 rounded-md"></div>
          <div className="h-4 bg-neutral-300 w-5/6 mb-4 rounded-md"></div>
          <div className="h-4 bg-neutral-300 w-1/2 mb-4 rounded-md"></div>
          <div className="h-8 bg-neutral-300 w-1/4 mb-4 rounded-md"></div>
          <div className="flex items-center mb-4">
            <div className="h-4 bg-neutral-300 w-1/4 mr-4 rounded-md"></div>
            <div className="h-4 bg-neutral-300 w-1/6 rounded-md"></div>
          </div>
          <div className="flex items-center mb-4">
            <div className="h-4 bg-neutral-300 w-1/6 rounded-md"></div>
          </div>
          <div className="flex items-center mb-4">
            <div className="h-4 bg-neutral-300 w-1/6 mr-4 rounded-md"></div>
            <div className="h-10 bg-neutral-300 w-20 px-2 py-1 border rounded-md"></div>
          </div>
          <div className="h-12 bg-neutral-300 w-1/2 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
