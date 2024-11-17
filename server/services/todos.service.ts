import { pb } from "../database/connection";

// get todos list
type todosListType = () => Promise<IPocketBaseTodoList>;
export const todosList: todosListType = async () => {
  return await pb.collection("todos").getList();
};

// get todo by id
type todoByIdType = (_id: string) => Promise<ITodo | undefined>;
export const todoById: todoByIdType = async (id) => {
  try {
    return await pb.collection("todos").getFirstListItem(`id="${id}"`);
  } catch {
    return undefined;
  }
};

// create todo
type createTodoType = (_: FormData) => Promise<boolean>;
export const createTodo: createTodoType = async (data) => {
  try {
    await pb.collection("todos").create(data);
    return true;
  } catch {
    return false;
  }
};

// update body
type updateTodoType = (_id: string, _: FormData) => Promise<boolean>;
export const updateTodo: updateTodoType = async (id, data) => {
  try {
    await pb.collection("todos").update(id, data);
    return true;
  } catch {
    return false;
  }
};

// completed patch
type patchTodoType = (_id: string, _: boolean) => Promise<boolean>;
export const patchTodo: patchTodoType = async (id, completed) => {
  try {
    await pb.collection("todos").update(id, { completed });
    return true;
  } catch {
    return false;
  }
};

// delete todo
type deleteTodoType = (id: string) => Promise<boolean>;
export const deleteTodo: deleteTodoType = async (id) => {
  try {
    await pb.collection("todos").delete(id);
    return true;
  } catch {
    return false;
  }
};
