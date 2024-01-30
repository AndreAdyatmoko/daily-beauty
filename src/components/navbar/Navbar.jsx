import React from "react";
import { IconD, IconB } from "../icons/icons";
import { Button3 } from "../button/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white fixed top-0 left-0 w-full z-50 px-8 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/featured">
              <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200 hover:border-gray-500 ">
                Featured
              </span>
            </Link>
            <Link>
              <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200 ">
                How-to
              </span>
            </Link>
            <Link>
              <span className="text-gray-700 font-normal text-lg cursor-pointer hover:bg-gray-200">
                Expert Advice
              </span>
            </Link>
          </div>
          <Link to="/">
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
          </Link>
          <div className="flex items-center gap-10">
            <span className="text-gray-700 font-normal text-lg">Contact</span>
            <Button3>Subscribe</Button3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
