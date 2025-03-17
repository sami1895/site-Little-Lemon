// src/tests/bookingReducer.test.js
import { initializeTimes, updateTimes } from "bookingReducer";

test("initializeTimes retourne les heures disponibles par défaut", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test("updateTimes retourne les mêmes heures disponibles", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const action = { type: "UPDATE_TIMES", date: "2023-10-01" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});