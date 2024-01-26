import React from "react";
import { Play } from "../icons/icons";

const Content4 = () => {
  const videoData = [
    {
      title: "Reader Spotlight: Transformation Stories",
      categories: "Advice",
      time: "15:48",
    },
    {
      title: "Guest Expert Takeover: Interactive Beauty Experiences",
      categories: "Experts",
      time: "12:48",
    },
    {
      title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
      categories: "Tutorial",
      time: "11:48",
    },
  ];
  return (
    <div className="py-24 border-t border-gray-500 hover:border-black hover:shadow-md cursor-pointer transition duration-300 ease-in-out">
      <span className="uppercase text-pink-500 font-semibold text-lg mb-2">ADVICE</span>
      <h1 className="text-5xl font-bold mb-8 mt-4">Featured Videos</h1>
      <div className="flex gap-2">
        <div className="w-2/3 relative overflow-hidden rounded-md">
          <img
            src="/assets/baner10.png"
            alt="Skincare Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="text-white text-6xl" />
          </div>
        </div>
        <div className="w-1/3 flex-col">
          {videoData.map((video, index) => (
            <div
              key={index}
              className={`border-solid border-2 border-gray-200 rounded-md px-4 py-4${index > 0 ? ' mt-4' : ''} hover:border-black hover:shadow-md cursor-pointer`}
            >
              <div>
                <h1 className="text-black font-normal text-2xl">
                  {video.title}
                </h1>
              </div>
              <div className="flex justify-start gap-4 border-t border-gray-300 mt-4 py-2 items-center">
                <p className="text-black font-normal text-lg">
                  {video.categories}
                </p>
                <p className="text-black font-normal text-lg">{video.time}</p>
                <Play className="ml-auto"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content4;
