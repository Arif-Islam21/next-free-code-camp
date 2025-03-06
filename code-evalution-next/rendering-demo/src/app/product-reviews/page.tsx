import React, { Suspense } from "react";
import Products from "../components/Products";
import Review from "../components/Review";

const ProductReview = () => {
  return (
    <div>
      <h1>Product Review</h1>
      <Suspense fallback={<p>Loading details...</p>}>
        <Products />
      </Suspense>
      <Suspense fallback={<p>Loading review...</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductReview;
