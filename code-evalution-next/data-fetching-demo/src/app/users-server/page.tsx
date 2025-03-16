type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {users.map((usr) => (
        <li
          key={usr.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{usr.name}</div>
          <div className="text-sm">
            <div>Username: {usr.username}</div>
            <div>Email: {usr.email}</div>
            <div>Phone: {usr.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
