// src/BookingsForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingsForm from "./BookingsForm";

test('submits the form with user data', () => {
  const handleSubmit = jest.fn();
  render(<BookingsForm onSubmit={handleSubmit} />);

  // Remplir le formulaire
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2023-10-01" } });
  fireEvent.change(screen.getByLabelText(/Heure/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/Nombre d'invités/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversaire" } });

  // Soumettre le formulaire
  fireEvent.click(screen.getByText(/Réserver/i));

  // Vérifier que la fonction de soumission a été appelée avec les bonnes données
  expect(handleSubmit).toHaveBeenCalledWith({
    date: "2023-10-01",
    time: "18:00",
    guests: "4",
    occasion: "Anniversaire",
  });
});