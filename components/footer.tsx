import React from "react";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purpleHome footer bg-neutral text-neutral-content items-center p-4">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <p className="text-gray-200 text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
        <div className="flex gap-3">
          <FaTelegramPlane className="w-5 h-5 text-gray-300 cursor-pointer" />
          <FaTwitter className="w-5 h-5 text-gray-300 cursor-pointer" />
          <FaFacebookF className="w-5 h-5 text-gray-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
