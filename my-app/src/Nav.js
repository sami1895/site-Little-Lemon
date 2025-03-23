import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.jpg"; // Assurez-vous que le logo est bien au bon emplacement

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li> {/* Accueil => Home */}
        <li>
          {location.pathname === "/" ? (
            <a href="#chicago" onClick={(e) => scrollToSection(e, "chicago")}>
              About
            </a>
          ) : (
            <Link to="/#chicago">About</Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <a href="#specializations" onClick={(e) => scrollToSection(e, "specializations")}>
              Menu
            </a>
          ) : (
            <Link to="/#specializations">Menu</Link>
          )}
        </li>
        
        <li><Link to="/Reservations">Reservations</Link></li> {/* Réservation => Booking */}
        <li><Link to="/order-online">Order Online</Link></li> {/* Ajouter "Order Online" */}
        <li><Link to="/login">Login</Link></li> {/* Ajouter "Login" */}
      </ul>
    </nav>
  );
}

export default Nav;
