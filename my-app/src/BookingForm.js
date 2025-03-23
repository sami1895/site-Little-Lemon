import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changement détecté : ${name} = "${value.trim()}"`); // Debugging
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(), // Supprime les espaces involontaires
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "La date est requise.";
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = "La date doit être dans le futur.";
    }

    if (!formData.time) {
      newErrors.time = "L'heure est requise.";
    }

    if (!formData.guests) {
      newErrors.guests = "Le nombre de convives est requis.";
    } else if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Le nombre de convives doit être entre 1 et 10.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Veuillez sélectionner une occasion.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Réserver une table</h2>

      <div className="form-group">
        <label htmlFor="date">Choisir la date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Choisir l'heure</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une heure</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        {errors.time && <p className="error">{errors.time}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Nombre de convives</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {errors.guests && <p className="error">{errors.guests}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une occasion</option>
          <option value="birthday">Anniversaire</option>
          <option value="anniversary">Fête de fin d'année</option>
        </select>
        {errors.occasion && <p className="error">{errors.occasion}</p>}
      </div>

      <button type="submit" className="btn-reserver">
        Réserver
      </button>
    </form>
  );
};

export default BookingForm;