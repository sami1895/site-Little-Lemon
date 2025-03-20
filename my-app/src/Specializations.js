import React from "react";
import salade from "./salade.jpg"; // Remplace par le bon chemin de ton image
import mk from "./mk.jpg"; // Remplace par le bon chemin de ton image
import p from "./p.jpg"; // Remplace par le bon chemin de ton image
import "./Specializations.css";

function Specializations() {
  return (
    <section className="specializations">
      <h1>Nos Spécialités</h1>
      
      <div className="items-container">
        {/* Spécialité 1 */}
        <div className="item">
          <img src={salade} alt="Spécialité 1" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <h2>Salade</h2>
              <p className="price">$8.00</p>
            </div>
            <p>Découvrez nos délicieux plats, préparés avec des ingrédients frais et locaux.</p>
            <button className="order-btn">Commander</button>
          </div>
        </div>

        {/* Spécialité 2 */}
        <div className="item">
          <img src={mk} alt="Spécialité 2" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <h2>Macaroni</h2>
              <p className="price">$10.00</p>
            </div>
            <p>Une recette méditerranéenne traditionnelle, alliant saveurs et arômes uniques.</p>
            <button className="order-btn">Commander</button>
          </div>
        </div>

        {/* Spécialité 3 */}
        <div className="item">
          <img src={p} alt="Spécialité 3" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <h2>Tartine</h2>
              <p className="price">$5.00</p>
            </div>
            <p>Plats savoureux, cuisinés à la perfection pour vous offrir une expérience inoubliable.</p>
            <button className="order-btn">Commander</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specializations;
