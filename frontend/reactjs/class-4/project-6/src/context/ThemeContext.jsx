import { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeDataContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
