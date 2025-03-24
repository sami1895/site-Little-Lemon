// src/services/api.js

// Simule des réservations existantes pour certaines dates et heures
const existingReservations = [
  { date: "2025-03-24", time: "18:00" },
  { date: "2025-03-24", time: "19:00" },
  { date: "2025-03-25", time: "20:00" }
];

/**
 * Vérifie si la date et l'heure choisies sont déjà réservées.
 * @param {string} date - La date au format YYYY-MM-DD.
 * @param {string} time - L'heure choisie.
 * @returns {boolean} - Retourne vrai si la réservation existe déjà, sinon faux.
 */
const isAlreadyBooked = (date, time) => {
  return existingReservations.some(
    (reservation) => reservation.date === date && reservation.time === time
  );
};

/**
 * Simule une soumission de formulaire avec vérification des réservations existantes.
 * @param {Object} formData - Les données du formulaire.
 * @returns {boolean} - true si la soumission réussit, sinon false.
 */
export const submitAPI = (formData) => {
  console.log("submitAPI appelée avec les données :", formData);

  // Vérifie si la réservation est déjà existante
  if (isAlreadyBooked(formData.date, formData.time)) {
    console.log("submitAPI : soumission échouée (réservation déjà existante)");
    return false;
  }

  // Si la réservation n'est pas déjà effectuée, ajoutons la à la liste des réservations
  existingReservations.push({
    date: formData.date,
    time: formData.time
  });

  console.log("submitAPI : soumission réussie");
  return true;
};
