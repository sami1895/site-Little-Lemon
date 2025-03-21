import React from "react";
import salade from "./salade.jpg";
import mk from "./mk.jpg";
import p from "./p.jpg";
import "./Specializations.css";

function Specializations() {
  return (
    <section id="specializations" className="specializations">
      <h1>Nos Spécialités</h1>
      <div className="items-container">
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
