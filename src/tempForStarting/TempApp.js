import React from "react";
import ReactDOM from "react-dom/client";
       
const Element =  <h1>Radhe Radhe!🙏</h1>;
const HeadingComponent = () => (
    <div>
        <Title/>
        <h1 className="heading1">Hare Krishna! from Functional Component🚀</h1>
    </div>
)
const Title = () => (
    <div>
        <h2 className="h2">Shree Krishna📿🛕</h2>
        {Element}
        <HeadingComponent/>
        {(function (){
            return <h3>JS function inside JSX🦸</h3>
        })()}
    </div>
)
const HeaderComponent = () => (
    <div className="main">
        <img id="img1" width="50" height="30" src="https://i.ytimg.com/vi/Sd6L1xxqOEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYk1K5e1_X0cxr2iAsBM9CDADAZg"></img>
        <label>
            🔎
            <input id="inp" type="text" placeholder="search"></input>
        </label>
        <img id="img2" width="30" height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"></img>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <HeaderComponent/>
        <Title></Title>
    </>
    );
