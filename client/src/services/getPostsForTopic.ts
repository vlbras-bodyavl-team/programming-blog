import axios from "axios";
import { getTokensFromStorage } from "../utils";
import { IPost } from "../interfaces";

export const getPostsForTopic = async (
  topicId: string | undefined
): Promise<IPost[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/topics/${topicId}/posts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
