"use client";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import LogoutButton from "./logout-btn";

const HamburgerMenuTodo: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="sm:hidden">
      <FaBars onClick={toggleHandler} className="w-5 h-4" />
      <div
        className={`${
          isOpen ? "" : "hidden"
        } p-5 flex flex-col absolute left-0 top-14 gap-4 transition-all delay-75 ease-in-out w-full bg-gray-50 justify-center py-5 shadow-lg`}
      >
        <Link
          href={"/"}
          className="hover:border-b-2 border-pinkD text-gray-700 font-font-font-extrabold"
        >
          Home
        </Link>
        <Link href={"/todo"} className="hover:border-b-2 border-pinkD text-gray-700 font-font-font-extrabold">
          Todo List
        </Link>
        <Link
          href={"/todo/inprogress"}
          className="hover:border-b-2 border-pinkD text-gray-700 font-font-font-extrabold"
        >
          Inprogress
        </Link>
        <Link
          href={"/todo/completed"}
          className="hover:border-b-2 border-pinkD text-gray-700 font-font-font-extrabold"
        >
          Completed
        </Link>
        <LogoutButton className="text-start" />
      </div>
    </div>
  );
};

export default HamburgerMenuTodo;
