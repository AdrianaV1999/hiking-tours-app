import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <a href="#tours" onClick={() => setMenuOpen(false)}>
            Tours
          </a>
        </li>
        <li>
          <a href="#reservation" onClick={() => setMenuOpen(false)}>
            Reservation
          </a>
        </li>
        <li>
          <a href="#reservation" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
