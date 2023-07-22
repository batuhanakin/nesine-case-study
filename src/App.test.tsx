import React from "react";
import { render, screen } from "@testing-library/react";
import { BetPages } from "./pages/BetPages";

test("renders learn react link", () => {
  render(<BetPages />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
