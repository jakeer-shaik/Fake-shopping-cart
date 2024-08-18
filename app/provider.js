"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "@/utils/CartContext";
import React from "react";

const queryClient = new QueryClient();
const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
};

export default Provider;
