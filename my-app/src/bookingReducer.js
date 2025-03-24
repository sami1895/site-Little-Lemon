// src/bookingReducer.js
export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0]; // Date du jour au format YYYY-MM-DD
  return fetchAPI(today); // Récupère les heures disponibles pour aujourd'hui
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date); // Récupère les heures disponibles pour la date sélectionnée
    default:
      return state;
  }
}
