import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Set  desired mobile breakpoint
    if (mediaQuery.matches) {
      setTheme("light");
    } else {
      setTheme(localStorage.getItem("theme") || "light");
    }

    const handleChange = () => {
      if (mediaQuery.matches) {
        setTheme("light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // Apply theme to the body
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app">
      <h1>Theme Toggle</h1>
      <button className={`button ${theme}`} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
