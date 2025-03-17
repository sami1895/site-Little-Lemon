
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/booking">Réservation</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;