import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterEach(() => {
    console.log("After Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  test("Should load heading inside contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<ContactUs />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  // it("Should load all the input box inside the contace us component", () => {
  //   render(<ContactUs />);
  //   const inputBoxs = screen.getAllByRole("textbox");
  //   expect(inputBoxs.length).toBe(2);
  // });
});
