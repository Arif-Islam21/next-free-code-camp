type Author = {
  id: number;
  name: string;
};

export async function Author({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written By:{" "}
      <span className="font-semibold text-gray-700 hover:text-gray-900">
        {author.name}
      </span>
    </div>
  );
}
