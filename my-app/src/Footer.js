import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./logo.jpg"; // Assurez-vous que le logo est bien au bon emplacement

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          </Link>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/">À propos</Link></li>
            <li><Link to="/booking">Réservation</Link></li>
            <li><Link to="/">Menu</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <br></br>
            <li><strong>Adresse :</strong> 123 Rue Exemple, Tunis</li>
            <li><strong>Téléphone :</strong> +216 71 xxx xxx</li>
            <li><strong>Email :</strong> <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Liens des Réseaux Sociaux</h3>
          <ul className="footer-links">
          <br></br>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; 2025 Little Lemon. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
