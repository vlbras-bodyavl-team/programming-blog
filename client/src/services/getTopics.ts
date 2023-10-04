import axios from "axios";
import { getTokensFromStorage } from "../utils";
import { ITopic } from "../interfaces";

export const getTopics = async (): Promise<ITopic[]> => {
  const token = getTokensFromStorage()?.accessToken;

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
