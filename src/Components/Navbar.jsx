import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/cakes", label: "Cakes" },
    { path: "/customcakes", label: "Custom Cakes" },
    { path: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#FF6F91] bg-white shadow">
      <div className="mx-auto flex items-center justify-between px-6 h-20 relative">
        {/* Logo + Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Cake Berry Logo"
            className="h-16 w-auto hidden md:block"
          />
          <span className="text-2xl font-bold text-gray-900">
            The Cake Berry
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 text-[#FF6F91]"
                  : "hover:text-[#FF6F91] transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="relative hover:text-[#FF6F91] transition"
          >
            <FiShoppingCart size={26} />
          </NavLink>
        </nav>

        {/* Hamburger / Close Button */}
        <button
          className="md:hidden text-3xl z-[60] fixed top-5 right-4 bg-white p-2 rounded-full shadow transition-all"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Backdrop Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={closeMenu}
          />
        )}

        {/* Slide-In Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-lg transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-6 text-lg font-medium mt-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 text-[#FF6F91]"
                    : "hover:text-[#FF6F91] transition"
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2 hover:text-[#FF6F91]"
            >
              <FiShoppingCart size={22} />
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
