import React from "react";
import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen w-full" id="heroSection">
      <Navbar />

     <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-17 pt-24 ">

        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Luxe<span className="text-emerald-500">Eco</span> Fashion
          </h1>

          <div className="max-w-xl">
            <p className="text-lg text-gray-700 leading-relaxed ">
              Redefining sustainability with every stitch. Explore our line of
              eco-conscious fashion essentials crafted for a better tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1751525768/2560px-Three_Lines_Ornament_Black_Up_Left.svg_ceb0uy.png" alt="three lines" className="w-15 h-7" />
            <span className="text-sm uppercase text-gray-700 tracking-widest">
              Ethical & Stylish
            </span>
          </div>
        </div>

       {/* Right Section - Image with white gradient fade */}
<div className="flex justify-center -pt-1 md:pt-0 items-start relative">
  <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
    <div className="relative w-full">
      <img
        src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1751480466/d8f064d1178ecb4a8efb07c968162b1a_ecztvf.jpg"
        alt="hero"
        className="w-full rounded-xl z-10 relative"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
