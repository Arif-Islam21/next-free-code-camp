"use client";

import { useState } from "react";

export const ClientComponentOne = () => {
  const [name, setName] = useState("batman");
  return <div>clientComponentOne</div>;
};
