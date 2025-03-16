import { Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPost(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts: Post[] = await response.json();
  return posts;
}
async function getUserAlbum(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  const posts: Post[] = await response.json();
  return posts;
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postsData = getUserPost(id);
  const albumData = getUserAlbum(id);

  const [posts, albums] = await Promise.all([postsData, albumData]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1>Blog Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="my-4 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
          </div>
        ))}
        {albums.map((post) => (
          <div key={post.id} className="my-4 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
