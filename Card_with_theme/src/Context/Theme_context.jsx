import { createContext, useContext } from "react";

export const Theme_context = createContext({
  theme: "light",
  toggle : () => {}
});


export default function useTheme  () {
  const context = useContext(Theme_context);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


export  const ThemeProvider = Theme_context.Provider;
