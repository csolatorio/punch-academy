import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-center text-white"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-black/40 to-title"></div>
      <Navbar />
      <div className="relative text-white text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 sm:w-2/4">
          A Boxing Workout That Hits Different!
        </h1>
        <p className="text-base mb-6">
          The perfect blend of boxing techniques and full-body fitness crafted
          for women.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/request-a-quote")}
            className="text-md bg-title text-white font-normal py-4 px-12 rounded-sm drop-shadow-md"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
