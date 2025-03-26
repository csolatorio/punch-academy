import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <header
        className="relative w-full h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 max-w-md">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-6 max-w-md">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women.
          </p>
          <button
            onClick={() => navigate("/home-page")}
            className="bg-black text-white font-semibold py-4 px-12 rounded-sm shadow-lg relative"
          >
            Learn More
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
          </button>
        </div>

        {/* WhatsApp Icon */}
        <div className="absolute bottom-6 right-6 text-green-500 text-4xl">
          <FaWhatsapp />
        </div>
      </header>
    </div>
  );
};

export default HeroPage;
