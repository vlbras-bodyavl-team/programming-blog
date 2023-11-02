import axios from "axios";
import { getTokensFromStorage } from "../../utils";
import { IUser } from "../../interfaces";

export const getUsersWithEmail = async (email: string): Promise<IUser[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(`/admins/users?email=${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
