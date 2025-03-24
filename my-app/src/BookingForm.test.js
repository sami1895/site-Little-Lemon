import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('le champ "Date" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText('Select Date'); // Correction ici
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
});

test('le champ "Heure" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const timeInput = screen.getByLabelText('Select Time'); // Correction ici
  expect(timeInput).toHaveAttribute('required');
});

test('le champ "Nombre de convives" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText('Number of Guests'); // Correction ici
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('required');
});
