import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";
import Content2 from "../components/content/Content2";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Content />
      <Content2 />
      <Footer />
    </div>
  );
};

export default Home;
