import { notFound } from "next/navigation";

const reviewPage = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      this is a {params.productId} review page of {params.reviewId}
    </div>
  );
};

export default reviewPage;
