import axios from "axios";
import { getTokensFromStorage } from "../../utils";

export const deleteUser = async (id: string) => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.delete(`admins/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
