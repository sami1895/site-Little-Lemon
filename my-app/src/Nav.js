import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.jpg"; // Assurez-vous que le logo est bien au bon emplacement

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
          </Link>
        </li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">À propos</Link></li>
        
        <li><Link to="/booking">Réservation</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
