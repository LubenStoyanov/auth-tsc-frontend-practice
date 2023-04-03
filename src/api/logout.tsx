const API_URL = import.meta.env.VITE_API_URL;
import useLogin from "../hooks/useLogin";

const { setLoggedIn } = useLogin();

export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    setLoggedIn(false);
    return response.ok;
  } catch (error) {
    console.log(error);
  }
};
