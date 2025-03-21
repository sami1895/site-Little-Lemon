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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
        <label htmlFor="date">Date :</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Heure :</label>
        <input
          id="time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        {errors.time && <p className="error">{errors.time}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Nombre de convives :</label>
        <input
          id="guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
          max="10"
        />
        {errors.guests && <p className="error">{errors.guests}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion :</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une occasion</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="dîner">Dîner</option>
          <option value="réunion">Réunion</option>
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
