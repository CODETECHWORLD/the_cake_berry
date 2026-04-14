import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import thecakeberrylogo from "../assets/images/TheCakeBerry.png";

const navLinks = [
  { name: "Home", target: "home" },
  { name: "About", target: "about" },
  { name: "Custom Cakes", target: "custom-cakes" },
  { name: "Contact", target: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 90;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/35 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 sm:gap-4 text-white min-w-0"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/15 backdrop-blur-md shadow-md">
                <img
                  src={thecakeberrylogo}
                  alt="The Cake Berry logo"
                  className="h-[92%] w-[92%] object-contain object-center scale-[1.18]"
                />
              </div>

              <div className="leading-tight min-w-0 text-left">
                <div className="text-sm sm:text-base lg:text-lg font-bold tracking-wider truncate">
                  THE CAKE BERRY
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.14em] sm:tracking-[0.1em] truncate">
                  Bakery & Cake Shop
                </div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className="px-3 xl:px-4 py-2 rounded-full text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 xl:px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </nav>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden relative z-[60] flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-md transition-all duration-300 hover:bg-white/20 flex-shrink-0"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 opacity-0 scale-75"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              >
                <Menu className="w-5 h-5" />
              </span>

              <span
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-180 opacity-0 scale-75"
                }`}
              >
                <X className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[86%] sm:w-[70%] md:w-[52%] max-w-sm bg-black/70 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-5 sm:px-6 pt-24 pb-8">
          <div className="mb-8">
            <div className="text-white text-2xl sm:text-3xl font-bold">
              The Cake Berry
            </div>
            <div className="text-white/60 text-sm sm:text-base mt-1">
              Fresh cakes, pastries & custom orders
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className={`rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base sm:text-lg font-medium text-white/90 backdrop-blur-md hover:bg-white/10 hover:text-white transition-all duration-300 text-left ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 70}ms` : "0ms",
                }}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div
            className={`mt-6 transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "280ms" : "0ms" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-xl shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;