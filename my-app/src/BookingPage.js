// src/BookingPage.js
import React, { useState } from "react";
import BookingTable from "./BookingTable"; // Importez le composant
import "./BookingPage.css";

function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", date: "2023-10-15", time: "18:00", guests: 2 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", date: "2023-10-16", time: "19:30", guests: 4 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: bookings.length + 1, // Génère un ID unique
      name,
      email,
      date,
      time,
      guests,
    };
    setBookings([...bookings, newBooking]); // Ajoute la nouvelle réservation
    console.log("Réservation soumise :", newBooking);
  };

  return (
    <section className="booking-page">
      <h2>Réserver une table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Heure :</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Nombre de personnes :</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Réserver</button>
      </form>

      <h3>Réservations actuelles</h3>
      <BookingTable data={bookings} /> {/* Affichez le tableau ici */}
    </section>
  );
}

export default BookingPage;