import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-center text-white">
      <Navbar />
      <section className="relative w-full h-screen flex items-center justify-start bg-gray-900">
        <img
          src={heroBanner}
          alt="Boxing Workout"
          className="absolute inset-0 w-full h-3/4 object-cover opacity-10"
        />
        <div className="relative max-w-2xl text-white text-left p-8 ml-12">
          <h1 className="text-4xl font-bold mb-4">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-6">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women.
          </p>
          <a
            href="#"
            className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
