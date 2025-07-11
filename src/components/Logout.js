import { useContext } from "react";
import userContext from "../utils/userContext";
import Body from "./Body";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/cartSlice";

const Logout = () => {
  const { userName, setUser } = useContext(userContext);
  const dispatch = useDispatch();

  return (
    <div>
      <label className="m-2 p-2">
        Hey, {userName} click on logout to logout of this account
      </label>
      <Link to="/">
        <button
          className="m-2 p-1 border-2 border-black rounded-md bg-red-400"
          onClick={() => {
            setUser("Guest");
            dispatch(deleteItem());
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};
export default Logout;
