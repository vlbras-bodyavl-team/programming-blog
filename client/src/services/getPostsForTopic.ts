import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../utils";

export const getPostsForTopic = (
  topicId: string | undefined
): Promise<AxiosResponse<any, any>> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = axios.get(
    `${import.meta.env.VITE_API_URL}/topics/${topicId}/posts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
