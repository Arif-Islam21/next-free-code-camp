"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("batman");
  return <div>client Component Two</div>;
};
