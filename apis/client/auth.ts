import { urls } from "@/utils/urls";
import { generateAxiosInstance } from "./instance";
import { authSchemaType } from "@/server/validations/auth.validation";

type loginUserType = (_: authSchemaType) => Promise<{ token: string }>;
export const loginUser: loginUserType = async (body) => {
  const instance = generateAxiosInstance();
  const response = await instance.post(urls.auth.login, body);
  return response.data;
};

type singupUserType = (_: authSchemaType) => Promise<{ token: string }>;
export const signupUser: singupUserType = async (body) => {
  const instance = generateAxiosInstance();
  const response = await instance.post(urls.auth.signup, body);
  return response.data;
};
