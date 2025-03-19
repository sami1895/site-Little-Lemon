// src/initializeTimes.js
import { fetchAPI } from './services/api';

export const initializeTimes = () => {
  return fetchAPI(new Date().toISOString().split('T')[0]);
};