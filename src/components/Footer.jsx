import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <p>
            Explore the wild with our experienced guides, carefully planned
            routes, and a commitment to your safety and adventure.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-link-group">
            <p className="footer-list-title">Informations</p>
            <ul>
              <li>Home</li>
              <li>About Us</li> <li>Tours</li>
              <li>Reservation</li>
            </ul>
          </div>

          <div className="footer-link-group">
            <p className="footer-list-title">Quick Links</p>
            <ul>
              <li>Gallery</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Tours</li>
            </ul>
          </div>

          <div className="footer-link-group">
            <p className="footer-list-title">Support Us</p>
            <ul>
              <li>Our Team</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-link-group">
            <p className="footer-list-title">Contact Us</p>
            <ul>
              <li>contact@hikewithus.com</li>
              <li>+123 456 7890</li>
              <li>23 Mountain View Rd, Nature Valley</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Hiking. All rights reserved.</p>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
