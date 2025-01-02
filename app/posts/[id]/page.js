import React from "react";
import getPostDetails from "@/app/services/SinglePostApi";

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getPostDetails(params.id);
  return (
    <div className="">
      <h3 className="text-2xl font-bold text-center my-2">Title: {title}</h3>
      <h6 className="max-w-xl mx-auto">Description: {body}</h6>
    </div>
  );
};

export default PostDetailsPage;
