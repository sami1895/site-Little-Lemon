// src/CallToAction.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";
import image1 from "./image1.jpg"; // Assurez-vous que l'image est bien placée

function CallToAction() {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClick = () => {
    navigate("/booking"); // Redirige vers la page de réservation
  };

  return (
    <section className="call-to-action">
      <div className="cta-content">
        <img src={image1} alt="Restaurant Little Lemon" className="cta-image" />
        <div className="cta-text">
          <h1>Bienvenue chez Little Lemon</h1>
          <p>Découvrez notre cuisine méditerranéenne authentique.</p>
          <button onClick={handleClick}>Réserver une table</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
