const API_URL = import.meta.env.VITE_API_URL;

export type LoginData = {
  [k: string]: FormDataEntryValue;
};

export const login = async (data: LoginData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const { token } = await response.json();

    return token;
  } catch (error) {
    console.log(error);
  }
};
