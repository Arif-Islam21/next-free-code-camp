"use client";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error(message);
  }
  return (
    <button title="simulator error" onClick={() => setError(true)}>
      Simulator Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <ErrorSimulator message="simulator error in root layout" />
      {children}
    </div>
  );
};
