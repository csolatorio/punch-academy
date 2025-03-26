import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-center text-white">
      <Navbar />
      <section className="relative w-full h-screen flex items-center justify-start bg-[#D9D9D9]">
        <img
          src={heroBanner}
          alt="Boxing Workout"
          className="absolute inset-0 w-full h-3/4 object-cover opacity-50"
        />
        <div className="relative max-w-6xl text-[#1E1E1E] text-left p-8 ml-12">
          <h1 className="text-6xl font-semibold mb-8">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-10">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women. Build strength and confidence with every punch!
          </p>
          <a
            href="#"
            className="bg-black text-white px-12 py-5 text-lg font-normal rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
