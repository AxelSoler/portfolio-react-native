"use client";

import { useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Set default to dark if theme is not set yet
    if (!theme || theme === "system") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return (
    <>
      <div className="flex justify-between gap-2 w-full md:hidden">
        <button
          onClick={() => setTheme("light")}
          className="w-full p-2 rounded bg-gray-200 text-black dark:bg-gray-700 transition-colors duration-500 ease-in-out"
        >
          🌞 Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="w-full p-2 rounded text-slate-300 dark:bg-gray-900 dark:text-white bg-gray-500 transition-colors duration-500 ease-in-out"
        >
          🌙 Dark
        </button>
      </div>
      <button
        onClick={toggleTheme}
        className="hidden md:block p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-500 ease-in-out"
      >
        {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
      </button>
    </>
  );
}
