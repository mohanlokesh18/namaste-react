import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
       
const Resturent = () => {
    const x = 5+ 2;
    return (
    <div className="component">
        <Header/>
        <Body />
        {/* <Footer/> */}
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Resturent/>
    </>
    );
