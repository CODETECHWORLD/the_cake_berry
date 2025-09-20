import React from "react";
import thecakeberry4 from "../assets/thecakeberry4.jpg";
import image from '../assets/cakeBerryimageOrg.png'

const Enquiry = () => {
  return (
    <div
      className="enquire w-full backdrop-blur-xs"
      style={{
        backgroundImage: `url(${thecakeberry4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem 1rem",
      }}
    >
      {/* Top section */}
      <div className="text-center text-white mb-10">
        <h1 className="text-4xl font-bold">Send Us Your Enquiry</h1>
        <p className="text-lg mt-2">We’re happy to help you with your special cake request.</p>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row bg-white bg-opacity-80 rounded-lg p-5 shadow-lg max-w-6xl mx-auto">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <img
            src={image}
            alt="TheCakeBerry Enquiry Visual"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-1/2 md:pl-8">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded border border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded border border-gray-300"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded border border-gray-300"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition"
            >
              Request Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
