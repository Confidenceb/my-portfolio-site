import React, { useState } from "react";
import "./navBar.css"; // Assuming you have a CSS file for styles
const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-logo">Ola Cloud</div>
        <div>
          <ul className="nav-list">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdown("blog")}
              onMouseLeave={() => handleDropdown(null)}
            >
              <a href="#blog">
                Blog <span className="arrow">&#9662;</span>
              </a>
              {openDropdown === "blog" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#blog1">Blog 1</a>
                  </li>
                  <li>
                    <a href="#blog2">Blog 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdown("pages")}
              onMouseLeave={() => handleDropdown(null)}
            >
              <a href="#pages">
                Pages <span className="arrow">&#9662;</span>
              </a>
              {openDropdown === "pages" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#page1">Page 1</a>
                  </li>
                  <li>
                    <a href="#page2">Page 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
