import axios from "axios";
import { redirect } from "react-router-dom";
import { getTokensFromStorage, setAccessToken, setRefreshToken } from "..";
import { getTokens } from "../../services";

export const catchUnauthorizedError = async (error: unknown) => {
  try {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      if (!getTokensFromStorage()) return redirect("/signin");

      const tokens = await getTokens();

      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
    } else {
      return redirect("/signin");
    }
  } catch (error) {
    if (axios.isAxiosError(error))
      if (error.response?.status === 401 || error.response?.status === 403)
        return redirect("/signin");
  }
};
