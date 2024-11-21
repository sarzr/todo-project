import { getTodo } from "@/apis/client/todo";
import errorHandler from "@/utils/error-handler";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

const useTodoList = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["todo-list"],
    queryFn: getTodo,
    retry: 1,
  });

  React.useEffect(() => {
    if (!error || !isError) return;
    errorHandler(error as AxiosError<AxiosErrorResponse>);
  }, [error, isError]);
  return { data, isLoading, isSuccess };
};

export default useTodoList;
