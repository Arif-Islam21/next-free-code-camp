import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-32 m-8 shadow-2xl border-2 rounded-lg flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
