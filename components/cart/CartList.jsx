"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/utils/CartContext";
import {
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../../utils/actionsType";
import EmptyCart from "./EmptyCart";
import CartCard from "./CartCard";
import Checkout from "./Checkout";

const CartList = () => {
  const { cart, dispatch } = useCart();
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discount, setDiscount] = useState(0);
  const shipping = 2;
  const tax = 2;
  const fixedDiscount = 10;

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id: productId } });
    setApplyDiscount(false);
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: INCREASE_QUANTITY, payload: { id: productId } });
    setApplyDiscount(false);
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: DECREASE_QUANTITY, payload: { id: productId } });
    setApplyDiscount(false);
  };

  const calculateSubTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlerDiscount = () => {
    setApplyDiscount(!applyDiscount);
  };

  useEffect(() => {
    if (applyDiscount) {
      const discountPrice = (calculateSubTotal() * 10) / 100;
      setDiscount(discountPrice);
    } else {
      setDiscount(0);
    }
  }, [applyDiscount, cart]);

  const calculateTotal = () => {
    return calculateSubTotal() + shipping + tax - fixedDiscount - discount;
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="mt-20">
              <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto">
                <div className="lg:col-span-2 bg-white divide-y divide-gray-300 px-4">
                  {cart.map((item) => (
                    <CartCard
                      key={item.id}
                      item={item}
                      handleIncreaseQuantity={handleIncreaseQuantity}
                      handleDecreaseQuantity={handleDecreaseQuantity}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  ))}
                </div>
                <Checkout
                  applyDiscount={applyDiscount}
                  handlerDiscount={handlerDiscount}
                  discount={discount}
                  calculateSubTotal={calculateSubTotal}
                  calculateTotal={calculateTotal}
                  fixedDiscount={fixedDiscount}
                  shipping={shipping}
                  tax={tax}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
