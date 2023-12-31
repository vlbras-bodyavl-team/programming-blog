import axios from "axios";
import { getTokensFromStorage } from "../../utils";
import { IUser } from "../../interfaces";

export const getUsers = async (): Promise<IUser[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(`/admins/users?`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
