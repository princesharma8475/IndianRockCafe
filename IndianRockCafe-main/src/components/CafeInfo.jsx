import React from 'react';
import teaImg from '../assets/static/tea.jpg';

const CafeInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Description */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Indian Rock Cafe
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Authentic Italian cuisine served with an Indian soul. <br />
            Dive into flavors, from creamy pastas to wood-fired pizzas.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
          <img
            src={teaImg}
            alt="Italian Dish"
            className="w-full h-auto rounded-xl  object-cover transform transition-transform duration-300 hover:scale-105"

          />
        </div>
      </div>
    </div>
  );
};

export default CafeInfo;
