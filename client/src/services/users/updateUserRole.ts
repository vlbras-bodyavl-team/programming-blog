import axios from "axios";
import { IUser } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const updateUserRole = async (
  userId: string,
  role: "admin" | "customer"
): Promise<IUser> => {
  const accessToken = getTokensFromStorage()?.accessToken;

  const data = { role };

  const response = await axios.patch(`/admins/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
