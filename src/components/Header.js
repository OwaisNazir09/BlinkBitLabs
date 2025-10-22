import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import CompanyLogo from "../assets/icons/CompanyLogo.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightHeader, setLightHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setLightHeader(true);
      } else {
        setLightHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`glass-header ${lightHeader ? "light" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img
            src={CompanyLogo}
            alt="BlinkBit Labs"
            className="logo-img"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
