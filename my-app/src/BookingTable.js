// src/BookingTable.js
import React from "react";

function BookingTable({ data }) {
  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Date</th>
          <th>Heure</th>
          <th>Nombre de personnes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>{booking.guests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;