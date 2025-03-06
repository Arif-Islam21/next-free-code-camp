export const dynamicParams = false; //this will not work as dynamic params

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>
        Product {id} details rendered at {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default Details;
