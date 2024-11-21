import React from "react";
import Btn from "./btn";

export const TodoCard: React.FC<ITodo> = ({
  title,
  description,
  priorities,
  id,
  completed,
}) => {
  return (
    <div
      className={`${
        priorities === "high"
          ? "bg-cornflowerLilac"
          : priorities === "medium"
          ? "bg-LightPeach"
          : priorities === "low"
          ? "bg-BlueChalk"
          : ""
      } px-5 py-3 rounded-md flex flex-wrap gap-4 justify-between items-center`}
    >
      <div className="truncate">
        <h2
          title={title}
          className="mb-2 text-lg tracking-tight text-gray-900 dark:text-white"
        >
          {title}
        </h2>
        <p
          title={description}
          className="mb-3 font-medium text-sm text-gray-700 dark:text-gray-400"
        >
          {description}
        </p>
      </div>
      <Btn id={id!} completed={completed!} />
    </div>
  );
};

export const TodoCardSkeleton = () => {
  return (
    <div className="px-5 py-3 bg-slate-400 animate-pulse rounded-md flex flex-wrap gap-4 justify-between items-center h-full w-full">
      <div className="mt-1">
        <h2 className="bg-slate-200 h-3 w-20 animate-pulse rounded-xl mb-4 text-lg tracking-tight "></h2>
        <p className="mb-3 font-medium bg-slate-200 animate-pulse h-4 w-40 rounded-xl text-sm text-gray-700 dark:text-gray-400"></p>
      </div>
      <div className="flex gap-3">
        <div className="inline-flex items-center h-5 animate-pulse w-16 px-4 py-1 bg-slate-200 rounded-full hover:bg-red-700 focus:outline-none"></div>
        <div className="inline-flex items-center h-5 animate-pulse w-16 px-6 py-1 bg-slate-200 rounded-full hover:bg-green-700 focus:outline-none"></div>
        <div className="inline-flex items-center h-5 animate-pulse w-16 px-4 py-1 bg-slate-200 rounded-full focus:outline-none"></div>
      </div>
    </div>
  );
};
