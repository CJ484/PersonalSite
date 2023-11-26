import { useState } from "react";
import { useColorMode } from "theme-ui";
import Sun from "../../assets/symbols/sun.js";
import Moon from "../../assets/symbols/moon.js";

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    setColorMode(colorMode === "default" ? "dark" : "default");
  };

  return (
    <>
      {lightTheme ? (
        <Sun toggleTheme={toggleTheme} />
      ) : (
        <Moon toggleTheme={toggleTheme} />
      )}
    </>
  );
};

export default ThemeToggle;
