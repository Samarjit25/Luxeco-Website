import React from 'react';
import { data } from '../Pages/restapi.json';

const Qualities = () => {
  return (
    <section className="bg-gray-50 py-20" id="qualities">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Why Choose LuxeEco?
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data[0].ourQualities.map((element) => (
            <div
              key={element.id}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 ease-in-out group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4">
                <img
                  src={element.image}
                  alt={element.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
                {element.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
