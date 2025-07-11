import { render, screen } from "@testing-library/react";
import RestaurantCard, { PromotedRestaurantCard } from "../RestaurantCard";
import MOCK_RES_DATA from "./mocks/resDataMock.json";
import "@testing-library/jest-dom";

// Wrap the base component with the HOC
const PromotedRest = PromotedRestaurantCard(RestaurantCard);

it("Should render the restaurant card", () => {
  render(<RestaurantCard resData={MOCK_RES_DATA} />);
  const name = screen.getByText("Natural Ice Cream");
  expect(name).toHaveTextContent("Natural Ice Cream");
});

it("Should render the promoted restaurant card", () => {
  render(<PromotedRest resData={MOCK_RES_DATA} />);
  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});
