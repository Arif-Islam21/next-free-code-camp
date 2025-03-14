import fs from "fs";
import ServerComponentTwo from "./server-component-two";

const ServerComponentOne = () => {
  fs.readFileSync("src/coomponents/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h1>Server ServerComponentOne</h1>
      <ServerComponentTwo />
    </div>
  );
};

export default ServerComponentOne;
