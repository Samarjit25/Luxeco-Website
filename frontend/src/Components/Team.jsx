import React from 'react';
import { data } from '../Pages/restapi.json';

const Team = () => {
  return (
    <section className="bg-white py-20" id="team">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Designers</h1>
          <p className="text-gray-600 text-lg">
            Our designers bring you the latest trends with a touch of timeless elegance,
            ensuring every piece is a masterpiece.
          </p>
        </div>

        {/* 4 Cards Centered in a Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {data[0].team.map((member) => (
            <div
              key={member.id}
             className="w-56 h-56 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition duration-300 text-center p-4 flex flex-col items-center justify-center"

            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-3 "
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
