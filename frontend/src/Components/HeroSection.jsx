import React from "react";
import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">LuxeEco Fashion</h1>
          </div>
          <div className="combined_boxes">
            <div className="textAndLogo">
              <div className="textWithSvg">
                <img src="./threelines.svg" alt="threelines" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero01.png" alt="hero"/>
          </div>
          {/* <h1 className="title dishes_title">Dishes</h1> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;