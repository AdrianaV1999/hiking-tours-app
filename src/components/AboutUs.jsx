import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.scss";
import about2 from "../assets/about2.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`about-us ${isVisible ? "active" : ""}`}
      ref={sectionRef}
    >
      <div className="about-text">
        <h2>Who We Are: Passionate Guides of the Wild</h2>
        <p>
          We are a passionate hiking agency dedicated to helping adventurers
          explore the most breathtaking mountain trails. Our experienced guides
          lead you through nature’s wonders, ensuring both safety and
          unforgettable memories. Join us and reconnect with nature, one step at
          a time. Our team of certified and friendly guides ensures not only
          your safety but also an enriching connection with the natural world.
        </p>
        <Link to="/about">
          <button className="find-more-btn">Find More</button>
        </Link>
      </div>
      <div className="about-image">
        <img src={about2} alt="Hiking Adventure" />
      </div>
    </section>
  );
};

export default AboutUs;
