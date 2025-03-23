// src/updateTimes.js
import { fetchAPI } from './services/api';

/**
 * Met à jour les heures disponibles pour une date donnée.
 * @param {string} date - La date au format YYYY-MM-DD.
 * @returns {Promise<string[]>} - Un tableau d'heures disponibles.
 */
export const updateTimes = async (date) => {
  const availableTimes = await fetchAPI(date);
  return availableTimes;
};