import CreateTodoBtn from "@/components/create/create-todo";
import TodoInprogressList from "@/containers/todo-inprogress";
import React from "react";

const InprogressTodoPage = () => {
  return (
    <div className="bg-Linen min-h-screen max-w-[1590px] mx-auto p-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">To do</h2>
          <CreateTodoBtn />
        </div>
        <TodoInprogressList />
      </div>
    </div>
  );
};

export default InprogressTodoPage;
