import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
        <div className="banner">
            <img src="about01.png" alt="about" />
          </div>
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              {/* <p>The only thing we're serious about is food.</p> */}
            </div>
            <p className="mid">
            Welcome to LuxeEco Fashion, where fashion meets sustainability. We create stylish, high-quality clothing with eco-friendly materials and ethical practices. Our mission is to inspire confidence, promote sustainability, and foster inclusivity, offering timeless pieces for everyone. Join us in redefining fashion with purpose and passion.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;