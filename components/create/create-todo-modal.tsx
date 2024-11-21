"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import { CreateTodoForm } from "./create-todo-form";

const CreateTodoModalForm: React.FC<IModal> = ({ setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen!(false)}
      data-twe-modal-init
      data-twe-backdrop="false"
      className="fixed inset-0 bg-gray-700 bg-opacity-80 left-0 flex justify-center w-full h-full items-center z-[1055] overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalComponents"
      aria-labelledby="exampleModalComponentsLabel"
      aria-hidden="true"
    >
      <div
        data-twe-modal-dialog-ref
        className="pointer-events-none w-full relative opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto px-5 relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
        >
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md px-4 py-6">
            <h5
              className="text-xl font-medium leading-normal text-surface dark:text-white"
              id="exampleModalComponentsLabel"
            >
              Create
            </h5>
            <button
              type="button"
              onClick={() => setIsOpen!(false)}
              className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              data-twe-modal-dismiss
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="relative flex-auto px-4 pb-1" data-twe-modal-body-ref>
            <CreateTodoForm setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoModalForm;
