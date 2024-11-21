"use client";

import React from "react";
import CreateTodoModalForm from "./create-todo-modal";

const CreateTodoBtn = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div onClick={toggleHandler}>
        <h3 className="font-semibold text-gray-700 text-sm border-b-2 border-gray-800">
          Create Todo
        </h3>
      </div>
      {isOpen && <CreateTodoModalForm setIsOpen={setIsOpen} />}
    </>
  );
};

export default CreateTodoBtn;
