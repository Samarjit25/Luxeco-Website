import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751472830/Nawain-fashion-store-by-Purge-Hangzhou-China_idn11t.jpg",
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751472830/pexels-photo-1488463_kj6qgk.jpg",
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751472829/fashion-collection-hanging-in-modern-clothing-store-free-photo_wszlj7.jpg",
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751472829/fashion-outlets-of-niagara_bznsra.jpg",
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751472828/6808fd7f84e7f1bab2bba103_660c253582891454965d7701_Thumbnail20Image20x20px_jkmxtx.png",
  "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751473475/istockphoto-1341947720-612x612_qmjsvt.jpg"
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white shadow rounded-full hover:bg-gray-100"
  >
    <FaChevronLeft className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white shadow rounded-full hover:bg-gray-100"
  >
    <FaChevronRight className="text-gray-700" />
  </button>
);

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-20 min-h-screen relative" id="gallery">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Photo Gallery</h2>
          <p className="text-gray-600 text-lg">
            Experience the harmony of high fashion and conscious living inside our signature LuxeEco spaces
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[450px] object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
