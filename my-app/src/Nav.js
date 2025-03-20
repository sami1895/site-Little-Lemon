
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.jpg"; // Assurez-vous que le logo est bien au bon emplacement

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
          </Link>
        </li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">À propos</Link></li>
        <li><Link to="/booking">Réservation</Link></li>
        <li><Link to="/">Menu</Link></li>
        
      </ul>
    </nav>
  );
}

export default Nav;
