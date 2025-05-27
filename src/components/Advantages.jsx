import React from "react";
import {
  FaHiking,
  FaCompass,
  FaMountain,
  FaHourglassHalf,
} from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { BiTime } from "react-icons/bi";

import "./Advantages.scss";

const Advantages = () => {
  const data = [
    { icon: <GiCampingTent />, label: "35+ Tours Monthly" },
    { icon: <FaHiking />, label: "500+ Hikers" },
    { icon: <FaMountain />, label: "25+ Peaks" },
    { icon: <BiTime />, label: "10 Years Experience" },
  ];

  return (
    <section className="advantages">
      <div className="advantages-container">
        {data.map((item, index) => (
          <div className="advantage" key={index}>
            <div className="circle">{item.icon}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
