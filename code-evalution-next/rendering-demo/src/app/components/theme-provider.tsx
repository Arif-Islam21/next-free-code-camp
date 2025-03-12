"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#f8312f",
  },
};

const themeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <themeContext.Provider value={defaultTheme}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
