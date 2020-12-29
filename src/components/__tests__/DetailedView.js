import "@testing-library/jest-dom";
import * as React from "react";
import DetailedView from "../DetailedView";
import data from "./meetings.json";

import { render, fireEvent, screen } from "@testing-library/react";

test("renders the DetailedView component successfully", async () => {
  render(<DetailedView meetings={data} />);

  const textElements = screen.getAllByText(/conference room/i);
  expect(textElements[0]).toBeInTheDocument();
});

test("transitions from default DetailView to opened meeting view", async () => {
  render(<DetailedView meetings={data} />);

  // we're in main view with "Conference Room" heading
  const textElements = screen.getAllByText(/conference room/i);
  expect(textElements[0]).toBeInTheDocument();

  // open detailed view for first meeting
  fireEvent.click(screen.getByText(/TESTI KOKOUS 1/i));

  // look for label PARTICIPANTS
  const textElement2 = await screen.findByText(/participants/i);
  expect(textElement2).toBeInTheDocument();
});

test("has time, person and description icons in opened detail view", async () => {
  render(<DetailedView meetings={data} />);

  // we're in main view with "Conference Room" heading
  const textElements = screen.getAllByText(/conference room/i);
  expect(textElements[0]).toBeInTheDocument();

  // open detailed view for first meeting
  fireEvent.click(screen.getByText(/TESTI KOKOUS 1/i));

  // look for icons in opened detailed view
  const icon = await screen.findByAltText("person-icon");
  expect(icon).toBeInTheDocument();

  const timeIcons = await screen.findAllByAltText("time-icon");
  const personIcon = await screen.findByAltText("person-icon");
  const descriptionIcon = await screen.findByAltText("description-icon");

  expect(timeIcons).toHaveLength(2); // two instances of the icon
  expect(timeIcons[0]).toBeInTheDocument();
  expect(personIcon).toBeInTheDocument();
  expect(descriptionIcon).toBeInTheDocument();
});
