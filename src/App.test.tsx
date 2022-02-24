import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Render correctly", () => {
  render(<App />);
  const searchHeader = screen.queryByText(/Search User Github Profiles.../i);
  expect(searchHeader).toBeInTheDocument();
});
test("There must be no data", () => {
  render(<App />);
  const noResults = screen.queryByText(/No results currently/i);
  const buttonText = screen.getByTestId("search-button");
  expect(noResults).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
});
