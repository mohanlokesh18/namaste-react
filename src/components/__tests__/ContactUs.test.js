import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load heading inside contact us component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact us component", () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});

test("Should load all the input box inside the contace us component", () => {
  render(<ContactUs />);
  const inputBoxs = screen.getAllByRole("textbox");
  expect(inputBoxs.length).toBe(2);
});
