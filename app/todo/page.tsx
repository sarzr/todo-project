import CreateTodoBtn from "@/components/create/create-todo";
import TodoList from "@/containers/todo-list";
import React from "react";

const TodoPage: React.FC = () => {
  return (
      <div className="bg-pink min-h-screen max-w-[1590px] mx-auto p-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">To do</h2>
            <CreateTodoBtn />
          </div>
          <TodoList />
        </div>
      </div>
  );
};

export default TodoPage;
