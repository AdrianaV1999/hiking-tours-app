import React from "react";
import "./Hero.scss";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h4>Adventure Awaits</h4>
        <h1>Explore Hiking Tours</h1>
        <p>
          Discover the most breathtaking trails, conquer mountain peaks, and
          explore untouched wilderness. Join us for unforgettable hiking
          experiences all around the world.
        </p>
        <button className="btn">Book Your Tour</button>
      </div>
      <div className="image-grid-wrapper">
        <div className="image-grid">
          <div className="image-item">
            <img src={img1} alt="Planina 1" />
            <span className="image-label">Zlatibor</span>
          </div>
          <div className="image-item">
            <img src={img2} alt="Planina 2" />
            <span className="image-label">Matterhorn</span>
          </div>
          <div className="image-item">
            <img src={img3} alt="Planina 3" />
            <span className="image-label">Mount Fuji</span>
          </div>
          <div className="image-item">
            <img src={img4} alt="Planina 4" />
            <span className="image-label">Torres del Paine</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
