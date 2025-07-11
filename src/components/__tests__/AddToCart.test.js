import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Body from "../Body";
import REST_MENU_DATA_MOCK from "./mocks/restMenuDataMock.json";
import RestaurantMenu from "../RestaurantMenu";
import Headers from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(REST_MENU_DATA_MOCK);
    },
  });
});

//Integration testing- in this we are testing on click on RestaurantMenu should also update on cart page and header cart item

it("Should update the cart and cart page on click on the add button on restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Headers />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const restMenu = screen.getByText("NOURISH BOWLS-(6)");
  expect(restMenu).toBeInTheDocument();

  fireEvent.click(restMenu);

  const restMenuItem = screen.getByText("Herb Pulled Chicken Bowl");
  expect(restMenuItem).toBeInTheDocument();

  const addButton = screen.getAllByTestId("addButton");
  expect(addButton[0]).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  const cart = screen.getByText("🛒-(1)");
  expect(cart).toBeInTheDocument();

  fireEvent.click(addButton[1]);

  const cartItems = screen.getAllByTestId("cartItems");
  expect(cartItems.length).toBe(2);
});
