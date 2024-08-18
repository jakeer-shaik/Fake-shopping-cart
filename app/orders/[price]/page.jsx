import OrderSuccess from "@/components/orders/OrderSuccess";
import React from "react";

const OrderPage = ({ params }) => {
  const { price } = params;
  return <OrderSuccess price={price} />;
};

export default OrderPage;
