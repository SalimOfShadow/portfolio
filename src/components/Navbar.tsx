// Navbar.js
import * as React from "react";
import PropTypes from "prop-types";

import "../App.css";
import {
  darkThemeStyles,
  themeShadows,
  themeStyles,
  useTheme,
} from "../contexts/ThemeContext";

const headerColors = {
  blue: "#1f2187",
  red: "#872f1f",
  green: "green",
  yellow: "yellow",
};

const Navbar = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      className="header"
      style={{
        boxShadow: `0 8px 32px 0 ${headerColors[theme]}`,
        marginBottom: "70px",
      }}
    >
      <nav>
        <div className="logo">
          <a href="index.html">
            {"Salim"}
            <span style={{ color: headerColors[theme] }}>{"   KOF"}</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a
              href="#contact"
              className={`navbar-btn`}
              style={{
                backgroundColor: themeStyles[theme],
                boxShadow:
                  theme === "blue"
                    ? `0 8px 32px 0 rgba(31, 41, 135, 0.37)` // Blue shadow for blue theme
                    : `0 8px 32px 0 rgba(135, 41, 31, 0.37)`, // Red shadow for red theme
              }}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
