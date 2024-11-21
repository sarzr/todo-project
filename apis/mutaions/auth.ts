import { useMutation } from "@tanstack/react-query";
import { loginUser, signupUser } from "../client/auth";

export const useLogin = () => {
  return useMutation({ mutationKey: ["login"], mutationFn: loginUser });
};

export const useSignup = () => {
  return useMutation({ mutationKey: ["signup"], mutationFn: signupUser });
};
