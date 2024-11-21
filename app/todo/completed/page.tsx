import CreateTodoBtn from "@/components/create/create-todo";
import TodoCompletedList from "@/containers/todo-completed";
import React from "react";

const CompletedTodoPage = () => {
  return (
    <div className="bg-GreenL min-h-screen max-w-[1590px] mx-auto p-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">To do</h2>
          <CreateTodoBtn />
        </div>
        <TodoCompletedList />
      </div>
    </div>
  );
};

export default CompletedTodoPage;
