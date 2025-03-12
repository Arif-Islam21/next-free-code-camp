"use client";

import { clientSideFunction } from "@/utils/client-utils";
// import { serverSideFunction } from "@/utils/server-utils";
import { useTheme } from "../components/theme-provider";

const ClientRoute = () => {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route Page</h1>
      <p>{result}</p>
    </>
  );
};

export default ClientRoute;
