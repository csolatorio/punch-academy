import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />
      <section
        className="relative w-full h-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative max-w-6xl text-[#1E1E1E] text-left p-8 ml-12 md:ml-6 sm:ml-4 sm:p-6">
          <h1 className="text-8xl md:text-5xl sm:text-4xl font-semibold mb-8">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg md:text-base sm:text-sm mb-8">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women. <br />
            Build strength and confidence with every punch!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
