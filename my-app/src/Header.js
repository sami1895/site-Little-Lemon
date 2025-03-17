// Header.js
import React from "react";
import logo from "./logo.jpg"; // Importe l'image du logo
import "./Header.js";

function Header() {
  return (
    <header>
      <H1>Little Lemon</H1>
      <img src={logo} alt="Little Lemon Logo" /> {/* Utilise l'image importée */}
    </header>
  );
}

export default Header;