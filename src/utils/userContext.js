import { createContext } from "react";

const userContext = createContext({
  userName: "Guest",
});

export default userContext;
