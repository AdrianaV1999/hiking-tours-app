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
    country: "Switzerland",
    description:
      "Switzerland offers breathtaking views of the Alps, peaceful mountain villages, and sparkling lakes. Enjoy winter sports, scenic train rides, and world-class chocolate in one of Europe's cleanest and most organized countries.",
  },
  {
    image: img2,
    country: "Italy",
    description:
      "Italy is a dream destination for lovers of history, art, and gastronomy. From the canals of Venice and the ruins of Rome to the rolling hills of Tuscany, every corner invites you to explore, taste, and fall in love with La Dolce Vita.",
  },
  {
    image: img3,
    country: "Norway",
    description:
      "Norway enchants with its majestic fjords, dramatic cliffs, and the magical northern lights. Discover picturesque fishing villages, glacier hikes, and the unique beauty of a country where nature truly reigns.",
  },
  {
    image: img4,
    country: "Japan",
    description:
      "Japan is a perfect harmony of tradition and technology. Experience ancient temples, tranquil gardens, cherry blossoms in spring, and futuristic cities like Tokyo where culture and innovation coexist.",
  },
  {
    image: img5,
    country: "New Zealand",
    description:
      "New Zealand captivates with its epic landscapes, from towering mountains and deep fjords to lush rainforests and golden beaches. Ideal for adventure seekers, nature lovers, and fans of The Lord of the Rings.",
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
