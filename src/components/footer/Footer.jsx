import React from "react";
import { Facebook, IconB, IconD, Instagram, Youtube } from "../icons/icons";

const Footer = () => {
  return (
    <footer className="bg-white text-white p-4">
      <div className="border-t border-gray-500 flex items-center justify-between">
        <div className="flex items-start flex-col cursor-pointer">
          <div className="flex items-center ml-8">
            <IconD />
            <IconB className="mt-2" />
          </div>
          <div className="flex items-start gap-2 ml-2">
            <p className="text-black font-normal text-lg">daily</p>
            <p className="text-pink-500 font-normal text-lg">beauty</p>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
        <div className="flex items-center text-gray-600 gap-2 cursor-pointer">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
