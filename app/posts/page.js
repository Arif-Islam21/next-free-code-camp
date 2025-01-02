import Link from "next/link";
import getPosts from "../services/PostApi";

const postPage = async () => {
  const postsData = await getPosts();
  return (
    <div className="mx-4 my-2">
      <h6 className="text-center text-2xl font-bold my-4">All Posts</h6>
      <div className="grid grid-cols-4 gap-3">
        {postsData?.slice(0, 20).map((post) => (
          <div
            className="border-2 rounded-lg border-orange-600 hover:bg-yellow-200 p-4"
            key={post.id}
          >
            <h6 className="text-xl font-semibold">{post.title}</h6>
            <p className="text-sm">{post.body}</p>
            <button className="btn btn-accent">
              <Link href={`/posts/${post.id}`}>Read Post</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default postPage;
