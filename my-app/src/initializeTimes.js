// src/initializeTimes.js
import { fetchAPI } from './services/api';

/**
 * Initialise les heures disponibles pour la date du jour.
 * @returns {Promise<string[]>} - Un tableau d'heures disponibles.
 */
export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  const availableTimes = await fetchAPI(today);
  return availableTimes;
};
