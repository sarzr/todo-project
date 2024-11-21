"use client";

import { TodoCard, TodoCardSkeleton } from "@/components/todo-card/todo-card";
import useTodoList from "@/hooks/useTodoList";
import React, { useMemo } from "react";

const TodoCompletedList = () => {
  const { data, isSuccess, isLoading } = useTodoList();

  const priorities = ["high", "medium", "low"];

  const completedTodoByPriorities = useMemo(() => {
    return priorities.reduce(
      (acc: Record<string, ITodo[] | undefined>, priority) => {
        acc[priority] = data?.items.filter(
          (el) => el.completed && el.priorities === priority
        );
        return acc;
      },
      {}
    );
  }, [data?.items]);

  const renderTodoCardsCompletedByPriorities = (priority: string) => {
    const todos = completedTodoByPriorities[priority];
    return (
      <div className="mt-8" key={priority}>
        {todos?.length! > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700">{priority} priority</h3>
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
        )}
      </div>
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
        priorities.map((el) => renderTodoCardsCompletedByPriorities(el))}
    </>
  );
};

export default TodoCompletedList;
