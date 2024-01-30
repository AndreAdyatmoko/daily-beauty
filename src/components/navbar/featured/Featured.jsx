import React from "react";

const Featured = () => {
  const featuredData = [
    {
      imageSrc: "/assets/baner4.jpg",
      title: "Reviewing the Latest Beauty Innovations in 2023",
      description:
        "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
      category: "featured",
    },
  ];

  return (
    <div
      className="container px-8"
      style={{ width: "1248px", height: "702px" }}
    >
      <div className="border-t border-gray-500">
        <div className="items-center font-serif text-gray-70 text-center">
          <div className="mt-20">
            {featuredData.map((featured, index) => (
              <div key={index}>
                <span className="text-pink-500 up items-center">
                  {featured.category}
                </span>
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl font-bold leading-tight">
                    {featured.title}
                  </h1>
                  <p className="text-lg mt-6 leading-relaxed">
                    {featured.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img
          src={featuredData[0].imageSrc}
          alt="Skincare Products"
          className="w-full max-h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Featured;
