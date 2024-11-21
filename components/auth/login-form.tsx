"use client";

import { useLogin } from "@/apis/mutaions/auth";
import {
  authSchema,
  authSchemaType,
} from "@/server/validations/auth.validation";
import errorHandler from "@/utils/error-handler";
import { setSession } from "@/utils/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<authSchemaType>({
    mode: "all",
    resolver: zodResolver(authSchema),
  });

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const login = useLogin();

  const { push } = useRouter();

  const onSubmit: SubmitHandler<authSchemaType> = async (data) => {
    console.log(data);
    login.mutate(data);
    reset({ username: "", password: "" });
  };

  React.useEffect(() => {
    if (!login.isSuccess || !login.data) return;
    console.log(login.data.token);
    setSession(login.data.token);
    toast.success("Logged in", {
      style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
    });
    push("/todo");
  }, [login.isSuccess, login.data, push]);

  React.useEffect(() => {
    if (!login.isError || !login.error) return;
    errorHandler(login.error as AxiosError<AxiosErrorResponse>);
  }, [login.isError, login.error]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-md w-full mx-auto"
    >
      <div className="mb-12 flex gap-4 items-center">
        <Link href={"/"}>
          <IoArrowBack className="w-5 h-5 text-gray-700" />
        </Link>
        <h3 className="text-4xl font-bold text-purple mb-2">Login</h3>
      </div>

      <div>
        <div className="relative flex items-center">
          <input
            {...register("username")}
            type="text"
            required
            className="w-full text-sm border-b bg-purpleLight border-gray-400 px-2 py-3 outline-none"
            placeholder="Enter username"
          />
        </div>
        {errors.username && (
          <p className="text-red-600 mt-2 text-xs font-medium">
            {errors.username.message}
          </p>
        )}
      </div>

      <div className="mt-8">
        <div className="relative flex items-center">
          <input
            {...register("password")}
            name="password"
            type={!showPassword ? "password" : "text"}
            required
            className="w-full text-sm border-b bg-purpleLight border-gray-400 px-2 py-3 outline-none"
            placeholder="Enter password"
          />
          {showPassword ? (
            <FaEye
              onClick={showPasswordHandler}
              className="w-[18px] h-[18px] absolute right-2 text-gray-500"
            />
          ) : (
            <BsEyeSlashFill
              onClick={showPasswordHandler}
              className="w-[18px] h-[18px] absolute right-2 text-gray-500"
            />
          )}
        </div>
        {errors.password && (
          <p className="text-red-600 mt-2 text-xs font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-purple border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="text-gray-800 ml-3 block text-sm"
          >
            Remember me
          </label>
        </div>
        <div>
          <a className="text-purple font-semibold text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="mt-12">
        <button
          type="submit"
          className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-purple hover:bg-purpleHover focus:outline-none"
        >
          Login
        </button>
        <p className="text-gray-800 text-sm text-center mt-6">
        Don&apos;t have an account?
          <Link
            href={"/signup"}
            className="text-purple font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
