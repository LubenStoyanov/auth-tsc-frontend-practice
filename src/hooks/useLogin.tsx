import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return {
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
  };
};

export default useLogin;
