import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getInitialTheme, setTheme } from "../utils/theme";
import profileImg from "../assets/profile.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme());
  const location = useLocation();
  const isAbout = location.pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    setTheme(darkMode);
  }, [darkMode]);

  return (
    <header className="site-header">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </div>

        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          role="menubar"
          id="primary-navigation"
        >
          <li role="none">
            <NavLink
              to="/"
              end
              role="menuitem"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/education"
              role="menuitem"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Education
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/projects"
              role="menuitem"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/skills"
              role="menuitem"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
          </li>
        </ul>

        <div className="nav-right">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="theme-button"
            aria-label="Toggle dark mode"
          >
            <span className="theme-icon">{darkMode ? "🌞" : "🌙"}</span>
            <span className="theme-label">{darkMode ? " Light" : " Dark"}</span>
          </button>

          {/* show small profile image next to brand when not on About page */}
          {!isAbout && (
            <img
              src={profileImg}
              alt="Profile"
              className="nav-profile"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/";
              }}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
