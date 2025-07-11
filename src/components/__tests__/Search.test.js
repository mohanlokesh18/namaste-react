import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import REST_LIST_DATA from "./mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(REST_LIST_DATA);
    },
  });
});

it("Should render serch box inside Body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const search = screen.getByRole("textbox");

  expect(search).toBeInTheDocument();
});

it("Should show the restaurent card on search of test ice cream", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const search = screen.getByRole("textbox");
  fireEvent.change(search, { target: { value: "ice cream" } });

  const searchResult = screen.getAllByTestId("resData");
  expect(searchResult.length).toBe(3);
});

it("Should render only promoted restaurant on click Top Rated Restaurant button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const initialRestaurants = screen.getAllByTestId("resData");
  expect(initialRestaurants.length).toBe(20);

  const topRatedRest = screen.getByText("Top Restaurants👑");
  fireEvent.click(topRatedRest);

  const topRatedRestaurants = screen.getAllByTestId("resData");
  expect(topRatedRestaurants.length).toBe(8);
});
