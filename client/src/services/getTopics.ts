import axios, { AxiosResponse } from "axios";

export const getTopics = async (): Promise<AxiosResponse<any, any>> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics`);
  return response;
};
