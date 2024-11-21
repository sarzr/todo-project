import { urls } from "@/utils/urls";
import { generateAxiosInstance } from "./instance";
import { createTodoSchemaType } from "@/server/validations/todo.validation";

type getTodoType = () => Promise<IPocketBaseTodoList>;
export const getTodo: getTodoType = async () => {
  const instance = generateAxiosInstance();
  const response = await instance.get(urls.todo.list);
  return response.data.data;
};

type createTodoType = (_: createTodoSchemaType) => Promise<{ message: string }>;
export const createTodo: createTodoType = async (data) => {
  const instance = generateAxiosInstance();
  const response = await instance.post(urls.todo.list, data);
  return response.data;
};

type updateTodoType = (_: IUpdateTodo) => Promise<{ message: string }>;
export const updateTodo: updateTodoType = async ({ id, data }) => {
  const instance = generateAxiosInstance();
  const response = await instance.put(urls.todo.ById(id), data);
  return response.data;
};

type patchTodoType = (_: IPatchTodo) => Promise<{ message: string }>;
export const patchTodo: patchTodoType = async ({ id, completed }) => {
  const instance = generateAxiosInstance();
  const response = await instance.patch(urls.todo.ById(id), {
    completed,
  });
  return response.data;
};

type deleteTodoType = (id: string) => Promise<IPocketBaseTodoList>;
export const deleteTodo: deleteTodoType = async (id) => {
  const instance = generateAxiosInstance();
  const response = await instance.delete(urls.todo.ById(id));
  return response.data;
};
