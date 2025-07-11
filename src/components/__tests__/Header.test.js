import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import userContext from "../../utils/userContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render login button in the Header component", () => {
  const mockUser = "Guest";
  const mockSetUser = jest.fn();

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <userContext.Provider
          value={{ userName: mockUser, setUser: mockSetUser }}
        >
          <Header />
        </userContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render login button in the Header component", () => {
  const mockUser = "Guest";
  const mockSetUser = jest.fn();

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <userContext.Provider
          value={{ userName: mockUser, setUser: mockSetUser }}
        >
          <Header />
        </userContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const toggleButton1 = screen.getByText("🔆");
  fireEvent.click(toggleButton1);
  const toggleButton2 = screen.getByText("🌙");

  expect(toggleButton2).toBeInTheDocument();
});
