import React, { useState, useEffect, useRef } from "react";
import "./navBar.css";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import olacloudLogo from "./img/olacloud-logo.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.mobile-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          <img src={olacloudLogo} alt="OlaCloud Logo" className="nav-logo-img" />
        </Link>

        {/* This toggle button is mainly for opening or desktop access, 
            but for mobile we also provide the close button inside the menu. */}
        {!mobileMenuOpen && (
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        )}

        <div ref={menuRef} className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <a href="/#service" onClick={() => setMobileMenuOpen(false)}>Service</a>
            </li>
            <li>
              <a href="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            </li>
            <li>
              <NavLink to="/contact" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;

