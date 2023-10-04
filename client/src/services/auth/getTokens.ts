import axios from "axios";
import { JwtTokens } from "../../interfaces";
import { getTokensFromStorage } from "../../utils";

export const getTokens = async (): Promise<JwtTokens> => {
  const token = getTokensFromStorage()?.refreshToken;

  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/refresh-tokens`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
