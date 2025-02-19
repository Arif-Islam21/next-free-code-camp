export async function GET() {
  return Response.json(comments);
}
export async function POST(request) {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });
  return Response.json({
    message: "new Comment added",
    comments,
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
