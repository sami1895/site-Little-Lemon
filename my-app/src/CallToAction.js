import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";
import image1 from "./image1.jpg"; // Assurez-vous que l'image "image1.jpg" est dans votre projet

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <img src={image1} alt="Restaurant Little Lemon" className="cta-image" />
        <div className="cta-text">
          <h1>Bienvenue chez Little Lemon</h1>
          <p>Découvrez notre cuisine méditerranéenne authentique.</p>
          <Link to="/reservation">
            <button>Réserver une table</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
