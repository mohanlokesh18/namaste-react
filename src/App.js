import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import Login from "./components/Login";
import Logout from "./components/Logout";

const Resturent = () => {
  const { userName } = useContext(userContext);
  const [user, setUser] = useState(userName);
  return (
    <div className="component">
      <userContext.Provider value={{ userName: user, setUser }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      {/* <Footer/> */}
    </div>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Resturent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
