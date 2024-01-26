import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";
import Content2 from "../components/content/Content2";
import Content3 from "../components/content/Content3";
import Content4 from "../components/content/Content4";
import Content5 from "../components/content/Content5";

const Home = () => {
  return (
    <div className="container p-8" style={{ width: "1248px", height: "702px" }}>
      <Navbar />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Footer />
    </div>
  );
};

export default Home;
