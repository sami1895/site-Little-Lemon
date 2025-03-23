import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Page d'accueil
import BookingPage from './BookingPage'; // Page de réservation
import ConfirmedBooking from './ConfirmedBooking'; // Page de confirmation
import Nav from './Nav'; // Composant de navigation
import Footer from './Footer'; // Composant footer
import Chicago from './Chicago'; // Section "À propos"
import Login from './Login'; // Import du formulaire de connexion

import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/login" element={<Login />} /> {/* Ajout de la route de connexion */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
