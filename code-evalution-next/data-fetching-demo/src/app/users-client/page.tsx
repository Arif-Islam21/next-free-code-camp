import { useEffect, useState } from "react";

type Users = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};
const UsersClient = () => {
  const [user, setUser] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function feftchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    feftchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul className="space-y-4 p-4">
      {user.map((usr) => (
        <li
          key={usr.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{usr.name}</div>
          <div className="text-sm">
            <span>Username: {usr.username}</span>
            <span>Email: {usr.email}</span>
            <span>Phone: {usr.phone}</span>
            <span>ID: {usr.id}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersClient;
