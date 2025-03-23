// Nav.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.jpg"; // Ensure your logo is placed correctly

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
    e.preventDefault();  // Prevent default behavior (i.e., clicking the link)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });  // Scroll smoothly to the section
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
        <li><Link to="/">Home</Link></li>
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
        <li><Link to="/reservations">Reservations</Link></li>
        
        {/* Order Online link now scrolls to the Order Menu button */}
        <li>
          {location.pathname === "/" ? (
            <a href="#order-menu-btn" onClick={(e) => scrollToSection(e, "order-menu-btn")}>
              Order Online
            </a>
          ) : (
            <Link to="/#order-menu-btn">Order Online</Link>
          )}
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
