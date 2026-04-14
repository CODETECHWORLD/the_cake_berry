import thecakeberrylogo from "../assets/images/TheCakeBerry.png";

export default function Footer() {
  return (
    <footer className="bg-[#14141c] text-white py-10 sm:py-16">
      <div className="container px-4 mx-auto text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">

              <img
                src={thecakeberrylogo}
                alt="The Cake Berry"
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />

              <div>
                <div className="font-bold text-lg">The Cake Berry</div>
                <div className="text-xs text-gray-400">Premium Cakes</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Creating beautiful, delicious custom cakes for every celebration.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2 justify-center sm:justify-start">
              <a href="https://www.instagram.com/the_cake_bery?igsh=aGQwb2h3bmt5a3F2" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c83c50] transition">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="https://wa.me/919962744544"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c83c50] transition"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
              {/* <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c83c50] transition">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#c83c50] transition">Home</a></li>
              <li><a href="#custom-cakes" className="hover:text-[#c83c50] transition">Custom Cakes</a></li>
              <li><a href="#about" className="hover:text-[#c83c50] transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#c83c50] transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-[#c83c50] transition">Custom Design</a></li>
              <li><a href="#contact" className="hover:text-[#c83c50] transition">Wedding Cakes</a></li>
              <li><a href="#contact" className="hover:text-[#c83c50] transition">Birthday Cakes</a></li>
              <li><a href="#contact" className="hover:text-[#c83c50] transition">Special Orders</a></li>
            </ul>
          </div>

          {/* Our Branches */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-4">Our Branches</h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <i className="fa-solid fa-location-dot text-[#c83c50] mt-1 shrink-0"></i>
                <a
                  href="https://maps.app.goo.gl/L1jZYQyUsgNAriyh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c83c50] transition leading-snug max-w-xs"
                >
                  No69B, Dr Devaraj Nagar Rd, Mohan Nagar, Balaji Nagar, Madambakkam, Camp Road, Chennai – 99627 44544
                </a>
              </li>

              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <i className="fa-solid fa-location-dot text-[#c83c50] mt-1 shrink-0"></i>
                <a
                  href="https://maps.app.goo.gl/KLoSzTPUGTuyFtPV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c83c50] transition leading-snug max-w-xs"
                >
                  Santhosapuram, Medavakkam, Chennai – 98404 31933
                </a>
              </li>

              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <i className="fa-solid fa-location-dot text-[#c83c50] mt-1 shrink-0"></i>
                <a
                  href="https://maps.app.goo.gl/mMn59PWEFJ6d2hwq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c83c50] transition leading-snug max-w-xs"
                >
                  300, Cherry Rd, Salem – 76397 77788 / 90256 20684
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 sm:my-10"></div>

        {/* Bottom - Single Line */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © 2026 The Cake Berry. All rights reserved. Developed & Maintained by Parasuraman K
          </p>
        </div>
      </div>
    </footer>
  );
}