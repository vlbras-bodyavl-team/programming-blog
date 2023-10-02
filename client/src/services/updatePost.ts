import axios from "axios";
import { getTokensFromStorage } from "../utils";
import { IPost } from "../interfaces";

export const updatePost = async (post: IPost): Promise<IPost> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/posts/${post.id}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};