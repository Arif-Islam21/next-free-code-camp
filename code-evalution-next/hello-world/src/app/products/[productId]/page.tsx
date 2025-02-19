import React from "react";

const productDetails = ({ params }: { params: { productId: string } }) => {
  return <>products details of {params.productId} goes here</>;
};

export default productDetails;
