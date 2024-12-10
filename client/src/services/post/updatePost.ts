import axios from "axios";
import { IPost } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

interface IUpdatePost {
  id: string;
  title: string;
  content: string;
  topicName: string;
}

export const updatePost = async (post: IUpdatePost): Promise<IPost> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/admin/post/${post.id}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
