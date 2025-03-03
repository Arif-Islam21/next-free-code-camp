import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    content: comment.content,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
