// src/BookingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import correct
import { submitAPI } from './services/api';
import BookingForm from './BookingForm';

const BookingPage = () => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate('/confirmation');
    } else {
      alert('La réservation a échoué. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <BookingForm onSubmit={submitForm} />
    </div>
  );
};

export default BookingPage;
