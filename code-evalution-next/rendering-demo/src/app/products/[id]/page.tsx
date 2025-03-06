import React from "react";

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
