import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders entire app", () => {
  render(<App />);
  const textElements = screen.getAllByText(/conference room/i);
  expect(textElements[0]).toBeInTheDocument();
});
