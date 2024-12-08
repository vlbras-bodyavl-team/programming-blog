import axios from "axios";
import { ITopic } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const getTopics = async (): Promise<ITopic[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/topic`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
