import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Advantages />
      <Benefits />
    </div>
  );
};

export default HomePage;
