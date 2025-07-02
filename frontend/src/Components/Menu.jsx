import React from 'react';
import { data } from '../Pages/restapi.json';

const Menu = () => {
  return (
    <section className="bg-white py-20" id="menu">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Collections</h2>
          <p className="text-gray-600 text-lg">
            Explore our curated collections, featuring timeless pieces and the latest trends to elevate your style with elegance and confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data[0].dishes.map((element) => (
            <div
  key={element.id}
  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out"
>
  {/* Fixed image frame */}
  <div className="w-full h-150 overflow-hidden rounded-t-xl">
    <img
      src={element.image}
      alt={element.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  
  <div className="p-5">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{element.title}</h3>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
