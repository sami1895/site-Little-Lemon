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
          <p>Little Lemon a été fondé en 2005 à Chicago par deux amis passionnés de cuisine. Notre objectif est de proposer des plats délicieux et authentiques qui raviront vos papilles.</p>
          <p>Notre menu propose une variété de plats qui célèbrent la diversité culinaire. Des antipasti et pâtes fraîches aux grillades et salades composées, chaque plat est préparé avec des ingrédients locaux et biologiques. Nous croyons en l'importance de soutenir les producteurs locaux et de réduire notre impact environnemental, c'est pourquoi nous nous engageons à utiliser des pratiques durables dans notre cuisine.</p>
          <p>Chez Little Lemon, nous croyons que la nourriture est bien plus qu'un simple repas ; c'est une expérience qui rassemble les gens. Que vous veniez pour un dîner en famille, un déjeuner entre amis ou une soirée spéciale, nous nous efforçons de créer des moments mémorables pour chacun de nos clients. Notre équipe dévouée est toujours prête à vous accueillir avec le sourire et à vous faire découvrir les saveurs qui font la renommée de Little Lemon.</p>
          <p>Depuis nos débuts modestes, nous avons grandi, mais notre passion pour la cuisine et notre engagement envers la qualité restent inchangés. Nous sommes fiers de faire partie de la communauté de Chicago et nous nous engageons à continuer à offrir des expériences culinaires exceptionnelles pour les années à venir.</p>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
