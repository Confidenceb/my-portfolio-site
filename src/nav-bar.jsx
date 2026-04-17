import React, { useState, useEffect } from "react";
import "./navBar.css";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          Ola <span>Cloud</span>
        </Link>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
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

