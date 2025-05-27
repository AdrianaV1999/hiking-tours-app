import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import img1 from "../assets/galerija.jpg";
import img2 from "../assets/galerija1.jpg";
import img3 from "../assets/galerija2.jpg";
import img4 from "../assets/galerija4.jpg";
import img5 from "../assets/galerija5.jpg";

const slides = [
  {
    image: img1,
    country: "Matterhorn",
    description:
      "The Matterhorn, located in the Swiss Alps, is one of the most iconic peaks in the world. With its striking pyramid shape, it captivates climbers and photographers alike as a symbol of pure alpine beauty.",
  },
  {
    image: img2,
    country: "Dolomites",
    description:
      "The Dolomites in northern Italy are known for their dramatic peaks, sheer cliffs, and pink-hued sunsets. These UNESCO-listed mountains are a paradise for hikers, skiers, and lovers of breathtaking landscapes.",
  },
  {
    image: img3,
    country: "Lofoten Mountains",
    description:
      "The Lofoten Mountains in Norway rise sharply from the sea, creating a surreal combination of rugged cliffs and serene fjords. They offer a magical Arctic experience with midnight sun and northern lights.",
  },
  {
    image: img4,
    country: "Mount Fuji",
    description:
      "Mount Fuji is Japan’s most famous mountain, a near-perfect cone rising above the clouds. Revered in art and culture, it offers peaceful trails, cherry blossoms, and unforgettable sunrise views.",
  },
  {
    image: img5,
    country: "Aoraki / Mount Cook",
    description:
      "Aoraki / Mount Cook is New Zealand’s highest peak, towering over glacial valleys and turquoise lakes. It's a dream destination for climbers, stargazers, and anyone seeking raw, untouched beauty.",
  },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="gallery">
      <section
        className="gallery-preview fade-zoom"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>{slides[current].country}</h1>
          <p>{slides[current].description}</p>
          <button className="book-button">Book Tour Now</button>
        </div>
        <div className="arrows">
          <button onClick={prevSlide} className="arrow left">
            &lt;
          </button>
          <button onClick={nextSlide} className="arrow right">
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
