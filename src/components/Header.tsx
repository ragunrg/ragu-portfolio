import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import { getInitialTheme, setTheme } from "../utils/theme";
import "../index.css"; // Optional: move to global styles if using CSS Modules

const Header = () => {
  const { name, title } = useSelector((state: RootState) => state.profile);
  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    setTheme(darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <header className="p-6 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {name}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
