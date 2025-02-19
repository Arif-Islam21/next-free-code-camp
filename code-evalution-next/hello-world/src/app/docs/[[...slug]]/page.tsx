import React from "react";

const docsPage = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 0) {
    return (
      <h2>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return <h2>Viewing docs for feature {params.slug[0]}</h2>;
  }

  return <div>This is the documentation page</div>;
};

export default docsPage;
