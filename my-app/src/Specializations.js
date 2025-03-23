import React from "react";
import salade from "./salade.jpg";
import mk from "./mk.jpg";
import p from "./p.jpg";
import deliveryIcon from "./delivery.jpg";
import "./Specializations.css";

function Specializations() {
  return (
    <section id="specializations" className="specializations">
      <div className="header-container">
        <h1>Our Specialties</h1>
        <button className="order-menu-btn">Order Menu</button>
      </div>
      <div className="items-container">
        <div className="item">
          <img src={salade} alt="Specialty 1" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <p className="price">$8.00</p>
              <h2>Salad</h2>
            </div>
            <p>Discover our delicious dishes, prepared with fresh and local ingredients.</p>
            <button className="order-btn">
              Order a Delivery <img src={deliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </button>
          </div>
        </div>

        <div className="item">
          <img src={mk} alt="Specialty 2" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <p className="price">$10.00</p>
              <h2>Macaroni</h2>
            </div>
            <p>A traditional Mediterranean recipe, combining unique flavors and aromas.</p>
            <button className="order-btn">
              Order a Delivery <img src={deliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </button>
          </div>
        </div>

        <div className="item">
          <img src={p} alt="Specialty 3" className="item-image" />
          <div className="item-content">
            <div className="title-price">
              <p className="price">$5.00</p>
              <h2>Toast</h2>
            </div>
            <p>Delicious dishes, expertly prepared to offer you an unforgettable experience.</p>
            <button className="order-btn">
              Order a Delivery <img src={deliveryIcon} alt="Delivery Icon" className="delivery-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specializations;
