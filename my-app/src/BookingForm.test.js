import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm'; // Assuming this is the path to your component

test('le champ "Date" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText('Choisir la date');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
});

test('le champ "Heure" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const timeInput = screen.getByLabelText('Choisir l\'heure');
  expect(timeInput).toHaveAttribute('required');
});

test('le champ "Nombre de convives" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText('Nombre de convives');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('required');
});

test('le champ "Occasion" a les attributs de validation HTML5', () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText('Occasion');
  expect(occasionSelect).toHaveAttribute('required');
});
