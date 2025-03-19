// src/updateTimes.js
import { fetchAPI } from './services/api';

export const updateTimes = (date) => {
  return fetchAPI(date);
};