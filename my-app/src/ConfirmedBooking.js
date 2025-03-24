// src/ConfirmedBooking.js
import React from "react";
import "./ConfirmedBooking.css"; // Import the CSS file
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const ConfirmedBooking = ({ onCancel }) => {
  const navigate = useNavigate(); // Hook to navigate within the app

  // Function to go back to the homepage
  const handleReturnToHome = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="confirmed-booking">
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been successfully confirmed. We look forward to welcoming you!</p>

      <div className="buttons">
        {/* First button to cancel and do another booking */}
        <button onClick={onCancel}>Another booking</button>

        {/* Second button to return to the homepage */}
        <button onClick={handleReturnToHome}>Return to Homepage</button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
