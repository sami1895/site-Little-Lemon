// src/BookingsForm.js
import React, { useState, useReducer } from "react";
import { initializeTimes, updateTimes } from "./bookingReducer";

function BookingsForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Anniversaire");

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (submitAPI(formData)) {
      console.log("Réservation soumise avec succès :", formData);
    } else {
      console.error("Échec de la soumission de la réservation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Date :</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Heure :</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="guests">Nombre d'invités :</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        required
      />

      <label htmlFor="occasion">Occasion :</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Anniversaire</option>
        <option>Autre</option>
      </select>

      <button type="submit">Réserver</button>
    </form>
  );
}

export default BookingsForm;