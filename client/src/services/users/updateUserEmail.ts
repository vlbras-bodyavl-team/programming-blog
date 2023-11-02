import axios from "axios";
import { IUser } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const updateUserEmail = async (
  userId: string,
  email: string
): Promise<IUser> => {
  const accessToken = getTokensFromStorage()?.accessToken;

  const data = { email };

  const response = await axios.patch(`/admins/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
