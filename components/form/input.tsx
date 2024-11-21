import React from "react";

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  placeholder?: string;
}

export const InputForm: React.FC<IInput> = ({
  placeholder,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        className={`border  rounded-md py-1 px-2 hover:outline focus:outline placeholder:text-xs placeholder:font-medium ${
          error ? "border-red-400" : "border-slate-300"
        }
        ${error ? "outline-red-400" : "outline-slate-200"}
        ${error ? "placeholder:text-red-400" : "placeholder:text-slate-400"}`}
        placeholder={placeholder}
        {...props}
      />
      {!!error && (
        <p className="text-red-400 text-xs font-semibold capitalize">{error}</p>
      )}
    </div>
  );
};
