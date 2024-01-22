import React from "react";
import { Button1 } from "../button/button";
import { LeftArrow, RightArrow } from "../icons/icons";

const Content = () => {
  return (
    <div className="border-t border-gray-500">
      <div className="grid grid-cols-2 items-center font-serif text-gray-700">
        <div>
          <div className="flex gap-8 mb-28">
            <LeftArrow />
            <RightArrow />
          </div>
          <h1 className="text-4xl font-bold">
            10 Must-Have <br /> Skincare Products <br /> for Radiant Skin
          </h1>
          <p className="text-lg mt-6 text-left">
            Explore the essential skincare products that can <br /> transform
            your daily routine. From hydrating serums <br /> to powerful
            antioxidants, discover the secrets to <br />
            achieving radiant and healthy skin.
          </p>
          <div className="mt-6">
            <Button1>Read More</Button1>
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
  );
};

export default Content;
