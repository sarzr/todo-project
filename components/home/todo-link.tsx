"use client";
import { getSession } from "@/utils/session";
import Link from "next/link";
import React from "react";

const TodoNavbarLink = () => {
  const token = getSession();
  return token ? (
    <Link
      href={"/todo"}
      className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm"
    >
      Todo List
    </Link>
  ) : (
    <div className="flex gap-4 items-center transition-all delay-75 ease-in-out">
      <Link
        href={"/login"}
        className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm"
      >
        Login
      </Link>
      <Link
        href={"/signup"}
        className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm"
      >
        Sign up
      </Link>
    </div>
  );
};

export default TodoNavbarLink;
