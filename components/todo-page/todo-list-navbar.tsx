"use client";
import Link from "next/link";
import LogoutButton from "./logout-btn";
import HamburgerMenuTodo from "./hamburger-menu-navbar";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TodoListNavbar: React.FC = () => {
  const currentPath = usePathname();

  const navbarBg =
    currentPath === "/todo"
      ? "bg-pink"
      : currentPath === "/todo/inprogress"
      ? "bg-Linen"
      : currentPath === "/todo/completed"
      ? "bg-GreenL"
      : "";
  return (
    <div className={`${navbarBg} p-5`}>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex gap-9 items-center">
          <Image
            src="/icons8-todo-list-100.png"
            alt="logo-image"
            className="h-8 w-10"
            width={500}
            height={500}
          />

          <ul className="sm:flex gap-6 hidden">
            <Link href={"/"} className="text-gray-700 font-font-font-extrabold">
              Home
            </Link>
            <Link
              href={"/todo"}
              className="text-gray-700 font-font-font-extrabold"
            >
              Todo List
            </Link>
            <Link
              href={"/todo/inprogress"}
              className="text-gray-700 font-font-font-extrabold"
            >
              Inprogress
            </Link>
            <Link
              href={"/todo/completed"}
              className="text-gray-700 font-font-font-extrabold"
            >
              Completed
            </Link>
          </ul>
        </div>
        <LogoutButton className="hidden sm:block" />
        <HamburgerMenuTodo />
      </div>
    </div>
  );
};

export default TodoListNavbar;
