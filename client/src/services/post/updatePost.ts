import axios from "axios";
import { IPost } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const updatePost = async (post: IPost): Promise<IPost> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/admins/posts/${post.id}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
