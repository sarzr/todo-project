"use client";
import React from "react";
import { useCompleteTodo, useDeleteTodo } from "@/apis/mutaions/todo";
import errorHandler from "@/utils/error-handler";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { queryClient } from "@/providers/tanstack.provider";
import UpdateTodoModalForm from "../update/update-todo-modal";
import ConfirmModal from "../todo/modal-confirm";

interface IBtn {
  id: string;
  completed: boolean;
}
const Btn: React.FC<IBtn> = ({ id, completed }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] =
    React.useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const deleteTodo = useDeleteTodo();
  const completeTodo = useCompleteTodo();

  const deleteOnClickHandler = async () => {
    if (!id) return;
    try {
      await deleteTodo.mutateAsync(id as string);
      toast.success("Deleted", {
        style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
      });
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    } catch (error) {
      errorHandler(deleteTodo.error as AxiosError<AxiosErrorResponse>);
      errorHandler(error as AxiosError<AxiosErrorResponse>);
    }
  };

  const completeOnClickHandler = async () => {
    if (!id || typeof completed !== "boolean") return;
    console.log({ id, completed: !completed });
    try {
      await completeTodo.mutateAsync({ id, completed: !completed });
      toast.success("Updated", {
        style: { backgroundColor: "#6e6e6e", color: "#fff", fontSize: "15px" },
      });
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    } catch (error) {
      errorHandler(completeTodo.error as AxiosError<AxiosErrorResponse>);
      errorHandler(error as AxiosError<AxiosErrorResponse>);
    }
  };
  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setShowConfirmModal(true);
          }}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
        >
          Delete
        </button>
        <button
          onClick={toggleHandler}
          className="inline-flex items-center px-6 py-1 text-sm font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
        >
          Edit
        </button>
        <button
          onClick={completeOnClickHandler}
          className={`${
            completed === false
              ? "bg-green-700 hover:bg-green-800"
              : "bg-orange-600 hover:bg-orange-700"
          } inline-flex items-center px-4 py-1 text-sm font-medium text-center text-white rounded-md focus:outline-none`}
        >
          {completed === true ? "Inprogress" : "Completed"}
        </button>
      </div>
      {isOpen && <UpdateTodoModalForm setIsOpen={setIsOpen} id={id} />}
      {showConfirmModal && (
        <ConfirmModal
          setIsOpen={setIsOpen}
          setShowConfirmModal={setShowConfirmModal}
          text="delete this todo"
          deleteTodo={true}
          deleteHandler={deleteOnClickHandler}
          isPending={deleteTodo.isPending}
        />
      )}
    </>
  );
};

export default Btn;
