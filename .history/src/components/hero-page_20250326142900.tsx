import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />
      <section className="relative w-full h-screen flex items-center justify-start">
        <img
          src={heroBanner}
          alt="Boxing Workout"
          className="absolute inset-0 w-full h-3/4 object-cover  bg-[#D9D9D9] opacity-50"
        />
        <div className="relative max-w-6xl text-[#1E1E1E] text-left p-8 ml-12">
          <h1 className="text-7xl font-semibold mb-8">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-10">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women. <br />
            Build strength and confidence with every punch!
          </p>
        </div>
        <div className="relative max-w-6xl text-[#1E1E1E] text-center ml-12">
          <h1 className="text-7xl font-semibold mb-8">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-10">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women. <br />
            Build strength and confidence with every punch!
          </p>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default HeroPage;
