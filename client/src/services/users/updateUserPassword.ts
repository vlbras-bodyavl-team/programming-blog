import axios from "axios";
import { IUser } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const updateUserPassword = async (
  userId: string,
  password: string
): Promise<IUser> => {
  const accessToken = getTokensFromStorage()?.accessToken;

  const data = { password };

  const response = await axios.patch(`/admins/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
