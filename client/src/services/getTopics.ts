import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../utils";

export const getTopics = async (): Promise<AxiosResponse<any, any>> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
