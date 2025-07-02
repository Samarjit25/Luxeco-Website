import React from "react";
import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen w-full" id="heroSection">
      <Navbar />

      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-24 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
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
            <img src="./threelines.svg" alt="three lines" className="w-10 h-10" />
            <span className="text-sm uppercase text-gray-500 tracking-widest">
              Ethical & Stylish
            </span>
          </div>
        </div>

       {/* Right Section - Image with white gradient fade */}
<div className="flex justify-center pt-10 relative">
  <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
    <div className="relative w-full">
      <img
        src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1751480466/d8f064d1178ecb4a8efb07c968162b1a_ecztvf.jpg"
        alt="hero"
        className="w-full rounded-xl z-10 relative"
      />

      {/* Left Gradient */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-0" />
      {/* Right Gradient */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-0" />
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
