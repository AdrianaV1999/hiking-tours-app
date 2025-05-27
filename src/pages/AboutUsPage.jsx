import React from "react";
import "./AboutUsPage.scss";
import about from "../assets/about.png";
import Navbar from "../components/Navbar";
import Advantages from "../components/Advantages";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <section className="about-page-container">
        <div className="about-page-text">
          <h2>About Us</h2>
          <p>
            Our team of certified and experienced guides prioritizes safety
            above all, while also sharing fascinating stories about the history,
            culture, and ecology of each trail. We believe that every hike is
            more than just a walk — it’s a journey filled with discovery,
            personal growth, and connection with nature. Whether you are taking
            your very first steps on a hiking trail or you are a seasoned
            trekker seeking your next challenge, we tailor each experience to
            fit your individual spirit and abilities. Join us, and let’s explore
            the wonders of nature together, creating memories that will last a
            lifetime.
          </p>
          <div className="about-page-contact">
            <h3>Contact Us</h3>
            <p>
              <strong>Email:</strong> contact@hikewithus.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Address:</strong> 123 Mountain View Rd, Nature Valley
            </p>
          </div>
        </div>

        <div className="about-page-image">
          <img src={about} alt="Hiking Journey" />
        </div>
      </section>
      <Advantages />
    </>
  );
};

export default AboutUsPage;
