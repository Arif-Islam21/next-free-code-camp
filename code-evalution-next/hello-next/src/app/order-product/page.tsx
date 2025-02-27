"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Order in pending");
    router.replace("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderProduct;
