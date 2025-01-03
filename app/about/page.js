const getTime = async () => {
  const res = await fetch(`http://localhost:3000/time`, { cache: "no-store" });
  const data = await res.json();
  return data.currentTime;
};

const page = async () => {
  const currentTime = await getTime();
  return (
    <div>
      <h2>About Page</h2>
      <h2>Current Time is: {currentTime}</h2>
    </div>
  );
};

export default page;
