import fs from "fs";

const ServerComponentTwo = () => {
  fs.readFileSync("src/coomponents/server-component-two.tsx", "utf-8");
  return (
    <div>
      <h1>Server ServerComponentTwo</h1>
    </div>
  );
};

export default ServerComponentTwo;
