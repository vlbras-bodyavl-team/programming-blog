import axios, { AxiosResponse } from "axios";

export const signUp = async (
  email: string,
  password: string
): Promise<AxiosResponse<any, any>> => {
  const data = {
    email,
    password,
  };

  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/sign-up`,
    data
  );

  return response;
};
