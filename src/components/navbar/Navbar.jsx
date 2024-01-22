import React from "react";
import { IconD, IconB } from "../icons/icons";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200 hover:border-gray-500 ">
              Featured
            </span>
            <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200 ">
              How-to
            </span>
            <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200">
              Expert Advice
            </span>
          </div>
          <div className="flex items-center flex-col">
            <div className="flex items-center">
              <IconD />
              <IconB className="mt-2" />
            </div>
            <div className="flex items-center gap-2 ml-2">
            <p className="text-black font-normal text-lg">daily</p>
            <p className="text-pink-500 font-normal text-lg">beauty</p>
            </div>
          </div>
          <div className="flex items-center gap-20">
            <span className="text-gray-700 font-normal text-lg">Contact</span>
            <span className="text-gray-700 font-normal text-lg border-solid border-2 px-2 border-gray-400 rounded-md hover:bg-EAEAEA hover:border-gray-500 cursor-pointer">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
