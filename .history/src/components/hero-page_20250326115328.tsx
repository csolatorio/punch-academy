import heroBanner from "../assets/hero-banner.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/mnt/data/image.png"
            alt="Boxing Workout"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative text-white text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-lg mb-6">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women.
          </p>
          <button className="bg-black text-white px-6 py-3 text-lg rounded shadow-md hover:bg-gray-800">
            Learn More
          </button>
        </div>

        {/* WhatsApp Icon */}
        <div className="absolute bottom-6 right-6 text-green-500 text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M12 0C5.372 0 0 4.775 0 10.667c0 2.769 1.191 5.314 3.151 7.217L2.02 24l6.598-1.98a13.132 13.132 0 003.382.459C18.628 22.48 24 17.706 24 10.667S18.628 0 12 0zm0 19.84a10.773 10.773 0 01-3.074-.445l-2.187.657.678-2.065a10.158 10.158 0 01-2.73-6.32c0-5.335 4.764-9.667 10.613-9.667 5.849 0 10.613 4.332 10.613 9.667s-4.764 9.667-10.613 9.667zM8.88 7.668c-.273-.606-.56-.619-.823-.631-.212-.009-.456-.008-.699-.008s-.646.093-.885.445c-.305.436-1.162 1.136-1.162 2.771s1.19 3.218 1.357 3.437c.167.218 2.32 3.645 5.674 4.967 2.807 1.117 3.38.895 3.986.84.609-.054 1.967-.805 2.243-1.581.276-.776.276-1.439.193-1.581-.083-.143-.305-.212-.637-.371s-1.967-.967-2.273-1.078c-.306-.111-.529-.167-.751.167-.222.334-.861 1.078-1.055 1.3-.194.222-.389.25-.721.083-.332-.167-1.398-.515-2.664-1.64-1.013-.919-1.695-2.051-1.894-2.393-.194-.342-.021-.526.146-.694.149-.149.332-.389.5-.584.056-.07.099-.126.138-.184.056-.083.014-.157-.007-.213-.083-.222-.72-1.755-1.011-2.39z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
