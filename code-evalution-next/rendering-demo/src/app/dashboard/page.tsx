"use client";

import React, { useState } from "react";

const DashboardPage = () => {
  console.log("Dashboard client page");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name=""
        id=""
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default DashboardPage;
