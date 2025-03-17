// src/Main.js
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./bookingReducer";

function Main() {
  // Utilise useReducer pour gérer les heures disponibles
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </main>
  );
}

export default Main;