import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
       
const Resturent = () => {
    return (
    <div className="component">
        <Header/>
        <Outlet />
        {/* <Footer/> */}
    </div>)
}
const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Resturent/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            }
        ],
        errorElement: <Error/>,
    }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <RouterProvider router={appRoute}/>
    );
