import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/colors";


type Theme = typeof Colors.light;

const ThemeContext = createContext<Theme>(Colors.light);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scheme = useColorScheme();

  const colors = scheme === "dark"
    ? Colors.dark
    : Colors.light;

  return (
    <ThemeContext.Provider value={colors}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}