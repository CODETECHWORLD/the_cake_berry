import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-10">
        
        {/* About */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm leading-relaxed">
            Cakeberry is your sweet destination for fun, soft, and beautiful custom cake designs. Freshly made with love!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Branches */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">Branches</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/chennai" className="hover:underline">Chennai</a></li>
            <li><a href="/madurai" className="hover:underline">Madurai</a></li>
            <li><a href="/coimbatore" className="hover:underline">Coimbatore</a></li>
            <li><a href="/trichy" className="hover:underline">Trichy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+917639777788" className="hover:underline">+91 76397 77788</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:parsupattu0405@gmail.com" className="hover:underline">cakeberry@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-500" />
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 border-t pt-4">
        © {new Date().getFullYear()} <span className="font-semibold text-pink-600">Cakeberry</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
