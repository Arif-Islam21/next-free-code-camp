// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return <div>Server route {result} ...</div>;
};

export default ServerRoutePage;
