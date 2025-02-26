import React from "react";

const ProductsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>products page of {productId}</div>;
};

export default ProductsPage;
