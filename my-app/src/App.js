// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Page d'accueil
import BookingPage from './BookingPage'; // Page de réservation
import ConfirmedBooking from './ConfirmedBooking'; // Page de confirmation
import Nav from './Nav'; // Composant de navigation
import Footer from './Footer'; // Composant footer

import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} /> {/* Assurez-vous que BookingPage est correct */}
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
