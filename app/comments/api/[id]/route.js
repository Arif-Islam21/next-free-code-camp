export async function PATCH(request, { params }) {
  //   console.log(params.id);
  const body = await request.json();
  const index = comments.find((c) => c.id === parseInt(params.id));
  comments[index] = {
    text: body.text,
  };
  return Response.json({
    message: "comments updated",
    comments,
  });
}

export async function DELETE(request, { params }) {
  const newComments = comments.filter((c) => c.id !== parseInt(params.id));

  return Response.json({
    message: "comments <Delete0>|</Delete0>d",
    newComments,
  });
}

const comments = [
  {
    id: 1,
    text: "Hello comment 1",
  },
  {
    id: 2,
    text: "Hello comment 2",
  },
  {
    id: 3,
    text: "Hello comment 3",
  },
];
