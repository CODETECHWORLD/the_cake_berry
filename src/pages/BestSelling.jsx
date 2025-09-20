import React from "react";
import { Link } from "react-router-dom";
import cake1 from "../assets/thecakeberry1.jpg";
import cake2 from "../assets/thecakeberry2.jpg";
import cake3 from "../assets/thecakeberry3.jpg";
import cake4 from "../assets/thecakeberry4.jpg";
import cake5 from "../assets/thecakeberry5.jpg";
import cake6 from "../assets/thecakeberry6.jpg";

const bestSellingData = [
  { name: "Chocolate Truffle", image: cake1 },
  { name: "Red Velvet", image: cake2 },
  { name: "Strawberry Delight", image: cake3 },
  { name: "Butterscotch Crunch", image: cake4 },
  { name: "Pineapple Dream", image: cake5 },
  { name: "Black Forest", image: cake6 },
];

const BestSelling = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Selling</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our most loved cakes, handpicked by our customers.
        </p>
      </div>

      {/* Bottom Section - Horizontal Scroll Cards */}
      <div className="flex gap-5 overflow-x-auto px-2 scrollbar-thin scrollbar-thumb-gray-300 justify-center">
        {bestSellingData.map((item, index) => (
          <div
            key={index}
            className="min-w-[150px] bg-gray-100 shadow-md rounded-xl overflow-hidden text-center p-2 flex-shrink-0 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded-md mb-1"
            />
            <h2 className="text-sm font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
        <div className="flex justify-center mt-6">
        <Link to="/cakes">
            <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded transition"
            >
            View All
            </button>
        </Link>
        </div>
    </div>
  );
};

export default BestSelling;
