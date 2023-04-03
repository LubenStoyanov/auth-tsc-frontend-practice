export type RegisterData = {
  [k: string]: FormDataEntryValue;
};

const API_URL = import.meta.env.VITE_API_URL;
export const register = async (data: RegisterData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);
  return response.json();
};
