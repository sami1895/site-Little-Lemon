// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage"; // Assurez-vous que le nom est correct
import Nav from "./Nav";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;