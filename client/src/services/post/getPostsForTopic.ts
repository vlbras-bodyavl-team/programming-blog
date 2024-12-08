import axios from "axios";
import { IPost } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const getPostsForTopic = async (
  topicId: string | undefined
): Promise<IPost[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/topic/${topicId}/post`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
