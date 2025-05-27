import React, { useEffect, useRef, useState } from "react";
import "./Benefits.scss";
import benefitsImg from "../assets/benefits.jpg";

const Benefits = () => {
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
  const benefits = [
    { title: "Health", desc: "Improves cardiovascular fitness and strength." },

    { title: "Nature", desc: "Connects you with the natural environment." },
    { title: "Social", desc: "Great way to bond with friends and groups." },
    { title: "Adventure", desc: "Adds excitement and a sense of exploration." },
  ];

  return (
    <section
      className={`benefits ${isVisible ? "active" : ""}`}
      ref={sectionRef}
    >
      <div className="benefits-text">
        <h2>Benefits of Hiking</h2>
        <ul className="benefits-list">
          {benefits.map((item, index) => (
            <li key={index} className="benefit-item">
              <div className="circle">{index + 1}</div>
              <div className="benefit-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="benefits-image">
        <img src={benefitsImg} alt="Benefits of Hiking" />
      </div>
    </section>
  );
};
export default Benefits;
