import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('le champ "Date" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText('Date :');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
});

test('le champ "Heure" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const timeInput = screen.getByLabelText('Heure :');
  expect(timeInput).toHaveAttribute('type', 'time');
  expect(timeInput).toHaveAttribute('required');
});

test('le champ "Nombre de convives" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText('Nombre de convives :');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1'); // Vérifie que min="1"
  expect(guestsInput).toHaveAttribute('max', '10'); // Vérifie que max="10"
});

test('le champ "Occasion" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText('Occasion :');
  expect(occasionSelect).toHaveAttribute('required');
});
