import React from "react";
import "./Chicago.css";
import Group from "./Group.png"; // Importation de l'image

function Chicago() {
  return (
    <section id="chicago"className="chicago">
      <div className="chicago-card">
        <div className="chicago-image-container">
          <img src={Group} alt="Intérieur du restaurant Little Lemon" className="chicago-image" />
        </div>
        <div className="chicago-content">
          <h2>Little Lemon</h2>

          <p> Chicago</p>
          <p>Little Lemon was founded in 2005 in Chicago by two friends passionate about cooking. Our goal is to offer delicious and authentic dishes that will delight your taste buds.</p>
          <p>Our menu features a variety of dishes that celebrate culinary diversity. From antipasti and fresh pasta to grilled dishes and composed salads, each dish is prepared with local and organic ingredients. We believe in the importance of supporting local producers and reducing our environmental impact, which is why we are committed to using sustainable practices in our kitchen.</p>
          <p>At Little Lemon, we believe that food is much more than just a meal; it's an experience that brings people together. Whether you come for a family dinner, a lunch with friends, or a special evening, we strive to create memorable moments for each of our guests. Our dedicated team is always ready to welcome you with a smile and introduce you to the flavors that make Little Lemon renowned.</p>
          <p>Since our humble beginnings, we have grown, but our passion for cooking and our commitment to quality remain unchanged. We are proud to be part of the Chicago community and are committed to continuing to offer exceptional culinary experiences for years to come.</p>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
