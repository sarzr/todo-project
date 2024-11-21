import React from "react";
import TodoNavbarLink from "./todo-link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-purpleHome text-white p-5">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src="/143024.png"
            alt="logo-image"
            className="hidden sm:block"
            width={65}
            height={65}
          />
          Todo List
        </div>
        <TodoNavbarLink />
      </div>
    </div>
  );
};

export default Header;
