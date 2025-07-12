import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ menuItems }) => {
  const sliceMenu = menuItems.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-orange-500">Menu Items</h2>
        <Link to="/menu" className="text-lg font-medium text-gray-700 hover:text-orange-500 transition">
          View All
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sliceMenu.length === 0 ? (
          <p className="text-2xl mt-5 text-center">Loading menu...</p>
        ) : (
          sliceMenu.map((menu, id) => (
            <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={menu.strMealThumb}
                alt={menu.strMeal}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold text-orange-500 mb-2">{menu.strMeal}</h5>
                <p className="text-gray-600 text-sm">{menu.strInstructions.slice(0, 60)}...</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuItems;
