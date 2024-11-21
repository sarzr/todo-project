import TodoListNavbar from "@/components/todo-page/todo-list-navbar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Todo list page",
  description: "todo list",
};

export default function TodoLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <TodoListNavbar />
      {children}
    </div>
  );
}
