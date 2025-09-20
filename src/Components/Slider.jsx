import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/thecakeberry1.jpg",
  "/src/assets/thecakeberry2.jpg",
  "/src/assets/thecakeberry3.jpg",
  "/src/assets/thecakeberry4.jpg",
  "/src/assets/thecakeberry5.jpg",
  "/src/assets/thecakeberry6.jpg",
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background Image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />

            {/* Overlay with blur glass effect */}
            <div className="absolute inset-0 bg-opacity-40 backdrop-blur-xs flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Cakeberry Welcome's You</h2>
              <p className="text-lg md:text-xl mb-6">Delicious Cakes Delivered Fresh to Your Doorstep</p>
              <Link to='/cakes' className="bg-[#43ffba] text-black px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition cursor-pointer">
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
