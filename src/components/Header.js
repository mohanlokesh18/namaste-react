import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <label>{logInOut()}</label>
                <label>Cart</label>
                {toggle()}
            </div>
        </div>
    )
}
export default Header;