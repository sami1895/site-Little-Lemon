import React from "react";
import "./CustomersSay.css";
import avatar from "./avatar1.jpg"; // Remplace par le bon chemin de l'image de profil

function CustomersSay() {
  const testimonials = [
    { rating: "⭐⭐⭐⭐⭐", name: "Marie", comment: "A delight! nice"  },
    { rating: "⭐⭐⭐⭐", name: "Jean", comment: "Exceptional service." },
    { rating: "⭐⭐⭐⭐⭐", name: "Sophie", comment: "I highly recommend it!" },
    { rating: "⭐⭐⭐⭐", name: "Paul", comment: "Very good value for money." },
    
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
