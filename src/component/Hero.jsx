import React, { useEffect, useState } from "react";
import { MapPin, Clock, Star, Phone } from "lucide-react";

import hero1 from "../assets/images/The_Cake_Berry_Slider_Scroll/TheCakeBerry1.png";
import hero2 from "../assets/images/The_Cake_Berry_Slider_Scroll/TheCakeBerry2.png";
import hero3 from "../assets/images/The_Cake_Berry_Slider_Scroll/TheCakeBerry3.png";
import hero4 from "../assets/images/The_Cake_Berry_Slider_Scroll/TheCakeBerry4.png";
import hero5 from "../assets/images/thecakeberry6.jpeg";
import hero6 from "../assets/images/thecakeberry7.jpeg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[92vh] overflow-hidden flex items-center">

      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="cake"
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-xl text-white space-y-6">

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">4.8</span>
              <span className="text-white/60 text-sm">(106)</span>
            </div>
            <span className="text-xs tracking-widest uppercase text-white/60">
              Premium Bakery
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-center sm:text-left">

            <span className="block tracking-wide">
              THE CAKE BERRY
            </span>

            <span className="block text-yellow-400 text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">
              Delicious Cakes that Delight
            </span>

            <span className="block text-white/80 text-lg sm:text-xl lg:text-2xl font-medium mt-1">
              Baked with Love for Your Special Moments
            </span>

          </h1>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/919962744544"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl text-center shadow-xl hover:scale-105 transition"
            >
              <span className="flex items-center justify-center gap-2">
                Order Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="tel:09962744544"
              className="flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/10 transition"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Chennai, Salem</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <Clock className="w-4 h-4" />
              <span className="text-sm">9:30 AM - 11 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${current === i
              ? "w-6 bg-yellow-400"
              : "w-2.5 bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;