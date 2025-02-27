import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This become home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read In English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read In Bengali</Link>
    </div>
  );
};

export default Home;
