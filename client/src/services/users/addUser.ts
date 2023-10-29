import axios from "axios";
import { Roles } from "../../types";
import { getTokensFromStorage } from "../../utils";

export const addUser = async (
  email: string,
  password: string,
  role: Roles
): Promise<any> => {
  const data = {
    email,
    password,
    role,
  };

  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/admins/users`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
