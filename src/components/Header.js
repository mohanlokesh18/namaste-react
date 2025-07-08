import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(userContext);
  const toggle = () => {
    const [isOn, setIsOn] = useState(true);
    return (
      <div>
        <button
          className="theme-btn"
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          {isOn ? "🔆" : "🌙"}
        </button>
      </div>
    );
  };
  const logInOut = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return userName !== "Guest" ? (
      <button>
        <Link to="/logout">Logout</Link>
      </button>
    ) : (
      <button>
        <Link to="/login">Login</Link>
      </button>
    );
  };
  return (
    <div className="flex justify-between bg shadow-xl rounded-t-md">
      <div className="">
        <div className="flex">
          <label className="m-0.5 h-fit shadow bg-gray-200 rounded-4xl">
            {onlineStatus ? "🟢" : "🔴"}
          </label>
          <Link to="/">
            <img className="w-[100px] h-[80px]" alt="logo" src={LOGO_URL}></img>
          </Link>
        </div>
      </div>
      <div className="flex items-center m-2 text-xl gap-10">
        <label className="px-2 hover:bg-gray-100 rounded-md">
          <Link to="/about">About</Link>
        </label>
        <label className="px-2 hover:bg-gray-100 rounded-md">
          <Link to="/contact">Contact</Link>
        </label>
        <label className="px-2 hover:bg-gray-100 rounded-md">
          {logInOut()}
        </label>
        <label className="px-2 hover:bg-gray-100 rounded-md">🛒</label>
        <label className="mx-1 px-2 bg-gray-200 rounded-xl">{toggle()}</label>
        <label className="mx-1 px-2 bg-gray-200 rounded-xl">
          {userName === "Guest" ? "Guest" : `Hi, ${userName}!`}
        </label>
      </div>
    </div>
  );
};
export default Header;
