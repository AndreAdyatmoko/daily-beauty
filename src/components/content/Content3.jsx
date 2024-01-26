import React from "react";
import { Button3 } from "../button/button";
import { RightArrow } from "../icons/icons";

const Content3 = () => {
  const cardData = [
    {
      imageSrc: "/assets/baner4.jpg",
      title: "Seasonal Makeup Trends: Fall Edition",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colors, discover the latest beauty trends that will elevate your autumn beauty routine.",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      imageSrc: "/assets/baner5.png",
      title: "Reader Spotlight: Transformation Stories",
      description:
        "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      imageSrc: "/assets/baner6.png",
      title: "Reviewing the Latest Beauty Innovations in 2023",
      description:
        "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      imageSrc: "/assets/baner7.png",
      title: "Inside BB: Product Development Journey",
      description:
        "Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about commitment to quality, innovation, and the meticulous process that goes into each product.",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      imageSrc: "/assets/baner8.png",
      title: "Exclusive Interview with Jenna Milhouse @missyb",
      description:
        "Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      imageSrc: "/assets/baner9.png",
      title: "Inside BB: Product Development Journey",
      description:
        "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
      author: "Jane Doe",
      readTime: "5min read",
    },
  ];

  return (
    <div className="py-20 border-t border-gray-500">
      <span className="uppercase text-pink-500">Trending Topics</span>
      <div className="flex flex-row justify-between items-end mb-8">
        <h1 className="text-5xl font-bold mt-4">
          Stay Trendy with Our <br /> Latest Insights
        </h1>
        <Button3>See More</Button3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border-solid border-2 px-2 border-gray-200 rounded-md w-full lg:max-w-sm "
          >
            <img
              src={card.imageSrc}
              alt={`show ${index + 1}`}
              className="w-full object-cover mt-2 rounded-sm"
            />
            <div className="text-wrap">
              <h2 className="text-3xl my-4 w-full">{card.title}</h2>
              <p>{card.description}</p>
              <div className="flex my-4 items-center justify-between border-t border-gray-300">
                <p>
                  <span>{card.author}</span>{" "}
                  <span className="ml-4">{card.readTime}</span>
                </p>
                <div>
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content3;
