import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import logo from "./logo.jpg"; // Make sure the logo is in the correct location

function Footer() {
  const location = useLocation();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-section">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            
          <Link to="/" onClick={(e) => scrollToSection(e, "home")}>Home</Link>
            <li>
              {location.pathname === "/" ? (
                <a href="#specializations" onClick={(e) => scrollToSection(e, "specializations")}>
                  Menu
                </a>
              ) : (
                <Link to="/#specializations">Menu</Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <a href="#chicago" onClick={(e) => scrollToSection(e, "chicago")}>
                  About
                </a>
              ) : (
                <Link to="/#chicago">About</Link>
              )}
            </li>
            <li><Link to="/reservations">Reservations</Link></li> {/* Réservations => Reservations */}
            
            <li>
              {location.pathname === "/" ? (
                <a href="#specializations" onClick={(e) => scrollToSection(e, "specializations")}>
                  Order Online
                </a>
              ) : (
                <Link to="/#specializations">Order Online</Link>
              )}
            </li>
            <li><Link to="/login">Login</Link></li> {/* Connexion => Login */}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li><strong>Address:</strong> 123 Example Street, Tunis</li> {/* Adresse => Address */}
            <li><strong>Phone:</strong> +216 71 xxx xxx</li> {/* Téléphone => Phone */}
            <li><strong>Email:</strong> <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow us</h3> {/* Suivez-nous => Follow us */}
          <ul className="footer-social">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="copyright">&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p> {/* Tous droits réservés => All rights reserved */}
    </footer>
  );
}

export default Footer;
