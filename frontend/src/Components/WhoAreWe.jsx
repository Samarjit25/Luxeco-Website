import React from 'react';
import { data } from '../Pages/restapi.json';

const WhoAreWe = () => {
  return (
    <section className="bg-gray-50 py-20" id="who_are_we">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Text Banner */}
          <div className="space-y-8">
            {data[0].who_we_are.slice(0, 2).map((element) => (
              <div key={element.id} className="text-center md:text-right">
                <h1 className="text-5xl font-light text-emerald-600">{element.number}</h1>
                <p className="text-gray-600 text-base mt-2">{element.title}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center">
            <img
              src="/center.svg"
              alt="center"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 z-0 opacity-20"
            />
            <img
              src="/whoweare.png"
              alt="who"
              className="relative z-10 w-64 h-64 object-contain"
            />
          </div>

          {/* Right Text Banner */}
          <div className="space-y-8">
            {data[0].who_we_are.slice(2).map((element) => (
              <div key={element.id} className="text-center md:text-left">
                <h1 className="text-5xl font-light text-emerald-600">{element.number}</h1>
                <p className="text-gray-600 text-base mt-2">{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
