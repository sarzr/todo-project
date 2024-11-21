import React from "react";
import { CgSpinner } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";

interface IConfirm {
  setShowConfirmModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteHandler?: () => void;
  logoutHandler?: () => void;
  text: string;
  updateTodo?: boolean;
  deleteTodo?: boolean;
  createTodo?: boolean;
  logOut?: boolean;
  isPending?: boolean;
}

const ConfirmModal: React.FC<IConfirm> = ({
  setIsOpen,
  setShowConfirmModal,
  deleteHandler,
  logoutHandler,
  text,
  updateTodo,
  deleteTodo,
  createTodo,
  logOut,
  isPending,
}) => {
  return (
    <>
      <div
        onClick={() => {
          setShowConfirmModal!(false);
          setIsOpen!(false);
        }}
        className="fixed inset-0 bg-gray-700 bg-opacity-80 left-0 flex justify-center w-full h-full items-center z-[1055] overflow-y-auto overflow-x-hidden outline-none"
      >
        <div className="pointer-events-none w-full md:w-1/2 relative opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto mx-5 py-10 px-5 relative flex items-center flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"
          >
            <RiErrorWarningLine className="w-10 h-10 text-gray-500 " />
            <h5 className="mt-4 mb-5 px-5 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to {text}?
            </h5>

            <div className="flex justify-center">
              <button
                type="submit"
                className={`text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ${
                  updateTodo || createTodo ? "block" : "hidden"
                }`}
              >
                {isPending ? (
                  <CgSpinner className="animate-spin text-white w-6 h-6" />
                ) : (
                  "Yes, I'm sure"
                )}
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className={`text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ${
                  deleteTodo ? "block" : "hidden"
                }`}
              >
                {isPending ? (
                  <CgSpinner className="animate-spin text-white w-6 h-6" />
                ) : (
                  "Yes, I'm sure"
                )}
              </button>
              <button
                type="button"
                onClick={logoutHandler}
                className={`text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ${
                  logOut ? "block" : "hidden"
                }`}
              >
                {isPending ? (
                  <CgSpinner className="animate-spin text-white w-6 h-6" />
                ) : (
                  "Yes, I'm sure"
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal!(false);
                  setIsOpen!(false);
                }}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
