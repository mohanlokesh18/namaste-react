import { useContext } from "react";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { userName, setUser } = useContext(userContext);
  return (
    <div>
      <label className="m-2 p-2">Please enter User Name: </label>
      <input
        className="m-2 p-1 border-2 border-black rounded-md"
        value={userName}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <Link to="/">
        <button className="m-2 p-1 border-2 border-black rounded-md bg-green-400">
          Save
        </button>
      </Link>
    </div>
  );
};
export default Login;
