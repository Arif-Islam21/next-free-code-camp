import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <h1>Folder 1 page</h1>
      <Link href="/f1/F2">F2</Link>
      <Link href="/f3">F3</Link>
    </div>
  );
};

export default F1;
