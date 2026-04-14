import { useEffect, useState } from "react";
import thecakeberrylogo from "../assets/images/TheCakeBerry.png";

export default function Loader({ isLoading = true }) {
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsClosing(true);

      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div className={`loader-container ${isClosing ? "fade-out" : ""}`}>
      <div className="loader-wrapper">

        <div className="loader-ring-bg"></div>
        <div className="loader-ring"></div>
        <div className="loader-logo">
          <img src={thecakeberrylogo} alt="The Cake Berry Logo" />
        </div>
        <div className="loader-text">
          <h2>THE CAKE BERRY <br/><span style={{fontSize:"10px"}}>WELCOMES YOU</span></h2>
          <p>Please wait...</p>
        </div>

      </div>
    </div>
  );
}