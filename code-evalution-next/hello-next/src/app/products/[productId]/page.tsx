import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${id}`);
    }, 100); // Simulating async data fetching
  });
  return {
    title: `Product ${title}`,
    description: `View details about product ${id}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return <div>products page of {productId}</div>;
};
export default ProductDetails;
