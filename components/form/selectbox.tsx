import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

interface IInput
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  error?: string;
}

export const SelectBox: React.FC<IInput> = ({ error, ...props }) => {
  return (
    <div>
      <select
        defaultValue=""
        {...props}
        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Choose a priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <p
        className={`text-red-400 text-xs mt-2 font-semibold capitalize ${
          error ? "" : "hidden"
        }`}
      >
        {error}
      </p>
    </div>
  );
};
