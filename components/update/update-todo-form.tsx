"use client";

import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../form/input";
import {
  updateTodoSchema,
  updateTodoSchemaType,
} from "@/server/validations/todo.validation";
import { Textarea } from "../form/textarea";
import { SelectBox } from "../form/selectbox";
import { useUpdateTodo } from "@/apis/mutaions/todo";
import { toast } from "react-toastify";
import { queryClient } from "@/providers/tanstack.provider";
import errorHandler from "@/utils/error-handler";
import { AxiosError } from "axios";
import ConfirmModal from "../todo/modal-confirm";

export const UpdateTodoForm: React.FC<IModal> = ({ setIsOpen, id }) => {
  const [showConfirmModal, setShowConfirmModal] =
    React.useState<boolean>(false);

  const { handleSubmit, control, reset } = useForm<updateTodoSchemaType>({
    mode: "all",
    resolver: zodResolver(updateTodoSchema),
  });

  const update = useUpdateTodo();

  const onSubmit: SubmitHandler<updateTodoSchemaType> = (data) => {
    if (!id) return;
    if (!data.description && !data.priorities && !data.title) return;

    update.mutate({ id, data });
    console.log(data);
    reset({ description: "", priorities: "", title: "" });
  };

  React.useEffect(() => {
    if (!update.isSuccess || !update.data) return;
    setShowConfirmModal(false);
    setIsOpen!(false);
    toast.success("Updated", {
      style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
    });
    queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    setIsOpen!(false);
  }, [update.isSuccess, update.data, setIsOpen]);

  React.useEffect(() => {
    if (!update.isError || !update.error) return;
    errorHandler(update.error as AxiosError<AxiosErrorResponse>);
  }, [update.isError, update.error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => {
          return (
            <InputForm
              type="text"
              placeholder="title"
              error={fieldState.error?.message}
              {...field}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => {
          return (
            <Textarea
              type="text"
              placeholder="description"
              error={fieldState.error?.message}
              {...field}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="priorities"
        render={({ field, fieldState }) => {
          return <SelectBox error={fieldState.error?.message} {...field} />;
        }}
      />
      <div className="flex flex-shrink-0 mt-4 gap-4 flex-wrap items-center justify-end rounded-b-md p-4">
        <button
          type="button"
          onClick={() => setIsOpen!(false)}
          className="bg-red-600 text-white inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
          data-twe-modal-dismiss
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Close
        </button>
        <button
          type="button"
          className="bg-green-600 ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          onClick={() => setShowConfirmModal((prev) => !prev)}
        >
          Save changes
        </button>
        {showConfirmModal && (
          <ConfirmModal
            setIsOpen={setIsOpen!}
            setShowConfirmModal={setShowConfirmModal}
            text="update todo"
            updateTodo={true}
            isPending={update.isPending}
          />
        )}
      </div>
    </form>
  );
};
