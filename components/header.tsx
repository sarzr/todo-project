import Link from "next/link";
import React from "react";
import HamburgerMenu from "./hamburger-menu";

const Header = () => {
  return (
    <div className="bg-purpleHome text-white p-5">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src="/143024.png" alt="logo-image" />
          Todo List
        </div>
        <HamburgerMenu />
        <div className="sm:flex gap-4 items-center transition-all delay-75 ease-in-out hidden">
          <button className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm">
            Login
          </button>
          <button className="border-b border-yellow hover:bg-yellow hover:text-purple px-6 py-2 rounded-full font-semibold text-sm">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
