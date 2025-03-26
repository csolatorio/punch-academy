import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <header
        className="relative w-full h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-black/40 to-title"></div>
        {/* <Navbar /> */}
        <div className="container mx-auto relative z-10 flex flex-col justify-center items-start h-full p-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-left w-full sm:w-2/4">
            Empower Your Business with Tailored Call Center Solutions and 24/7
            Support.
          </h1>
          <p className="text-base mb-6">
            Real Agents, Real Solutions – Providing Exceptional Customer
            Experiences Every Time.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/request-a-quote")}
              className="text-md bg-title text-white font-normal py-4 px-12 rounded-sm drop-shadow-md"
            >
              Start building your team
            </button>
            <button
              onClick={() => (window.location.href = "tel:+12532691300")}
              className="text-md text-white font-normal py-4 px-6 rounded-sm drop-shadow-md border border-title hover:bg-title"
            >
              Call us: +1 253-269-1300
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroPage;
