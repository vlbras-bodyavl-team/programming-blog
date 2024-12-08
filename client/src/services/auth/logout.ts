import axios, { AxiosResponse } from "axios";
import { getTokensFromStorage } from "../../utils";

export const logout = (): Promise<AxiosResponse<any, any>> => {
  const token = getTokensFromStorage()?.accessToken;
  const response = axios.post(
    `${import.meta.env.VITE_API_URL}/auth/sign-out`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
