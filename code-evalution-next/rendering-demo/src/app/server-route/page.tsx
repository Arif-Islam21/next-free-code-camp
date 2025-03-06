import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  return <div>Server route {result}</div>;
};

export default ServerRoutePage;
