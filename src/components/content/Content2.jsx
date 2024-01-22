import React from "react";
import { Button2 } from "../button/button";
import { LeftArrow, RightArrow } from "../icons/icons";

const Content2 = () => {
  return (
    <div>
      <div className="border-t border-gray-500">
        <div className="grid grid-cols-4 gap-4 items-center font-serif text-gray-700">
          <div>
            <div className="flex gap-8 mb-28">
              <LeftArrow />
              <RightArrow />
            </div>
            <h1 className="text-4xl font-bold">
              Dive into <br /> Beauty
            </h1>
            <div className="mt-6">
              <Button2>See More</Button2>
            </div>
          </div>
          <div className="border-solid border-2 px-2 border-gray-200 rounded-md">
            <img
              src="/assets/skin.jpg"
              alt="Skincare Products"
              className="w-full object-cover mt-2 rounded-sm"
              style={{ height: "85%" }}
            />
            <div className="flex items-center justify-between ">
              <p className="text-black font-normal text-lg">Skincare</p>
              <RightArrow />
            </div>
          </div>
          <div className="border-solid border-2 px-2 border-gray-200 rounded-md">
            <img
              src="/assets/skin.jpg"
              alt="Skincare Products"
              className="w-full object-cover mt-2 rounded-sm"
              style={{ height: "85%" }}
            />
            <div className="flex items-center justify-between ">
              <p className="text-black font-normal text-lg">Haircare</p>
              <RightArrow />
            </div>
          </div>
          <div className="border-solid border-2 px-2 border-gray-200 rounded-md">
            <img
              src="/assets/skin.jpg"
              alt="Skincare Products"
              className="w-full object-cover mt-2 rounded-sm"
              style={{ height: "85%" }}
            />
            <div className="flex items-center justify-between ">
              <p className="text-black font-normal text-lg">Makeup</p>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
