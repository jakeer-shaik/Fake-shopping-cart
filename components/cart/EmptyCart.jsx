import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
      <p className="text-lg mb-8">Add some products to start shopping!</p>
      <Link href={"/"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
