export const metadata = {
  title: "About Arif",
};

const BlogPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("BlogPage loading...");
    }, 1000); // Simulating async data fetching
  });
  return <div>this is BlogPage</div>;
};

export default BlogPage;
