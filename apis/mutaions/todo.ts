import { useMutation } from "@tanstack/react-query";
import { createTodo, deleteTodo, patchTodo, updateTodo } from "../client/todo";

export const useCreateTodo = () => {
  return useMutation({
    mutationKey: ["create-todo"],
    mutationFn: createTodo,
  });
};

export const useUpdateTodo = () => {
  return useMutation({
    mutationKey: ["update-todo"],
    mutationFn: updateTodo,
  });
};

export const useCompleteTodo = () => {
  return useMutation({
    mutationKey: ["patch-todo"],
    mutationFn: patchTodo,
  });
};

export const useDeleteTodo = () => {
  return useMutation({
    mutationKey: ["delete-todo"],
    mutationFn: deleteTodo,
  });
};
