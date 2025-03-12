"use client";

// import { serverSideFunction } from "@/utils/server-utils";
import { useTheme } from "../components/theme-provider";

const ClientRoute = () => {
  const theme = useTheme();

  return <h1 style={{ color: theme.colors.primary }}>Client Route Page</h1>;
};

export default ClientRoute;
