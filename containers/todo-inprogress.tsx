"use client";

import { TodoCard, TodoCardSkeleton } from "@/components/todo-card/todo-card";
import useTodoList from "@/hooks/useTodoList";
import React, { useMemo } from "react";

const TodoInprogressList = () => {
  const { data, isSuccess, isLoading } = useTodoList();

  const priorities = ["high", "medium", "low"];

  const inprogressTodoByPriorities = useMemo(() => {
    return priorities.reduce(
      (acc: Record<string, ITodo[] | undefined>, priority) => {
        acc[priority] = data?.items.filter(
          (el) => !el.completed && el.priorities === priority
        );
        console.log(acc[priority]);
        return acc;
      },
      {}
    );
  }, [data?.items]);

  const renderTodoCardsInprogressByPriorities = (priority: string) => {
    const todos = inprogressTodoByPriorities[priority];
    return (
      todos?.length! > 0 && (
        <div className="mt-8" key={priority}>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700">
              {priority} priority
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4s">
              {todos?.map((el) => (
                <TodoCard
                  key={el.id}
                  id={el.id}
                  description={el.description}
                  title={el.title}
                  priorities={el.priorities}
                  completed={el.completed}
                />
              ))}
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      {isLoading &&
        priorities.map((el) => (
          <div key={el} className="mt-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-700">{el} priority</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4s">
                {[1, 2, 3, 4].map((el) => (
                  <TodoCardSkeleton key={el} />
                ))}
              </div>
            </div>
          </div>
        ))}

      {isSuccess &&
        priorities.map((el) => renderTodoCardsInprogressByPriorities(el))}
    </>
  );
};

export default TodoInprogressList;
