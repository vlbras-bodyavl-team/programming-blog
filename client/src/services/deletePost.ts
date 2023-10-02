import axios from "axios";
import { IPost } from "../interfaces";
import { getTokensFromStorage } from "../utils";

export const deletePost = async (id: string): Promise<IPost> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/posts/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
