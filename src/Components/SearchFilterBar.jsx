import React from "react";
import { MdCategory } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const SearchFilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories = [],
}) => {
  // Make the categories unique and remove any accidental "All"
  const uniqueCats = Array.from(new Set(categories.filter(Boolean))).filter(
    (c) => c !== "All"
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
      {/* Search */}
      <div className="relative w-full sm:w-1/2">
        <IoMdSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search cakes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Category Filter */}
      <div className="w-full sm:w-48">
        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
          <MdCategory className="text-pink-600" /> Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {/* single default All option */}
          <option value="All">All</option>

          {/* render only unique categories (without "All") */}
          {uniqueCats.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilterBar;
