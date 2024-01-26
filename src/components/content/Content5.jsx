import React, { useState } from "react";
import { Button1 } from "../button/button";

const Content5 = () => {
  const [subscribeText, setSubscribeText] = useState("");

  return (
    <div className="border-t border-gray-500">
      <div className="grid grid-cols-2 items-center font-serif text-gray-700">
        <div>
          <span className="text-pink-500 font-semibold text-lg mb-2">
            Subscription
          </span>
          <h1 className="text-4xl font-bold">
            Join our exclusive <br /> beauty community
          </h1>
          <p className="text-lg mt-6 text-left">
            Elevate your beauty journey with personalized <br /> personalized
            recommendations and stay connected with a community that <br />{" "}
            shares your passion for self-care. Subscribe now and embark <br />
            on a beauty adventure with us!
          </p>
          <div className="mt-6 border border-gray-500 p-1 rounded-md w-2/3 flex justify-end">
            <input
              type="text"
              placeholder="Email"
              value={subscribeText}
              onChange={(e) => setSubscribeText(e.target.value)}
              style={{ width: "100%", boxShadow: "none" }}
              className="outline-none rounded-md text-center"
            />
            <Button1>Subscribe</Button1>
          </div>
        </div>
        <div className="px-4 py-4">
          <img
            src="/assets/baner11.jpg"
            alt="Skincare Products"
            className="w-full max-h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Content5;
