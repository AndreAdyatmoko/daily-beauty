import React from "react";
import { Button2 } from "../button/button";
import { LeftArrow, RightArrow } from "../icons/icons";

const Content2 = () => {
  return (
    <div>
      <div className="border-t border-gray-500">
        <div className="grid grid-cols-2 items-center font-serif text-gray-700">
          <div>
            <div className="flex gap-8 mb-28">
              <LeftArrow />
              <RightArrow />
            </div>
            <h1 className="text-4xl font-bold">Dive into <br/> Beauty</h1>
            <div className="mt-6">
              <Button2>See More</Button2>
            </div>
          </div>
          <div>
            <img
              src="/assets/skin.jpg"
              alt="Skincare Products"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
