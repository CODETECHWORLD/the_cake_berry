import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { customCakesData } from "../pages/cakesData";
import SearchFilterBar from "../Components/SearchFilterBar";
import { addToCart } from "../redux/createSlice";

const CustomCakes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const categories = Array.from(new Set(customCakesData.map((c) => c.category)));

  const allProducts = customCakesData.flatMap((category) =>
    category.items.map((product) => ({
      ...product,
      category: category.category,
    }))
  );

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedProducts = customCakesData.map((category) => ({
    ...category,
    items: filteredProducts.filter(
      (product) => product.category === category.category
    ),
  }));

  return (
    <div className="px-6 py-10">
      <SearchFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {groupedProducts.map(
        (category) =>
          category.items.length > 0 && (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-pink-600 mb-6">
                {category.category}
              </h2>

              <div className="flex overflow-x-auto sm:grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-nowrap sm:overflow-x-visible">
                {category.items.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer w-72 flex-shrink-0"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3 flex items-center justify-between">
                      <div>
                        <h3 className="text-md font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          ₹{product.price}
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="bg-pink-600 text-white px-4 py-2 text-xs rounded-full hover:bg-pink-700 active:scale-110 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CustomCakes;
