import React from "react";
import "./CustomersSay.css";
import avatar from "./avatar1.jpg"; // Remplace par le bon chemin de l'image de profil

function CustomersSay() {
  const testimonials = [
    { rating: "⭐⭐⭐⭐⭐", name: "Marie", comment: "Un délice !" },
    { rating: "⭐⭐⭐⭐", name: "Jean", comment: "Service exceptionnel." },
    { rating: "⭐⭐⭐⭐⭐", name: "Sophie", comment: "Je recommande vivement !" },
    { rating: "⭐⭐⭐⭐", name: "Paul", comment: "Très bon rapport qualité-prix." },
  ];

  return (
    <section className="customers-say">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="rating">{testimonial.rating}</p>
            <div className="avatar-name-container">
              <img src={avatar} alt="User Avatar" className="avatar" />
              <p className="name">{testimonial.name}</p>
            </div>
            <p className="comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default CustomersSay;
