import React from 'react';
import logo from './logo.jpg'; // Assurez-vous d'avoir le logo dans le bon dossier

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

