import { useEffect, useState } from "react";
import About from "../src/component/About";
import Contact from "../src/component/Contact";
import CustomCakes from "../src/component/CustomCakes";
import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import Hero from "../src/component/Hero";
import CakeOffer from "./component/CakeOffer";
import Loader from "./component/Loader";

import './index.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />

      <main>
        <Header />
        <Hero />
        <CakeOffer />
        <CustomCakes />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}