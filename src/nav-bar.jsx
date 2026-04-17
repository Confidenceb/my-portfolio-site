import React, { useState, useEffect } from "react";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Menu, X } from "lucide-react";

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

  const handleDropdown = (menu) => {
    if (window.innerWidth > 768) {
      setOpenDropdown(menu);
    }
  };

  const toggleMobileDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          Ola <span>Cloud</span>
        </div>

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
              <a href="#home" className="active" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#service" onClick={() => setMobileMenuOpen(false)}>Service</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;

