import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Advantages />
      <Benefits />
      <Gallery />
    </div>
  );
};

export default HomePage;
