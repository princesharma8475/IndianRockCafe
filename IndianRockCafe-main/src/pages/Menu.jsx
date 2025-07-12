import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="container my-10 px-8">
      <h2 className="text-3xl font-semibold text-orange-500 text-center mb-8">All Menu Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.length === 0 ? (
          <p className="mt-5 text-2xl text-center text-gray-500">Loading menu...</p>
        ) : (
          menuItems.map((menu, id) => {
            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={menu.strMealThumb}
                  alt={menu.strMeal}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-orange-500 mb-2">{menu.strMeal}</h5>
                  <p className="text-gray-700 text-sm">{menu.strInstructions.slice(0, 50)}...</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
