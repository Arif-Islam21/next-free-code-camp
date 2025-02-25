import React from "react";

const CatchAllSegment = async ({ params }: Promise<{ slug: string[] }>) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        viewing docs for feature {slug[0]} and concept of {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>viewing docs for feature {slug[0]}</h1>;
  }

  return <div>This is an example for docs</div>;
};

export default CatchAllSegment;
