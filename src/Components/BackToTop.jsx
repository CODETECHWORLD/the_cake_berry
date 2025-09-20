import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    // use passive listener for performance
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50
        inline-flex items-center justify-center rounded-full
        w-12 h-12 shadow-lg border bg-[#43ffba]
        bg-[#43ffba] bg-[#30ffb3] hover:bg-pink-50 active:scale-95
        transition-all duration-200
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      <FiArrowUp size={24} />
    </button>
  );
}
