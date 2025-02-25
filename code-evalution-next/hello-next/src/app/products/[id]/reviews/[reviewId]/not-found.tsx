"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ReviewNotFound = () => {
  const pathname = usePathname();
  const reviewId = pathname.split("/")[4];
  const id = pathname.split("/")[2];

  return (
    <div>
      review {reviewId} not found for {id}
    </div>
  );
};

export default ReviewNotFound;
