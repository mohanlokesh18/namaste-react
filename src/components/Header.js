import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const toggle = () => {
        const [isOn,setIsOn] = useState(true);
        return (
            <div>
                <button className="theme-btn" onClick={()=>{setIsOn(!isOn)}}>{isOn? "🔆" : "🌙"}</button>
            </div>
        )
    }
    const logInOut = () => {
        const [isLoggedIn,setIsLoggedIn] = useState(false);
        return (
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "Logout" : "Login"}</button>
        )
    }
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img className="logo" alt="logo" src={LOGO_URL}></img>
            </div>
            <div className="navItems">
                <label>Help</label>
                <label>{logInOut()}</label>
                <label>Cart</label>
                {toggle()}
            </div>
        </div>
    )
}
export default Header;