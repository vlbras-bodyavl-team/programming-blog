import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../../utils";

export const addPost = async (post: {
  title: string;
  topic: string;
  content: string;
}): Promise<AxiosResponse<any, any>> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/posts`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
