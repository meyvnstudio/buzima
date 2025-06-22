import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light-mode");
  //   apply theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.documentElement.className = savedTheme;
    setTheme(savedTheme);
  }, []);

  //   toggle mode
  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };


  return (
    <>
      <span onClick={toggleTheme}>
        {theme === "dark-mode" ? <MdDarkMode /> : <MdLightMode />}
      </span>
    </>
  );
};

export default ThemeButton;
