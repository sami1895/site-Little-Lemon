// src/BookingForm.js
import React, { useState } from "react";
import "./BookingForm.css";
import ConfirmedBooking from "./ConfirmedBooking"; // Import du composant de confirmation

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [reservations, setReservations] = useState({}); // Contient les réservations par date + heure
  const [errors, setErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false); // Nouveau state pour gérer la confirmation de la réservation

  // Fonction pour annuler la réservation
  const handleCancelBooking = () => {
    setIsBooked(false); // Réinitialiser l'état de confirmation
    setFormData({
      date: "",
      time: "",
      guests: "",
      occasion: "",
    }); // Réinitialiser les données du formulaire
    setErrors({}); // Réinitialiser les erreurs
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const reservationKey = `${formData.date} ${formData.time}`; // Création d'une clé unique pour chaque réservation

      if (reservations[reservationKey]) {
        setErrors({ reservation: "This time slot is already booked. Please select another time." });
        return; // Si la réservation existe déjà, on retourne sans faire de réservation
      }

      // Si la réservation est valide, on la sauvegarde
      setReservations({
        ...reservations,
        [reservationKey]: formData, // Enregistre la réservation avec la clé date + heure
      });

      setIsBooked(true); // Mise à jour pour afficher la confirmation de la réservation
      setErrors({}); // Reset erreurs
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Date is required.";
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = "The date must be in the future.";
    }

    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    const guestsNumber = parseInt(formData.guests, 10);
    if (!guestsNumber) {
      newErrors.guests = "The number of guests is required.";
    } else if (guestsNumber < 1 || guestsNumber > 10) {
      newErrors.guests = "The number of guests must be between 1 and 10.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Si la réservation est confirmée, afficher le composant ConfirmedBooking
  if (isBooked) {
    return <ConfirmedBooking onCancel={handleCancelBooking} />;
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Table</h2>

      <div className="form-group">
        <label htmlFor="date">Select Date</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Select Time</label>
        <select id="time" name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select a time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        {errors.time && <p className="error">{errors.time}</p>}
        {errors.reservation && <p className="error">{errors.reservation}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />
        {errors.guests && <p className="error">{errors.guests}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">End of Year Celebration</option>
        </select>
        {errors.occasion && <p className="error">{errors.occasion}</p>}
      </div>

      <button type="submit" className="btn-book">
        Book
      </button>
    </form>
  );
};

export default BookingForm;
