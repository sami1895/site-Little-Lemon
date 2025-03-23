// src/services/api.js

/**
 * Simule une réponse d'API pour récupérer les heures disponibles.
 * @param {string} date - La date au format YYYY-MM-DD.
 * @returns {Promise<string[]>} - Un tableau d'heures disponibles.
 */
export const fetchAPI = async (date) => {
  console.log(`fetchAPI appelée avec la date : ${date}`);

  // Simule un délai de réponse (1 seconde)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simule des heures disponibles en fonction du jour de la semaine
  const dayOfWeek = new Date(date).getDay(); // 0 (dimanche) à 6 (samedi)
  const times = dayOfWeek === 0 || dayOfWeek === 6
    ? ['18:00', '19:00', '20:00'] // Heures pour le week-end
    : ['17:00', '18:00', '19:00']; // Heures pour les jours de semaine

  console.log(`fetchAPI retourne : ${times}`);
  return times;
};

/**
 * Simule une soumission de formulaire.
 * @param {Object} formData - Les données du formulaire.
 * @returns {boolean} - true si la soumission réussit, sinon false.
 */
export const submitAPI = (formData) => {
  console.log("submitAPI appelée avec les données :", formData);

  // Simule une validation des données
  if (!formData.date || !formData.time || !formData.guests || !formData.occasion) {
    console.log("submitAPI : soumission échouée (données manquantes)");
    return false;
  }

  console.log("submitAPI : soumission réussie");
  return true;
};