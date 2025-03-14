"use client";

import { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(`${error.message}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div>Error fetching user data</div>
    </div>
  );
};

export default ErrorPage;
