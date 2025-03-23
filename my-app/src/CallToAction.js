import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";
import image1 from "./image1.jpg"; // Assurez-vous que l'image est bien placée

function CallToAction() {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClick = () => {
    navigate("/reservations"); // Redirige vers la page de réservation
  };

  return (
    <section className="call-to-action">
      <div className="cta-content">
        <img src={image1} alt="Restaurant Little Lemon" className="cta-image" />
        <div className="cta-text">
        <h2>Little Lemon</h2>
        
          <p>Little Lemon was founded in 2005 in Chicago by two friends passionate about cooking. Our goal is to offer delicious and authentic dishes that will delight your taste buds. Our menu features a variety of dishes that celebrate culinary diversity. From antipasti and fresh pasta to grilled dishes and composed salads, each dish is prepared with local and organic ingredients. We believe in the importance of supporting local producers and reducing our environmental impact, which is why we are committed to using sustainable practices in our kitchen.</p>
          <button onClick={handleClick}>Reserve a Table</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
