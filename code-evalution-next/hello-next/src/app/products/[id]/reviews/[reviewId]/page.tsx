import React from "react";
import { notFound } from "next/navigation";

const PreductReview = async ({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) => {
  const { id, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      this is review of {reviewId} under {id}
    </div>
  );
};

export default PreductReview;
