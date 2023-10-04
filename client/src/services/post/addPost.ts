import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../../utils";
import { PostState } from "../../hooks/usePost";

export const addPost = async (
  post: PostState
): Promise<AxiosResponse<any, any>> => {
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
