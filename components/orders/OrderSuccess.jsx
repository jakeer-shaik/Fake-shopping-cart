"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const OrderSuccess = ({ price }) => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="min-h-screen py-8 px-4 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto max-w-screen-md bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Order Details
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Order ID:</span> #123456789
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Order Date:</span> {formattedDate}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Total Amount:</span> ${price}
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
