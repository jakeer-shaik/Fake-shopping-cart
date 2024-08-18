import ProductDetails from "@/components/products/ProductDetails";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return <ProductDetails id={id} />
};

export default page;


