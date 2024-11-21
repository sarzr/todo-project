interface ITodo {
  id?: string;
  userId?: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  title?: string;
  description?: string;
  priorities?: string;
  completed?: boolean;
}

interface IUpdateTodo {
  id: string;
  data: updateTodoSchemaType;
}

interface IPatchTodo {
  id: string;
  completed: patchTodoSchemaType;
}
