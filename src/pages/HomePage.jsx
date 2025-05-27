import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Advantages />
    </div>
  );
};

export default HomePage;
