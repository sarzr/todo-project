"use client";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { deleteSession } from "./session";
import { redirect } from "next/navigation";

const errorHandler = (error: AxiosError<AxiosErrorResponse>) => {
  const e = error.response?.data?.error;
  if (typeof error.message === "string") {
    toast.error(error.message, {
      style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
    });
  }
  if (typeof e === "string") {
    toast.error(e, {
      style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
    });
  }
  if (e === "Unauthorized" || error.response?.status === 401) {
    deleteSession();
    redirect("/login");
  }
};

export default errorHandler;
