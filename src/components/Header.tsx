import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getInitialTheme, setTheme } from "../utils/theme";
import profileImg from "../assets/profile.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme());
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    setTheme(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "About", icon: "👤" },
    { path: "/experience", label: "Experience", icon: "💼" },
    { path: "/education", label: "Education", icon: "🎓" },
    { path: "/projects", label: "Projects", icon: "🚀" },
    { path: "/skills", label: "Skills", icon: "⚡" },
    { path: "/certifications", label: "Certifications", icon: "🏆" },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {/* Logo/Brand */}
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon">💻</span>
          <span>Ragu</span>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          role="menubar"
          id="primary-navigation"
        >
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <NavLink
                to={item.path}
                end={item.path === "/"}
                role="menuitem"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="nav-right">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="theme-button"
            aria-label="Toggle dark mode"
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            <span className="theme-icon">{darkMode ? "☀️" : "🌙"}</span>
          </button>

          {!isAbout && (
            <img
              src={profileImg}
              alt="Profile"
              className="nav-profile"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/";
              }}
              title="Go to home"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
