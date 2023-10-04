import axios from "axios";
import { IPost } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const getPost = async (id: string): Promise<IPost> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const responsePost: IPost = {
    ...response.data,
    topic: response.data.topic.name,
  };
  return responsePost;
};
