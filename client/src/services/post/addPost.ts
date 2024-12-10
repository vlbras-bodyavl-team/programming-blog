import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../../utils";

interface IAddPost {
  title: string;
  topicName: string;
  content: string;
}

export const addPost = async (
  post: IAddPost
): Promise<AxiosResponse<any, any>> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/admin/post`,
    post,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
