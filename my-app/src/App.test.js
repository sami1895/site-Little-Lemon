// src/App.test.js
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /Little Lemon/i });
  expect(headingElement).toBeInTheDocument();
});