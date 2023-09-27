import { JwtTokens } from "../interfaces";
import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "./constants";

export const getTokensFromStorage = (): JwtTokens | null => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_NAME);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_NAME);
  if (accessToken && refreshToken) {
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
  return null;
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
};

export const removeTokensFromStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_NAME);
  localStorage.removeItem(REFRESH_TOKEN_NAME);
};
