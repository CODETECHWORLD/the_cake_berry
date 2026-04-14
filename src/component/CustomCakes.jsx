import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";

import img1 from "../assets/images/thecakeberry1.jpeg";
import img2 from "../assets/images/thecakeberry2.jpeg";
import img3 from "../assets/images/thecakeberry3.jpeg";
import img4 from "../assets/images/thecakeberry4.jpeg";
import img5 from "../assets/images/thecakeberry5.jpeg";
import img6 from "../assets/images/thecakeberry6.jpeg";
import img7 from "../assets/images/thecakeberry7.jpeg";

export default function CustomCakes() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const cakes = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section id="custom-cakes" className="py-10 sm:py-16 bg-white">
      <div className="max-w-8xl mx-auto px-2 sm:px-3">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14141c] mb-3">
            Our <span className="text-[#c83c50]">Custom Cakes</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Explore our handcrafted cakes designed for every special occasion.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {cakes.map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] sm:min-w-[320px] overflow-hidden shadow-md group"
            >
              <img
                src={img}
                alt="cake"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setGalleryOpen(true)}
            className="inline-flex items-center gap-2 bg-[#f0b42d] text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            See Full Gallery
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated Gallery Modal */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          galleryOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${
            galleryOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setGalleryOpen(false)}
        />

        {/* Content */}
        <div
          className={`relative h-full overflow-y-auto p-4 sm:p-6 transform transition-all duration-500 ${
            galleryOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-6 text-white">
            <h2 className="text-xl sm:text-2xl font-bold">Gallery</h2>
            <button onClick={() => setGalleryOpen(false)}>
              <X />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cakes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="cake"
                className="w-full h-40 sm:h-48 object-cover rounded-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}