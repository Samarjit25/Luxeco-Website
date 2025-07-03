import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="bg-gray-50 py-20" id="about">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-15">


        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1751465785/063025-Aperol-Orange-f5f05cfdffd14bf5832485e447421f22_zbr0jl.jpg"
            alt="about"
            className="w-full max-w-md rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
            {/* <p className="text-gray-500">The only thing we're serious about is food.</p> */}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed text-justify">
           Welcome to <span className="font-semibold text-emerald-600">LuxeEco Fashion</span>, where fashion meets sustainability. We create stylish, high-quality clothing using eco-friendly materials and ethical practices. Our mission is to inspire confidence, promote sustainability, and foster inclusivity—offering timeless pieces for everyone. Each garment blends craftsmanship and innovation, delivering conscious elegance for the modern world. Join us in redefining fashion with purpose, passion, and a commitment to lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
