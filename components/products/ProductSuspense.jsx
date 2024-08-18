import React from "react";

const ProductSuspense = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Products
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <div className="animate-pulse flex flex-col items-center">
              <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
              <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
              <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
              <div className="bg-gray-300 h-6 w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSuspense;
