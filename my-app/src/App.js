import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Page d'accueil
import BookingPage from './BookingPage'; // Page de réservation
import ConfirmedBooking from './ConfirmedBooking'; // Page de confirmation
import Nav from './Nav'; // Composant de navigation
import Footer from './Footer'; // Composant footer
import Chicago from './Chicago'; // Section "À propos"

import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            {/* Ajout de la section Chicago */}
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/Chicago" element={<Chicago/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
