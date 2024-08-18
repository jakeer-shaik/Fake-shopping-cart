"use client";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Checkout = ({
  applyDiscount,
  handlerDiscount,
  discount,
  calculateSubTotal,
  calculateTotal,
  fixedDiscount,
  shipping,
  tax,
}) => {
  const finalPrice = calculateTotal().toFixed(2);
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="bg-white p-1 mb-2 mx-auto">
        <h3 className="text-md font-bold text-gray-800 mb-4">
          Apply Coupon Code
        </h3>
        <p className="my-2 text-sm text-gray-600">
          Use this Discount Coupon to get 10% off.
        </p>
        {!applyDiscount ? (
          <div className="flex items-center border border-blue-600 rounded-lg">
            <span className="text-gray-800 text-sm font-medium pl-2">
              COUPON10
            </span>
            <button
              type="button"
              className="ml-auto text-blue-500 px-6 py-2 hover:underline"
              onClick={handlerDiscount}
            >
              {applyDiscount ? "Remove" : "Add"}
            </button>
          </div>
        ) : (
          <div
            className="bg-green-400 text-white font-semibold flex items-center p-4 rounded-md shadow-md shadow-green-200 mx-auto w-max my-2"
            role="alert"
          >
            <FaCheckCircle className="w-[18px] shrink-0 rounded-full inline mr-3 bg-green-400" />
            <span className="block sm:inline text-sm mr-3">
              Discount applied successfully
            </span>
            <button onClick={handlerDiscount}>
              <RxCross2 className="w-[18px] cursor-pointer shrink-0 fill-white ml-auto hover:text-gray-50" />
            </button>
          </div>
        )}
      </div>
      <ul className="text-gray-800 divide-y divide-gray-300">
        <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">
          Subtotal{" "}
          <span className="ml-auto">${calculateSubTotal().toFixed(2)}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
          Shipping <span className="ml-auto">${shipping.toFixed(2)}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
          Tax <span className="ml-auto">${tax.toFixed(2)}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
          Discount <span className="ml-auto">${fixedDiscount.toFixed(2)}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
          Coupen discount{" "}
          <span className="ml-auto">
            ${applyDiscount ? discount.toFixed(2) : 0}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">
          Total <span className="ml-auto">${calculateTotal().toFixed(2)}</span>
        </li>
      </ul>

      <div className="flex justify-center mt-4">
        <Link href={`/orders/${finalPrice}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
