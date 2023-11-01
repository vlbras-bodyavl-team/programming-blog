import { isAxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";

export const catchModeratorError = (
  error: unknown,
  navigate?: NavigateFunction
) => {
  if (isAxiosError(error)) {
    if (error.response?.status === 403) {
      alert("Only admins can perform this operation");
    }
    if (error.response?.status === 401) {
      navigate && navigate("/signin");
    }
  } else throw error;
};
