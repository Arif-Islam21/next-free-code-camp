import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return <div>This is a product details page of {id}</div>;
};

export default ProductDetails;
