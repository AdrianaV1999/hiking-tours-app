import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";
import Benefits from "../components/Benefits";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Advantages />
      <Benefits />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
