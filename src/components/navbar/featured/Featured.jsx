import React from "react";

const Featured = () => {
  return (
    <div
      className="container px-8"
      style={{ width: "1248px", height: "702px" }}
    >
      <div className="border-t border-gray-500">
        <div className="items-center font-serif text-gray-70 text-center">
          <div className="mt-20">
            <span className="text-pink-500 up items-center">Featured</span>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold leading-tight">
                Reviewing the Latest Beauty <br /> Innovations in 2023
              </h1>
              <p className="text-lg mt-6 leading-relaxed">
                Stay on the cutting edge of beauty with a comprehensive review
                of the latest innovations in the industry. From skincare
                breakthroughs to high-tech beauty gadgets, explore what's new in
                2023.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/banner12.png"
              alt="Skincare Products"
              className="w-full max-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
