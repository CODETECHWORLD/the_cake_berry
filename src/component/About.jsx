import React from 'react'

export default function About() {
  const features = [
    {
      icon: "fa-solid fa-seedling",
      title: "Premium Quality Ingredients",
      desc: "Fresh butter, chocolate, and imported flavors",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Custom Design Services",
      desc: "Transform your ideas into edible art",
    },
    {
      icon: "fa-solid fa-truck-fast",
      title: "Timely Delivery",
      desc: "On-time delivery with careful handling",
    },
    {
      icon: "fa-solid fa-leaf",
      title: "Dietary Options",
      desc: "Vegan, eggless, and sugar-free options available",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-[#f7eded]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="public/cakes/cake-4.jpg"
                alt="Premium cake design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14141c] mb-4 md:mb-6">
              About <span className="text-[#c83c50]">The Cake Berry</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              For over 10 years, The Cake Berry has been creating delicious and beautiful custom cakes
              for celebrations across Chennai. Our passion for baking and attention to detail ensures
              every cake is a masterpiece.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              We believe in using only the finest ingredients and innovative designs to create cakes
              that not only look stunning but taste absolutely incredible.
            </p>

            {/* Features */}
            <div className="space-y-3 md:space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 bg-[#c83c50] rounded-full flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                    <i className={`${f.icon} text-sm`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#14141c]">{f.title}</h3>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"><button className="btn btn-primary mt-8 md:mt-10">
              <i className="fa-solid fa-circle-info mr-2"></i>
              Learn More About Us
            </button></a>
          </div>

        </div>
      </div>
    </section>
  );
}
