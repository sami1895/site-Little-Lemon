import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Wrap with MemoryRouter
import Nav from "./Nav"; // Test only the Nav component

test('renders Little Lemon in Nav', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  const headingElement = screen.getByRole("heading", { name: /Little Lemon/i });
  expect(headingElement).toBeInTheDocument();
});
