import { redirect } from "next/navigation";

const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
  const data = await res.json();
  return data;
};

export default getPosts;
