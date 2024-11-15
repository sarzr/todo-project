"use client";
import React from "react";
import { FaBars } from "react-icons/fa";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="sm:hidden">
      <FaBars onClick={toggleHandler} />
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex gap-4 items-center transition-all delay-75 ease-in-out w-full absolute top-20 left-0 bg-purpleHome justify-center py-5 shadow-lg`}
      >
        <button className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm">
          Login
        </button>
        <button className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
