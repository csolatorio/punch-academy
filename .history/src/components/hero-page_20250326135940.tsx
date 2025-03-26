import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./navbar-menu";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-center text-white">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-black/40 to-title"></div> */}
      <Navbar />
    </div>
  );
};

export default HeroPage;
